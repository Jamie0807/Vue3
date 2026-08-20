import { ref, type Ref } from 'vue'

type UseToggleResult = [Ref<boolean>, () => void]

export const useToggle = (initial: boolean): UseToggleResult => {
  const toggle = ref(initial)

  const toggleValue = () => {
    toggle.value = !toggle.value
  }

  return [toggle, toggleValue]
}
