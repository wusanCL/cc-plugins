<template>
  <div class="toast" :class="{show:isShow}">
    <div class="cont">
      <!-- <img src="@/assets/logo.png" class="img" alt /> -->
      <span>{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "cc-toast",
  created() {},
  data() {
    return {
      isShow: false,
      type: "txt",
      text: ""
    };
  },
  methods: {
    showToast({ text = "", type = "txt", durcation = 1500, auto = true,end }) {
      this.isShow = true;
      this.type = type;
      this.text = text;

      if (auto) {
        setTimeout(() => {
          this.hideToast();
          if(end)end()
        }, durcation);
      }
    },
    hideToast() {
      this.isShow = false;
    }
  }
};
</script>
<style scoped lang="less">
.toast {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  // background-color: #eee;
  transition:opacity 0.5s;
  opacity: 0;
  z-index: -99999;

  .cont {
    margin: auto;
    background-color: #999;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    padding: 10px 30px;
  }

  .img {
    display: block;
    width: 150px;
    height: 150px;
    margin-bottom: 15px;
  }

  &.show {
    opacity: 1;
    z-index: 999999999999;
  }
}
</style>
