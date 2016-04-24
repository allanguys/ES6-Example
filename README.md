# ES6-Example
这是一个用ES6重构的线上代码的实例。


构建工具：gulp+webpack


.
|____.babelrc
|____public
|____gulpfile.js
|____package.json
|____before //重构前文件夹
| |...
|____dist //webpack合并后
| |...
|____public //入口文件    
| |____index.html
|____src   //ES6
| |____browser.js
| |____index.html
| |____jquery-1.9.1.min.js
| |____main.js
| |____superArray.js
|____target  //babel编译后
| |____browser.js
| |____jquery-1.9.1.min.js
| |____main.js
| |____superArray.js
|____webpack.config.js

