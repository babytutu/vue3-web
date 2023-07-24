<template>
  <el-dialog
    :model-value="modelValue"
    :title="title"
    :width="width"
    :draggable="draggable"
    @closed="close"
    :close-on-click-modal="false"
  >
    <slot />
    <template #footer v-if="showFooter">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
export interface Props {
  modelValue: boolean
  title?: string
  width?: string
  showFooter?: boolean
  draggable?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '标题',
  width: '600px',
  showFooter: false,
  draggable: true,
})

const emit = defineEmits(['update:modelValue', 'close'])

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}
</script>
