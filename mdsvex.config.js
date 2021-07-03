// Import the highlighter, for example, say I want prism with javascript support
import pkg from 'prismjs/components/prism-core.js';
const {highlight, languages } = pkg;
import 'prismjs/components/prism-clike.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-python.js'

const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },
  layout: {
    module: './src/lib/components/ModuleHeader.svelte'
  },

  highlight: function (code, lang) {
    const grammar = languages[lang];
    if(grammar) {
        return highlight(code, grammar);
    }
  },

  "remarkPlugins": [
  ],
  "rehypePlugins": []
};

export default config;