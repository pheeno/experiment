import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = message => {
      let constructor = Vue.extend(Toast)
      let toast = new constructor()
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
