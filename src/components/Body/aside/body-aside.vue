<template>
  <div class="flow-root body__aside">
    <BodyAsideControls v-model="searchText" :path="path" @refresh="getFiles" />
    <BodyAsideBreadcrumb :path="path" @navigate="returnHome" />
    <ul class="-my-2 divide-y divide-gray-800">
      <li class="py-2">
        <ul class="space-y-1">
          <BodyAsideItem
            :file="item"
            @click="handleClick(item)"
            v-for="item in sortedFileList"
            :key="item.name"
          />
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import BodyAsideBreadcrumb from "./body-aside-breadcrumb.vue";
import BodyAsideItem from "./body-aside-item.vue";
import bodyMixin from "../utils/bodyMixin.js";
import BodyAsideControls from "./body-aside-controls.vue";

export default {
  mixins: [bodyMixin],
  computed: {
    sortedFileList() {
      return this.fileSystemData.sort((a) => {
        if (a.dir) return -1;

        return 1;
      });
    },
  },
  data() {
    return {
      searchText: "",
      fileSystemData: [
        {
          name: "Cases",
          type: "csv",
          size: 1234444,
          dir: false,
          cdate: "20-10-2023 20:30",
          edate: "21-11-2023 21:31",
        },
        {
          name: "Busines",
          type: "xls",
          size: 1024,
          dir: false,
          cdate: "01-05-2020 10:47",
          edate: "20-12-2023 19:21",
        },
        {
          name: "Analytic",
          type: "xlsx",
          size: 90000,
          dir: false,
          cdate: "01-10-2023 09:07",
          edate: "19-10-2023 19:21",
        },
      ],
    };
  },

  mounted() {
    this.getFiles();
  },
  methods: {
    async getFiles() {
      const path = this.joinedPath;
      this.fileSystemData = await window.electron.getFiles("saves/" + path);
    },
    async handleClick(item) {
      await this.addPath(item.name, item.dir);
      if (item.dir) {
        await this.getFiles();
      }
    },
    async returnHome($event) {
      await this.removePath($event);
      await this.getFiles();
    },
  },
  components: { BodyAsideItem, BodyAsideBreadcrumb, BodyAsideControls },
};
</script>
<style lang="scss" scoped>
.body__aside {
  padding: 10px;
  height: calc(100vh - 70px);
  max-width: 320px;
  width: 100%;
  border-right: 1px solid rgba(255, 255, 255, 0.176);
}
</style>
