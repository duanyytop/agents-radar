/**
 * Atlas Cloud provider via its OpenAI-compatible endpoint.
 *
 * Env vars:
 *   ATLASCLOUD_API_KEY   - API key
 *   ATLASCLOUD_BASE_URL  - endpoint override
 *   ATLASCLOUD_MODEL     - model name
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const ATLAS_BASE_URL = "https://api.atlascloud.ai/v1";
const ATLAS_DEFAULT_MODEL = "Qwen/Qwen3-235B-A22B-Instruct-2507";

export class AtlasProvider extends OpenAICompatibleProvider {
  readonly name = "atlas";

  constructor(opts?: { apiKey?: string; baseURL?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["ATLASCLOUD_API_KEY"],
      baseURL: opts?.baseURL ?? process.env["ATLASCLOUD_BASE_URL"] ?? ATLAS_BASE_URL,
      model: opts?.model ?? process.env["ATLASCLOUD_MODEL"] ?? ATLAS_DEFAULT_MODEL,
    });
  }
}
