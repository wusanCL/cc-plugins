<template>
  <div class="first-load">
      <div v-if='!init'></div>
      <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'cc-firstLoad',
  props:['init']
}
</script>
<style scoped lang="less">
.first-load{
    height: 100%;
}
</style>
