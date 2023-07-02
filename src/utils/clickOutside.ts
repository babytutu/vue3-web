export const vClickOutside = {
  mounted(el: any, binding: any) {
    el.handler = function (e: any) {
      if (!el.contains(e.target)) {
        binding.value(e)
      }
    }
    document.addEventListener('click', el.handler, true)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.handler)
  },
}
