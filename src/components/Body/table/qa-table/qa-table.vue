<template>
  <div v-if="!colData.length && !rowData.length">
    <div class="flex items-center mt-6 text-center rounded-lg h-96 dark:border-gray-700">
      <div class="flex flex-col w-full max-w-sm px-4 mx-auto">
        <div class="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <h1 class="mt-3 text-lg text-white">No tables found</h1>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          You don't have any QA format table, create a table to work with it
        </p>
        <div class="flex items-center mt-4 sm:mx-auto gap-x-3">
          <button
            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Add vendor</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col px-4 body__table" v-else>
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div
          class="border rounded-lg shadow overflow-hidden border-gray-800 shadow-gray-900"
        >
          <table class="min-w-full divide-y divide-gray-800">
            <thead class="bg-gray-800">
              <tr>
                <th
                  v-for="(item, index) in colData"
                  :key="item.id"
                  scope="col"
                  :class="{ 'text-right': index === colData.length - 1 }"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase"
                >
                  {{ item.title }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <QaTableRow
                v-for="(item, index) in rowData"
                :data="item"
                :columns="colData"
                :key="index"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bodyMixin from "../../utils/bodyMixin.js";
import QaTableRow from "./qa-table-row.vue";
export default {
  mixins: [bodyMixin],
  data() {
    return {
      colData: [
        {
          type: "text",
          title: "№",
          id: "id",
        },
        {
          type: "text",
          title: "Name",
          id: "name",
        },
        {
          type: "text",
          title: "Description",
          id: "desc",
        },
        {
          type: "image",
          title: "Screens",
          id: "screenshots",
        },
        {
          type: "text",
          title: "Executor",
          id: "executor",
        },
        {
          type: "select",
          title: "Status",
          id: "status",
          options: [
            {
              id: "Todo",
              color: "!bg-blue-500",
            },
            {
              id: "QA",
              color: "!bg-green-100 !text-green-800",
            },
            {
              id: "Done",
              color: "!bg-green-500",
            },
          ],
        },
      ],
      rowData: [
        {
          id: "1",
          name: "Апишка не отрабатывает",
          desc: "",
          screenshots:
            "https://funart.pro/uploads/posts/2022-06/1654648306_67-funart-pro-p-koti-banda-zhivotnie-krasivo-foto-71.jpg",
          executor: "Глеб",
          status: "Todo",
        },
        {
          id: "2",
          name: "Шось там не працюе",
          desc: "",
          screenshots: "",
          executor: "Саня",
          status: "QA",
        },
        {
          id: "3",
          name: "Слетела вёрстка страницы",
          desc: "",
          screenshots: "",
          executor: "Макс",
          status: "Done",
        },
      ],
    };
  },
  watch: {
    rowData: {
      deep: true,
      handler(n) {
        this.$emit("tableData", {
          colData: this.colData,
          rowData: n,
        });
      },
    },
    path: {
      deep: true,
      immediate: true,
      handler(n) {
        if (!n.at(-1)?.isDir && n.length) {
          const data = window.electron.readFile(this.allPath);
          const { colData, rowData } = JSON.parse(data);

          this.colData = colData;
          this.rowData = rowData;
        }
      },
    },
  },
  components: { QaTableRow },
};
</script>
<style lang="scss" scoped></style>
