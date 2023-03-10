const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem,};
    localStorage.setItem(todoItem, JSON.stringify(obj)); // 로컬스토리지 - MDN 참고
    state.todoItems.push(obj); // 첫번째 인자인 state로 접근해야한다.
};

const removeOneItem = (state, payload) => {
    console.log(state.todoItems[payload.index])
    localStorage.removeItem(payload.todoItem.item); // key, value가 동일할 때만
    state.todoItems.splice(payload.index, 1); // slice와 혼동 주의
};
const toggleOneItem = (state, payload) => {
    console.log(state.todoItems[payload.index]);
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed

    // localStorage 는 삭제/추가로 업데이트해야 함.
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }