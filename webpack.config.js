const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ],
            },
        ],
        rules: [
            {
                test: /\.js$/,
                use: 'raw-loader'
            },
        ],
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'disr'),
        filename: 'app.bundle.js',
    },
};
const HtmlWebpackPlugin =require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    }),
    new MiniCssExtractPlugin ({
        filename: 'style.css'
    })
]
