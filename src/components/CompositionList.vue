<script setup lang="ts">
import { useList } from '@/composables/useList'

const { list, addItem, removeItem } = useList({ id: 0, data: 0 })
</script>
<template>
  <div>
    <h1>Composition List</h1>
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        {{ item.data }}
        <button @click="removeItem(index)">X</button>
      </li>
    </ul>
    <button
      @click="
        addItem({
          id: list.length,
          data: list.length,
        })
      "
    >
      Add Item
    </button>
  </div>
</template>
