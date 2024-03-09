<template>
  <n-tabs class="all-box" size="large" justify-content="space-evenly" animated>
    <n-tab-pane class="no-padding" name="link" tab="常用">
      <ShortCut />
    </n-tab-pane>
    <n-tab-pane class="no-padding" name="video" tab="影视大全"> <ShortCutvideo /> </n-tab-pane>
    <n-tab-pane class="no-padding" name="resources" tab="各类资源"> <ShortCutresources /> </n-tab-pane>
    <n-tab-pane class="no-padding" name="learn" tab="学习提升"> <ShortCutlearn /> </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import { NTabs, NTabPane } from "naive-ui";
import ShortCut from "@/components/AllFunc/Box/ShortCut.vue";
import ShortCutvideo from "@/components/AllFunc/Box/ShortCutvideo.vue";
import ShortCutresources from "@/components/AllFunc/Box/ShortCutresources.vue";
import ShortCutlearn from "@/components/AllFunc/Box/ShortCutlearn.vue";
</script>
