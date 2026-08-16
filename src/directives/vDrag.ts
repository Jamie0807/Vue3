export const vDrag = {
  mounted(el: HTMLElement) {
    el.draggable = true

    el.addEventListener('dragstart', (e) => {
      console.log(e.clientX, e.clientY)
    })
  },
}
