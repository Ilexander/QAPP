<template>
  <div class="w-full">
    <Toolbar />
    <Body />
  </div>
</template>
<script>
import Body from "./components/body/body.vue";
import Toolbar from "./components/toolbar/toolbar.vue";

export default {
  data() {
    return {};
  },
  components: { Toolbar, Body },
};
</script>
<style lang="scss"></style>
