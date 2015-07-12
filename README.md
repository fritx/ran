# ran

> Cmd-Tool to run any node.js task anywhere

```plain
$ npm install --global ran
```

> **ran** helps you run modules via **node**,  
> but enables a global "task-store".  
> And its own builtin commands were implemented  
> as separated "task-modules".

```plain
$ ran <module> [arg1] [arg2] [..argn]
```

## Normal Tasks

```plain
$ ran D:\dev\ran\examples\helloworld arg1 arg2
# (leading "./" for a relative module)
$ ran ./examples/helloworld arg1 arg2
```

## Gloabl Tasks

```plain
# (should config for the first time)
$ ran --config globaldir "D:\mytasks"
# (no leading "./" for a gloabl module)
$ ran net/static-server ./ 3000
```

## Built-in Tasks

```plain
$ ran --help
$ ran --version
$ ran --config <key> <value>
```

- `--help` (alias: `-h`)
- `--version` (alias: `-v`)
- `--config` (alias: `-c`)

## Config

```plain
$ ran --config globaldir "D:\mytasks"
```

- `globaldir`: cantains global tasks
