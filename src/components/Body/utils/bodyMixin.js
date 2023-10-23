export default {
  props: {
    path: { type: Array, default: () => [] },
  },
  computed: {
    pathArray() {
      return this.path;
    },
    joinedPath() {
      return this.path.filter((el) => el?.isDir).map(el => el.name).join("/");
    },
    allPath() {
      return this.path.map(el => el.name).join("/");
    }
  },
  methods: {
    addPath(pathName, dir = false) {
      const path = this.path;
      const lastPath = path.at(-1);

      if (lastPath?.isDir || dir && lastPath?.isDir || !path.length) {
        this.$emit("update:path", path.concat({ isDir: dir, name: pathName }));
      } else if (!dir || !lastPath?.isDir) {
        const changedPath = path.map((el, idx) => {
          if (idx === path.length - 1) return { isDir: dir, name: pathName };

          return el;
        });

        this.$emit("update:path", changedPath);
      }
    },
    removePath(count = 0) {
      const path = this.path.slice(0, count);

      this.$emit("update:path", path);
    },
  },
};
