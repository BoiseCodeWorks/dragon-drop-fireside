import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [
      {
        id: 0, name: "Moving Truck", items: [
          { id: 1, name: "bed", url: "../assets/bed.png" },
          { id: 2, name: "tv", url: "../assets/tv.png" },
          { id: 3, name: "toilet", url: "../assets/toilet.png" },
          { id: 4, name: "dishwasher", url: "../assets/dishwasher.png" },
          { id: 5, name: "fan", url: "../assets/fan.png" },
          { id: 6, name: "fridge", url: "../assets/fridge.png" },
          { id: 7, name: "lamp", url: "../assets/lamp.png" },
          { id: 8, name: "microwave", url: "../assets/microwave.png" },
          { id: 9, name: "toaster", url: "../assets/toaster.png" },
          { id: 10, name: "washingmachine", url: "../assets/washing-machine.png" },
        ]
      },
      { id: 1, name: "Bedroom", items: [] },
      { id: 2, name: "Living Room", items: [] },
      { id: 3, name: "Kitchen", items: [] },
      { id: 4, name: "Bathroom", items: [] },
      { id: 5, name: "Garbage", items: [] }
    ],
    tempItem: {}
  },
  mutations: {
    setItemToMove(state, itemData) {
      state.tempItem = itemData
    },
    removeFromRoom(state, payload) {
      let room = state.rooms.find(r => r.id == payload.oldRoomId)
      room.items = room.items.filter(i => i.id != payload.itemToMove.id)
    },
    addToRoom(state, payload) {
      let room = state.rooms.find(r => r.id == payload.newRoomId)
      room.items.push(payload.itemToMove)
    }
  },
  actions: {
    setItemToMove({ commit, dispatch }, itemData) {
      commit("setItemToMove", itemData)
    },
    moveItem({ commit, dispatch }, itemData) {
      commit("removeFromRoom", itemData)
      commit("addToRoom", itemData)
    }
  },
  modules: {
  }
})
