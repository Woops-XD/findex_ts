
// load mock in dev environment 
if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {

  // synchronously load 
  // In case called before loaded  
  console.log('[antd-pro] mock mounting')
  const Mock = require('mockjs2')
  require('./services/auth')

 
  Mock.setup({
    timeout: 800 // setter delay time
  })
  console.log('[antd-pro] mock mounted')
}
