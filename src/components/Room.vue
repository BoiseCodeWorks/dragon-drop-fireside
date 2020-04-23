<template>
  <div class="Rooms col-6">
    {{roomData.name}}
    <div class="roomItems mt-3">
      <items v-for="item in roomData.items" :itemData="item" :key="item.id" />
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
  methods: {},
  computed: {},
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