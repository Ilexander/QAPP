import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tables: [],
    };
  },
});


export {store}