<template>
  <table>
    <tr>
      <th>id</th>
      <th>用户名</th>
      <th>邮箱</th>
      <th>性别</th>
      <th>爱好</th>
      <th>操作</th>
    </tr>
    <tr v-for="(item, index) in formData" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.gender}}</td>
      <td>{{ format(item.hobbies) }}</td>
      <td>
        <button @click="$emit('onremove', index)">delete</button>
        <button @click="$emit('onmodify', index)">修改</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    formData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      head: ['id', '用户名', '邮箱', '性别', '爱好', '操作']
    }
  },
  methods: {
    format(v) {
      return v.join('|')
    }
  },
}
</script>

<style scoped></style>
