var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        path: path.resolve(__dirname, "buildOutput"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};