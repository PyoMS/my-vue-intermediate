<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data: function () {
    return {
      newTodoItem: "",

    }
  },
  methods: {
    addTodo() {
      localStorage.setItem(this.newTodoItem, this.newTodoItem); // 로컬스토리지 - MDN 참고
      this.newTodoItem = '';
    },
  }
}
</script>

<style scoped>

</style>