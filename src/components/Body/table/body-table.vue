<template>
  <div class="flex flex-col px-4 body__table">
    <component
      v-if="path.length"
      is="qa-table"
      :path="path"
      @tableData="handleChange"
    ></component>
    <div v-else class="flex items-center flex-col justify-center m-auto">
      <div class="w-10 h-10 bg-white flex items-center justify-center rounded-full text-black text-3xl mb-3"><i class="ti ti-arrow-left"></i></div>
      <div class="text-2xl text-gray-400">Choose the project from your list</div>
    </div>
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
  methods: {
    handleChange($event) {
      const data = JSON.stringify($event);
      window.electron.writeFile(this.allPath, data);
    },
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
