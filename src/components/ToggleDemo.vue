<script setup lang="ts">
import { useToggle } from '@/composables/useToggle'

const [toggle, toggleValue] = useToggle(false)
</script>

<template>
  <div>
    <h1 v-if="toggle">Toggle Demo</h1>
    <button @click="toggleValue()">Toggle</button>
  </div>
</template>
