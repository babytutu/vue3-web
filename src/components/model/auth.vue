<template>
  <slot v-if="showModel" />
</template>
<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const { checkAuth } = useAuthStore()

const showModel = ref(false) // 是否显示模块

const props = defineProps<{
  type: string
}>()

onBeforeMount(() => {
  const rulePath = route.meta?.auth || ''
  showModel.value = Boolean(rulePath) && checkAuth(rulePath, props.type)
})
</script>
