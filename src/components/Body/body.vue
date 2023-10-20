<template>
  <div class="bg-gray-900 flex py-3">
    <BodyAside v-model:path="currentPath" />
    <BodyTable v-model:path="currentPath" />
  </div>
</template>
<script>
import BodyAside from "./aside/body-aside.vue";
import BodyTable from "./table/body-table.vue";

export default {
  data() {
    return {
      currentPath: [],
    };
  },
  components: { BodyAside, BodyTable },
};
</script>
<style lang="scss"></style>
