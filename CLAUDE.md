## Development

When starting the dev server, use background mode:

```
npm run dev:bg
```

Manage the background server with `npm run dev:stop`, `npm run dev:status`, and `npm run dev:logs`.

Only one dev server can hold port 4321 at a time. Its pid is tracked in
`.astro/dev.json`, and a second start is rejected while that pid is alive. If
`npm run dev` reports "Another astro dev server is already running", the server
is healthy — just use it, or run `npm run dev:stop` first.

Do not add `--force` to the `dev` script. `--force` clears the content layer
cache on every run, and when it kills a live server the immediate respawn can
race the port and time out after 30s.

Note: `astro` is a local dependency, not a global command. Outside of npm scripts
it must be invoked as `npx astro ...`.

Astro auto-detects agentic environments (via `am-i-vibing`) and forces background
mode there regardless of flags, so `astro dev` behaves differently for an agent
than in a plain terminal.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
