const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  ,lintOnSave:false
  ,pages:{
    index:{
      entry:'src/main.js',
      title:'棱镜视野_财经速递'
    }
  }
})
