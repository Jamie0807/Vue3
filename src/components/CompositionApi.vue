<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from 'vue'

// 定义一个响应式数据
const count = ref(1)
const isShow = ref(true)
const list = ref(['1', '2', '3'])

// 定义一个计算属性
const doubleCount = computed(() => {
  return count.value * 2
})

// 定义一个方法
const incrementCount = () => {
  count.value++
}

const toggleEvent = () => {
  isShow.value = !isShow.value
}

// 定义一个方法
const addItem = () => {
  list.value.push(list.value.length.toString())
}

// 定义一个 watch 监听 count 变化
watch(count, (newVal, oldVal) => {
  console.log('count changed from', oldVal, 'to', newVal)
  document.title = newVal.toString()
})

// 定义一个 watchEffect 监听 isShow 变化
watchEffect(() => {
  document.title = isShow.value.toString()
})

// 定义一个 onBeforeMount 生命周期钩子
onBeforeMount(() => {
  console.log('onBeforeMount')
})

// 定义一个 onMounted 生命周期钩子
onMounted(() => {
  console.log('onMounted')
})

// 定义一个 onBeforeUpdate 生命周期钩子
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

// 定义一个 onUpdated 生命周期钩子
onUpdated(() => {
  console.log('onUpdated')
})
</script>
<template>
  <div>
    <h1>Composition API</h1>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p v-if="isShow">Is Show: {{ isShow }}</p>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ index }}: {{ item }}</li>
    </ul>
    <button @click="incrementCount">Increment Count</button>
    <button @click="toggleEvent">Hide</button>
    <button @click="addItem">Add Item</button>
  </div>
</template>
