export default {
  props: {
    path: { type: Array, default: () => [] },
  },
  computed: {
    pathArray() {
      return this.path;
    },
  },
  methods: {
    addPath(pathName, dir = false) {
      const path = this.path;
      const lastPath = path.at(-1);

      if (lastPath?.isDir || dir || !path.length) {
        this.$emit("update:path", path.concat({ isDir: dir, name: pathName }));
      } else if (!dir) {
        const changedPath = path.map((el, idx) => {
          if (idx === path.length - 1 && !dir) return { isDir: dir, name: pathName };

          return el;
        });

        this.$emit("update:path", changedPath);
      }
    },
    removePath(count = 1) {
      const path = this.path.slice(0, this.path.length - count);

      this.$emit("update:path", path);
    },
  },
};
