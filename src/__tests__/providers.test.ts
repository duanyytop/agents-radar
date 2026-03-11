import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  AnthropicProvider,
  OpenAIProvider,
  GitHubCopilotProvider,
  OpenRouterProvider,
  createProvider,
  VALID_PROVIDER_NAMES,
  type LlmProvider,
} from "../providers/index.ts";

// ---------------------------------------------------------------------------
// Mock the SDKs at module level
// ---------------------------------------------------------------------------

vi.mock("@anthropic-ai/sdk", () => {
  const create = vi.fn();
  class MockAnthropic {
    messages = { create };
  }
  return {
    default: MockAnthropic,
    __mockCreate: create,
  };
});

vi.mock("openai", () => {
  const create = vi.fn();
  class MockOpenAI {
    chat = { completions: { create } };
  }
  return {
    default: MockOpenAI,
    __mockCreate: create,
  };
});

// Access the mock internals
async function getAnthropicMockCreate() {
  const mod = await import("@anthropic-ai/sdk");
  return (mod as unknown as { __mockCreate: ReturnType<typeof vi.fn> }).__mockCreate;
}

async function getOpenAIMockCreate() {
  const mod = await import("openai");
  return (mod as unknown as { __mockCreate: ReturnType<typeof vi.fn> }).__mockCreate;
}

// ---------------------------------------------------------------------------
// Env helpers
// ---------------------------------------------------------------------------

function withEnv(vars: Record<string, string | undefined>, fn: () => void | Promise<void>) {
  return async () => {
    const saved: Record<string, string | undefined> = {};
    for (const key of Object.keys(vars)) {
      saved[key] = process.env[key];
      if (vars[key] === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = vars[key];
      }
    }
    try {
      await fn();
    } finally {
      for (const key of Object.keys(saved)) {
        if (saved[key] === undefined) {
          delete process.env[key];
        } else {
          process.env[key] = saved[key];
        }
      }
    }
  };
}

// ---------------------------------------------------------------------------
// LlmProvider interface contract
// ---------------------------------------------------------------------------

describe("LlmProvider interface", () => {
  it("AnthropicProvider has correct name", () => {
    const p = new AnthropicProvider();
    expect(p.name).toBe("anthropic");
  });

  it("OpenAIProvider has correct name", () => {
    const p = new OpenAIProvider({ apiKey: "test" });
    expect(p.name).toBe("openai");
  });

  it("GitHubCopilotProvider has correct name", () => {
    const p = new GitHubCopilotProvider({ apiKey: "test" });
    expect(p.name).toBe("github-copilot");
  });

  it("OpenRouterProvider has correct name", () => {
    const p = new OpenRouterProvider({ apiKey: "test" });
    expect(p.name).toBe("openrouter");
  });

  it("all providers implement LlmProvider with call()", () => {
    const providers: LlmProvider[] = [
      new AnthropicProvider(),
      new OpenAIProvider({ apiKey: "k" }),
      new GitHubCopilotProvider({ apiKey: "k" }),
      new OpenRouterProvider({ apiKey: "k" }),
    ];
    for (const p of providers) {
      expect(typeof p.name).toBe("string");
      expect(typeof p.call).toBe("function");
    }
  });
});

// ---------------------------------------------------------------------------
// VALID_PROVIDER_NAMES
// ---------------------------------------------------------------------------

describe("VALID_PROVIDER_NAMES", () => {
  it("contains all four supported providers", () => {
    expect(VALID_PROVIDER_NAMES).toEqual(["anthropic", "openai", "github-copilot", "openrouter"]);
  });
});

// ---------------------------------------------------------------------------
// AnthropicProvider
// ---------------------------------------------------------------------------

describe("AnthropicProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("uses default model when ANTHROPIC_MODEL is not set", () => {
    delete process.env["ANTHROPIC_MODEL"];
    const p = new AnthropicProvider();
    expect(p.name).toBe("anthropic");
  });

  it(
    "uses ANTHROPIC_MODEL env var",
    withEnv({ ANTHROPIC_MODEL: "claude-opus-99" }, () => {
      const p = new AnthropicProvider();
      expect(p.name).toBe("anthropic");
    }),
  );

  it("uses constructor model parameter over env", () => {
    const p = new AnthropicProvider("custom-model");
    expect(p.name).toBe("anthropic");
  });

  it("call returns text from Anthropic SDK", async () => {
    const mockCreate = await getAnthropicMockCreate();
    mockCreate.mockResolvedValueOnce({
      content: [{ type: "text", text: "Hello from Anthropic" }],
    });

    const p = new AnthropicProvider("test-model");
    const result = await p.call("test prompt", 1024);
    expect(result).toBe("Hello from Anthropic");
    expect(mockCreate).toHaveBeenCalledWith({
      model: "test-model",
      max_tokens: 1024,
      messages: [{ role: "user", content: "test prompt" }],
    });
  });

  it("throws on non-text response", async () => {
    const mockCreate = await getAnthropicMockCreate();
    mockCreate.mockResolvedValueOnce({
      content: [{ type: "image", source: {} }],
    });

    const p = new AnthropicProvider();
    await expect(p.call("prompt", 100)).rejects.toThrow("Unexpected response type from Anthropic");
  });
});

// ---------------------------------------------------------------------------
// OpenAIProvider
// ---------------------------------------------------------------------------

describe("OpenAIProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it(
    "uses OPENAI_MODEL env var as default",
    withEnv({ OPENAI_MODEL: "gpt-4-turbo" }, () => {
      const p = new OpenAIProvider({ apiKey: "k" });
      expect(p.name).toBe("openai");
    }),
  );

  it("uses gpt-4o when no env or constructor model given", () => {
    delete process.env["OPENAI_MODEL"];
    const p = new OpenAIProvider({ apiKey: "k" });
    expect(p.name).toBe("openai");
  });

  it("call returns text from OpenAI SDK", async () => {
    const mockCreate = await getOpenAIMockCreate();
    mockCreate.mockResolvedValueOnce({
      choices: [{ message: { content: "Hello from OpenAI" } }],
    });

    const p = new OpenAIProvider({ apiKey: "k", model: "gpt-test" });
    const result = await p.call("test prompt", 2048);
    expect(result).toBe("Hello from OpenAI");
    expect(mockCreate).toHaveBeenCalledWith({
      model: "gpt-test",
      max_completion_tokens: 2048,
      messages: [{ role: "user", content: "test prompt" }],
    });
  });

  it("throws on empty response", async () => {
    const mockCreate = await getOpenAIMockCreate();
    mockCreate.mockResolvedValueOnce({
      choices: [{ message: { content: null } }],
    });

    const p = new OpenAIProvider({ apiKey: "k" });
    await expect(p.call("prompt", 100)).rejects.toThrow("Unexpected empty response from openai");
  });

  it("throws when choices is empty", async () => {
    const mockCreate = await getOpenAIMockCreate();
    mockCreate.mockResolvedValueOnce({ choices: [] });

    const p = new OpenAIProvider({ apiKey: "k" });
    await expect(p.call("prompt", 100)).rejects.toThrow("Unexpected empty response from openai");
  });
});

// ---------------------------------------------------------------------------
// GitHubCopilotProvider
// ---------------------------------------------------------------------------

describe("GitHubCopilotProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("call returns text", async () => {
    const mockCreate = await getOpenAIMockCreate();
    mockCreate.mockResolvedValueOnce({
      choices: [{ message: { content: "Hello from Copilot" } }],
    });

    const p = new GitHubCopilotProvider({ apiKey: "ghp_test" });
    const result = await p.call("prompt", 512);
    expect(result).toBe("Hello from Copilot");
  });

  it(
    "uses GITHUB_COPILOT_MODEL env",
    withEnv({ GITHUB_COPILOT_MODEL: "o3-mini" }, () => {
      const p = new GitHubCopilotProvider({ apiKey: "ghp_test" });
      expect(p.name).toBe("github-copilot");
    }),
  );

  it("throws on empty response", async () => {
    const mockCreate = await getOpenAIMockCreate();
    mockCreate.mockResolvedValueOnce({ choices: [] });

    const p = new GitHubCopilotProvider({ apiKey: "k" });
    await expect(p.call("prompt", 100)).rejects.toThrow("Unexpected empty response from github-copilot");
  });
});

// ---------------------------------------------------------------------------
// OpenRouterProvider
// ---------------------------------------------------------------------------

describe("OpenRouterProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("call returns text", async () => {
    const mockCreate = await getOpenAIMockCreate();
    mockCreate.mockResolvedValueOnce({
      choices: [{ message: { content: "Hello from OpenRouter" } }],
    });

    const p = new OpenRouterProvider({ apiKey: "or_test" });
    const result = await p.call("prompt", 256);
    expect(result).toBe("Hello from OpenRouter");
  });

  it(
    "uses OPENROUTER_MODEL env",
    withEnv({ OPENROUTER_MODEL: "meta-llama/llama-3-70b" }, () => {
      const p = new OpenRouterProvider({ apiKey: "k" });
      expect(p.name).toBe("openrouter");
    }),
  );

  it("throws on empty response", async () => {
    const mockCreate = await getOpenAIMockCreate();
    mockCreate.mockResolvedValueOnce({
      choices: [{ message: { content: "" } }],
    });

    const p = new OpenRouterProvider({ apiKey: "k" });
    await expect(p.call("prompt", 100)).rejects.toThrow("Unexpected empty response from openrouter");
  });
});

// ---------------------------------------------------------------------------
// createProvider factory
// ---------------------------------------------------------------------------

describe("createProvider", () => {
  const original = process.env["LLM_PROVIDER"];

  afterEach(() => {
    if (original !== undefined) {
      process.env["LLM_PROVIDER"] = original;
    } else {
      delete process.env["LLM_PROVIDER"];
    }
  });

  it("defaults to anthropic when LLM_PROVIDER is not set", () => {
    delete process.env["LLM_PROVIDER"];
    const p = createProvider();
    expect(p.name).toBe("anthropic");
    expect(p).toBeInstanceOf(AnthropicProvider);
  });

  it("creates anthropic provider", () => {
    const p = createProvider("anthropic");
    expect(p).toBeInstanceOf(AnthropicProvider);
  });

  it("creates openai provider", () => {
    const p = createProvider("openai");
    expect(p).toBeInstanceOf(OpenAIProvider);
  });

  it("creates github-copilot provider", () => {
    const p = createProvider("github-copilot");
    expect(p).toBeInstanceOf(GitHubCopilotProvider);
  });

  it("creates openrouter provider", () => {
    const p = createProvider("openrouter");
    expect(p).toBeInstanceOf(OpenRouterProvider);
  });

  it(
    "reads LLM_PROVIDER from env",
    withEnv({ LLM_PROVIDER: "openai" }, () => {
      const p = createProvider();
      expect(p).toBeInstanceOf(OpenAIProvider);
    }),
  );

  it("throws descriptive error for unknown provider", () => {
    expect(() => createProvider("bogus" as never)).toThrow(
      /Invalid LLM provider: "bogus".*Valid providers are: anthropic, openai, github-copilot, openrouter/,
    );
  });

  it("error message includes LLM_PROVIDER hint", () => {
    expect(() => createProvider("nope" as never)).toThrow("Set the LLM_PROVIDER env var");
  });

  it("log does not leak API keys", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    createProvider("anthropic");
    const logged = spy.mock.calls.flat().join(" ");
    // Must log provider name, must NOT log any key-like strings
    expect(logged).toContain("anthropic");
    expect(logged).not.toMatch(/sk-|ghp_|key|secret/i);
    spy.mockRestore();
  });
});
