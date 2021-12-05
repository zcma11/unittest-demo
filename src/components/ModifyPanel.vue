<template>
  <div v-if="formItem.id">
    <div>用户名：<input type="text" v-model="formItem.name" /></div>
    <div>邮箱：<input type="text" v-model="formItem.email" /></div>
    <div>
      性别：
      <template v-for="item in gender">
        <input type="radio" :value="item" :key="item" v-model="formItem.gender" />{{item}}
      </template>
    </div>
    <div>
      爱好：
      <template v-for="hobby in hobbies">
        <input type="checkbox" :value="hobby" :key="hobby" v-model="formItem.hobbies" />{{hobby}}
      </template>
    </div>
    <div>
      <button @click="$emit('cancel')">取消</button>
      <button @click="$emit('save')">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModifyPanel',
  props: {
    formItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      hobbies: ['篮球', '读书', '插画', '编程', '弹琴'],
      gender: ['男', '女', '未知']
    }
  }
}
</script>

<style scoped></style>
