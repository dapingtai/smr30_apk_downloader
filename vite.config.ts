import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  console.info('Vite mode:', mode);
  console.info('Vite base url:', process.env.VITE_BASE_URL);
  return {
    base: mode === 'production' ? process.env.VITE_BASE_URL : '/',
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  };
});
