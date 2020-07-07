const utils = require('./util');

// 本地调试以及打包组件都需要的配置信息
module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': utils.resolve('src'),
            'components': utils.resolve('components'),
            'demo-vuecli3-ui': utils.resolve('components/index.js'),
        }
    },
}
