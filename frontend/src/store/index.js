import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../firebaseConfig.js')

Vue.use(Vuex)

  fb.sensorsCollection.doc("LFhLKamoBVvD4kUCHDOi").onSnapshot(doc => {
    var sensorData = doc.data();
    console.log('Data: ', sensorData)
    sensorData["id"] = doc.id;
    store.commit("setSensorData", sensorData)
  });


  const state = {
    currentUser: null,
    sensorData: null,
  }

  const mutations = {
    setCurrentUser(state, val) {
      state.currentUser = val
    },
    setSensorData(state, val) {
      state.sensorData = val
    }
  }

  const actions = {

  }

  const modules ={
  }



const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules
})

export default store;