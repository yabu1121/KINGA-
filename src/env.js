import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * 環境変数の型安全な定義
 * 
 * サーバー側とクライアント側で使用する環境変数を定義します。
 * 必要に応じてここに環境変数を追加してください。
 */
export const env = createEnv({
  /**
   * サーバー側でのみ使用できる環境変数
   */
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    // ここにサーバー側の環境変数を追加
    // 例: DATABASE_URL: z.string().url(),
  },

  /**
   * クライアント側でも使用できる環境変数
   * 必ず NEXT_PUBLIC_ プレフィックスが必要
   */
  client: {
    // 例: NEXT_PUBLIC_API_URL: z.string().url(),
  },

  /**
   * 実際の環境変数とのマッピング
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
