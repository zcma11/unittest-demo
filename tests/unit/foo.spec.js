import Foo from '../../src/components/Foo.vue'
import { mount } from '@vue/test-utils'

describe('foo', () => {
  it('click button', async () => {
    const wrapper = mount(Foo, {
      propsData: {
        msg: ''
      }
    })

    wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('2')
  })

  it('input', async () => {
    const wrapper = mount(Foo, {
      propsData: {
        msg: 'hello'
      }
    })

    expect(wrapper.text()).toContain('hello')
    // wrapper.find('input').setValue('mm')
    const input = wrapper.find('input')
    input.element.value = 'mm'
    input.trigger('input')
    
    
    await wrapper.vm.$nextTick()
    // console.log(expect(wrapper.find('div')).toBe(true))
    expect(wrapper.text()).toContain('mm')
  })
})
