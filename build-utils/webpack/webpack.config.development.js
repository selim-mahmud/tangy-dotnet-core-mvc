const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    return {
        mode: env.mode,
        devtool: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                            },
                            {
                                loader: "css-loader", options: { sourceMap: false}
                            },
                            {
                                loader: "sass-loader"
                            }
                        ]
                }
            ]
        }
    };
};