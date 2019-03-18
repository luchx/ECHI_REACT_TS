<h1 align="center">开发须知</h1>

## 技术栈及使用要求
> 1. 基于React + React-router-dom + redux + React-redux + React-redux-router + Typescript + Webpack4构建的企业级应用项目;
> 2. 开发时请确保你已了解或掌握以上技术要求,然后你就可以愉快的玩耍了;

## 工程目录结构
```bash
src：项目源码。开发的时候代码写在这里。
 |--assets # 项目静态文件
    |--images # 图片
    |--style # css样式
 |--router # 项目路由
 |--views # 项目应用页面，根据应用需要，还可以有子页面，各子页面目录结构和顶级子页面类似
    |--App # 主视图
    |--Exception # 错误页面
    |--Login # 登录页面
 |--index.tsx # 项目入口文件

 ```

## 使用

### 使用命令行
```bash
$ git clone git@github.com:Echi1993/react-ts-client.git
$ cd react-ts-client
$ yarn install
$ yarn start         # 访问 http://localhost:3000
$ yarn build         # Compiles and minifies for production
```

## 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions