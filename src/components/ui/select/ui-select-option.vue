<template>
  <div
    @click="handleClick"
    :class="isParentValueEqual ? 'bg-gray-700' : ''"
    class="flex cursor-pointer transition-all items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300"
  >
    <slot>
      {{ label }}
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    value: { type: [Number, String], default: () => "" },
    label: { type: [Number, String], default: () => "" },
  },
  computed: {
    isParentValueEqual() {
      const parent = this.getParent();
      return parent.modelValue === this.value || parent.modelValue === this.label;
    },
  },
  methods: {
    handleClick() {
      const parent = this.getParent();
      parent.$emit("update:modelValue", this.value || this.label);
      parent.menuOpen = false;
    },
    getParent() {
      const parent = this.$parent.$parent.$parent;
      return parent;
    },
  },
};
</script>
<style lang="scss"></style>
