const path=require('path');
const fs=require('fs');
const process=require('process');
const minimist=require('minimist');
const child_process = require('child_process')


const args=minimist(process.argv.slice(2));
const resourceDir=path.resolve(__dirname,'resources/src');

const d=fs.readdirSync(resourceDir).filter(function(name){
    return /^(commons|.*-app)$/.test(name);
}).map(function(name) {
    return new Promise(()=>{
        child_process.execSync(args['cmd'],{cwd:resourceDir+'/'+name,stdio: 'inherit' },console.log)
    })
})
