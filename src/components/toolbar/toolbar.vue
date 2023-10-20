<template>
  <div class="toolbar bg-slate-950 px-2 py-2 flex items-center justify-between">
    <span
      class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
      >QAPP</span
    >
    <div>
      <button
        @click="onHide"
        type="button"
        class="toolbar__button mr-2 py-1 px-2 inline-flex transition-all justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 text-xl text-gray-500 hover:text-gray-300 focus:ring-offset-gray-800"
      >
        <i class="ti ti-minus"></i>
      </button>
      <button
        @click="onMaximize"
        type="button"
        class="toolbar__button mr-2 py-1 px-2 inline-flex transition-all justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 text-xl text-gray-500 hover:text-gray-300 focus:ring-offset-gray-800"
      >
        <i class="ti ti-square"></i>
      </button>
      <button
        @click="onClose"
        id="closeBtn"
        type="button"
        class="toolbar__button py-1 px-2 inline-flex transition-all justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 text-xl text-gray-500 hover:text-gray-300 focus:ring-offset-gray-800"
      >
        <i class="ti ti-x"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClose() {
      window.electron.closeApp();
    },
    onMaximize() {
      window.electron.maximizeApp();
    },
    onHide() {
      window.electron.hideApp();
    },
  },
};
</script>
<style lang="scss">
.toolbar {
  width: 100%;
  background-color: #eee;

  &__button {
    outline: none !important;
  }
}
</style>
