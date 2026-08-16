<script setup lang="ts">
import { defineAsyncComponent, h, ref } from 'vue'
// defineAsyncComponent 异步组件
const childComponent = defineAsyncComponent({
  loader: () => import('./SuspenseChild.vue'),
  loadingComponent: h('div', '加载中...'),
})

const isShow = ref(true)
const toggleShow = () => {
  isShow.value = !isShow.value
}
</script>
<template>
  <Suspense v-if="isShow">
    <childComponent />
  </Suspense>
  <button @click="toggleShow">切换显示</button>
</template>
