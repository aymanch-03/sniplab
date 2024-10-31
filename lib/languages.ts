export type Language = {
  value: string;
  name: string;
  src: () => Promise<any>;
};

export const LANGUAGES: { [index: string]: Language } = {
  shell: {
    name: "Bash",
    value: "bash",
    src: () => import("shiki/langs/bash.mjs"),
  },
  astro: {
    name: "Astro",
    value: "astro",
    src: () => import("shiki/langs/astro.mjs"),
  },
  cpp: {
    name: "C++",
    value: "cpp",
    src: () => import("shiki/langs/cpp.mjs"),
  },
  csharp: {
    name: "C#",
    value: "csharp",
    src: () => import("shiki/langs/csharp.mjs"),
  },
  clojure: {
    name: "Clojure",
    value: "clojure",
    src: () => import("shiki/langs/clojure.mjs"),
  },
  crystal: {
    name: "Crystal",
    value: "crystal",
    src: () => import("shiki/langs/crystal.mjs"),
  },
  css: {
    name: "CSS",
    value: "css",
    src: () => import("shiki/langs/css.mjs"),
  },
  dart: {
    name: "Dart",
    value: "dart",
    src: () => import("shiki/langs/dart.mjs"),
  },
  diff: {
    name: "Diff",
    value: "diff",
    src: () => import("shiki/langs/diff.mjs"),
  },
  dockerfile: {
    name: "Docker",
    value: "dockerfile",
    src: () => import("shiki/langs/dockerfile.mjs"),
  },
  elm: {
    name: "Elm",
    value: "elm",
    src: () => import("shiki/langs/elm.mjs"),
  },
  elixir: {
    name: "Elixir",
    value: "elixir",
    src: () => import("shiki/langs/elixir.mjs"),
  },
  erlang: {
    name: "Erlang",
    value: "erlang",
    src: () => import("shiki/langs/erlang.mjs"),
  },
  gleam: {
    name: "Gleam",
    value: "gleam",
    src: () => import("shiki/langs/gleam.mjs"),
  },
  graphql: {
    name: "GraphQL",
    value: "graphql",
    src: () => import("shiki/langs/graphql.mjs"),
  },
  go: {
    name: "Go",
    value: "go",
    src: () => import("shiki/langs/go.mjs"),
  },
  haskell: {
    name: "Haskell",
    value: "haskell",
    src: () => import("shiki/langs/haskell.mjs"),
  },
  html: {
    name: "HTML",
    value: "xml",
    src: () => import("shiki/langs/html.mjs"),
  },
  java: {
    name: "Java",
    value: "java",
    src: () => import("shiki/langs/java.mjs"),
  },
  javascript: {
    name: "JavaScript",
    value: "javascript",
    src: () => import("shiki/langs/javascript.mjs"),
  },
  julia: {
    name: "Julia",
    value: "julia",
    src: () => import("shiki/langs/julia.mjs"),
  },
  json: {
    name: "JSON",
    value: "json",
    src: () => import("shiki/langs/json.mjs"),
  },
  jsx: {
    name: "JSX",
    value: "javascript",
    src: () => import("shiki/langs/jsx.mjs"),
  },
  kotlin: {
    name: "Kotlin",
    value: "kotlin",
    src: () => import("shiki/langs/kotlin.mjs"),
  },
  latex: {
    name: "LaTeX",
    value: "latex",
    src: () => import("shiki/langs/latex.mjs"),
  },
  lisp: {
    name: "Lisp",
    value: "lisp",
    src: () => import("shiki/langs/lisp.mjs"),
  },
  lua: {
    name: "Lua",
    value: "lua",
    src: () => import("shiki/langs/lua.mjs"),
  },
  markdown: {
    name: "Markdown",
    value: "markdown",
    src: () => import("shiki/langs/markdown.mjs"),
  },
  matlab: {
    name: "MATLAB",
    value: "matlab",
    src: () => import("shiki/langs/matlab.mjs"),
  },
  plaintext: {
    name: "Plaintext",
    value: "",
    src: () => import("shiki/langs/javascript.mjs"),
  },
  powershell: {
    name: "Powershell",
    value: "powershell",
    src: () => import("shiki/langs/powershell.mjs"),
  },
  objectivec: {
    name: "Objective-C",
    value: "objectivec",
    src: () => import("shiki/langs/objc.mjs"),
  },
  ocaml: {
    name: "OCaml",
    value: "ocaml",
    src: () => import("shiki/langs/ocaml.mjs"),
  },
  php: {
    name: "PHP",
    value: "php",
    src: () => import("shiki/langs/php.mjs"),
  },
  prisma: {
    name: "Prisma",
    value: "prisma",
    src: () => import("shiki/langs/prisma.mjs"),
  },
  python: {
    name: "Python",
    value: "python",
    src: () => import("shiki/langs/python.mjs"),
  },
  r: {
    name: "R",
    value: "r",
    src: () => import("shiki/langs/r.mjs"),
  },
  ruby: {
    name: "Ruby",
    value: "ruby",
    src: () => import("shiki/langs/ruby.mjs"),
  },
  rust: {
    name: "Rust",
    value: "rust",
    src: () => import("shiki/langs/rust.mjs"),
  },
  scala: {
    name: "Scala",
    value: "scala",
    src: () => import("shiki/langs/scala.mjs"),
  },
  scss: {
    name: "SCSS",
    value: "scss",
    src: () => import("shiki/langs/scss.mjs"),
  },
  solidity: {
    name: "Solidity",
    value: "solidity",
    src: () => import("shiki/langs/solidity.mjs"),
  },
  sql: {
    name: "SQL",
    value: "sql",
    src: () => import("shiki/langs/sql.mjs"),
  },
  swift: {
    name: "Swift",
    value: "swift",
    src: () => import("shiki/langs/swift.mjs"),
  },
  svelte: {
    name: "Svelte",
    value: "svelte",
    src: () => import("shiki/langs/svelte.mjs"),
  },
  toml: {
    name: "TOML",
    value: "toml",
    src: () => import("shiki/langs/toml.mjs"),
  },
  typescript: {
    name: "TypeScript",
    value: "typescript",
    src: () => import("shiki/langs/typescript.mjs"),
  },
  tsx: {
    name: "TSX",
    value: "typescript",
    src: () => import("shiki/langs/tsx.mjs"),
  },
  vue: {
    name: "Vue",
    value: "vue",
    src: () => import("shiki/langs/vue.mjs"),
  },
  xml: {
    name: "XML",
    value: "xml",
    src: () => import("shiki/langs/xml.mjs"),
  },
  yaml: {
    name: "YAML",
    value: "yaml",
    src: () => import("shiki/langs/yaml.mjs"),
  },
  zig: {
    name: "Zig",
    value: "zig",
    src: () => import("shiki/langs/zig.mjs"),
  },
};
