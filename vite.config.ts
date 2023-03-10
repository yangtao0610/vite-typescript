import { defineConfig } from "vite";
import checker from 'vite-plugin-checker';
import path from 'path'
import viteCompression from 'vite-plugin-compression';
import viteCDNPlugin from 'vite-plugin-cdn-import'

export default defineConfig({
  base: './',
  build: {
    // 不压缩
    minify: false,
    rollupOptions: {
      // 多入口测试
      input: {
        main: path.resolve(__dirname, './index.html'),
        production: path.resolve(__dirname, './src/production.html')
      },
      output: {
        manualChunks: (id: string) => {
          console.log('id ', id)
          // lodash 举例
          // 多入口时，vite 内部其实已经做了优化
          // 比如 两个都引入 lodash 时，vite 会自动把 lodash 提取为单独的文件
          // 而不是两个包都打包代码
          // 所以下面的代码不加也是一样的
          // if (id.includes('node_modules')) {
          //   return "vendor"
          // }
        }
      }
    }
  },
  plugins: [
    checker({ typescript: true }),
    viteCompression(),
    viteCDNPlugin({
      modules: [{
        name: 'lodash',
        var: '_',
        path: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
      }]
    })
  ],
  server: { // 在开发服务器中的配置，开发服务器会重新发送请求
    proxy: {
      '/api': { // 遇到 /api 开头的请求时，都将其代理到 target 属性对应的域中去
        target: 'https://www.360.com',
        changeOrigin: true,
        ws: true,
        // 是否要重写 api 路径
        // 此处替换为空串，请求（发送给服务器的）中就不包含 api 了
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})