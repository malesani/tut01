import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);




export default new Vuex.Store({
  state: {
    pagina: "Home"
  },
  getters: {
  },
  mutations: {
    homeClick(state){
      console.log(state);
      //this.$parent.pagina = "Home"
    },
  },
  actions: {
  
    
  },
  modules: {

    
  }
})
