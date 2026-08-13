import { afterEach, describe, expect, it, vi } from "vitest";
import { createGitHubIssue } from "../github.ts";

const originalDigestRepo = process.env["DIGEST_REPO"];
const originalGitHubToken = process.env["GITHUB_TOKEN"];

function restoreEnv(name: "DIGEST_REPO" | "GITHUB_TOKEN", value: string | undefined): void {
  if (value === undefined) {
    delete process.env[name];
  } else {
    process.env[name] = value;
  }
}

afterEach(() => {
  restoreEnv("DIGEST_REPO", originalDigestRepo);
  restoreEnv("GITHUB_TOKEN", originalGitHubToken);
  vi.unstubAllGlobals();
});

describe("createGitHubIssue", () => {
  it.each([
    { label: "radar", color: "0ea5e9" },
    { label: "radar-en", color: "38bdf8" },
  ])("creates the $label label with its assigned color before the Issue", async ({ label, color }) => {
    process.env["DIGEST_REPO"] = "example/agents-radar";
    process.env["GITHUB_TOKEN"] = "test-token";
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response(null, { status: 201 }))
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ html_url: "https://github.com/example/agents-radar/issues/42" }), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }),
      );
    vi.stubGlobal("fetch", fetchMock);

    const url = await createGitHubIssue("Radar 2026-08-12", "Issue body", label);

    expect(url).toBe("https://github.com/example/agents-radar/issues/42");
    expect(fetchMock).toHaveBeenCalledTimes(2);

    const [labelUrl, labelInit] = fetchMock.mock.calls[0]!;
    expect(labelUrl).toBe("https://api.github.com/repos/example/agents-radar/labels");
    expect(labelInit).toMatchObject({
      method: "POST",
      body: JSON.stringify({ name: label, color }),
    });

    const [issueUrl, issueInit] = fetchMock.mock.calls[1]!;
    expect(issueUrl).toBe("https://api.github.com/repos/example/agents-radar/issues");
    expect(issueInit).toMatchObject({
      method: "POST",
      body: JSON.stringify({ title: "Radar 2026-08-12", body: "Issue body", labels: [label] }),
    });
  });
});
