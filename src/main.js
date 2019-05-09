// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'

import axios from 'axios'
Vue.prototype.$axios = axios;
//引入 jquery
import jquery from 'jquery'
Vue.prototype.$ = jquery

//弹出层框架
import Layer from 'vue-layer'
Vue.prototype.$layer = Layer(Vue);

//播放插件
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

// require('videojs-contrib-hls/dist/videojs-contrib-hls');
Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
