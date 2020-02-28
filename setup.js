const child_process = require('child_process')
const cmds =[
    'npm install',
    'npm load',
    'composer install',
    'npm run prod',
]

cmds.forEach(function(cmd){
    child_process.execSync(cmd,{cwd:'.',stdio: 'inherit' },console.log)
})
