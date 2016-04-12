var path = require('path');
module.exports = {
    entry: './src/PummeloWeb.js',
    output: {
        libraryTarget: 'var',
        library: 'PummeloWeb',
        path: path.resolve(__dirname, 'build/js'),
        publicPath: '/build/js',
        filename: 'pumelo.web.js'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        jquery: 'jQuery'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components|build)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
