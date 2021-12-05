<template>
  <div id="app">
    <UserForm @onremove="remove" @onmodify="toModify" :form-data="formData"></UserForm>
    <ModifyPanel @cancel="cancel" @save="save" :form-item="copy"></ModifyPanel>
  </div>
</template>

<script>
import UserForm from './components/UserForm'
import ModifyPanel from './components/ModifyPanel'
export default {
  name: "App",
  components: {
    UserForm,
    ModifyPanel
  },
  data() {
    return {
      current: undefined,
      copy: {},
      formData: [
        {
          id: 1,
          name: 'abc',
          email: 'foo@e.com',
          gender: '男',
          hobbies: ['弹琴', '读书', '插画']
        },
        {
          id: 2,
          name: 'kok',
          email: 'bar@e.com',
          gender: '女',
          hobbies: ['插画']
        },
        {
          id: 3,
          name: 'pop',
          email: 'hhh@e.com',
          gender: '男',
          hobbies: ['篮球', '读书']
        }
      ]
    }
  },
  methods: {
    cancel() {
      this.current = undefined
      this.copy = {}
    },
    save() {
      this.formData.splice(this.current, 1, this.copy)
      this.cancel()
    },
    remove(index) {
      this.formData.splice(index, 1)
    },
    toModify(index) {
      this.copy = JSON.parse(JSON.stringify(this.formData[index]))
      this.current = index
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
