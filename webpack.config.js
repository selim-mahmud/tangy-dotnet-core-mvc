const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Merge = require("webpack-merge");
const ModeConfig = (env) => require(`./build-utils/webpack/webpack.config.${env.mode}.js`)(env);

module.exports = (env = {mode: "production"}) => {
    return Merge(
        ModeConfig(env), 
        {
        entry: ['./src/js/index.js', './src/sass/index.scss'],
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, 'dist'),
            publicPath: "wwwroot/"
        },
        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        "file-loader"
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        "file-loader"
                    ]
                },
                { test: /\.html$/, loader: "html-loader" }
        ]
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    filename: '../Views/Shared/_Layout.cshtml',
                    template: "./Views/Shared/_Layout_Template.cshtml",
                    hash: true,
                    cache: true
                }
            ),
            new MiniCssExtractPlugin({
                filename: "bundle.css"
              })
        ],
        stats: { colors: true }
    });
};