import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
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
import JianzhuXiangmu from '@/components/JianzhuXiangmu'
import ZhizaoXiangmu from '@/components/ZhizaoXiangmu'
import CaiGou from '@/components/CaiGou'
import HuanKuan from '@/components/HuanKuan'
import JinduUpdate from '@/components/JinduUpdate'
import Ruku from '@/components/Ruku'
import Chuku from '@/components/Chuku'
import Kucun from '@/components/Kucun'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
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
    {
      path: '/JianzhuXiangmu',
      name: 'JianzhuXiangmu',
      component: JianzhuXiangmu
    },
    {
      path: '/ZhizaoXiangmu',
      name: 'ZhizaoXiangmu',
      component: ZhizaoXiangmu
    },
    {
      path: '/CaiGou',
      name: 'CaiGou',
      component: CaiGou
    },
    {
      path: '/HuanKuan',
      name: 'HuanKuan',
      component: HuanKuan
    },
    {
      path: '/JinduUpdate',
      name: 'JinduUpdate',
      component: JinduUpdate
    },
    {
      path: '/Ruku',
      name: 'Ruku',
      component: Ruku
    },
    {
      path: '/Chuku',
      name: 'Chuku',
      component: Chuku
    },
    {
      path: '/Kucun',
      name: 'Kucun',
      component: Kucun
    },
  ]
})
