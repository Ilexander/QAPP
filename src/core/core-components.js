import { defineAsyncComponent } from "vue";

const coreComponents = {
  UiDialog: "/src/components/ui/dialog/ui-dialog.vue",
  UiSelect: "/src/components/ui/select/ui-select.vue",
  UiSelectOption: "/src/components/ui/select/ui-select-option.vue",
};

export const initCoreComponents = (app) => {
  Object.entries(coreComponents).forEach(([name, path]) => {
    const component = defineAsyncComponent(() => import(path));

    app.component(name, component);
  });
};
