<template>
  <div>
    {{ count }}
    {{ msg }}
    {{ word }}
    <button @click="add">click</button>
    <input type="text" v-model="word" />
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        count: 1,
        word: 'fff'
      }
    },
    methods: {
      add() {
        this.count++
      }
    },
  }
</script>

<style scoped>

</style>