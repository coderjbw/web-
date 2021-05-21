<template>
  <div class="ebookmenu">
    <div class="icon-wrapper">
      <span class="icon-menu"></span>
    </div>
    <div class="icon-wrapper">
      <span class="icon-progress"></span>
    </div>
    <div class="icon-wrapper">
      <span class="icon-bright"></span>
    </div>
    <div class="icon-wrapper">
      <span class="icon-A"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EbookMenu"
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/style/global";

.ebookmenu{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /*background-color: #0b97c4;*/
  width: 100%;
  height: px2rem(48);
  box-shadow:0 px2rem(-8) px2rem(8) rgba(0,0,0,0.15);
  font-size: px2rem(22);
  display: flex;
}
  .icon-wrapper{
    flex: 1;
    @include center;
    .icon-progress{
      font-size: px2rem(24);
    }
    .icon-A{
      font-size: px2rem(20);
    }
  }
</style>