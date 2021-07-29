import Vue from 'vue'
import Apps from './Apps.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Apps),
}).$mount('#app')
