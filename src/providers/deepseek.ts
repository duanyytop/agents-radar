import { OpenAICompatibleProvider } from "./openai-compatible.ts";

export class DeepSeekProvider extends OpenAICompatibleProvider {
  readonly name = "deepseek";

  constructor(apiKey: string, model?: string) {
    super({
      apiKey,
      baseURL: "https://api.deepseek.com",
      model: model ?? "deepseek-chat",
    });
  }
}
