<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
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
      if(this.newTodoItem !== ''){
        this.$emit('addTodoItem', this.newTodoItem); // $emit은 이벤트 발생. -> addTodoItem이라는 이벤트를 하위 컴포넌트에서 상위 컴포넌트로 발생시켰다.
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },

  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>