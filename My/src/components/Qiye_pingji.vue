<template>
<div>
  <!-- 客户管理/企业信息管理/建筑企业评级 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>客户管理</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>建筑企业评级</el-breadcrumb-item>
      </el-breadcrumb>
  <el-row>
    <el-col :span="6">
          <el-button type="primary" @click="openFrom()">添加</el-button>
        </el-col>
  </el-row>
  <el-table
  @row-click="handdle"
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
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
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterQiye_name"> </el-input>
                    <div slot="reference"> <label> 企业名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.qiye_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="trade" label="行业" width="100" align="center" :filters="[{text:'建筑业', value:'建筑业'},{text:'制造业', value:'制造业'},{text:'其他', value:'其他'}]" :filter-method="filterTrade">
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
    <!-- <el-table-column prop="current_process" label="当前流程" width="120" align="center" :filters="[{text:'通过', value:'通过'},{text:'拒绝', value:'拒绝'},{text:'审核中', value:'审核中'}]" :filter-method="filterCurrent">
    </el-table-column> -->
    <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="250"
      align="center">
      <template slot-scope="scope">
        <el-button @click.stop="kanClick(scope.$index,tableData)" type="primary" round size="small">查看</el-button>
        <el-button type="primary" @click.stop="updateClick(scope.$index,tableData)" round size="small">修改</el-button>
        <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="50%" :visible.sync="dialogFormVisible" @close='closeDialog'>
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
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="Pingji.qiye_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.register_name" :value="item.register_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Pingji.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
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
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="偿债能力:满分30分" prop="score1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="盈利能力:满分30分" prop="score2" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="现金流量:满分20分" prop="score3" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="运营能力:满分20分" prop="score4" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test" v-model.number="Pingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="股东背景:满分20分" prop="score5" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test1" v-model.number="Pingji.score5"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="重大事件:满分25分" prop="score6" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test1" v-model.number="Pingji.score6"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="行业口碑:满分10分" prop="score7" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test1" v-model.number="Pingji.score7"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="重大事故:满分20分" prop="score8" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test1" v-model.number="Pingji.score8"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="过往经验:满分25分" prop="score9" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="test1" v-model.number="Pingji.score9"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量总分" prop="quantify_points " :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="Pingji.quantify_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="Pingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最终评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="Pingji.total_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
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
          <!-- <el-button type="primary" @click="submit('Pingji')">确定</el-button> -->
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
          </el-timeline>
        </el-col>
        </el-row>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
import QiyeService from "../services/QiyeService"
import QiyePingjiService from "../services/QiyePingjiService"
import QiyepingjiStateService from "../services/QiyepingjiStateService"
import QiyepingjiStatelogService from "../services/QiyepingjiStatelogService"
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
         QiyepingjiStateService.getAll()
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
        let qiyepingjiId=this.qiyeid
          QiyepingjiStatelogService.findByLog(qiyepingjiId).then(response => {
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
           QiyePingjiService.get(pa)
         .then(response => {
            if(response.data.QiyepingjiState.lastone===1){
                  this.isshow=false;
                }
          this.qiyeid=pa
          this.nextState=response.data.QiyepingjiState.nextStateid
          this.oldStateid=response.data.QiyepingjiState.id
          this.selectlog();
          // console.log(this.activities)
                this.Pingji=response.data;
                this.Pingji.nodeName = response.data.QiyepingjiState.nodeName;
                this.validated=true;
                this.buttonText = response.data.QiyepingjiState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              qiyepingjiId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              QiyepingjiStatelogService.create(data).then(response => {
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      getfor(row,column){
            return row.QiyepingjiState.nodeName;
          },
      test: function () {
            this.Pingji.quantify_points=this.Pingji.score1+this.Pingji.score2+this.Pingji.score3+this.Pingji.score4
        },
        test1: function () {
            this.Pingji.qualitative_points=this.Pingji.score5+this.Pingji.score6+this.Pingji.score7+this.Pingji.score8+this.Pingji.score9,
this.Pingji.total_points=this.Pingji.qualitative_points+this.Pingji.quantify_points
        },
      async tableonload(){
         QiyePingjiService.getAll()
         .then(response => {
          this.tableData = response.data;
          // console.log(response.data);
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
           QiyeService.getAll()
           .then(response =>{
 this.result=response.data;
           }).catch(e => {
          console.log(e);
        });
       },
       addservice(){
            this.dialogFormVisible=false;
          var data = {
        qiye_name: this.Pingji.qiye_name,
        trade:this.Pingji.trade,
        year: this.Pingji.year,
        quarter: this.Pingji.quarter,
        score1:this.Pingji.score1,
        score2:this.Pingji.score2,
        score3:this.Pingji.score3,
        score4:this.Pingji.score4,
        score5:this.Pingji.score5,
        score6:this.Pingji.score6,
        score7:this.Pingji.score7,
        score8:this.Pingji.score8,
        score9:this.Pingji.score9,
        quantify_points:this.Pingji.quantify_points,
        qualitative_points:this.Pingji.qualitative_points,
        total_points:this.Pingji.total_points,
        nodeName:this.Pingji.nodeName
        }
        QiyePingjiService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              qiyepingjiId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.QiyepingjiStateId,
              operateId:1,
              }
              QiyepingjiStatelogService.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
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
        let qiyepingjiId=this.pa
          QiyepingjiStatelogService.findByLog(qiyepingjiId).then(response => {
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
           QiyePingjiService.get(this.pa)
         .then(response => {
                this.Pingji=response.data;
                this.Pingji.nodeName = response.data.QiyepingjiState.nodeName; 
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
           QiyePingjiService.get(this.pa)
         .then(response => {
                this.Pingji=response.data;
                this.Pingji.nodeName = response.data.QiyepingjiState.nodeName;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible=false;
          var data = {
            id:this.Pingji.id,
            qiye_name: this.Pingji.qiye_name,
            trade:this.Pingji.trade,
            year: this.Pingji.year,
            quarter: this.Pingji.quarter,
            score1:this.Pingji.score1,
            score2:this.Pingji.score2,
            score3:this.Pingji.score3,
            score4:this.Pingji.score4,
            score5:this.Pingji.score5,
            score6:this.Pingji.score6,
            score7:this.Pingji.score7,
            score8:this.Pingji.score8,
            score9:this.Pingji.score9,
            quantify_points:this.Pingji.quantify_points,
            qualitative_points:this.Pingji.qualitative_points,
            total_points:this.Pingji.total_points,
            nodeName:this.Pingji.nodeName
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
       updateState(index,row){
        var data = {
           QiyepingjiStateId:this.nextState
          }
          QiyePingjiService.update(this.paa,data)
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
              QiyePingjiService.delete(pa)
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
      filterTrade(value, row){
            return row.trade === value;
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
        examine: "企业评级信息",
      },
        dialogTitle:"",
        TravelType:1,
        formLabelWidth: "150px",
        rules:{
          qiye_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
          ],
          trade: [
            { required: true, message: '请选择行业', trigger: 'change' }
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
        filterQiye_name:'',
        filterYear:'',
        filterQuarter:'',
        filterTotal_points:'',
        dialogFormVisible: false,
      }
    }
  }
</script>