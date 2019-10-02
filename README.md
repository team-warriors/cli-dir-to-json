# cli-dir-to-json
CLI to convert directory to json file.

## Install
```bash
yarn add -D @adiatma2019/cli-dir-to-json // install with yarn
npm install --save-dev @adiatma2019/cli-dir-to-json // install with npm
```

## How to use?
```bash
mkdir project // create project directory
mkdir project/folder // create folder
echo "caption=hello" >> project/folder/hello.txt // add file txt and insert with caption=hello
cd folder // go to folder directory
yarn init -y // init yarn, i'am using yarn
yarn add -D @adiatma2019/cli-dir-to-json // install CLI
cat package.json // add script convert to aliases the command CLI
{
    ...,
    "scripts": {
        "convert": "cli-dir-to-json folder index.json" // convert folder to JSON
    }
}
yarn convert // to convert folder in directory to JSON
cat index.json // print output
{
    "folder": [
        {
            "text": {
                "caption": "hello"
            },
        },
    ],
}
// yo can use with file .env
touch .env
echo "HOSTNAME=http://localhost:2000" >> .env
touch folder/default.jpg
yarn convert
cat index.json
{
    "folder": [
        {
            "path": "http://localhost:2000/folder/default.jpg",
        },
        {
            "text": {
                "caption": "hello"
            },
        },
    ],
}
```

Thanks, Feel free to contribute!
