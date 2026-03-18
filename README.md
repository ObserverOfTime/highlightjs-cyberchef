# CyberChef recipe grammar for highlight.js

[![version](https://badgen.net/npm/v/highlightjs-cyberchef)](https://www.npmjs.com/package/highlightjs-cyberchef)
[![license](https://badgen.net/badge/license/MIT/blue)](https://github.com/ObserverOfTime/highlightjs-cyberchef/blob/master/LICENSE)
[![minified size](https://badgen.net/bundlephobia/min/highlightjs-cyberchef)](https://bundlephobia.com/package/highlightjs-cyberchef)

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the dist directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/cyberchef.min.js"></script>
<script type="text/javascript">hljs.highlightAll();</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-cyberchef@0.1.0/dist/cyberchef.min.js"></script>
```

## With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc., simply require the language module, then register it with Highlight.js.

```javascript
import hljs from "highlight.js";
import hljsCyberChef from "highlightjs-cyberchef";

hljs.registerLanguage("cyberchef", hljsCyberChef);
hljs.highlightAll();
```

## Links

- The official site for the Highlight.js library is https://highlightjs.org/.
- The Highlight.js GitHub project: https://github.com/highlightjs/highlight.js
- Learn more about CyberChef: https://gchq.github.io/CyberChef/
