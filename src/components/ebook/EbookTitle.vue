<template>

    <transition>
      <div class="title-wrapper">
        <div class="left">
          <span class="icon-back"></span>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="icon-shelf"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-cart"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-more"></span>
          </div>
        </div>
      </div>
    </transition>

</template>

<script>
  export default {
    name: "EbookTitle"
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .title-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: px2rem(48);
    /*background-color: #0b97c4;*/
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0,0,0,0.15);
    font-size: px2rem(22);
    display: flex;
    z-index: 222;
  }
  .left{
    flex: 0 0 px2rem(37);
    @include center
  }
  .right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .icon-wrapper{
    flex: 0 0 px2rem(40);
    @include center
  }


</style>