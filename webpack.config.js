const path = require('path');
const outputDir = path.resolve(__dirname, 'assets/js');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: path.resolve(__dirname, 'assets/js/app.js'),
    output: {
        path: outputDir,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            'Vue': 'vue/dist/vue.esm-bundler.js',
        }
    },
    mode: 'development'
};