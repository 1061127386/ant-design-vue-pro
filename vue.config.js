module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 这里的选项会传递到 less
        javascriptEnabled:true // 解决 less 版本太高报错的问题
      },
    },
  },
};
