<template>
  <div>
    <ul>
      <li class="shadow" v-for="(item, index) in todoItems" v-bind:key="item">
        {{item}}
        <span class="removeBtn" v-on:click="removeTodo(item, index)">
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
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo(item, index) {
      console.log(item);
      console.log(index);
      localStorage.removeItem(item); // key, value가 동일할 때만
      this.todoItems.splice(index, 1); // slice와 혼동 주의
    }
  },


}
</script>

<style>
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