# cli-dir-to-json

![npm](https://img.shields.io/npm/dm/@adiatma2019/cli-dir-to-json)

🗂 CLI to convert directory to json file.

## List Features
- [x] Convert directory to JSON.

## Install

- Install with yarn.
```bash
yarn add -D @adiatma2019/cli-dir-to-json
```

- Install with npm.
```bash
npm install --save-dev @adiatma2019/cli-dir-to-json
```

## How to use?

-  Create a folder `project` and sub directory name with `folder`.

```
./project
|-folder
|--hello.txt -> "caption=hello"
```

- Please type with `npx @adiatma2019/cli-dir-to-json folder output.json` Output.

```json
// ./output.json
{
    "folder": [
        {
            "text": {
                "caption": "hello"
            },
        },
    ],
}
```

Thanks, Feel free to contribute!
