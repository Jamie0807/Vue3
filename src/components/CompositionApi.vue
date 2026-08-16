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
  reactive,
  watchSyncEffect,
  watchPostEffect,
} from 'vue'

// 定义一个响应式数据
const count = ref(1)
const isShow = ref(true)
const list = ref(['1', '2', '3'])

const canvas = ref<HTMLCanvasElement>()

// 定义一个计算属性
const doubleCount = computed(() => {
  return count.value * 2
})

// 定义一个方法
const incrementCount = () => {
  count.value++
}

// reactive 定义一个响应式对象
const info = reactive({
  name: 'Composition API',
  age: 18,
})

// 这里不用info.value, 因为info是一个响应式对象, 直接修改info.age即可触发响应
const incrementAge = () => {
  info.age++
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

watch(
  isShow,
  (newVal, oldVal) => {
    console.log(watch, 'isShow changed from', oldVal, 'to', newVal)
  },
  { immediate: true, deep: true },
)

// 定义一个 watchEffect 监听 isShow 变化
watchEffect(() => {
  document.title = isShow.value.toString()
  console.log(watchPostEffect, isShow.value)
})

watchSyncEffect(() => {
  console.log(watchSyncEffect, isShow.value)
})

watchPostEffect(() => {
  console.log(watchPostEffect, isShow.value)
})

// 定义一个 onBeforeMount 生命周期钩子
onBeforeMount(() => {
  console.log('onBeforeMount')
})

// 定义一个 onMounted 生命周期钩子
onMounted(() => {
  console.log('onMounted')
  // 使用 refs 获取 canvas 元素

  const canvasDom = canvas.value
  // 获取 canvas 上下文
  const canvasCtx = canvasDom?.getContext('2d')
  canvasCtx?.beginPath()
  canvasCtx?.moveTo(0, 0)
  canvasCtx?.lineTo(100, 100)
  canvasCtx?.stroke()
  canvasCtx?.closePath()
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
    <transition name="fade">
      <p v-if="isShow">Is Show: {{ isShow }}</p>
    </transition>
    <TransitionGroup name="fade">
      <li v-for="(item, index) in list" :key="index">{{ index }}: {{ item }}</li>
    </TransitionGroup>

    <button @click="incrementCount">Increment Count</button>

    <p>Name: {{ info.name }}</p>
    <p>Age: {{ info.age }}</p>
    <!-- <button @click="info.age++">Increment Age</button> -->
    <button @click="incrementAge">Increment Age</button>
    <button @click="toggleEvent">Hide</button>
    <button @click="addItem">Add Item</button>
    <canvas ref="canvas"></canvas>
  </div>
</template>
<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px) rotate(360deg);
}
</style>
