<template>
  <tr class="qa__table-row">
    <template v-for="col in columns" :key="col.id">
      <td
        v-if="col.type === 'text'"
        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200"
      >
        <input
          class="p-2 bg-transparent transition-all focus:ring-2 ring-gray-800 rounded-lg outline-none"
          v-model="data[col.id]"
          type="text"
        />
      </td>
      <td
        v-else-if="col.type === 'image'"
        class="px-6 py-4 whitespace-nowrap text-sm text-gray-200"
      >
        <div>
          <img v-if="data?.[col.id]" :src="data?.[col.id]" alt="" />
          <div v-else>-</div>
        </div>
      </td>
      <td
        v-else-if="col.type === 'select'"
        class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
      >
        <UiSelect @visible="columnsWithOptions[col.id].state.active = $event">
          <template #button>
            <span
              :class="{
                [columnsWithOptions[col.id].state.color]: true,
                active: columnsWithOptions[col.id].state.active,
              }"
              class="qa__table-row__badge transition-all flex cursor-pointer items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium"
            >
              {{ columnsWithOptions[col.id].state.id }}
              <i class="ml-auto ti ti-chevron-down"></i
            ></span>
          </template>

          <UiSelectOption
            v-for="item in col.options"
            :key="item.id"
            @click="columnsWithOptions[col.id].state = item"
          >
            <span
              :class="{ [item.color]: true }"
              class="row__badge w-full text-center mb-2 gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium"
            >
              {{ item.id }}
            </span>
          </UiSelectOption>
        </UiSelect>
      </td>
    </template>
  </tr>
</template>
<script>
export default {
  props: {
    data: { type: Object, default: () => {} },
    columns: { type: Array, default: () => [] },
  },
  data() {
    const columnsWithOptions = {};

    this.columns.forEach((el) => {
      if (el.options) {
        columnsWithOptions[el.id] = {
          id: el.id,
          active: false,
          state: el.options.find((row) => row.id === this.data[el.id]),
        };
      }
    });

    return {
      columnsWithOptions,
    };
  },
};
</script>
<style lang="scss">
.qa__table-row {
  &__badge {
    color: white;
    width: 100%;
    background-color: rgb(164, 164, 164);

    i {
      transition: transform 0.3s;
    }

    &.active {
      i {
        transform: rotateX(180deg);
      }
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>
