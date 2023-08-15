const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // Add rule for .gltf files
    config.module
      .rule('gltf')
      .test(/\.(gltf|glb)$/)
      .use('file-loader') // or 'url-loader'
      .loader('file-loader') // or 'url-loader'
      .tap(options => {
        // Modify options if needed
        return options;
      })
      .end();
  }
});
