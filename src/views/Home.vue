<template>
  <div class="home container-fluid p-5">
    <div class="row rowTop">
      <rooms v-for="room in rooms" :roomData="room" :key="room._id" />
    </div>
  </div>
</template>

<script>
import Rooms from "../components/Room";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    rooms() {
      return this.$store.state.rooms;
    }
  },
  methods: {},
  components: {
    Rooms
  }
};
</script>


<style scoped>
.home {
  background-color: teal;
  margin: auto;
}

.rowTop {
  display: flex;
}
</style>