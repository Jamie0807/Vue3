<script setup lang="ts">
import { ref } from 'vue'
const slots = defineSlots<{
  header(props: { count: number }): string
  body(props: { count: number }): string
  footer(props: { count: number }): string
}>()
console.log(slots)

const count = ref(0)
</script>
<template>
  <div>
    <slot name="header" :count="count"></slot>
  </div>
  <div>
    <slot name="body" :count="count"></slot>
  </div>
  <div>
    <slot name="footer" :count="count"></slot>
  </div>
  <button @click="count++">子组件给父组件传递参数</button>
</template>
