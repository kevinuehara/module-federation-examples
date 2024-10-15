import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    assetPrefix: true,
    client: {
      port: 3001,
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "rspack_manifest_provider",
      exposes: {
        "./Lodash": "./src/Lodash.tsx",
      },
      shared: ["react", "react-dom", "lodash"],
    }),
  ],
});
