<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeItem="removeOneItem"
              v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem,};
      localStorage.setItem(todoItem, JSON.stringify(obj)); // 로컬스토리지 - MDN 참고
      this.todoItems.push(obj);
    },
    removeOneItem(item, index) {
      localStorage.removeItem(item.item); // key, value가 동일할 때만
      this.todoItems.splice(index, 1); // slice와 혼동 주의
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed

      // localStorage 는 삭제/추가로 업데이트해야 함.
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  created() {
    console.log('created');
    if( localStorage.length>0){
      for (let i = 0; i < localStorage.length; i++) {
        let parseItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.todoItems.push(parseItem);
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },

}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
}
</style>
