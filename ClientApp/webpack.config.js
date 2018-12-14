﻿
const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
};