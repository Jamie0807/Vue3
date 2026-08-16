<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'

// 引入 useCounter 函数
// 并解构赋值 count、doubleCount、increment
// 用于在模板中使用计数器的状态和行为

const { count, doubleCount, increment } = useCounter()
</script>
<template>
  <div>
    <h1>Counter Demo</h1>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment Count</button>
  </div>
</template>
