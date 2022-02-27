<script setup lang="ts">
import { ref } from "vue";
import { VAceEditor } from "vue3-ace-editor";
const content = ref('const x = 5;')
</script>

<template>
  <div>
    <v-ace-editor
      :value="content"
      lang="javascript"
      theme="chrome"
      style="height: 300px"
    />
  </div>
</template>
