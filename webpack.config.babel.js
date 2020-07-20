import webpack from 'webpack';
import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
        "main": path.resolve(__dirname, './src/entry.ts')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js"
    },
    devServer: {
        hot: true,
        inline: true,
        port: 7070,
        contentBase: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".js", ".ts"]
    },
}