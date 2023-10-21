<template>
  <div class="flex flex-col px-4 body__table">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div
          class="border rounded-lg shadow overflow-hidden border-gray-800 shadow-gray-900"
        >
          <table class="min-w-full divide-y divide-gray-800">
            <thead class="bg-gray-800">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase"
                >
                  №
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercas"
                >
                  Summary
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercas"
                >
                  Screenshots
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercas"
                >
                  Executor
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercas"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                  1
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  Апишка не отрабатывает
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  <div>
                    <img
                      src="https://funart.pro/uploads/posts/2022-06/1654648306_67-funart-pro-p-koti-banda-zhivotnie-krasivo-foto-71.jpg"
                      alt=""
                    />
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">Глеб</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <span
                    class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white"
                    >Todo</span
                  >
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                  2
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  Шось там не працюе
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">-</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">Саня</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <span
                    class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >QA</span
                  >
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                  3
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  Слетела вёрстка страницы
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">-</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">Макс</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <span
                    class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-300 text-green-800"
                    >Done</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bodyMixin from "../utils/bodyMixin.js";
export default {
  mixins: [bodyMixin],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.body__table {
  padding-top: 10px;
  width: 100%;

  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>
