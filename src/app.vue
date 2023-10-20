<template>
  <div class="w-full">
    <toolbar />
    <div class="bg-gray-900 flex py-3">
      <BodyAside />
      <BodyTable />
    </div>
  </div>
</template>
<script>
import BodyAside from "./components/Body/aside/body-aside.vue";
import BodyTable from "./components/Body/table/body-table.vue";
import toolbar from "./components/toolbar/toolbar.vue";

export default {
  data() {
    return {};
  },
  components: { toolbar, BodyTable, BodyAside },
};
</script>
<style lang="scss"></style>
