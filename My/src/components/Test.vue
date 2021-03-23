<template>
  <div>
    <!-- 左侧导航页面 -->
      <el-col :span="3">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
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
          <i class="el-icon-location"></i>
          <span>项目管理</span>
        </template>
        <el-menu-item index="2-1">建筑项目管理</el-menu-item>
        <el-menu-item index="2-2">制造业项目管理</el-menu-item>
        <el-menu-item index="2-3">建筑项目信息</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
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
          <i class="el-icon-location"></i>
          <span>仓库管理</span>
        </template>
        <el-menu-item index="4-1">入库记录</el-menu-item>
        <el-menu-item index="4-2">出库记录</el-menu-item>
        <el-menu-item index="4-3">库存信息</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
  </div>

</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>