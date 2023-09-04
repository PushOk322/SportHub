const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const WebpackCssReplaceWebp = require('webpack-css-replace-images-to-webp');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        },
        minimize : true,
        minimizer : [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            "imagemin-gifsicle",
                            "imagemin-mozjpeg",
                            "imagemin-pngquant",
                            "imagemin-svgo",
                        ],
                    },
                },
                loader: false, // Вимкнути вбудований loader, щоб зберегти оригінал
                // filename: 'img/[name][ext]', // Зберегти оригінал у папку img
                deleteOriginalAssets: false, // Не видаляти оригінальні файли
                generator: [
                    {
                        filename: 'img/[name].webp', // Зберегти конвертований файл у папку img з розширенням .webp
                        type: "asset",
                        implementation: ImageMinimizerPlugin.imageminGenerate,
                        options: {
                            plugins: ["imagemin-webp"],
                        },
                    },
                ],
            }),
        ]
    }

    return config;
}

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.[chunkhash].js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/img",
                    to: "img",
                    globOptions: {
                        ignore: ["**/*.webp"],
                    },
                },
            ],
        }),
        new WebpackCssReplaceWebp(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
        hot: isDev
    },
    module: {
        rules: [
        
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
            },
        ],
    },
    optimization: optimization(),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"], // Remove "*" and add ".js" extension
    },
};
