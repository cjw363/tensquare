module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '十次方',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    { src:'~plugins/element-ui.js' ,ssr: false},//我在nuxt.config.js中的plugins中先引用的瀑布流，再引用的element，瀑布流是基于element，所以要先引用element
    { src:'~plugins/vue-infinite-scroll.js' ,ssr: false},
    { src: '~plugins/nuxt-quill-plugin.js', ssr: false }
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
