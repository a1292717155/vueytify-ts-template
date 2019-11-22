module.exports = {
  eslintIntegration: true, //开启 eslint 支持
  useTabs: false,
  singleQuote: true, //使用单引号
  semi: true, //结尾加分号
  tabWidth: 2, //水平缩进的空格数
  //单行输出最大行数
  printWidth: 160,
  alwaysParens: 'avoid',
  proseWrap: 'preserve', // 是否要换行
  overrides: [
    {
      files: 'package.json',
      options: {
        tabWidth: 2,
        useTabs: false
      }
    }
  ]
};
