import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "host",
      remotes: {
        rspack_manifest_provider:
          "rspack_manifest_provider@http://localhost:3001/mf-manifest.json",
        rspack_js_entry_provider:
          "rspack_js_entry_provider@http://localhost:3002/remoteEntry.js",
      },
      shared: ["react", "react-dom", "lodash"],
    }),
  ],
  server: {
    port: 3000,
  },
});
