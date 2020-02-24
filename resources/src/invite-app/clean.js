const rm = require('rimraf');
const webpack=require('./webpack.config.js');
rm(webpack.output.path,()=>{});
