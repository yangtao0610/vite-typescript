plugins
  - vite-plugin-checker
  - vite-plugin-compression
  - vite-plugin-dynamic-import
  - vite-plugin-cdn-import

基本概念
 - chunk --> 块：从入口文件到一系列依赖最终打包成的 js 文件叫做块

性能优化
  1. 打包分包策略
    - 把库文件单独打包（不会常规更新的文件），利用浏览器的缓存策略，减少访问
  2. gzip 压缩
    - vite-plugin-compression
  3. 动态导入
   - 一般用于路由
  4. cdn 加速
    - cdn: content delivery network 内容分发网络
    - 依赖的第三方可以写成 cdn 的形式，保证自己代码的小体积
    - vite-plugin-cdn-import

vite 处理跨域
  - 同源策略：同协议、同域名、同端口
  - 同源策略仅在浏览器发生，是浏览器的规则
  - 当 A 源：浏览器的网页 向 B 源：服务器地址（不满足同源策略）请求时，就会产生跨域
  - 跨域默认情况下会被浏览器拦截（请求阶段会放行，返回结果验证完会拦截）

  - 开发时：一般利用构建工具或者脚手架或者第三方库的 proxy 代理配置，或者自己搭一个开发服务器来解决跨域问题
  - 生产时：一般是交给后端去处理跨域
    - nginx: 代理服务 ng代理
    - 配置身份标记: Access-Control-Allow-Origin 可以配置哪些域可以访问
