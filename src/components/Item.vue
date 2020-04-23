<template>
  <div class="item d-flex" @dragstart="moveItem()">
    <img :src="itemData.url" alt="img" />
  </div>
</template>


<script>
export default {
  name: "item",
  props: ["itemData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    moveItem() {
      console.log("drag starting");
      this.$emit("dragstart");
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 5vh;
  width: 4vw;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}
</style>