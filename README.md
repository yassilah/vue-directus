# 📦 Library

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Library starter template

## Features

- 🔥 Starter template for any library
- 🎉 Docs using [Vitepress](https://vitepress.vuejs.org/)
- 🚦 Tests using [Vitest](https://vitest.dev/)
- 📦 Build using [Unbuild](https://github.com/unjs/unbuild)
- 🚀 Auto-release using [Semantic Release](https://github.com/semantic-release/semantic-release)
- 📝 Commit using [Commitizen](https://github.com/commitizen/cz-cli)
- 👍 Workflows included (test, build and release)
- 😍 Typescript

## Usage

1. Clone this {repo}.
2. Replace all instances of `@package/name` with your actual package name.
3. Replace all instances of `{username}` and `{repo}` with your actual Github username and repositery name.
4. Run `npx semantic-release setup` to setup your auto-releases.
5. Create a personal token on [Github](https://github.com/settings/tokens/new).
6. Add a `GH_TOKEN` actions secret from `https://github.com/<YOUR_USERNAME>/<YOUR_REPO>/settings/secrets/actions/new` using your personal token.
7. Replace this `README.md` file with the `README.example.md`.
8. Enable Github Pages from `https://github.com/<YOUR_USERNAME>/<YOUR_REPO>/settings/pages` on branch `gh-pages`.
9. You're good to go 🎉

## Scripts

#### dev

Run your `docs` dev server using [Vitepress](https://vitepress.vuejs.org). You can customize your config inside `docs/.vitepress/config.ts`.

```bash
yarn dev
```

#### build

Build your `docs` using [Vitepress](https://vitepress.vuejs.org). You can customize your config inside `docs/.vitepress/config.ts`.

```bash
yarn build
```

#### serve

Serve your `docs` using [Vitepress](https://vitepress.vuejs.org). You can customize your config inside `docs/.vitepress/config.ts`.

```bash
yarn serve
```

#### test

Test your library using [Vitest](https://vitest.dev/). You can customize your config inside `vite.config.ts`.

```bash
yarn test
```

#### coverage

Generate your library's test coverage.

```bash
yarn coverage
```

#### commit

Commit your files using [Commitizen](https://github.com/commitizen/cz-cli).

```bash
yarn commit
```

#### commit:all

Add all files & commit using [Commitizen](https://github.com/commitizen/cz-cli).

```bash
yarn commit:all
```

#### prepack

Build your module using [Unbuild](https://github.com/unjs/unbuild). You can customize your config inside `build.config.ts`.

```bash
yarn prepack
```

#### semantic-release

Release a semantic versioned package using [Semantic Release](https://github.com/semantic-release/semantic-release).

```bash
yarn semantic-release
```

## License

[MIT](./LICENSE) - Made with ❤️

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@yassilah/library-starter/latest.svg
[npm-version-href]: https://npmjs.com/package/@yassilah/library-starter
[npm-downloads-src]: https://img.shields.io/npm/dm/@yassilah/library-starter.svg
[npm-downloads-href]: https://npmjs.com/package/@yassilah/library-starter
[github-actions-ci-src]: https://github.com/yassilah/library-starter/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/yassilah/library-starter/actions?query=workflow@ci
[codecov-src]: https://img.shields.io/codecov/c/github/yassilah/library-starter.svg
[codecov-href]: https://codecov.io/gh/yassilah/library-starter
[license-src]: https://img.shields.io/npm/l/@yassilah/library-starter.svg
[license-href]: https://npmjs.com/package/@yassilah/library-starter
