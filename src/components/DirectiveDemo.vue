<script setup lang="ts">
import { vFocus } from '@/directives/vFocus'
import { vDrag } from '@/directives/vDrag'
</script>
<template>
  <input v-focus />
  <div v-drag class="draggable"></div>
</template>
<style scoped>
.draggable {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
