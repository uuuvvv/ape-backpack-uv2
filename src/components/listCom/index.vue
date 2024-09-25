<template>
  <div class="ul-wrapper">
    <div class="ul-content">
      <div class="ul-con-item">
        <listCard />
      </div>
    </div>
  </div>
</template>

<script>
import listCard from "./listCard.vue";
export default {
  name: "urlList",
  data() {
    return {};
  },
  components: { listCard },
};
</script>

<style lang="scss" scoped>
.ul-wrapper {
  height: 500px;
  margin: 0 auto;
  margin-bottom: 5px;
}
</style>
