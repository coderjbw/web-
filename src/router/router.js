import Vue from 'vue'
import Router from 'vue-router'
import ebook from '../views/ebook/index'
import eBookReader from '../components/ebook/EbookReader'
Vue.use(Router)

export default new Router({
  routes: [{
    path:'',
    redirect:'/ebook'
  },{
    path:'/ebook',
    component:ebook,
    children:[
      {
        path:':filename',
        component:eBookReader
      }
    ]
  }
  ],

})
