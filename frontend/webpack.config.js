const path = require("path");// core node.js module for files
const HtmlWebpackPlugin = require("html-webpack-plugin");// creates HTML files to serve bundles

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),// will be compiled to dist folder
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,// it will look for js files and babel will compile
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}; // common js way to export file