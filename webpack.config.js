const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        stats: { modules: false },
        context: __dirname,
        resolve: { extensions: [ '.js', '.ts' ] },
        entry: { 'main': './ClientApp/boot.ts' },
        module: {
            rules: [
                { test: /\.vue$/, include: /ClientApp/, loader: 'vue-loader', options: { esModule: false } },
                { test: /\.css$/, include: /ClientApp/, use: isDevBuild ? [ 'style-loader', 'css-loader' ] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
                { test: /\.s[c|a]ss$/, include: /ClientApp/, use: isDevBuild ? [ 'style-loader', 'css-loader', 'sass-loader' ] : ExtractTextPlugin.extract({ use: 'sass-loader?minimize' }) },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, include: /ClientApp/, use: 'url-loader?limit=25000' }
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
                }
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('site.css')
        ])
    }];
};
