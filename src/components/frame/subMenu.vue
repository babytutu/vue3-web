<template>
  <el-sub-menu :index="i.title + i.path">
    <template #title>
      <el-icon v-if="i.icon"><component :is="i.icon" /></el-icon>
      <span>{{ i.title }}</span>
    </template>
    <template v-for="sub in i.children" :key="sub.path">
      <template v-if="!sub.children || !sub.children.length">
        <el-menu-item @click="emit('addTab', sub)" :index="sub.path">{{ sub.title }} </el-menu-item>
      </template>
      <template v-else>
        <subMenu :i="sub" @addTab="(tab) => emit('addTab', tab)" />
      </template>
    </template>
  </el-sub-menu>
</template>
<script lang="ts" setup>
defineProps(['i'])
const emit = defineEmits(['addTab'])
</script>
