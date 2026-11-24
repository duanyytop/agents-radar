/**
 * Cheaper Inference provider — OpenAI-compatible endpoint via
 * api.cheaperinference.com.
 *
 * Env vars:
 *   CHEAPER_INFERENCE_API_KEY  - API key
 *   CHEAPER_INFERENCE_MODEL    - model name (default: gpt-5.4-mini)
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const CHEAPER_INFERENCE_BASE_URL = "https://api.cheaperinference.com/v1";

export class CheaperInferenceProvider extends OpenAICompatibleProvider {
  readonly name = "cheaper-inference";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["CHEAPER_INFERENCE_API_KEY"],
      baseURL: CHEAPER_INFERENCE_BASE_URL,
      model: opts?.model ?? process.env["CHEAPER_INFERENCE_MODEL"] ?? "gpt-5.4-mini",
    });
  }
}
