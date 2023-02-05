<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <customModal :show="showModal" @close="showModal = false">
      <template #header> <!-- slot setting -->
        <h3>경고!
          <span @click="showModal=false"><i class="closeModalBtn fa-solid fa-circle-xmark"></i></span>
        </h3>

      </template>
      <template #body> <!-- slot setting -->
        <div>무언가를 입력하세요.</div>
      </template>
      <template #footer> <!-- slot setting -->
        <strong>copy right pms</strong>
      </template>
    </customModal>
  </div>
</template>

<script>
import Modal from './common/Modal'

export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem); // $emit은 이벤트 발생. -> addTodoItem이라는 이벤트를 하위 컴포넌트에서 상위 컴포넌트로 발생시켰다.
        this.clearInput();
        this.showModal = false;
      } else {
        this.showModal = true;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    'customModal': Modal,

  },
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
  .closeModalBtn{
    color: #42b983;
  }
</style>