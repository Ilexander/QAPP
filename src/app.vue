<template>
  <div class="w-full">
    <Toolbar />
    <Body />
  </div>
</template>
<script>
import Body from "./components/Body/body.vue";
import Toolbar from "./components/toolbar/toolbar.vue";

export default {
  data() {
    return {};
  },
  components: { Body, Toolbar },
};
</script>
<style lang="scss"></style>
