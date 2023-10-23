<template>
  <tr class="qa__table-row">
    <template v-for="col in columns" :key="col.id">
      <td
        v-if="col.type === 'text'"
        class="qa__table-row__text px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200"
      >
        <form
          class="qa__table-row__wrapper flex items-center"
          @submit.prevent="
            columnsWithOptions[col.id].editable = !columnsWithOptions[col.id].editable
          "
        >
          <div v-if="!columnsWithOptions[col.id]?.editable">
            {{ data[col.id] }}
          </div>
          <input
            v-else
            class="py-2 px-3 bg-transparent transition-all ring-2 ring-gray-800 rounded-lg outline-none"
            v-model.lazy="data[col.id]"
            type="text"
          />
          <button
            class="qa__table-row__wrapper-edit p-2 ml-2 hover:bg-gray-950 rounded-lg cursor-pointer"
          >
            <i
              :class="columnsWithOptions[col.id]?.editable ? 'ti-check' : 'ti-edit'"
              class="ti"
            ></i>
          </button>
        </form>
      </td>
      <td
        v-else-if="col.type === 'image'"
        class="px-6 py-4 whitespace-nowrap text-sm text-gray-200"
      >
        <div>
          <img v-if="data?.[col.id]" :src="data?.[col.id]" alt="" />
          <div
            v-else
            class="w-10 h-10 border flex items-center justify-center border-dashed rounded-lg border-gray-600 text-gray-600 cursor-pointer hover:border-gray-400 hover:text-gray-400 transition-all"
          >
            +
          </div>
        </div>
      </td>
      <td
        v-else-if="col.type === 'select'"
        class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
      >
        <UiSelect
          v-model="data[col.id]"
          @visible="columnsWithOptions[col.id].state.active = $event"
        >
          <template #button>
            <span
              :class="{
                [columnsWithOptions[col.id]?.state?.color]: true,
                active: columnsWithOptions[col.id]?.state?.active,
              }"
              class="qa__table-row__badge transition-all flex cursor-pointer items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium"
            >
              {{ columnsWithOptions[col.id]?.state?.id }}
              <i class="ml-auto ti ti-chevron-down"></i
            ></span>
          </template>

          <UiSelectOption
            v-for="item in col.options"
            :key="item.id"
            :value="item.id"
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
    return {
      columnsWithOptions: {},
    };
  },

  watch: {
    data: {
      immediate: true,
      handler() {
        this.updateRowsState();
      },
    },
  },
  methods: {
    updateRowsState() {
      const columnsWithOptions = {};

      this.columns.forEach((el) => {
        if (el.options) {
          columnsWithOptions[el.id] = {
            id: el.id,
            active: false,
            state: el.options.find((row) => row.id === this.data[el.id]),
          };
        } else {
          columnsWithOptions[el.id] = {
            text: this.data[el.id],
            editable: false,
          };
        }
      });

      this.columnsWithOptions = columnsWithOptions;
    },
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

  &__text {
    max-width: 200px;
  }

  &__wrapper {
    &-edit {
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:hover {
      .qa__table-row__wrapper-edit {
        opacity: 1;
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
