<template>
  <div class="footer">
    <slot>
      <router-link to="/" class="btn" active-class="cur"></router-link>
    </slot>
  </div>
</template>
<script>
export default {
  name:'cc-footer'
}
</script>
<script>
export default {
  name: "fot-btn",
  created() {}
};
</script>
<style scoped lang="less">
.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: white;
}
.footer .btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 1.2;

  &.cur {
    color: black;
  }
}


</style>
