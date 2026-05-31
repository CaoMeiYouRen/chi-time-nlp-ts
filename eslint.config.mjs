import { defineConfig } from "eslint/config";
import cmyr from "eslint-config-cmyr";

export default defineConfig([
    {
        ignores: [
            "coverage/",
            "dist/",
            "docs/",
            "docs-dist/",
            "test/*.js",
            "test/*.json",
            "*.log",
        ],
    },
    cmyr,
    {
        rules: {
            "no-prototype-builtins": "off",
        },
    },
]);
