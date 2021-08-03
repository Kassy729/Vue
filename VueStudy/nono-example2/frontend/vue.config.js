module.exports = {
  devServer:{
    proxy:{
      '/api' :{
        target: 'http://localhost:3000/api',
        changeOrigin:true,
        pathRwrite:{
          '^/api':''
        }
      }
    }
  },

  outputDir: '../backend/public',

  transpileDependencies: [
    'vuetify'
  ]
}
