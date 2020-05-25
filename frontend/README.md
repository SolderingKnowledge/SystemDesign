# Setup with Webpack instead of react-scripts(create-react-app)

1 `npm init -y` creates package.json

2 `npm i react react-dom` install react

3 `npm i --save-dev webpack webpack-dev-server webpack-cli`
installing webpack as dev dependency or you could run as `-D` instead of `--save-dev` flag.

4 `npm i -D babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin` installing babel as dev dependency

```js
    // hot reloads 
    "start": "webpack-dev-server --mode development --open --hot",
    // creates dist folder and uglifies in there
    "build": "webpack --mode production",

```
5 `npm run start` and it will run on => http://localhost:8080/


Note:
```js
    "babel-loader@8" is depend on "babel-core@7"
    // in my case babel-core@7 not out yet
    // i had to install:
    npm i -D babel-loader@7 // version 7 of babel
```