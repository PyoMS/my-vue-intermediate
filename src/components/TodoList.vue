<template>
  <div>
    <ul>
      <li class="shadow" v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem)">
          <i class="fa-solid fa-square-check"></i>
        </span>

        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoItems: [],

    };
  },
  created() {
    // console.log('created');
    if( localStorage.length>0){
      for (let i = 0; i < localStorage.length; i++) {
        let parseItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.todoItems.push(parseItem);
      }
    }
  },
  methods: {
    removeTodo(item, index) {
      console.log(item);
      console.log(index);
      localStorage.removeItem(item.item); // key, value가 동일할 때만
      this.todoItems.splice(index, 1); // slice와 혼동 주의
    },
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      // localStorage 는 삭제/추가로 업데이트해야 함.
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },

  },


}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

</style>