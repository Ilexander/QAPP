<template>
  <div class="body__controls flex items-center mb-3">
    <input
      :value="modelValue"
      @input="handleChange"
      type="text"
      class="py-2 px-3 mr-1 block w-full rounded-md text-sm transition-all border bg-slate-950 border-gray-800 focus:border-gray-700 text-gray-400"
      placeholder="Search..."
    />
    <div class="body__controls-wrapper inline-flex rounded-md shadow-sm">
      <button
        @click="showPopover = !showPopover"
        type="button"
        class="py-2.5 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-md first:ml-0 last:rounded-r-lg border font-medium align-middle focus:z-10 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all text-base bg-slate-950 hover:bg-slate-800 border-gray-800 text-gray-400"
      >
        <i class="ti ti-folder-plus"></i>
      </button>
      <Transition>
        <div class="body__controls-popover" v-if="showPopover">
          <input
            v-model="dirName"
            type="text"
            class="py-2 px-3 mr-1 block w-full rounded-md text-sm transition-all border bg-slate-950 border-gray-800 focus:border-gray-700 text-gray-400"
            placeholder="Type folder name"
          />
          <button
            type="button"
            @click="createDir"
            class="py-3 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 outline-none focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all text-xs"
          >
            <i class="ti ti-check"></i>
          </button>
        </div>
      </Transition>

      <button
        @click="visible = true"
        type="button"
        class="py-2.5 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-md first:ml-0 last:rounded-r-lg border font-medium align-middle focus:z-10 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all text-base bg-slate-950 hover:bg-slate-800 border-gray-800 text-gray-400"
      >
        <i class="ti ti-file-plus"></i>
      </button>
      <UiDialog
        title="Create new analytic"
        submitTitle="Create"
        @submit="createFile"
        v-model:visible="visible"
      >
        <div class="flex items-center">
          <div class="w-full mr-2">
            <div class="text-white mb-1">File name</div>
            <input
              v-model="fileProps.name"
              type="text"
              class="py-3 px-3 mr-1 block w-full rounded-md text-sm transition-all border bg-gray-900 border-gray-800 focus:border-gray-700 text-gray-400"
              placeholder="Type name for file"
            />
          </div>
          <div class="w-5/12">
            <div class="text-white mb-1">File type</div>
            <UiSelect placeholder="Choose file type" v-model="fileProps.type">
              <UiSelectOption
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </UiSelect>
          </div>
        </div>
      </UiDialog>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: String,
    path: { type: Array, default: () => [] },
  },
  data() {
    return {
      fileType: "",
      visible: false,
      showPopover: false,
      dirName: "",
      fileProps: {
        type: "",
        name: "",
      },
      typeOptions: [
        {
          label: "Qa format",
          value: "json",
        },
        {
          label: "CSV table",
          value: "csv",
        },
        {
          label: "XLSX table",
          value: "xlsx",
        },
      ],
    };
  },
  methods: {
    createDir() {
      this.showPopover = false;
      const path = this.path;

      window.electron.createDir(path, this.dirName);
      this.$emit("refresh");
    },
    createFile() {
      const path = this.path;
      const { type, name } = this.fileProps;
      window.electron.createFile(path, name, type);
      this.$emit("refresh");
      this.visible = false;
    },
    handleChange($event) {
      const value = $event.target.value;
      this.$emit("update:modelValue", value);
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  outline: none;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.body__controls {
  position: relative;

  &-popover {
    display: flex;
    align-items: center;
    background-color: rgb(2 6 23 / var(--tw-bg-opacity));
    padding: 5px;
    border-radius: 5px;
    right: 2px;
    bottom: -53px;
    position: absolute;
  }
}
</style>
