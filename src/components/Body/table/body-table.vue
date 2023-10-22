<template>
  <div class="flex flex-col px-4 body__table">
    <component is="qa-table"></component>
  </div>
</template>
<script>
import bodyMixin from "../utils/bodyMixin.js";
import { defineAsyncComponent } from "vue";
export default {
  mixins: [bodyMixin],
  components: {
    QaTable: defineAsyncComponent(() => import("./qa-table/qa-table.vue")),
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.body__table {
  padding-top: 10px;
  width: 100%;

  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>
