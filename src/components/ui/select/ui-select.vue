<template>
  <div class="ui-select">
    <button
      @click="handleClick"
      ref="select"
      :class="{ 'text-gray-600': !modelValue, active: menuOpen }"
      class="ui-select__button py-3 px-4 gap-2 text-left rounded-md border-2 cursor-pointer w-full font-semibold border-gray-700 text-white bg-gray-900 outline-none focus:ring-2 focus:ring-gray-900 transition-all text-sm hover:bg-gray-900 :hover:border-gray-900 text-whit"
    >
      {{
        modelValue
          ? getOptionData?.props?.label || getOptionData?.props?.value
          : placeholder
      }}
      <i class="chevron ti ti-chevron-down"></i>
    </button>
    <teleport to="body">
      <Transition>
        <div
          v-if="menuOpen"
          ref="menu"
          :style="{
            left: selectMenuSettings.left + 'px',
            top: selectMenuSettings.top + 45 + 'px',
            width: selectMenuSettings.width + 4 + 'px',
          }"
          class="ui-select__list w-72 z-10 mt-2 bg-gray-900 shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
        >
          <slot></slot>
        </div>
      </Transition>
    </teleport>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: String,
    placeholder: { type: String, default: () => "Choose" },
  },
  data() {
    return {
      selectMenuSettings: {
        left: 0,
        top: 0,
        width: 0,
      },
      menuOpen: false,
    };
  },
  computed: {
    getOptionData() {
      const slotData = this.$slots.default()[0].children.length
        ? this.$slots.default()[0].children
        : this.$slots.default();

      const currentOption = slotData.find(
        (el) => el.props.value === this.modelValue || el.props.label === this.modelValue
      );

      return currentOption;
    },
  },
  watch: {
    menuOpen(n) {
      if (n) {
        document.body.addEventListener("click", this.clickOnBody, true);
      } else {
        document.body.removeEventListener("click", this.clickOnBody, true);
      }
    },
  },
  methods: {
    getSelectBounds() {
      const { left, top } = this.$refs.select.getBoundingClientRect();
      const width = this.$refs.select.clientWidth;
      this.selectMenuSettings = { left, top, width };
    },
    handleClick() {
      this.menuOpen = !this.menuOpen;
      this.getSelectBounds();
    },
    clickOnBody($event) {
      if ($event.target.className.match("ui-select__button")) return;
      this.menuOpen = false;
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getSelectBounds);
    window.removeEventListener("resize", this.getSelectBounds);
  },
  mounted() {
    window.addEventListener("scroll", this.getSelectBounds);
    window.addEventListener("resize", this.getSelectBounds);

    this.getSelectBounds();
  },
};
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.ui-select {
  &__list {
    z-index: 100;
    position: fixed;
  }

  &__button {
    max-width: 320px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    position: relative;
    .chevron {
      position: absolute;
      right: 15px;
      top: 50%;
      color: white;
      transform: translateY(-50%);
      transition: all 0.3s;
    }

    &.active {
      .chevron {
        transform: translateY(-50%) rotateX(180deg);
      }
    }
  }
}
</style>
