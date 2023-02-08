import { createStore } from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

const storage = {
    fetch() {
        const arr = [];
        console.log('created');
        if( localStorage.length>0){
            for (let i = 0; i < localStorage.length; i++) {
                let parseItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
                arr.push(parseItem);
            }
        }
        return arr;
    },
}

const store = createStore({
    state () {
        return {
            todoItems: storage.fetch(),
        }
    },
    getters: getters,
    mutations: mutations,

})

export default store;
