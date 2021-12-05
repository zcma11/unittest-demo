import { mount } from '@vue/test-utils'
import ModifyPanel from '../../src/components/ModifyPanel'

describe('component ModifyPanel', () => {
  it('button click emit', async () => {
    const wrapper = mount(ModifyPanel, {
      propsData: {
        formItem: {
          id: 1,
          name: 'abc',
          email: 'foo@e.com',
          gender: '男',
          hobbies: ['弹琴', '读书', '插画']
        }
      }
    })

    const btns = wrapper.findAll('button')
    const cancelBtn = btns.at(0)
    const saveBtn = btns.at(1)
    cancelBtn.trigger('click')
    saveBtn.trigger('click')

    expect(wrapper.emitted().cancel).toBeTruthy()
    expect(wrapper.emitted().save).toBeTruthy()
  });
});