import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayData:[],
    serveBackend:'http://localhost:8000',
    server: 'http://127.0.0.1:8000/api/productos'
  },
  mutations: {
    setProductos(state, payload){
      state.arrayData = payload;
    },
    createProducto(state, payload){
      state.arrayData.push(payload)
      
    },
    actualizarProducto(state, payload){
      state.arrayData = state.arrayData.map(item => item.id === payload.id ? payload : item)
      
      router.push('/')
    }
  },
  actions: {
    async setProductosApi({commit, state}){
      const res = await fetch(state.server)
      const data = await res.json();
      commit('setProductos', data.data);
      console.log(data.data)
    },
    async registrarProducto({commit, state}, producto){
      try {
        const res = await fetch(state.server,{
          method:'POST',
          body: producto
        });

        const dataDB = await res.json()
        commit('createProducto', dataDB.data)
        router.push('/')
      } catch (error) {
        console.log(error);
      }
       
    },
    async editarProducto({commit, state}, producto){
      try {
        
        const res = await fetch(state.server +'/'+producto.id,{
          method:'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(producto)
        });
        const dataDB = await res.json()
        commit('actualizarProducto',dataDB.data)
      } catch (error) {
        console.log(error);
      }

   
    },
    
  },
  modules: {
  }
})
