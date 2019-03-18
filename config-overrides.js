const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addTslintLoader,
    addPostcssPlugins
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addTslintLoader(),
    addPostcssPlugins([require("postcss-px2rem")({
        remUnit: 37.5
    })]),
    // 配置路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src/assets/styles'),
        '@img': path.resolve(__dirname, 'src/assets/images')
    }),
    //按需加载antd
    // fixBabelImports('import', {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: 'css'
    // }),
    //按需加载antd-mobile
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
    })
)