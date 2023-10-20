<template>
  <li>
    <div
      class="flex items-center justify-between rounded-lg transition-all cursor-pointer active:bg-gray-700 hover:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200"
    >
      <i
        class="text-2xl mr-3 text-gray-500"
        :class="'ti ' + iconByFiletype(file.type)"
      ></i>
      {{ file.name }}

      <div class="text-xs text-zinc-500 ml-auto mr-4">
        {{ formatFileSize(file.size) }}
      </div>
      <span
        class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-medium bg-gray-300 text-gray-800"
        >{{ file.type }}</span
      >
    </div>
  </li>
</template>
<script>
export default {
  props: {
    file: { type: Object, default: () => {} },
  },
  data() {
    return {};
  },
  methods: {
    formatFileSize(size) {
      return (size / 1024 / 1024).toFixed(3) + " MB";
    },
    iconByFiletype(type) {
      const tables = ["csv", "xls", "xlsx"];
      if (tables.includes(type)) return "ti-file-spreadsheet";
    },
  },
};
</script>
<style lang="scss"></style>
