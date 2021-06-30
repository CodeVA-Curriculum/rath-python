const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },
  layout: {
    module: './src/lib/components/ModuleHeader.svelte'
  },

  "remarkPlugins": [],
  "rehypePlugins": []
};

export default config;