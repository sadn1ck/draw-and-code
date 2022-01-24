<script setup lang="ts">
defineProps({
  txt: String,
});
</script>
<template>
  <span
    class="absolute top-0 right-0 bg-dark-300 text-white font-mono rounded-xl ring-2 ring-gray-400 text-[0.5rem] inline-block w-auto p-1"
  >
    {{ txt }}
  </span>
</template>
