<template>
    <div >
        <div style="width:100%;background-color: #636363; height:50px ; overflow: hidden">
            <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:5%">
                供应链金融管理系统
            </span>
            <!-- <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
                <el-input
                    placeholder="请输入"
                    icon="search"
                    v-model="searchCriteria"
                    :on-icon-click="handleIconClick">
                </el-input>
            </span> -->
            <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>

        <div style="margin-top:5px">
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <div>
                        <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        @select="handleSelect">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>客户管理</span>
                            </template>
                            <el-submenu index="1-1">
                            <template slot="title">企业信息管理</template>
                            <el-menu-item index="1-1-1">企业信息</el-menu-item>
                            <el-menu-item index="1-1-2">建筑企业评级</el-menu-item>
                            <el-menu-item index="1-1-3">企业财务数据</el-menu-item>
                            <el-menu-item index="1-1-4">企业访问记录</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">材料供应商信息管理</template>
                            <el-menu-item index="1-2-1">材料供应商资料</el-menu-item>
                            <el-menu-item index="1-2-2">供应商评级管理</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-3">
                            <template slot="title">核心企业管理</template>
                            <el-menu-item index="1-3-1">核心企业信息</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>项目管理</span>
                            </template>
                            <el-menu-item index="2-1">建筑项目管理</el-menu-item>
                            <el-menu-item index="2-2">制造业项目管理</el-menu-item>
                            <el-menu-item index="2-3">建筑项目信息</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>业务管理</span>
                            </template>
                            <el-menu-item index="3-1">采购管理</el-menu-item>
                            <el-menu-item index="3-2">还款管理</el-menu-item>
                            <el-menu-item index="3-3">建筑项目进度更新</el-menu-item>
                            <el-menu-item index="3-4">采购融资信息</el-menu-item>
                            <el-menu-item index="3-5">数据分析</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>仓库管理</span>
                            </template>
                            <el-menu-item index="4-1">入库记录</el-menu-item>
                            <el-menu-item index="4-2">出库记录</el-menu-item>
                            <el-menu-item index="4-3">库存信息</el-menu-item>
                        </el-submenu>
                         <el-submenu index="5">
                            <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>风险预警管理</span>
                            </template>
                            <el-menu-item index="5-1">风险预警管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>基本资料管理</span>
                            </template>
                            <el-submenu index="6-1">
                            <template slot="title">物料参数</template>
                            <el-menu-item index="6-1-1">地区资料</el-menu-item>
                            <el-menu-item index="6-1-2">物料资料</el-menu-item>
                            </el-submenu>
                            <el-submenu index="6-2">
                            <template slot="title">基本资料</template>
                            <el-menu-item index="6-2-1">计量单位</el-menu-item>
                            <el-menu-item index="6-2-2">物料分类</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <!-- <div>
                        <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id">{{item}}</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div> -->

                    <div style="margin-top:10px">
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                // searchCriteria: '',
                // breadcrumbItems: ['导航一'],
            }
        },

        methods:{
            handleIconClick(ev) {
                console.log(ev);
            },

            handleSelect(key, keyPath){
                switch(key){
                    case '1-1-1':
                        this.$router.push('/Qiye');
                        this.breadcrumbItems  = ['企业信息']
                        break;
                    case '1-1-2':
                        this.$router.push('/Qiye_pingji');
                        this.breadcrumbItems  = ['建筑企业评级']
                        break;
                    case '1-1-3':
                        this.$router.push('/Financialdata');
                        this.breadcrumbItems  = ['企业财务数据']
                        break;
                    case '1-1-4':
                        this.$router.push('/Fangwen');
                        this.breadcrumbItems  = ['企业访问记录']
                        break;
                    case '1-3-1':
                        this.$router.push('/Hexin');
                        this.breadcrumbItems  = ['核心企业信息']
                        break;
                    case '1-2-1':
                        this.$router.push('/CaiLiaogys')
                        this.breadcrumbItems  = ['材料供应商资料']
                        break;
                    case '1-2-2':
                        this.$router.push('/Pingji');
                        this.breadcrumbItems  = ['供应商评级管理']
                        break;
                    case '2-1':
                        this.$router.push('/JianzhuXiangmu');
                        this.breadcrumbItems  = ['建筑项目管理']
                        break;
                    case '2-2':
                        this.$router.push('/ZhizaoXiangmu');
                        this.breadcrumbItems  = ['制造业项目管理']
                        break;
                    case '3-1':
                        this.$router.push('/CaiGou');
                        this.breadcrumbItems  = ['采购管理']
                        break;
                    case '6-1-2':
                        this.$router.push('/Wuliao');
                        this.breadcrumbItems  = ['物料资料']
                        break;
                         case '5-1':
                        this.$router.push('/HelloWorld');
                        this.breadcrumbItems  = ['风险预警管理']
                        break;
                    case '6-2-1':
                        this.$router.push('/Jiliangdanwei');
                        this.breadcrumbItems  = ['计量单位']
                        break;
                    case '6-2-2':
                        this.$router.push('/WuliaoType');
                        this.breadcrumbItems  = ['物料分类']
                        break;
                    default :
                        this.$router.push('/Erro')
                        this.breadcrumbItems  = ['']
                }
            },

        },
    }
</script>