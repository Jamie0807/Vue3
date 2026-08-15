<script setup lang="ts">
// 子组件接收父组件传递的参数

const props = defineProps<{
  name?: string
  age?: number
}>()

// 子组件可以触发父组件的方法 say, 并给父组件方法传递参数 hello
const emit = defineEmits<{
  say: [val: string]
}>()
</script>
<template>
  <div>
    <h1>我是子组件, 父组件传递的姓名{{ props.name }}</h1>
    <h1>我是子组件, 父组件传递的年龄{{ props.age }}</h1>

    <button @click="emit('say', 'hello')">
      我是子组件, 我可以调用父组件方法 say, 并给父组件方法传递参数 hello
    </button>
  </div>
</template>
