/*
Language: CyberChef Recipe
Author: ObserverOfTime <chronobserver@disroot.org>
Website: https://gchq.github.io/CyberChef/
*/

export default function(hljs) {
  return {
    name: "CyberChef Recipe",
    disableAutodetect: true,
    contains: [
      {
        begin: [
          /\b[A-Za-z0-9_/]+/,
          /\(/
        ],
        beginScope: {
          1: "title",
          2: "punctuation"
        },
        relevance: 1
      },
      {
        className: "string",
        begin: /'/, end: /'/,
        contains: [
          { begin: /\\'/ }
        ]
      },
      {
        className: "number",
        begin: /\b\d+(\.\d+)?\b/
      },
      {
        className: "literal",
        begin: /\b(true|false)\b/
      },
      {
        className: "meta",
        begin: /\/(disabled|breakpoint)\b/
      },
      {
        className: "punctuation",
        begin: /[(),{}:]/
      }
    ]
  };
}
