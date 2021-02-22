/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    //  directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  plugins: [
    /* ... */
    ["@snowpack/plugin-react-refresh"],
    /* eslint troubleshooting - https://github.com/snowpackjs/snowpack/discussions/2147 */
    // [
    //   "@snowpack/plugin-run-script",
    //   {
    //     cmd: 'eslint "src/**/*.{js,jsx}"',
    //     watch: 'watch "$1" src',
    //   },
    // ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
