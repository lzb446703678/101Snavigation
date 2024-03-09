import { defineStore } from "pinia";
import defaultShortCut from "@/assets/defaultShortCut";
import defaultvideoShortCut from "@/assets/defaultvideoShortCut";
import defaultlearnShortCut from "@/assets/defaultlearnShortCut";
import defaultresourcesShortCut from "@/assets/defaultresourcesShortCut";

const useSiteDataStore = defineStore("siteData", {
  state: () => {
    return {
      // 捷径数据
      shortcutData: defaultShortCut,
      shortcutvideoData: defaultvideoShortCut,
      shortcutlearnData: defaultlearnShortCut,
      shortcutresourcesData: defaultresourcesShortCut,
    };
  },
  actions: {
    setShortcutData(value) {
      this.shortcutData = value;
    },
    setShortcutvideoData(value) {
      this.shortcutvideoData = value;
    },
    setShortcutlearnData(value) {
      this.shortcutlearnData = value;
    },
    setShortcutresourcesData(value) {
      this.shortcutresourcesData = value;
    },
  },
  
  // 开启数据持久化
  persist: {
    key: "siteData",
    storage: window.localStorage,
  },
});

export default useSiteDataStore;
