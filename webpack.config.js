module.exports = {
    entry: "./wuhao",
    output: {
        path: __dirname,
        filename: ''
    },
    module: {
        loaders: [{
            test: /.css$/,
            loader: "style-loader!css-loader"
        }]
    }
}