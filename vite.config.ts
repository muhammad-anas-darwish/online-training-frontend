import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import autoImport from "unplugin-auto-import/vite";
import VueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    tailwindcss(),
    autoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],

      imports: [
        "vue",
        "vue-router",
        {
          "@vueuse/core": ["useMouse", ["useFetch", "useMyFetch"]],
          axios: [["default", "axios"]],
          "[package-name]": ["[import-names]", ["[from]", "[alias]"]],
        },
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true,
        },
      ],

      ignore: ["useMouse", "useFetch"],

      defaultExportByFilename: false,

      dirsScanOptions: {
        filePatterns: ["*.ts"],
        fileFilter: (file) => file.endsWith(".ts"),
        types: true,
      },

      dirs: [
        "./hooks",
        "./composables",
        "./composables/**",
        {
          glob: "./hooks",
          types: true,
        },
        {
          glob: "./composables",
          types: false,
        },
      ],

      dts: "./auto-imports.d.ts",

      ignoreDts: ["ignoredFunction", /^ignore_/],

      vueTemplate: false,

      vueDirectives: undefined,

      resolvers: [],

      viteOptimizeDeps: true,

      injectAtEnd: true,

      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },

      biomelintrc: {
        enabled: false,
        filepath: "./.biomelintrc-auto-import.json",
      },

      dumpUnimportItems: "./auto-imports.json", 
    }),
  ],
});
