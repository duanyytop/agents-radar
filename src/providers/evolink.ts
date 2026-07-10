/**
 * Evolink provider — OpenAI-compatible endpoint via direct.evolink.ai.
 *
 * Env vars:
 *   EVOLINK_API_KEY  - API key
 *   EVOLINK_MODEL    - model name (default: gpt-5.2)
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const EVOLINK_BASE_URL = "https://direct.evolink.ai/v1";

export class EvolinkProvider extends OpenAICompatibleProvider {
  readonly name = "evolink";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["EVOLINK_API_KEY"],
      baseURL: EVOLINK_BASE_URL,
      model: opts?.model ?? process.env["EVOLINK_MODEL"] ?? "gpt-5.2",
    });
  }
}
