<template>
  <div class="ebook">
    <EbookTitle></EbookTitle>
    <ebook-reader></ebook-reader>
    <EbookMenu></EbookMenu>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EbookReader'
  import EbookTitle from '../../components/ebook/EbookTitle'
  import EbookMenu from '../../components/ebook/EbookMenu'
  export default {
    name: "index",
    components:{
      EbookReader,
      EbookTitle,
      EbookMenu
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/style/global";
</style>