# cli-dir-to-json

## How to use?
```bash
mkdir example
mkdir example/folder
touch example/folder/text.txt
echo "caption=hello world" >> example/folder/text.txt
echo "url=http://example.com" >> example/folder/text.txt
cd example
npx @adiatma2019/cli-dir-to-json example example.json
cat example.json
{
  "path": "/example/folder",
  "children": [
    {
      "path": "/example/folder/text.txt",
      "content": {
        "caption": "hello world",
        "url": "http://example.com"
      }
    }
  ]
}
```

Thanks
