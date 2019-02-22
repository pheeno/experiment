import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
  el: '#app'
})
// 单元测试
{
  const Constructor = Vue.extend(Button)
  let btn = new Constructor({
    propsData:{
      icon:'settings'
    }
  })
  btn.$mount('#test')
}
