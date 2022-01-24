<script setup lang="ts">
import Bar from "./components/Nav/Bar.vue";
import DrawingBoard from "./components/DrawingBoard.vue";
import { isDark, toggleDark } from "./composables/dark";
import { onMounted } from "vue";

onMounted(() => {
  if (!isDark.value) {
    toggleDark();
  }
});
</script>

<template>
  <main class="h-screen">
    <DrawingBoard />
  </main>
</template>

<style>
@import "./assets/base.css";
</style>
