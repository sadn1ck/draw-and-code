<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import { toRefs } from "@vueuse/core";
import { useDrauu } from "@vueuse/integrations";
import { useMagicKeys } from "@vueuse/core";
import Bar from "./Nav/Bar.vue";

import PencilIcon from "~icons/mdi/pencil";
import RectIcon from "~icons/mdi/rectangle-outline";
import EllipseIcon from "~icons/mdi/ellipse-outline";
import EraseIcon from "~icons/mdi/delete";
import UndoIcon from "~icons/mdi/undo";
import RedoIcon from "~icons/mdi/redo";

const { shift, ctrl, z, y, slash } = useMagicKeys();

watchEffect(() => {
  if (ctrl.value && z.value && canUndo.value) {
    undo();
  }
  if (ctrl.value && y.value && canRedo.value) {
    redo();
  }
  if (shift.value && slash.value) {
    console.log(`display keybinds`);
  }
});

const colors = ref(["#000000", "#ef4444", "#22c55e", "#3b82f6", "#fff"]);
const target = ref();

const sz = ref(3);

const { undo, redo, canUndo, canRedo, clear, brush } = useDrauu(target, {
  brush: {
    color: "#000000",
    size: sz.value,
    mode: "stylus",
    stylusOptions: {
      smoothing: 1.5,
    },
  },
});
const { mode, color, size } = toRefs(brush);
const setMode = (m) => {
  mode.value = m;
};
const updateColor = (newColor: string) => {
  color.value = newColor;
};
const updateSize = () => {
  size.value = sz.value;
};
</script>

<template>
  <Bar class="text-white">
    <div class="bar-contents flex">
      <button
        @click="setMode('stylus')"
        class="pr-3 text-2xl"
        :class="[mode === 'stylus' ? 'text-brand' : '']"
      >
        <PencilIcon />
      </button>
      <button
        @click="setMode('rectangle')"
        class="pr-3 text-2xl"
        :class="[mode === 'rectangle' ? 'text-brand' : '']"
      >
        <RectIcon />
      </button>
      <button
        @click="setMode('ellipse')"
        class="pr-3 text-2xl"
        :class="[mode === 'ellipse' ? 'text-brand' : '']"
      >
        <EllipseIcon />
      </button>
      <button
        @click="undo"
        class="text-2xl pr-5 hover:opacity-50"
        :class="[canUndo ? '' : 'opacity-50']"
      >
        <UndoIcon />
      </button>
      <button
        @click="redo"
        class="text-2xl pr-5 hover:opacity-50"
        :class="[canRedo ? '' : 'opacity-50']"
      >
        <RedoIcon />
      </button>
      <button
        v-for="(_col, idx) in colors"
        class="color-button clean-center"
        :key="_col"
        :class="{ active: _col === color }"
        @click="updateColor(_col)"
      >
        <div
          :style="{ background: _col }"
          class="w-6 h-6 border-2 light-900 rounded-full z-30"
        />
      </button>
      <input
        v-model="sz"
        type="range"
        name="size"
        class="ml-8"
        :min="3"
        :max="10"
        @change="updateSize"
      />

      <button @click="clear" class="text-2xl pl-5 hover:opacity-50">
        <EraseIcon />
      </button>

      <div class="flex-grow"></div>
    </div>
  </Bar>
  <svg ref="target" class="w-full h-full bg-yellow-100" />
</template>

<style lang="postcss">
.color-button {
  @apply m-0 bg-transparent text-dark-50 rounded-full border-none h-8 w-8 p-0;
}
.color-button:hover,
.color-button.active {
  @apply bg-light-900;
}

.clean-center {
  @apply flex place-items-center place-content-center;
}
</style>
