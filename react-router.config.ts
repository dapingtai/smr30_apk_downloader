import type { Config } from "@react-router/dev/config";
import { config as loadEnv } from "dotenv";

loadEnv({ path: `.env.${process.env.NODE_ENV}` });
console.info('Now env:', process.env.NODE_ENV);
console.info('Now base url:', process.env.VITE_BASE_URL);

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,

  // Base path for the application
  // Set this to match your deployment path
  // e.g., "/" for root, "/smr30" for subdirectory
  basename: process.env.VITE_BASE_URL || "/",
} satisfies Config;
