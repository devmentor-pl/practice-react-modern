const taskNumber = '05'; // numer przerabianego zadania

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: `./${taskNumber}/app.js`,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${taskNumber}/index.html`,
            filename: 'index.html',
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            emitWarning: true,
            failOnError: false,
        }),
    ],
};
