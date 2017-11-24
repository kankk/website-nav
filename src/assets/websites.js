// 团队组织
const team = {
  id: 'team',
  group: '团队组织',
  links: [{
    title: 'AlloyTeam',
    link: 'http://www.alloyteam.com/',
    description: '腾讯Web前端团队',
    icon: './static/icons/alloyteam.jpg',
  }, {
    title: 'FED',
    link: 'http://taobaofed.org/',
    description: '内容涵盖Web和Node',
    icon: './static/icons/fed.png'
  }, {
    title: '奇舞团',
    link: 'https://75team.com/',
    description: '奇虎360前端开发团队',
    icon: './static/icons/75team.png',
  }, {
    title: '凹凸实验室',
    link: 'https://aotu.io/',
    description: '京东用户体验设计部',
    icon: './static/icons/aotu.png',
  }]
};

// 社区
const community = {
  id: 'community',
  group: '社区',
  links: [{
    title: '掘金',
    link: 'https://juejin.im/',
    description: '中文技术社区',
    icon: './static/icons/gold.png',
  }, {
    title: 'SegmentFault',
    link: 'https://segmentfault.com/',
    description: '中文IT技术问答网站',
    icon: './static/icons/segmentfault.png',
  }, {
    title: 'GitHub',
    link: 'https://github.com/',
    description: '开源/私有软件项目的Git托管平台',
    icon: './static/icons/github.png',
  }, {
    title: 'React China',
    link: 'http://react-china.org/',
    description: '',
    icon: './static/icons/reactchina.png',
  }]
};

// 前端门户
const portal = {
  id: 'portal',
  group: '前端门户',
  links: [{
    title: 'W3cplus',
    link: 'http://www.w3cplus.com/',
    description: '推广前端行业技术',
    icon: './static/icons/w3cplus.png'
  }, {
    title: 'Awesomes.cn',
    link: 'https://www.awesomes.cn/',
    description: '国人维护的前端资源库, 深度对接到Github, 分类和展现清晰',
    icon: './static/icons/awesomes.png'
  }]
};

// 框架类库
const frame = {
  id: 'frame',
  group: '框架类库',
  links: [{
    title: 'Vue (中文)',
    link: 'https://cn.vuejs.org/',
    description: '构建数据驱动的web界面的渐进式框架',
    icon: './static/icons/vue.png'
  }, {
    title: 'React (英文)',
    link: 'https://facebook.github.io/react/',
    description: '用于构建用户界面的JavaScript库',
    icon: './static/icons/react.png'
  }, {
    title: 'React (中文)',
    link: 'http://www.react-cn.com/',
    description: '用于构建用户界面的JavaScript库',
    icon: './static/icons/react.png'
  }, {
    title: 'React-Native',
    link: 'https://reactnative.cn/',
    description: '使用React构建原生app的框架',
    icon: './static/icons/react.png'
  }, {
    title: 'Element',
    link: 'http://element.eleme.io/2.0/#/zh-CN/',
    description: '饿了么前端团队出品的基于Vue的UI组件库',
    icon: ''
  }, {
    title: 'Ant Design',
    link: 'https://ant.design/index-cn',
    description: '蚂蚁金服前端团队出品的基于React的UI组件库',
    icon: ''
  }]
};

// 文档
const doc = {
  id: 'doc',
  group: '文档',
  links: [{
    title: 'ECMAScript6 教程',
    link: 'http://es6.ruanyifeng.com/',
    description: '阮一峰出品老师的ECMAScript6教程',
    icon: './static/icons/ecmascript6.png'
  }, {
    title: 'JavaScript 标准参考教程',
    link: 'http://javascript.ruanyifeng.com/',
    description: '阮一峰出品老师的JavaScript教程',
    icon: './static/icons/javascript.png'
  }, {
    title: 'MDN web doc',
    link: 'https://developer.mozilla.org/zh-CN/',
    description: '',
    icon: './static/icons/mdn.png'
  }, {
    title: 'Vue',
    link: 'https://cn.vuejs.org/v2/guide/',
    description: '官网指南',
    icon: './static/icons/vue.png'
  }, {
    title: 'Vue 风格指南',
    link: 'https://cn.vuejs.org/v2/style-guide/',
    description: '官方代码风格指南',
    icon: './static/icons/vue.png'
  }, {
    title: 'vue-router',
    link: 'https://router.vuejs.org/zh-cn/',
    description: '',
    icon: './static/icons/vue.png'
  }, {
    title: 'Vuex',
    link: 'https://vuex.vuejs.org/zh-cn/',
    description: '',
    icon: './static/icons/vue.png'
  }, {
    title: 'react-router',
    link: 'http://www.uprogrammer.cn/react-router-cn/index.html',
    description: '',
    icon: './static/icons/react.png'
  }, {
    title: 'Redux',
    link: 'http://cn.redux.js.org/index.html',
    description: '',
    icon: './static/icons/redux.png'
  }, {
    title: 'jQuery 中文文档(非官方)',
    link: 'http://jquery.cuishifeng.cn/',
    description: '',
    icon: './static/icons/jquery.png'
  }, {
    title: 'TypeScript指南(非官方)',
    link: 'https://www.gitbook.com/book/zhongsp/typescript-handbook/details/',
    description: '',
    icon: ''
  }]
};

// 教程
const tutorial = {
  id: 'tutorial',
  group: 'tutorial',
  links: [{
    title: 'ES^ Katas',
    link: 'http://es6katas.org/',
    description: '通过单元测试的方式学习ES6, 强烈推荐',
    icon: ''
  }, {
    title: 'React-Router Training',
    link: 'https://reacttraining.com/react-router/',
    description: '英文文档, 学习RR4的优秀文档',
    icon: './static/icons/react-router-train.png'
  }]
}

// CSS
const css = {
  id: 'css',
  group: 'CSS',
  links: [{
    title: 'SASS',
    link: 'http://sass.bootcss.com/',
    description: 'CSS扩展语言',
    icon: './static/icons/sass.png'
  }, {
    title: 'Less',
    link: 'http://less.bootcss.com/',
    description: '将css赋予了动态语言特性的动态式语言',
    icon: './static/icons/less.png'
  }]
};

// Node.js
const node = {
  id: 'node',
  group: 'Node',
  links: [{
    title: 'Express',
    link: 'http://www.expressjs.com.cn/',
    description: '基于Node.js的Web开发框架',
    icon: ''
  }]
};

// 前端工具
const feTool = {
  id: 'feTool',
  group: '前端工具',
  links: [{
    title: 'Webpack',
    link: 'https://doc.webpack-china.org/',
    description: '代码模块化构建打包工具',
    icon: './static/icons/webpack.png'
  }, {
    title: 'Babel',
    link: 'https://babeljs.io/',
    description: '使用最新的规范来编写js',
    icon: './static/icons/babel.png'
  }]
};

// 在线工具
const onlineTool = {
  id: 'onlineTool',
  group: '在线工具',
  links: [{
    title: 'Regexper',
    link: 'https://regexper.com/',
    description: '可视化正则表达式',
    icon: ''
  }, {
    title: 'CodePen',
    link: 'http://codepen.io/',
    description: '在线代码测试工具',
    icon: './static/icons/codepen.png'
  }]
};

// 大牛博客
const blog = {
  id: 'blog',
  group: '大牛博客',
  links: [{
    title: '张鑫旭',
    link: 'http://www.zhangxinxu.com/wordpress/',
    description: 'CSS, 阅文集团',
    icon: ''
  } ,{
    title: '阮一峰',
    link: 'http://www.ruanyifeng.com/blog/',
    description: '',
    icon: ''
  }]
};

// 设计
const design = {
  id: 'design',
  group: '设计相关',
  links: [{
    title: 'Iconfont',
    link: 'http://iconfont.cn/',
    description: '阿里巴巴矢量图标库',
    icon: ''
  }]
};

export default [
  team,
  community,
  portal,
  frame,
  doc,
  tutorial,
  css,
  node,
  feTool,
  onlineTool,
  blog,
  design
]
