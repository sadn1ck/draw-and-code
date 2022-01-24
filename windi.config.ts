import { defineConfig } from "windicss/helpers";

export default defineConfig({
  plugins: [
    require("windicss/plugin/forms"),
    require("windicss/plugin/filters"),
    require("@windicss/plugin-question-mark"),
  ],
  theme: {
    extend: {
      colors: {
        brand: "#42B883",
      },
    },
  },
});
