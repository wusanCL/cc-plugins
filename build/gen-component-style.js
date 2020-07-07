// 生成style文件夹
const fs = require('fs-extra');
const CWD = process.cwd();
const path = require('path')
const pluginsPath = path.join(CWD,'lib')


async function compileDir(dir) {
    const files = fs.readdirSync(dir);
    await Promise.all(files.map(filename => {
        const filePath = path.join(dir, filename);
        if (isDir(filePath)) {
            return createStyle(filePath)
        }
    }));
}

function isDir(path){
    return fs.lstatSync(path).isDirectory();
}

function createStyle(filePath){
    let content = 'import "../style.css"'
    return fs.outputFileSync(path.join(filePath,'style/index.js'),content)  
}


function GenComponentStyle(){}

GenComponentStyle.prototype.apply = function(compiler){
    //这边的这个插件名是否会有冲突问题
    compiler.hooks.done.tap('~',()=>{
        compileDir(pluginsPath)
    })
}

module.exports = GenComponentStyle