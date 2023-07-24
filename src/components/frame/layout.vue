<template>
  <div class="flex">
    <div class="flex-header">
      <slot name="header" />
    </div>
    <div class="flex-content">
      <slot />
    </div>
    <div class="flex-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.flex {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.flex-content {
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>
