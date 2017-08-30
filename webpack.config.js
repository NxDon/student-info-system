var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: 'cheap-eval-source-map',
    context: __dirname + "/src",
    entry: "./index.js",
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: [["import", { "libraryName": "antd", "style": "css" }]]
            },
        },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            }]
    },
    output: {
        path: __dirname,
        filename: "bundle.js",

    },
    devServer: {
        contentBase: './'
    }

};