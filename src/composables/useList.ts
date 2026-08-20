import { onMounted, ref, type Ref } from 'vue'

// 定义一个组合式函数，用于管理列表的状态和行为
export const useList = <T>(initial: T) => {
  const list = ref([]) as Ref<T[]>

  onMounted(() => {
    list.value.push(initial)
  })

  const addItem = (data: T) => {
    list.value.push(data)
  }

  const removeItem = (index: number) => {
    list.value.splice(index, 1)
  }

  return {
    list,
    addItem,
    removeItem,
  }
}
