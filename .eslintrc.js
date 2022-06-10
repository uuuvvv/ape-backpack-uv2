module.exports = {
  // "root": true,
  // 环境
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 继承
  extends: ["eslint:recommended", "plugin:vue/essential"],
  // 解析器
  parser:'',
  // 指定解析器选项
  parserOptions: {
    ecmaVersion: 12, //指定使用的 ECMAScript 版本
    sourceType: "module", //设置为‘script’（默认）或 ‘module’（代码是ECMAScript模块）
    ecmaFeatures: {}, //额外的语言特性配置对象
  },
  // 插件
  plugins: ["vue"],
  // 处理器 可以由上边的插件进行提供。
  processor:'',
  // 规则
  rules: {},
};
