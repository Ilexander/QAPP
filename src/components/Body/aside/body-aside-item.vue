<template>
  <li>
    <div
      class="flex items-center justify-between rounded-lg transition-all cursor-pointer active:bg-gray-700 hover:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200"
    >
      <i
        class="text-2xl mr-3 text-gray-500"
        :class="'ti ' + iconByFiletype(file.type)"
      ></i>
      <div class="mr-auto">
        {{ formatFileName(file.name) }}
      </div>

      <template v-if="!file.dir">
        <div class="text-xs text-zinc-500 ml-auto mr-4">
          {{ formatFileSize(file.size) }}
        </div>
        <span
          class="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-medium bg-gray-300 text-gray-800"
          >{{ formatType(file.type) }}</span
        >
      </template>
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
    formatType(type) {
      if (type === "json") return "QA";

      return type;
    },
    formatFileName(name) {
      if (name.match(".json")) {
        return name.replaceAll(".json", ".qa");
      }

      return name;
    },
    iconByFiletype(type) {
      const tables = ["csv", "xls", "xlsx"];
      if (tables.includes(type)) return "ti-file-spreadsheet";
      if (type === "dir") return "ti-folder-filled";
      if (type === "json") return "ti-users-group";
    },
  },
};
</script>
<style lang="scss"></style>
