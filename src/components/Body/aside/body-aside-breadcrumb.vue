<template>
  <ol
    class="flex items-center whitespace-nowrap min-w-0 mb-3"
    aria-label="Breadcrumb"
  >
    <li class="text-sm  cursor-pointer">
      <div class="flex items-center text-gray-500 hover:text-blue-600" href="#">
        Home
      </div>
    </li>
    <li class="text-sm cursor-pointer">
      <div class="flex items-center text-gray-500 hover:text-blue-600" href="#">
        <svg
          class="flex-shrink-0 mx-2 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        App Center
      </div>
    </li>
  </ol>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
