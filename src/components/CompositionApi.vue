<script setup lang="ts">
import { ref } from 'vue'

// 定义一个响应式数据
const count = ref(1)
</script>
<template>
  <div>
    <h1>Composition API</h1>
    <p>Count: {{ count }}</p>
  </div>
</template>
