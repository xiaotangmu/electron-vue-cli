**最佳**：

使用npm 报错，使用cnpm安装

参考https://www.cnblogs.com/binglicheng/p/12046060.html

**cnpm**

```
 $ npm install -g cnpm --registry=https://registry.npm.taobao.org 
```

**通过cnpm安装Electron**

```
cnpm install -g electron
```

**安装Electron-vue**

```
# 如果你没有vue-cli的话需要全局安装
npm install -g vue-cli
# 然后使用vue-cli来安装electron-vue的模板
vue init simulatedgreg/electron-vue my-project

# 安装依赖
cd my-project
cnpm install
# 进入开发模式
cnpm dev run
```





参考：https://mp.weixin.qq.com/s/DWtuYL5yTkoEC0WtcPLP7w

/ https://www.xttblog.com/?p=5017

```
安装 Electron
npm install -g electron
或者
cnpm install -g electron

使用 vue-cli 脚手架工具来创建项目
vue init simulatedgreg/electron-vue

配置见参考
然后，使用 npm install 命令安装项目所需要的依赖包，安装完成之后，可以使用 npm run dev 或 npm run build 命令运行 electron-vue 模版应用程序

```



源码目录结构

```
Electron
├──atom - Electron 的源代码
|  ├── app - 系统入口代码
|  ├── browser - 包含了主窗口、UI 和其他所有与主进程有关的东西，它会告诉渲染进程如何管理页面
|  |   ├── lib - 主进程初始化代码中 JavaScript 部分的代码
|  |   ├── ui - 不同平台上 UI 部分的实现
|  |   |   ├── cocoa - Cocoa 部分的源代码
|  |   |   ├── gtk - GTK+ 部分的源代码
|  |   |   └── win - Windows GUI 部分的源代码
|  |   ├── default_app - 在没有指定 app 的情况下 Electron 启动时默认显示的页面
|  |   ├── api - 主进程 API 的实现
|  |   |   └── lib - API 实现中 Javascript 部分的代码
|  |   ├── net - 网络相关的代码
|  |   ├── mac - 与 Mac 有关的 Objective-C 代码
|  |   └── resources - 图标，平台相关的文件等
|  ├── renderer - 运行在渲染进程中的代码
|  |   ├── lib - 渲染进程初始化代码中 JavaScript 部分的代码
|  |   └── api - 渲染进程 API 的实现
|  |       └── lib - API 实现中 Javascript 部分的代码
|  └── common - 同时被主进程和渲染进程用到的代码，包括了一些用来将 node 的事件循环
|      |        整合到 Chromium 的事件循环中时用到的工具函数和代码
|      ├── lib - 同时被主进程和渲染进程使用到的 Javascript 初始化代码
|      └── api - 同时被主进程和渲染进程使用到的 API 的实现以及 Electron 内置模块的基础设施
|          └── lib - API 实现中 Javascript 部分的代码
├── chromium_src - 从 Chromium 项目中拷贝来的代码
├── docs - 英语版本的文档
├── docs-translations - 各种语言版本的文档翻译
├── spec - 自动化测试
├── atom.gyp - Electron 的构建规则
└── common.gypi - 为诸如 `node` 和 `breakpad` 等其他组件准备的编译设置和构建规则
```

Electron 应用程序分成三个基础模块：主进程、进程间通信和渲染进程。

**1、主进程**

Electron 运行 package.json 的 main 脚本（background.js）的进程被称为主进程。在主进程中运行的脚本通过创建web页面来展示用户界面。一个 Electron 应用总是有且只有一个主进程。

**2、渲染进程**

由于 Electron 使用了 Chromium 来展示 Web 页面，所以 Chromium 的多进程架构也被使用到。每个 Electron 中的 Web 页面运行在它自己的渲染进程中。在普通的浏览器中，Web 页面通常在一个沙盒环境中运行，不被允许去接触原生的资源。然而 Electron 允许用户在 Node.js 的 API 支持下可以在页面中和操作系统进行一些底层交互。

**3、主进程与渲染进程通信**

主进程使用 BrowserWindow 实例创建页面。每个 BrowserWindow 实例都在自己的渲染进程里运行页面。当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。主进程管理所有的 Web 页面和它们对应的渲染进程。每个渲染进程都是独立的，它只关心它所运行的 Web 页面。

**src 目录结构**

在 Electron 目录中，src 会包含 main 和 renderer 两个目录。

**main 目录**

main 目录会包含 index.js 和 index.dev.js 两个文件。

- index.js：应用程序的主文件，electron 也从这里启动的，它也被用作 webpack 产品构建的入口文件，所有的 main 进程工作都应该从这里开始。
- index.dev.js：此文件专门用于开发阶段，因为它会安装 electron-debug 和 vue-devtools。一般不需要修改此文件，但它可以扩展开发的需求。

**渲染进程**

renderer 是渲染进程目录，平时项目开发源码的存放目录，包含 assets、components、router、store、App.vue 和 main.js。

assets：assets 下的文件如（js、css）都会在 dist 文件夹下面的项目目录分别合并到一个文件里面去。components：此文件用于存放应用开发的组件，可以是自定义的组件。router：如果你了解 vue-router，那么 Electron 项目的路由的使用方式和 vue-router 的使用方式类似。modules：electron-vue 利用 vuex 的模块结构创建多个数据存储，并保存在 src/renderer/store/modules 中。







其他：

electron 环境搭建 -- vcode 开发



**第一种创建方法：**

1 安装 （全局安装 只需要安装一次）

```
npm install -g electron  /  cnpm install -g electron
```

2 创建项目 通过git 克隆项目 

1) cd 到项目 -- 自己创建一个空文件



2）执行

```
# 克隆实例项目的仓库
git clone https://github.com/electron/electron-quick-stark
# 进入这个仓库
cd electron-quick-start

# 安装依赖并运行
npm install && npm start
```



**第二种创建方法：**

利用 electron-forge 搭建 -- electron-forge 相当于 electron 的一个脚手架，可以让我们更方便的创建、运行、打包electron 项目。

1 全局安装 electron-forge （只需要一次）

```
npm install -g electron-forge
```

2 创建项目 

```
electron-forge init 项目名
```

3 进入项目 cd



4 运行项目

```
npm start
```



**第三种创建方法**

1 新建一个文件夹（文件夹不能是中文）

2 新建一个 index.html 和一个 main.js

main.js

```js
// 主进程

//引入electron 模块
var electron = require('elecron');

//创建electron 引用
var app = electron.app;

//创建electron BrowserWindow 的引用
var BrowserWindow = eelctron.BrowserWindow;

//变量 保存对应用窗口的引用

var mainWindow = null;//名字可以修改

app.on('ready', function(){
  
  //创建BrowserWindow 的实例，赋值给 mainWindow 打开窗口
  //软件默认打开的宽度高度 {width:400, height:400}
  mianWindow = new BrowserWindow({width:800, height:600});
  
  mainWindow.loadFile('index.html'); /*把index.html 加载到窗口里面*/
  //或者
  //mainWindow.loadURL(path.join('file:', _dirname, 'index.html'));
  
  //开启渲染进程中的调式模式
  mainWindow.webContents.openDevTools();
  
  mainWindow.on('closed', ()=>{
    mainWindow = null;
  })
})
```



3 npm init  生成一个 package.json 配置项目的元数据

​	注意的是 package.json 里面配置的 main 必须是入口 js （主进程）

4 运行命令

```
electron .
```









**主进程与渲染进程**

主进程只有一个，渲染进程可以有多个，如另外调用打开的窗口



js

```js

//获取本地文件

var fs = require('fs');


window.onload = function(){

	var btn = this.document.querySelector('#btn');

	var t = this.document.querySelector('#textarea');


	btn.onclick = function(){

		/*

		1 获取本地文件 -- package.json

		2 赋值给textarea

		*/

		fs.readFile('package.json', (err, data))=> {

			textarea.innerHTML = data;

		}
	}
}
```





拖动显示文本到特定区域

h5 拖放api

js

```js
// html5 拖放api：http://www.runoob.com/jsref/event-ondragover.html

/*
释放目标时触发的事件：
ondragenter - 当被鼠标拖动的对象进入其容器范围内触发此事件
ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
ondragleave - 当被鼠标拖动的对象离开其容器内时触发此事件
ondrop - 在一个拖动过程中，释放鼠标时触发此事件

*/
var fs = require('fs');

var content = document.querySelector('#content');

content.ondragenter = content.ondragover = content.ondragleave= function(){
  return false;//阻止默认行为
  
}

content.ondrop = function(e){
  
  //阻止默认行为
  e.preventDefault();
  
  var path= e.dataTransfer.files[0].path;
  
  fs.readFile(path, 'utf-8', (err,data) => {
    if(err){
      console.log(err);
      return false;
    }
    
    content.innerHTML = data;
  })
}
```







querySelector 与 getElementBy 的区别

```
获取元素DOM对象有很多种方法，以前一直在用getElementById和getElementsByTagName等，现在对这些方法和querySelector做一个总结．
常见的获取元素的方法有3种，分别是通过元素ID、通过标签名字和通过类名字来获取。
DOM提供了一个名为getElementById的方法，这个方法将返回一个与之对应id属性的节点对象，它是document对象特有的函数，只能通过其来调用该方法，使用方法如下:document.getElementById('idName');

getElementsByTagName方法返回一个对象数组（准确的说是HTMLCollection集合）,返回元素的顺序是它们在文档中的顺序,传递给 getElementsByTagName() 方法的字符串可以不区分大小写,使用方法如下:document.getElementsByTagName(tagName);

DOM还提供了getElementsByClassName方法来获取指定class名的元素,该方法返回文档中所有指定类名的元素集合，作为 NodeList 对象。NodeList 对象代表一个有顺序的节点列表。NodeList 对象 我们可通过节点列表中的节点索引号来访问列表中的节点(索引号由0开始), 所以有时使用时要指定下标，使用方法如下:document.getElementsByClassName('className');

querySelector() 方法返回匹配指定 CSS 选择器元素的第一个子元素 。 该方法只返回匹配指定选择器的第一个元素。如果要返回所有匹配元素，需要使用 querySelectorAll() 方法替代．

由于querySelector是按css规范来实现的，所以它传入的字符串中第一个字符不能是数字.

原文链接：https://blog.csdn.net/levinhax/article/details/71274456
```



**querySelector() 方法返回匹配指定 CSS 选择器元素的第一个子元素 。**