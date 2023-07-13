import {
  getCurrentInstance,
  type ComponentInternalInstance,
  type ComponentPublicInstance,
} from 'vue'
export default () =>
  (getCurrentInstance() as ComponentInternalInstance).proxy as ComponentPublicInstance
