<script lang="ts">
export default {
  name: 'OptionsApi',
  data() {
    return {
      count: 1,
      isShow: true,
      list: ['1', '2', '3'],
    }
  },
  // 定义一个计算属性
  computed: {
    doubleCount() {
      return this.count * 2
    },
  },
  // 定义一个方法
  methods: {
    incrementCount() {
      this.count++
    },
    toggleEvent() {
      this.isShow = !this.isShow
    },
    addItem() {
      this.list.push(this.list.length.toString())
    },
  },
  // 定义一个 watch 监听 count 变化
  watch: {
    count(newVal, oldVal) {
      console.log('count changed from', oldVal, 'to', newVal)
      document.title = newVal
    },
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  // 组件挂载完成后调用
  mounted() {
    console.log('mounted')

    // 使用 refs 获取 canvas 元素
    const canvasDom = this.$refs.canvas as HTMLCanvasElement

    // 获取 canvas 上下文
    const canvasCtx = canvasDom.getContext('2d')

    canvasCtx?.beginPath()
    canvasCtx?.moveTo(0, 0)
    canvasCtx?.lineTo(100, 100)
    canvasCtx?.stroke()
    canvasCtx?.closePath()
  },
}
</script>
<template>
  <div>
    <h1>Options API</h1>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p v-if="isShow">Is Show: {{ isShow }}</p>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ index }}: {{ item }}</li>
    </ul>
    <button @click="incrementCount">Increment Count</button>
    <button @click="toggleEvent">Hide</button>
    <button @click="addItem">Add Item</button>

    <canvas ref="canvas"></canvas>
  </div>
</template>
