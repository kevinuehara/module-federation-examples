import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3002,
  },
  dev: {
    assetPrefix: true,
    client: {
      port: 3002,
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "rspack_js_entry_provider",
      filename: "remoteEntry.js",
      exposes: {
        "./Lodash": "./src/Lodash.tsx",
      },
      shared: ["react", "react-dom", "lodash"],
      manifest: false,
    }),
  ],
});
