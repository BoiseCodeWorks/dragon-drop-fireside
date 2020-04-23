<template>
  <div class="Rooms col-6" dropzone="zone" @drop.prevent="moveItem(roomData)" @dragover.prevent>
    {{roomData.name}}
    <div class="roomItems mt-3">
      <items
        draggable="true"
        v-for="(item,index) in roomData.items"
        :itemData="item"
        :key="item.id"
        @dragstart="reorderItem(item, index)"
      />
    </div>
  </div>
</template>


<script>
import Items from "../components/Item";
export default {
  name: "rooms",
  props: ["roomData"],
  data() {
    return {};
  },
  methods: {
    reorderItem(item, index) {
      console.log(item, index);
      this.$store.dispatch("setItemToMove", {
        item: item,
        oldRoom: this.roomData
      });
    },
    moveItem(roomData) {
      console.log(roomData);
      console.log("dropping Item");
      let moveData = {
        newRoomId: roomData.id,
        oldRoomId: this.tempData.oldRoom.id,
        itemToMove: this.tempData.item
      };
      this.$store.dispatch("moveItem", moveData);
    }
  },
  computed: {
    tempData() {
      return this.$store.state.tempItem;
    }
  },
  components: {
    Items
  }
};
</script>


<style scoped>
.Rooms {
  height: 30vh;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}

.roomItems {
  display: flex;
  justify-content: space-evenly;
}
</style>