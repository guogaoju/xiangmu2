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
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="supplier_name"
      label="供应商名称"
      width="250"
      align="center">
    </el-table-column>
    <el-table-column
      prop="year"
      label="年度"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="quarter"
      label="季度"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="quantify_points"
      label="定量得分"
      width="150"
      align="center">
    </el-table-column>
     <el-table-column
      prop="qualitative_points"
      label="定性得分"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="total_points"
      label="评级总分"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="current_process"
      label="当前流程"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300"
      align="center">
      <template slot-scope="scope">
        <el-button @click="kanClick(scope.$index,tableData)" type="primary" round size="small">查看</el-button>
        <el-button type="primary" @click="updateClick(scope.$index,tableData)" round size="small">修改</el-button>
        <el-button type="danger" @click="delClick(scope.$index,tableData)" round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加弹出层 -->
  <el-dialog title="添加供应商评级" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="addPingji"
        status-icon :rules="rules"
        ref="addPingji"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-input v-model="addPingji.supplier_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量评分" prop="quantify_points" :label-width="formLabelWidth">
            <el-input v-model.number="addPingji.quantify_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
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
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>是否与城投公司或南昌县国有平台有过合作</span>
          <el-form-item label="满分5分" prop="score1" :label-width="formLabelWidth">
            <el-input v-model.number="addPingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>在江西省内履约、产品质量、口碑情况</span>
          <el-form-item label="满分10分" prop="score2" :label-width="formLabelWidth">
            <el-input v-model.number="addPingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>总体征信情况</span>
          <el-form-item label="满分5分" prop="score3" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>经营管理情况（生产管理、财务管理、销售管理）</span>
          <el-form-item label="满分5分" prop="score4" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>行业地位</span>
          <el-form-item label="满分5分" prop="score5" :label-width="formLabelWidth">
           <el-input v-model.number="addPingji.score5"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
             <el-button @click="addsum('addPingji')">定性总评分合计</el-button>
            <el-input v-model.number="addPingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input v-model.number="addPingji.total_points"></el-input>
          </el-form-item>
        </el-col>
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
  <el-dialog title="修改评级" width="45%" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatePingji"
        status-icon :rules="rules"
        ref="updatePingji"
        label-width="100px"
        class="demo-ruleForm"
      >
       <el-form-item label="id" prop="id" :label-width="formLabelWidth">
            <el-input v-bind:readonly="TravelType==1" v-model="updatePingji.id"></el-input>
          </el-form-item>
      <el-row>
         <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-input v-model="updatePingji.supplier_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量评分" prop="quantify_points" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.quantify_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
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
      </el-row>
      <!-- <el-row>
         <el-col :span="12">
           <span>是否与城投公司或南昌县国有平台有过合作</span>
          <el-form-item label="满分5分" prop="score1" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>在江西省内履约、产品质量、口碑情况</span>
          <el-form-item label="满分10分" prop="score2" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>总体征信情况</span>
          <el-form-item label="满分5分" prop="score3" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>经营管理情况（生产管理、财务管理、销售管理）</span>
          <el-form-item label="满分5分" prop="score4" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>行业地位</span>
          <el-form-item label="满分5分" prop="score5" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score5"></el-input>
          </el-form-item>
        </el-col> -->
        <el-row>
         <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
             <el-button @click="addsum('updatePingji')">定性总评分合计</el-button>
            <el-input v-model.number="updatePingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.total_points"></el-input>
          </el-form-item>
        </el-col>
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
  <el-dialog title="查看评级" width="45%" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanPingji"
        status-icon :rules="rules"
        ref="kanPingji"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-input v-model="kanPingji.supplier_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量评分" prop="quantify_points" :label-width="formLabelWidth">
            <el-input v-model.number="kanPingji.quantify_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
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
      </el-row>
      <!-- <el-row>
         <el-col :span="12">
           <span>是否与城投公司或南昌县国有平台有过合作</span>
          <el-form-item label="满分5分" prop="score1" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>在江西省内履约、产品质量、口碑情况</span>
          <el-form-item label="满分10分" prop="score2" :label-width="formLabelWidth">
            <el-input v-model.number="updatePingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>总体征信情况</span>
          <el-form-item label="满分5分" prop="score3" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>经营管理情况（生产管理、财务管理、销售管理）</span>
          <el-form-item label="满分5分" prop="score4" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>行业地位</span>
          <el-form-item label="满分5分" prop="score5" :label-width="formLabelWidth">
           <el-input v-model.number="updatePingji.score5"></el-input>
          </el-form-item>
        </el-col> -->
        <el-row>
         <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
             <!-- <el-button @click="addsum('updatePingji')">定性总评分合计</el-button> -->
            <el-input v-model.number="kanPingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input v-model.number="kanPingji.total_points"></el-input>
          </el-form-item>
        </el-col>
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
import PingjiService from "../services/PingjiService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      addsum(){
this.addPingji.qualitative_points=this.addPingji.score1+this.addPingji.score2+this.addPingji.score3+this.addPingji.score4+this.addPingji.score5,
this.addPingji.total_points=this.addPingji.qualitative_points+this.addPingji.quantify_points
      },
      async tableonload(){
         PingjiService.getAll()
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
        supplier_name: this.addPingji.supplier_name,
        year: this.addPingji.year,
        quarter: this.addPingji.quarter,
        // score1:this.addPingji.score1,
        // score2:this.addPingji.score2,
        // score3:this.addPingji.score3,
        // score4:this.addPingji.score4,
        // score5:this.addPingji.score5,
        quantify_points:this.addPingji.quantify_points,
        qualitative_points:this.addPingji.qualitative_points,
        total_points:this.addPingji.total_points,
        current_process:this.addPingji.current_process
        }
        PingjiService.create(data)
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
           PingjiService.get(pa)
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
           PingjiService.get(pa)
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
            supplier_name: this.updatePingji.supplier_name,
            year: this.updatePingji.year,
            quarter: this.updatePingji.quarter,
            quantify_points:this.updatePingji.quantify_points,
            qualitative_points:this.updatePingji.qualitative_points,
            total_points:this.updatePingji.total_points,
            current_process:this.updatePingji.current_process
        }
          PingjiService.update(data.id,data)
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
              PingjiService.delete(pa)
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