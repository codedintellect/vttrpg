var webpack = require("webpack");
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        firebase: './src/firebase.js'
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
