<template>
<div>
  <!-- 客户管理/材料供应商信息管理/供应商评级管理 -->
      <el-col>
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="编号"
      width="60"
      align="center">
    </el-table-column>
    <el-table-column
      prop="qiye_name"
      label="企业名称"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="year"
      label="年度"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="quarter"
      label="季度"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="total_assets"
      label="总资产"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="net_assets"
      label="净资产"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="Loar"
      label="资产负债率%"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="quick_ratio"
      label="速动比率"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="current_ratio"
      label="流动比率"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="days_inventory"
      label="存货周转天数"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="floating_debt"
      label="流动债务在总负债中占比%"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="rate_margin"
      label="毛利率%"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="ROE"
      label="ROE"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="accounts_receivable"
      label="应收账款"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="accounts_receivableDay"
      label="应收账款周转天数"
      width="100"
      align="center">
    </el-table-column>
     <el-table-column
      prop="accounts_payable"
      label="应付账款"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="accounts_payableDay"
      label="应付账款周转天数"
      width="100"
      align="center">
    </el-table-column>
     <el-table-column
      prop="operating_income"
      label="营业收入"
      width="100"
      align="center">
    </el-table-column>
     <el-table-column
      prop="nonbusiness_income"
      label="营业外收入"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="net_profits"
      label="净利润"
      width="100"
      align="center">
    </el-table-column>
     <el-table-column
      prop="total_money"
      label="经营活动产生的现金流量净额"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="total_money1"
      label="投资活动产生的现金流量净额"
      width="150"
      align="center">
    </el-table-column>
     <el-table-column
      prop="total_money2"
      label="筹资活动产生的现金流量净额"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="current_process"
      label="当前流程"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="250"
      align="center">
      <template slot-scope="scope">
        <el-button @click="kanClick(scope.$index,tableData)" type="primary" round size="small">查看</el-button>
        <el-button type="primary" @click="updateClick(scope.$index,tableData)" round size="small">修改</el-button>
        <el-button type="danger" @click="delClick(scope.$index,tableData)" round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加弹出层 -->
  <el-dialog title="添加财务数据" :visible.sync="dialogFormVisible">
      <el-form
        :model="addfinance"
        status-icon :rules="rules"
        ref="addfinance"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="addfinance.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select v-model="addfinance.year" clearable placeholder="请选择" >
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select v-model="addfinance.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总资产" prop="total_assets" :label-width="formLabelWidth">
            <el-input v-model="addfinance.total_assets"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="净资产" prop="net_assets" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.net_assets"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="资产负债率%" prop="Loar" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.Loar"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="速动比率" prop="quick_ratio" :label-width="formLabelWidth">
           <el-input v-model.number="addfinance.quick_ratio"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="流动比率" prop="current_ratio" :label-width="formLabelWidth">
           <el-input v-model.number="addfinance.current_ratio"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="存货周转天数" prop="days_inventory" :label-width="formLabelWidth">
           <el-input v-model.number="addfinance.days_inventory"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>流动债务在总负债中占比%</span>
          <el-form-item label="" prop="floating_debt" :label-width="formLabelWidth">
           <el-input v-model.number="addfinance.floating_debt"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="毛利率" prop="rate_margin" :label-width="formLabelWidth">
           <el-input v-model.number="addfinance.rate_margin"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="ROE" prop="ROE" :label-width="formLabelWidth">
           <el-input v-model.number="addfinance.ROE"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="应收账款" prop="accounts_receivable" :label-width="formLabelWidth">
           <el-input v-model.number="addfinance.accounts_receivable"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>应收账款周转天数</span>
          <el-form-item label="" prop="accounts_receivableDay" :label-width="formLabelWidth">
           <el-input v-model.number="addfinance.accounts_receivableDay"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="应付账款" prop="accounts_payable" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.accounts_payable"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>应付账款周转天数</span>
          <el-form-item label="" prop="accounts_payableDay" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.accounts_payableDay"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="营业收入" prop="operating_income" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.operating_income"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业外收入" prop="nonbusiness_income" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.nonbusiness_income"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="净利润" prop="net_profits" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.net_profits"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>经营活动产生的现金流量净额</span>
          <el-form-item label="" prop="total_money" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.total_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <span>投资活动产生的现金流量净额</span>
           <el-form-item label="" prop="total_money1" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.total_money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>筹资活动产生的现金流量净额</span>
          <el-form-item label="" prop="total_money2" :label-width="formLabelWidth">
            <el-input v-model.number="addfinance.total_money2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addfinance.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
          <el-button @click="resetForm('addfinance')">重置</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="修改财务数据" width="50%" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatefinance"
        status-icon :rules="rules"
        ref="updatefinance"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="updatefinance.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select v-model="updatefinance.year" clearable placeholder="请选择" >
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select v-model="updatefinance.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总资产" prop="total_assets" :label-width="formLabelWidth">
            <el-input v-model="updatefinance.total_assets"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="净资产" prop="net_assets" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.net_assets"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="资产负债率%" prop="Loar " :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.Loar "></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="速动比率" prop="quick_ratio" :label-width="formLabelWidth">
           <el-input v-model.number="updatefinance.quick_ratio"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="流动比率" prop="current_ratio" :label-width="formLabelWidth">
           <el-input v-model.number="updatefinance.current_ratio"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="存货周转天数" prop="days_inventory" :label-width="formLabelWidth">
           <el-input v-model.number="updatefinance.days_inventory"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>流动债务在总负债中占比</span>
          <el-form-item label="%" prop="floating_debt" :label-width="formLabelWidth">
           <el-input v-model.number="updatefinance.floating_debt"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="毛利率" prop="rate_margin" :label-width="formLabelWidth">
           <el-input v-model.number="updatefinance.rate_margin"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="ROE" prop="ROE" :label-width="formLabelWidth">
           <el-input v-model.number="updatefinance.ROE"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="应收账款" prop="accounts_receivable  " :label-width="formLabelWidth">
           <el-input v-model.number="updatefinance.accounts_receivable  "></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>应收账款周转天数</span>
          <el-form-item label="" prop="accounts_receivableDay" :label-width="formLabelWidth">
           <el-input v-model.number="updatefinance.accounts_receivableDay"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="应付账款" prop="accounts_payable" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.accounts_payable"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>应付账款周转天数</span>
          <el-form-item label="" prop="accounts_payableDay" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.accounts_payableDay"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="营业收入" prop="operating_income" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.operating_income"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业外收入" prop="nonbusiness_income" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.nonbusiness_income"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="净利润" prop="net_profits" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.net_profits"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>经营活动产生的现金流量净额</span>
          <el-form-item label="" prop="total_money" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.total_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <span>投资活动产生的现金流量净额</span>
           <el-form-item label="" prop="total_money1" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.total_money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>筹资活动产生的现金流量净额</span>
          <el-form-item label="" prop="total_money2" :label-width="formLabelWidth">
            <el-input v-model.number="updatefinance.total_money2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatefinance.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="updatesubmit()">立即修改</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 查看弹出层 -->
  <el-dialog title="查看财务数据" width="50%" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanfinance"
        status-icon :rules="rules"
        ref="kanfinance"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="kanfinance.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select v-model="kanfinance.year" clearable placeholder="请选择" >
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select v-model="kanfinance.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总资产" prop="total_assets" :label-width="formLabelWidth">
            <el-input v-model="kanfinance.total_assets"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="净资产" prop="net_assets" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.net_assets"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="资产负债率%" prop="Loar " :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.Loar "></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="速动比率" prop="quick_ratio" :label-width="formLabelWidth">
           <el-input v-model.number="kanfinance.quick_ratio"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="流动比率" prop="current_ratio" :label-width="formLabelWidth">
           <el-input v-model.number="kanfinance.current_ratio"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="存货周转天数" prop="days_inventory" :label-width="formLabelWidth">
           <el-input v-model.number="kanfinance.days_inventory"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>流动债务在总负债中占比</span>
          <el-form-item label="%" prop="floating_debt" :label-width="formLabelWidth">
           <el-input v-model.number="kanfinance.floating_debt"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="毛利率" prop="rate_margin" :label-width="formLabelWidth">
           <el-input v-model.number="kanfinance.rate_margin"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="ROE" prop="ROE" :label-width="formLabelWidth">
           <el-input v-model.number="kanfinance.ROE"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="应收账款" prop="accounts_receivable  " :label-width="formLabelWidth">
           <el-input v-model.number="kanfinance.accounts_receivable  "></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>应收账款周转天数</span>
          <el-form-item label="" prop="accounts_receivableDay" :label-width="formLabelWidth">
           <el-input v-model.number="kanfinance.accounts_receivableDay"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="应付账款" prop="accounts_payable" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.accounts_payable"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>应付账款周转天数</span>
          <el-form-item label="" prop="accounts_payableDay" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.accounts_payableDay"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="营业收入" prop="operating_income" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.operating_income"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业外收入" prop="nonbusiness_income" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.nonbusiness_income"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="净利润" prop="net_profits" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.net_profits"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>经营活动产生的现金流量净额</span>
          <el-form-item label="" prop="total_money" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.total_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <span>投资活动产生的现金流量净额</span>
           <el-form-item label="" prop="total_money1" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.total_money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>筹资活动产生的现金流量净额</span>
          <el-form-item label="" prop="total_money2" :label-width="formLabelWidth">
            <el-input v-model.number="kanfinance.total_money2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanfinance.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import FinancialdataService from "../services/FinancialdataService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
         FinancialdataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
           this.dialogFormVisible=true
       },
       addsubmit(){
         this.dialogFormVisible=false;
          var data = {
        qiye_name: this.addfinance.qiye_name,
        year: this.addfinance.year,
        quarter: this.addfinance.quarter,
        total_assets:this.addfinance.total_assets,
        net_assets:this.addfinance.net_assets,
        Loar:this.addfinance.Loar,
        quick_ratio:this.addfinance.quick_ratio,
        current_ratio:this.addfinance.current_ratio,
        days_inventory:this.addfinance.days_inventory,
        floating_debt:this.addfinance.floating_debt,
        rate_margin:this.addfinance.rate_margin,
        ROE:this.addfinance.ROE,
        accounts_receivable:this.addfinance.accounts_receivable,
        accounts_receivableDay:this.addfinance.accounts_receivableDay,
        accounts_payable:this.addfinance.accounts_payable,
        accounts_payableDay:this.addfinance.accounts_payableDay,
        operating_income:this.addfinance.operating_income,
        nonbusiness_income:this.addfinance.nonbusiness_income,
        net_profits:this.addfinance.net_profits,
        total_money:this.addfinance.total_money,
        total_money1:this.addfinance.total_money1,
        total_money2:this.addfinance.total_money2,
        current_process:this.addfinance.current_process
        }
        FinancialdataService.create(data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        },
       kanClick(index,row){
          this.dialogFormVisible2=true
          let pa=this.tableData[index].id;
           FinancialdataService.get(pa)
         .then(response => {
                this.kanfinance=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true
           let pa=this.tableData[index].id;
           FinancialdataService.get(pa)
         .then(response => {
                this.updatefinance=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
          this.dialogFormVisible1=false;
          var data = {
            id:this.updatefinance.id,
            qiye_name: this.updatefinance.qiye_name,
            year: this.updatefinance.year,
            quarter: this.updatefinance.quarter,
            total_assets:this.updatefinance.total_assets,
            net_assets:this.updatefinance.net_assets,
            Loar:this.updatefinance.Loar,
            quick_ratio:this.updatefinance.quick_ratio,
            current_ratio:this.updatefinance.current_ratio,
            days_inventory:this.updatefinance.days_inventory,
            floating_debt:this.updatefinance.floating_debt,
            rate_margin:this.updatefinance.rate_margin,
            ROE:this.updatefinance.ROE,
            accounts_receivable:this.updatefinance.accounts_receivable,
            accounts_receivableDay:this.updatefinance.accounts_receivableDay,
            accounts_payable:this.updatefinance.accounts_payable,
            accounts_payableDay:this.updatefinance.accounts_payableDay,
            operating_income:this.updatefinance.operating_income,
            nonbusiness_income:this.updatefinance.nonbusiness_income,
            net_profits:this.updatefinance.net_profits,
            total_money:this.updatefinance.total_money,
            total_money1:this.updatefinance.total_money1,
            total_money2:this.updatefinance.total_money2,
            current_process:this.updatefinance.current_process
        }
          FinancialdataService.update(data.id,data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
        delClick(index,row){
              let pa=this.tableData[index].id;
              FinancialdataService.delete(pa)
              .then(response => {
                this.tableonload();
                console.log(response.pa);
              })
              .catch(e => {
                console.log(e);
              });
        //   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });          
        // });
       },
    resetForm(addfinance) {
      this.$refs[addfinance].resetFields();
    },
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        TravelType:1,
        formLabelWidth: "100px",
        rules:{},
        tableData:[],
        addfinance:{},
        updatefinance:{},
        kanfinance:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>