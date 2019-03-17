const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    // 配置路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src/assets/styles'),
        '@img': path.resolve(__dirname, 'src/assets/images')
    }),
    //按需加载antd
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
)