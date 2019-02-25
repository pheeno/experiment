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

import chai from 'chai'
const expect = chai.expect
// 单元测试
{
  const Constructor = Vue.extend(Button)
  let btn = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  btn.$mount('#test')
  let useElement = btn.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  btn.$el.remove()
  btn.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  let btn = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  btn.$mount()
  let useELement = btn.$el.querySelector('use')
  let href = useELement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  btn.$el.remove()
  btn.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  let btn = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  btn.$mount()
  let useELement = btn.$el.querySelector('use')
  let href = useELement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  btn.$el.remove()
  btn.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  let btn = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  btn.$mount(div)
  let svg = btn.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  btn.$el.remove()
  btn.$destroy()
}
