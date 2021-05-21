<template>
  <div class="ebookreader">
    <div id="read">

    </div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  import {mapGetters} from 'vuex'



  global.epub = Epub
  export default {
    name: "EbookReader",

    mounted(){
      const filename = this.$route.params.filename.split('|').join('/')
      this.$store.dispatch('setFileName',filename).then(()=>{
        this.initEpub()
      })
    },
    computed:{
        ...mapGetters(['filename'])
    },
    methods:{
      initEpub(){
        const baseUrl = 'http://192.168.31.102:9000/epub/'+this.filename+'.epub'
        // console.log(baseUrl)
        this.book = new Epub(baseUrl)
        this.rendition  = this.book.renderTo('read',{
          width:innerWidth,
          height:innerHeight,
          // method:'default'
        })
        this.rendition.display()
        this.rendition.on('touchstart',event=>{
          console.log(event)
          this.touchstartx = event.changedTouches[0].clientX
          this.touchstarttime = event.timeStamp
        })
        this.rendition.on('touchend',event=>{
          console.log(event)
          this.touchendx = event.changedTouches[0].clientX
          this.touchendtime = event.timeStamp
          const offsetx = this.touchendx - this.touchstartx
          const time = this.touchendtime - this.touchstarttime
          if(offsetx>40 && time<500){
            this.prevpage()
          }else if(offsetx<-40 && time<500){
            this.nextpage()
          }else {
            this.showTileAndMenu()
          }
          event.stopPropagation()
          event.preventDefault()
        })
      },
      prevpage(){
        if(this.rendition){
          this.rendition.prev()
        }
      },
      nextpage(){
        if(this.rendition){
          this.rendition.next()
        }
      },
      showTileAndMenu(){}
    }
  }
</script>

<style scoped>

</style>