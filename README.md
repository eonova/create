# @eonova/create

Command-line for creating projects from templates.

## Install

```bash
npm i -g @eonova/create

# Or use [p]npx
npx @eonova/create
```

## Usage

### Create a project

```bash
create [path]
# e.g: create hello-world
```

### Edit configuration

```bash
# edit the configuration via VSCode, Vim, or Zed.
create edit
```

### Use remote configuration

```bash
create from <url>
# e.g: create from https://raw.githubusercontent.com/eonova/create/main/example.yaml

# or for short
create from <owner>/<repo>/<branch>/<path>
# e.g: create from eonova/create/main/example.yaml
```

## Configuration

Most formats of configuration are supported.
The configuration file is located in `$HOME/.config/create.config.[js,mjs,ts,mts,json,yml,yaml]`

[TypeScript Schema](https://github.com/eonova/create/blob/main/src/types.ts)

URL format: `repo[/subpath][#ref]`. See [examples](https://github.com/unjs/giget#examples).

Run `create config` to modify config.

```yaml
cwd: /Users/your-name/projects # optional, defaults to process.cwd()

git:
  init: true # optional, defaults to true
  add: false

templates:
  - name: Library # must be unique
    # color: '#008800' # optional
    children:
      - name: TypeScript
        color: '#3178c6'
        url: eonova/node-lib-starter # remote URL or local path
  - name: Web App
    url: xxxxx
    git:
      init: false # overwrite global config
```

## License

[MIT](./LICENSE) License © 2025 [Nova Eon](https://github.com/eonova)
