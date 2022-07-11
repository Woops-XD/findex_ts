import { shallowMount,mount} from '@vue/test-utils'
import Login from '@/views/Login.vue'
// unit test 
describe('Login.vue', () => {
  it('renders correct login', () => {
    const msg = 'Login'
    const wrapper = mount(Login, {
      props: {}
    })
    expect(wrapper.text()).toContain(msg)
  }),
  it('test initial user form value ', () => {
 
    const wrapper = mount(Login, {
      props: {}
    })

    expect(wrapper.vm.formState).toEqual({
      username: '',
       password: '',
    })
  })

  it('test input   ', async () => {
    const wrapper = mount(Login)
    const nameInput = wrapper.find('#name')
    
     // @ts-ignore
    nameInput.element.value = "val"
    await nameInput.trigger('input')

    const passInput = wrapper.find('#password')

      // @ts-ignore
    passInput.element.value = "val"
    await passInput.trigger('input')
  // @ts-ignore
    expect(nameInput.element.value).toBe('val')
     // @ts-ignore
    expect(passInput.element.value).toBe('val')
 
  })
})


