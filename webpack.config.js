var webpack = require("webpack");
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        firebase: './src/firebase.js',
        include: './src/include.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'js')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    watch: true
}
