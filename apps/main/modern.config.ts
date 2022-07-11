import { defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/docs/apis/config/overview
export default defineConfig({
  runtime: {
    masterApp: {
      manifest: {
        modules: [
          {
            name: 'Sub',
            activeWhen: '/Sub',
            entry: 'http://localhost:8081',
          },
        ],
      },
    },
  },
});
