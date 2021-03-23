import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Hexin from '@/components/Hexin'
import CaiLiaogys from '@/components/CaiLiaogys'
import Pingji from '@/components/Pingji'
import Erro from '@/components/Erro'
import Qiye from '@/components/Qiye'
import Fangwen from '@/components/Fangwen'
import Qiye_pingji from '@/components/Qiye_pingji'
import Financialdata from '@/components/Financialdata'
import Wuliao from '@/components/Wuliao'
import Jiliangdanwei from '@/components/Jiliangdanwei'
import WuliaoType from '@/components/WuliaoType'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Erro',
      name: 'Erro',
      component: Erro
    },
    {
      path: '/Hexin',
      name: 'Hexin',
      component: Hexin
    },
    {
      path: '/CaiLiaogys',
      name: 'CaiLiaogys',
      component: CaiLiaogys
    },
    {
      path: '/Pingji',
      name: 'Pingji',
      component: Pingji
    },
    {
      path: '/Qiye',
      name: 'Qiye',
      component: Qiye
    },
    {
      path: '/Fangwen',
      name: 'Fangwen',
      component: Fangwen
    },
    {
      path: '/Qiye_pingji',
      name: 'Qiye_pingji',
      component: Qiye_pingji
    },
    {
      path: '/Financialdata',
      name: 'Financialdata',
      component: Financialdata
    },
    {
      path: '/Wuliao',
      name: 'Wuliao',
      component: Wuliao
    },
    {
      path: '/Jiliangdanwei',
      name: 'Jiliangdanwei',
      component: Jiliangdanwei
    },
    {
      path: '/WuliaoType',
      name: 'WuliaoType',
      component: WuliaoType
    },
  ]
})
