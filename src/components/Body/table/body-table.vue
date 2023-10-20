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
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercas"
                >
                  Age
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercas"
                >
                  Address
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercas"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200"
                >
                  John Brown
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  45
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  New York No. 1 Lake Park
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a class="text-blue-500 hover:text-blue-700" href="#"
                    >Delete</a
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
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>

.body__table {
  padding-top: 10px;
  width: 100%;
}

</style>
