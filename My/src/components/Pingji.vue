<template>
<div>
  <!-- 客户管理/材料供应商信息管理/供应商评级管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>材料供应商信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>供应商评级管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin : 8px;">
      <el-col :span="10">
        <el-button type="warning" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
  @row-click="handdle"
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterSupplier_name || data.supplier_name.toLowerCase().includes(filterSupplier_name.toString().toLowerCase()))
      &(!filterYear || data.year.toLowerCase().includes(filterYear.toString().toLowerCase()))
      &(!filterQuarter || data.quarter.toLowerCase().includes(filterQuarter.toString().toLowerCase()))
      &(!filterTotal_points || data.total_points.toLowerCase().includes(filterTotal_points.toString().toLowerCase()))
      )" border style="width: 100%">
    <el-table-column min-width='70' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterId"> </el-input>
                    <div slot="reference"> <label> 编号 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.id}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='70' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterSupplier_name"> </el-input>
                    <div slot="reference"> <label> 供应商名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.supplier_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterYear"> </el-input>
                    <div slot="reference"> <label> 年度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.year}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterQuarter"> </el-input>
                    <div slot="reference"> <label> 季度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.quarter}}
                </div>
            </template>
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
    <el-table-column min-width='130' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTotal_points"> </el-input>
                    <div slot="reference"> <label> 最终评级总分 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.total_points}}
                </div>
            </template>
    </el-table-column>
     <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300"
      align="center">
      <template slot-scope="scope">
        <el-button @click.stop="kanClick(scope.$index,tableData)" type="success" plain round size="small">查看</el-button>
        <el-button type="success" @click.stop="updateClick(scope.$index,tableData)" plain round size="small">修改</el-button>
        <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" plain round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="45%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="Pingji"
        status-icon :rules="rules"
        ref="Pingji"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="18">
           <el-row>
         <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="Pingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量评分" prop="quantify_points" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="Pingji.quantify_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Pingji.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Pingji.year" clearable placeholder="请选择" >
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
            <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>在江西省内履约、产品质量、口碑情况</span>
          <el-form-item label="满分10分" prop="score2" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>总体征信情况</span>
          <el-form-item label="满分5分" prop="score3" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>经营管理情况（生产管理、财务管理、销售管理）</span>
          <el-form-item label="满分5分" prop="score4" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>行业地位</span>
          <el-form-item label="满分5分" prop="score5" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score5"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="Pingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="Pingji.total_points"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="Pingji.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col>   
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('Pingji')">{{buttonText}}</el-button>
        </el-form-item>
         </el-col>  
      </el-row>
          </el-col>  
        <el-col :span="6">
          <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :size="activity.size"
            :timestamp="activity.createdAt"
            :color="activity.color"
            >
            {{activity.nodeName}}
          </el-timeline-item>
          </el-timeline></el-col> 
      </el-row>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
import PingjiService from "../services/PingjiService"
import CailiaogysService from "../services/CailiaogysService"
import PingjiState from "../services/PingjiState"
import PingjiStatelog from "../services/PingjiStatelog"
  export default {
    created () {
          this.tableonload();
      },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
    methods: {
      //关闭弹框的事件
    closeDialog(){
      this.buttonText="确定"
      this.isshow=true;
    },
      selectState(){
         PingjiState.getAll()
        .then(response => {
          this.activities=response.data
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      selectlog(){
        console.log(this.qiyeid)
        let pingjiId=this.qiyeid
          PingjiStatelog.findByLog(pingjiId).then(response => {
            console.log(response.data)
              for (let j = 0; j < this.activities.length; j++) {
                    let old = this.activities[j].id;
                        for (var i = 0; i < response.data.length; i++) {
                            let pre = response.data[i].newstateid;
                                if (pre === old) {
                                    this.activities[j].color='#0bbd87'
                                     this.activities[j].createdAt=response.data[j].createdAt  
                                }
                            }
                       }
        })
        .catch(e => {
          console.log(e);
        });   
      },
      handdle(row, event, column) { 
        this.dialogFormVisible=true
        this.annui=false
        this.dialogTitle = "examine";
        this.selectState();
          let pa=row.id;
          this.paa=pa
           PingjiService.get(pa)
         .then(response => {
            if(response.data.PingjiState.lastone===1){
                  this.isshow=false;
                }
          this.qiyeid=pa
          this.nextState=response.data.PingjiState.nextStateid
          this.oldStateid=response.data.PingjiState.id
          this.selectlog();
          // console.log(this.activities)
                this.Pingji=response.data;
                this.Pingji.nodeName = response.data.PingjiState.nodeName;
                this.validated=true;
                this.buttonText = response.data.PingjiState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              pingjiId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              PingjiStatelog.create(data).then(response => {
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      getfor(row,column){
            return row.PingjiState.nodeName;
          },
     test: function () {
            this.Pingji.qualitative_points=this.Pingji.score1+this.Pingji.score2+this.Pingji.score3+this.Pingji.score4+this.Pingji.score5
            this.Pingji.total_points=this.Pingji.quantify_points+this.Pingji.qualitative_points
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
          this.Pingji={},
          this.dialogFormVisible=true
          this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
          this.dialogTitle = "addData";
           CailiaogysService.getAll()
        .then(response => {
          this.result = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       addservice(){
              this.dialogFormVisible=false;
          var data = {
        supplier_name: this.Pingji.supplier_name,
        year: this.Pingji.year,
        quarter: this.Pingji.quarter,
        score1:this.Pingji.score1,
        score2:this.Pingji.score2,
        score3:this.Pingji.score3,
        score4:this.Pingji.score4,
        score5:this.Pingji.score5,
        quantify_points:this.Pingji.quantify_points,
        qualitative_points:this.Pingji.qualitative_points,
        total_points:this.Pingji.total_points,
        nodeName:this.Pingji.nodeName
        }
        PingjiService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              pingjiId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.PingjiStateId,
              operateId:1,
              }
              PingjiStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(Pingji){
          this.$refs[Pingji].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else if(this.dialogTitle ==  "kanData"){
        this.kanClick();
      }else if(this.dialogTitle ==  "examine"&&valid){
        this.dialogFormVisible=false;
        this.updateState();
        this.addStatelog();
      }else{
        return false
      }
        });
        },
         selectlogs(){
        let pingjiId=this.pa
          PingjiStatelog.findByLog(pingjiId).then(response => {
            console.log(response.data)
              for (let j = 0; j < this.activities.length; j++) {
                    let old = this.activities[j].id;
                        for (var i = 0; i < response.data.length; i++) {
                            let pre = response.data[i].newstateid;
                                if (pre === old) {
                                    this.activities[j].color='#0bbd87'
                                     this.activities[j].createdAt=response.data[j].createdAt  
                                }
                            }
                       }
       
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });   
      },
       kanClick(index,row){
          this.dialogFormVisible=true
          this.dialogTitle = "kanData";
         this.annui=true;
          this.validated=true;
          this.selectState();
          this.pa=this.tableData[index].id;
          this.selectlogs();
           PingjiService.get(this.pa)
         .then(response => {
                this.Pingji=response.data;
                this.Pingji.nodeName = response.data.PingjiState.nodeName;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true
           this.dialogTitle = "updataData";
            this.annui=false;
           this.validated=false;
           this.liucheng=true,
           this.selectState();
          this.pa=this.tableData[index].id;
          this.selectlogs();
           PingjiService.get(this.pa)
         .then(response => {
                this.Pingji=response.data;
                this.Pingji.nodeName = response.data.PingjiState.nodeName;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
            this.dialogFormVisible=false;
            var data = {
            id:this.Pingji.id,
            supplier_name: this.Pingji.supplier_name,
            year: this.Pingji.year,
            quarter: this.Pingji.quarter,
            score1:this.Pingji.score1,
            score2:this.Pingji.score2,
            score3:this.Pingji.score3,
            score4:this.Pingji.score4,
            score5:this.Pingji.score5,
            quantify_points:this.Pingji.quantify_points,
            qualitative_points:this.Pingji.qualitative_points,
            total_points:this.Pingji.total_points,
            nodeName:this.Pingji.nodeName
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
        updateState(index,row){
        var data = {
           PingjiStateId:this.nextState
          }
          PingjiService.update(this.paa,data)
        .then(response => {
          this.tableonload();
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              PingjiService.delete(pa)
              .then(response => {
                this.tableonload();
                console.log(response.pa);
              })
              .catch(e => {
                console.log(e);
              });
       },
        delClick(index,row){    
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delClickconfirm(index);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
       },
      handleClick(row) {
        console.log(row);
      },
      filterCurrent(value, row){
            return row.current_process === value;
        }
    },

    data() {
      return {
        pa:'',
        paa:'',
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        oldStateid:'',
        nextState:'',
        annui:'',
        isshow:true,
        validated:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "评级信息",
      },
        dialogTitle:"",
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          supplier_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
          ],
          year: [
            { required: true, message: '请选择年份', trigger: 'change' }
          ],
          quarter: [
            { required: true, message: '请选择季度', trigger: 'change' }
          ],
          current_process: [
            { required: true, message: '请输入', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        Pingji:{},
        filterId:'',
        filterSupplier_name:'',
        filterYear:'',
        filterQuarter:'',
        filterTotal_points:'',
        dialogFormVisible: false,
      }
    }
  }
</script>