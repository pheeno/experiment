const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在', () => {
    expect('Input').to.exist
  }) 
})