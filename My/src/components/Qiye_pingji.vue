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
      prop="trade"
      label="行业"
      width="100"
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
      prop="score1"
      label="偿债能力"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score2"
      label="盈利能力"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score3"
      label="现金流量"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score4"
      label="运营能力"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score5"
      label="股东背景"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score6"
      label="重大事件"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score7"
      label="行业口碑"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score8"
      label="重大事故"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score9"
      label="过往经验"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="quantify_points"
      label="定量总分"
      width="80"
      align="center">
    </el-table-column>
     <el-table-column
      prop="qualitative_points"
      label="定性总分"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="total_points"
      label="最终评级总分"
      width="100"
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
  <el-dialog title="添加企业评级" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="addPingji"
        status-icon :rules="rules"
        ref="addPingji"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="addPingji.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="addPingji.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select v-model="addPingji.year" clearable placeholder="请选择" >
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select v-model="addPingji.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>偿债能力</span>
          <el-form-item label="满分30分" prop="score1" :label-width="formLabelWidth">
            <el-input v-model.number="addPingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>盈利能力</span>
          <el-form-item label="满分30分" prop="score2" :label-width="formLabelWidth">
            <el-input v-model.number="addPingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>现金流量</span>
          <el-form-item label="满分20分" prop="score3" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>运营能力</span>
          <el-form-item label="满分20分" prop="score4" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>股东背景</span>
          <el-form-item label="满分20分" prop="score5" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score5"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <span>重大事件</span>
          <el-form-item label="满分25分" prop="score6" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score6"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>行业口碑</span>
          <el-form-item label="满分10分" prop="score7" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score7"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <span>重大事故</span>
          <el-form-item label="满分20分" prop="score8" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score8"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>过往经验</span>
          <el-form-item label="满分25分" prop="score9" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score9"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量总分" prop="quantify_points  " :label-width="formLabelWidth">
              <el-button @click="addsum1('addPingji')">定量总分</el-button>
           <el-input v-model.number="addPingji.quantify_points  "></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
             <el-button @click="addsum2('addPingji')">定性总评分合计</el-button>
            <el-input v-model.number="addPingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最终评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input v-model.number="addPingji.total_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addPingji.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
          <el-button @click="resetForm('addPingji')">重置</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改评级弹出层 -->
  <el-dialog title="修改企业评级" width="45%" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatePingji"
        status-icon :rules="rules"
        ref="updatePingji"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="updatePingji.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="updatePingji.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select v-model="updatePingji.year" clearable placeholder="请选择" >
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select v-model="updatePingji.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>偿债能力</span>
          <el-form-item label="满分30分" prop="score1" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>盈利能力</span>
          <el-form-item label="满分30分" prop="score2" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>现金流量</span>
          <el-form-item label="满分20分" prop="score3" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>运营能力</span>
          <el-form-item label="满分20分" prop="score4" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>股东背景</span>
          <el-form-item label="满分20分" prop="score5" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score5"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <span>重大事件</span>
          <el-form-item label="满分25分" prop="score6" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score6"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>行业口碑</span>
          <el-form-item label="满分10分" prop="score7" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score7"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <span>重大事故</span>
          <el-form-item label="满分20分" prop="score8" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score8"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>过往经验</span>
          <el-form-item label="满分25分" prop="score9" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score9"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量总分" prop="quantify_points  " :label-width="formLabelWidth">
              <el-button @click="updatesum1()">定量总分</el-button>
           <el-input v-model.number="updatePingji.quantify_points  "></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
             <el-button @click="updatesum2()">定性总评分合计</el-button>
            <el-input v-model.number="updatePingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最终评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.total_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatePingji.current_process"></el-input>
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
  <!-- 查看企业评级 -->
  <el-dialog title="查看企业评级" width="45%" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanPingji"
        status-icon :rules="rules"
        ref="kanPingji"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="kanPingji.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="kanPingji.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select v-model="kanPingji.year" clearable placeholder="请选择" >
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select v-model="kanPingji.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>偿债能力</span>
          <el-form-item label="满分30分" prop="score1" :label-width="formLabelWidth">
            <el-input v-model.number="kanPingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>盈利能力</span>
          <el-form-item label="满分30分" prop="score2" :label-width="formLabelWidth">
            <el-input v-model.number="kanPingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>现金流量</span>
          <el-form-item label="满分20分" prop="score3" :label-width="formLabelWidth">
           <el-input v-model.number="kanPingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>运营能力</span>
          <el-form-item label="满分20分" prop="score4" :label-width="formLabelWidth">
           <el-input v-model.number="kanPingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>股东背景</span>
          <el-form-item label="满分20分" prop="score5" :label-width="formLabelWidth">
           <el-input v-model.number="kanPingji.score5"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <span>重大事件</span>
          <el-form-item label="满分25分" prop="score6" :label-width="formLabelWidth">
           <el-input v-model.number="kanPingji.score6"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>行业口碑</span>
          <el-form-item label="满分10分" prop="score7" :label-width="formLabelWidth">
           <el-input v-model.number="kanPingji.score7"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <span>重大事故</span>
          <el-form-item label="满分20分" prop="score8" :label-width="formLabelWidth">
           <el-input v-model.number="kanPingji.score8"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>过往经验</span>
          <el-form-item label="满分25分" prop="score9" :label-width="formLabelWidth">
           <el-input v-model.number="kanPingji.score9"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量总分" prop="quantify_points  " :label-width="formLabelWidth">
           <el-input v-model.number="kanPingji.quantify_points  "></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
            <el-input v-model.number="kanPingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最终评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input v-model.number="kanPingji.total_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanPingji.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import QiyePingjiService from "../services/QiyePingjiService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      addsum1(){
this.addPingji.quantify_points=this.addPingji.score1+this.addPingji.score2+this.addPingji.score3+this.addPingji.score4
      },
      addsum2(){
this.addPingji.qualitative_points=this.addPingji.score5+this.addPingji.score6+this.addPingji.score7+this.addPingji.score8+this.addPingji.score9,
this.addPingji.total_points=this.addPingji.qualitative_points+this.addPingji.quantify_points
      },
       updatesum1(){
this.updatePingji.quantify_points=this.updatePingji.score1+this.updatePingji.score2+this.updatePingji.score3+this.updatePingji.score4
      },
      updatesum2(){
this.updatePingji.qualitative_points=this.updatePingji.score5+this.updatePingji.score6+this.updatePingji.score7+this.updatePingji.score8+this.updatePingji.score9,
this.updatePingji.total_points=this.updatePingji.qualitative_points+this.updatePingji.quantify_points
      },
      async tableonload(){
         QiyePingjiService.getAll()
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
        qiye_name: this.addPingji.qiye_name,
        trade:this.addPingji.trade,
        year: this.addPingji.year,
        quarter: this.addPingji.quarter,
        score1:this.addPingji.score1,
        score2:this.addPingji.score2,
        score3:this.addPingji.score3,
        score4:this.addPingji.score4,
        score5:this.addPingji.score5,
        score6:this.addPingji.score6,
        score7:this.addPingji.score7,
        score8:this.addPingji.score8,
        score9:this.addPingji.score9,
        quantify_points:this.addPingji.quantify_points,
        qualitative_points:this.addPingji.qualitative_points,
        total_points:this.addPingji.total_points,
        current_process:this.addPingji.current_process
        }
        QiyePingjiService.create(data)
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
           QiyePingjiService.get(pa)
         .then(response => {
                this.kanPingji=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true
           let pa=this.tableData[index].id;
           QiyePingjiService.get(pa)
         .then(response => {
                this.updatePingji=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
          this.dialogFormVisible1=false;
          var data = {
            id:this.updatePingji.id,
            qiye_name: this.updatePingji.qiye_name,
            trade:this.updatePingji.trade,
            year: this.updatePingji.year,
            quarter: this.updatePingji.quarter,
            score1:this.updatePingji.score1,
            score2:this.updatePingji.score2,
            score3:this.updatePingji.score3,
            score4:this.updatePingji.score4,
            score5:this.updatePingji.score5,
            score6:this.updatePingji.score6,
            score7:this.updatePingji.score7,
            score8:this.updatePingji.score8,
            score9:this.updatePingji.score9,
            quantify_points:this.updatePingji.quantify_points,
            qualitative_points:this.updatePingji.qualitative_points,
            total_points:this.updatePingji.total_points,
            current_process:this.updatePingji.current_process
        }
          QiyePingjiService.update(data.id,data)
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
              QiyePingjiService.delete(pa)
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
    resetForm(addPingji) {
      this.$refs[addPingji].resetFields();
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
        addPingji:{},
        updatePingji:{},
        kanPingji:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>