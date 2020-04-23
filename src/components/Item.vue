<template>
  <div class="item d-flex">
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
  methods: {},
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