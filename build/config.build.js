const { resolve, getComponentEntries } = require('./util')
const pub = require('./config.pub')
const GenStyle = require('./gen-component-style')


module.exports = {
    outputDir: resolve('../lib'),
    configureWebpack: {
        entry: {
            ...getComponentEntries('plugins'),
        },
        output: {
            filename: '[name]/index.js',
            libraryTarget: 'commonjs2', //定义暴露的方式
            // libraryExport: 'default',
            library: 'vue-plugins-cc'
        },
        resolve: pub.resolve
    },
    css: {
        sourceMap: false,
        extract: {
            filename: '[name]/style.css'
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        config.plugins.delete('copy')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('html')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')

        config.plugin('genStyle')
            .use(GenStyle)

        config.devtool('')
        config.module
            .rule('fonts')
            .use('url-loader')
            .tap(option => {
                option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
                return option
            })

    }
}
