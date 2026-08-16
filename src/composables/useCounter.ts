import { ref, computed } from 'vue'

// 定义一个组合式函数，用于管理计数器的状态和行为
export const useCounter = () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  return {
    count,
    doubleCount,
    increment,
  }
}
