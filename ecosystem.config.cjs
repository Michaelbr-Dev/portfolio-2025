const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

module.exports = {
  apps: [{
    name: 'Portfolio-V2',
    port: '3001',
    exec_mode: 'cluster',
    instances: 'max',
    script: './.output/server/index.mjs',
  }],
}
