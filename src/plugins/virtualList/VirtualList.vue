<template>
  <div class="virtual-list" @scroll="handler">
      <div :style="{padding:padding}">
          <slot :items="items"></slot>
      </div> 
  </div>
</template>

<script>
export default {
  name: "virtual-list",
  props: {
    list: {
      type: Array,
      required: true
    },
    itemHeight: {
      type: Number || String,
      default: 80
    }
  },
  data(){
      return {
          scrollTop: 0,
          viewportHeight:0
      }
  },
  computed: {
    items() {
      return this.list.slice(this.top, this.down);
    },
    top() {
      return Math.floor(this.scrollTop / this.itemHeight);
    },
    down() {
      return Math.min(
        this.top + Math.ceil(this.viewportHeight / this.itemHeight),
        this.list.length
      );
    },
    padding(){
      return `${this.down * this.itemHeight}px 0 ${Math.max(
        (this.items.length - this.down) * this.itemHeight,
        0
      )}px 0`
    }
  },
  created(){
    this.viewportHeight = this.$parent.$el.clientHeight || document.body.clientHeight
  },
  methods:{
      handler(e){
        this.scrollTop = e.target.scrollTop
      }
  }
};
</script>
<style scoped lang="less">
.virtual-list {
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
}
</style>
