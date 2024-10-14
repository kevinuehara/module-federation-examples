import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3002,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
    client: {
      port: 3002,
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote2_alternative',
      exposes: {
        './Button': './src/Button.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
