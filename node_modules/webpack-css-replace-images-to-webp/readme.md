# webpack-css-replace-images-to-webp

[WebP](https://developers.google.com/speed/webp/) css references replacer webpack plugin

## Install

```sh
npm install webpack-css-replace-images-to-webp --save-dev
```
or
```sh
yarn add webpack-css-replace-images-to-webp -D
```

## What is this for?
Usually, when using webp images, you don't want to convert all your .png's and .jpg's to .webp's, you want to have both versions (for example, as recommended in [this](https://www.npmjs.com/package/webp-loader#usage) section of __webp-loader__ plugin (multi-loader part)), and let browser decide which one to use via
```html
<picture>
    <source type="image/webp" srcset="image.webp">
    <source type="image/jpeg" srcset="image.jpg">
    <img src="image.jpg" alt="My Image">
</picture>
```
__but what about `background-image: url(...)` and `content: url(...)` in css?__

That's where current plugin comes in.
It creates alternative version of your .css file, where all image references altered to corresponding .webp versions. Example:
```
input: "style.css"

output: [
    "style.min.css",
    "style.webp.min.css"
]

```
Then all you have to do, is write some condition, based on userAgent, etc., and use on server response one of outputted files.

## Usage
```javascript
const WebpackCssReplaceWebp = require('webpack-css-replace-images-to-webp');
module.exports = {
  ...
  plugins: [
    new WebpackCssReplaceWebp(),
  ]
  ...
}
```
or
```javascript
import WebpackCssReplaceWebp from 'webpack-css-replace-images-to-webp';
export default (env) => ({
  ...
  plugins: [
    new WebpackCssReplaceWebp(),
  ]
  ...
})
```
