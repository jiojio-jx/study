/**
 * 非eject方式暴露webpack配置
 * 使用customize-cra自定义webpack配置
 */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); //分析插件，打包后在build/static/report.html中展示各模块所占的大小
const webpack = require('webpack');

const path = require('path');

const { override, addWebpackAlias, addLessLoader, fixBabelImports, addWebpackPlugin } = require('customize-cra');

const resolve = dir => path.join(__dirname, dir);

const paths = require('react-scripts/config/paths');
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');

module.exports = override(
  // less loader
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader(),
  /* 别名设置 */
  addWebpackAlias({
    '@/': resolve('src'),
    '@/components': resolve('./src/components'),
    '@/utils': resolve('./src/utils'),
    '@/pages': resolve('./src/pages'),
    '@/router': resolve('./src/router'),
    '@/store': resolve('./src/store'),
  })
  // addWebpackPlugin(
  //   new BundleAnalyzerPlugin({
  //     analyzerMode: 'static' //输出静态报告文件report.html，而不是启动一个web服务
  //   })
  // )
);
