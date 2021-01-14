
// require('shelljs/global'); 全局执行的shelljs 

const shell = require("shelljs");  // 执行文件操作
const argv = require('yargs').argv; // yargs 处理参数
console.log('argv:', argv);

// 执行git提交命令
// shell.exec(`git pull`)

// 执行替换
// shell.sed('-i', /<version>.*<\/version>/, `<version>${repStr}<\/version>`, path);

// shell.exec('git add .')
// shell.exec(`git commit -m "${commit}"`)
// shell.exec(`git pull`)
// shell.exec('git push')

// shell.exec('git add .')
// shell.exec(`git commit -m "测试shell"`)
// shell.exec('git checkout master')
// shell.exec('git pull origin master')
// shell.exec(`git checkout -b master_feature_${new Date().getTime()}`)
// shell.exec('git checkout myblog')
// shell.exec('git pull origin myblog')

shell.exec('rm a.js')

