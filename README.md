# Olive Oil

![Logo](./README.png)

### Easily generate 'word salads' from whatever input strings or numbers you throw in using crypto-js, minimist, and bip39.
--------------------------------------------------------------------------------
## CLI Usage

```bash
olivesalad --build 898572
```

Expected output:
```
between-brand
```

## CLI Optional Parameter: Change Separator
```bash
olivesalad --build 898572 --sep " "
```

Expected output:
```
between brand
```

## CLI Optional Parameter: Change Wordcount
```bash
olivesalad --build 898572 --len 1
```

Expected output:
```
between
```

## Usage As Library
If you're using this as a module within a JS project, pass the input string as the first argument and the optional *sep* and *len* arguments as the properties of an object as the second parameter. The returned value will be a string.
```js
import olivesalad from 'olivesalad'
const output = olivesalad("exampleInputString", { len: 4, sep: "_" })

console.log(output)
```