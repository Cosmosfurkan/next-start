import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      // eslint-disable-next-line n/no-process-env
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
});
