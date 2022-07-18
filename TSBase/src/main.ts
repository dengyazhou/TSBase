console.log("hello ts");
console.log("hello js");
console.log("嘿嘿");
console.log("呵呵");
console.log("123");
console.log("实时更新哦");
console.log("实时更新123");
console.log("呵呵呵");


//编译
//tsc main.ts //编译main.ts文件
//tsc main.ts -w //自动监视main.ts文件变化，然后编译出js
//tsc --init //生成tsconfig.json 文件 // 只有当有了tsconfig.json 执行tsc 才有意义
//有了tsconfig.json文件后，执行tsc，是对所有.ts文件编译，生成.js
//有了tsconfig.json文件后，执行tsc -w，是对所有.ts文件自动监视，然后编译出js

//webpack
//npm init -y //生成package.json 文件

//执行 cnpm i -D webpack webpack-cli typescript ts-loader 
//会在package.json中 添加
// "devDependencies": {
//     "ts-loader": "^9.3.1",
//     "typescript": "^4.7.4",
//     "webpack": "^5.73.0",
//     "webpack-cli": "^4.10.0"
// }
// 同时会自动创建一个node_modules的文件夹，和里面的文件

//新建一个webpack.config.js的文件

//执行 cnpm i -D html-webpack-plugin  //用于自动构建html文件  //npm run build
//会在package.json中 添加
// "devDependencies": {
//     "html-webpack-plugin": "^5.5.0",
// }

//执行 cnpm i -D webpack-dev-server     //用于自动打开html文件 // "start": "webpack serve --open" 不需要加chrome.exe  //npm start
//会在package.json中 添加
// "devDependencies": {
//     "webpack-dev-server": "^4.9.3"
// }

//执行 cnpm i -D clean-webpack-plugin  //用于先清空，然后创建
// 会在package.json中 添加
// "devDependencies": {
//     "clean-webpack-plugin": "^4.0.0",
// }