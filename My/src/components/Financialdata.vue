<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业财务数据</el-breadcrumb-item>
    </el-breadcrumb>
  <!-- 客户管理/企业信息管理/企业财务数据 -->
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
  @row-click="handdle"
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
      &(!filterYear || data.year.toLowerCase().includes(filterYear.toString().toLowerCase()))
      &(!filterQuarter || data.quarter.toLowerCase().includes(filterQuarter.toString().toLowerCase()))
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
  <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="finance"
        status-icon :rules="rules"
        ref="finance"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
            <el-row>
         <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="finance.qiye_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.register_name" :value="item.register_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="finance.year" clearable placeholder="请选择" >
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
            <el-select :disabled="validated" v-model="finance.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总资产" prop="total_assets" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="finance.total_assets"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="净资产" prop="net_assets" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.net_assets"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="资产负债率%" prop="Loar" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.Loar"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="速动比率" prop="quick_ratio" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="finance.quick_ratio"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="流动比率" prop="current_ratio" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="finance.current_ratio"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="存货周转天数" prop="days_inventory" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="finance.days_inventory"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>流动债务在总负债中占比%</span>
          <el-form-item label="" prop="floating_debt" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="finance.floating_debt"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="毛利率" prop="rate_margin" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="finance.rate_margin"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="ROE" prop="ROE" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="finance.ROE"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="应收账款" prop="accounts_receivable" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="finance.accounts_receivable"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>应收账款周转天数</span>
          <el-form-item label="" prop="accounts_receivableDay" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model.number="finance.accounts_receivableDay"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="应付账款" prop="accounts_payable" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.accounts_payable"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>应付账款周转天数</span>
          <el-form-item label="" prop="accounts_payableDay" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.accounts_payableDay"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="营业收入" prop="operating_income" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.operating_income"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业外收入" prop="nonbusiness_income" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.nonbusiness_income"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="净利润" prop="net_profits" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.net_profits"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>经营活动产生的现金流量净额</span>
          <el-form-item label="" prop="total_money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.total_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <span>投资活动产生的现金流量净额</span>
           <el-form-item label="" prop="total_money1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.total_money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <span>筹资活动产生的现金流量净额</span>
          <el-form-item label="" prop="total_money2" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="finance.total_money2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="finance.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col> 
        <el-col :span="12">
        <el-form-item>
           <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('finance')">{{buttonText}}</el-button>
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
import FinancialdataService from "../services/FinancialdataService"
import QiyeService from "../services/QiyeService"
import FinanceState from "../services/FinanceState"
import FinanceStatelog from "../services/FinanceStatelog"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
       //关闭弹框的事件
    closeDialog(){
      this.buttonText="确定"
     
      this.isshow=true;
    },
      selectState(){
         FinanceState.getAll()
        .then(response => {
          this.activities=response.data
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      selectlog(){
        let financeId=this.qiyeid
          FinanceStatelog.findByLog(financeId).then(response => {
            // console.log(response.data)
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
      handdle(row, event, column) { 
        this.dialogFormVisible=true
        this.annui=false
        this.dialogTitle = "examine";
        this.selectState();
          let pa=row.id;
          this.paa=pa
           FinancialdataService.get(pa)
         .then(response => {
            if(response.data.FinanceState.lastone===1){
                  this.isshow=false;
                }
          this.qiyeid=pa
          this.nextState=response.data.FinanceState.nextStateid
          this.oldStateid=response.data.FinanceState.id
          this.selectlog();
          // console.log(this.activities)
                this.finance=response.data;
                this.finance.nodeName = response.data.FinanceState.nodeName;
                this.validated=true;
                this.buttonText = response.data.FinanceState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
       },
       addStatelog(){
         var data = {
           //userid拿不到，默认2
              userId:1,
              financeId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              FinanceStatelog.create(data).then(response => {
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           FinanceStateId:this.nextState
          }
          FinancialdataService.update(this.paa,data)
        .then(response => {
          this.tableonload();
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
      getfor(row,column){
            return row.FinanceState.nodeName;
          },
      async tableonload(){
         FinancialdataService.getAll()
        .then(response => {
          this.tableData = response.data;
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
          this.finance={},
           this.dialogFormVisible=true
           this.selectState();
          this.validated=false;
          this.annui=false;
           this.dialogTitle = "addData";
           QiyeService.getAll()
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
        qiye_name: this.finance.qiye_name,
        year: this.finance.year,
        quarter: this.finance.quarter,
        total_assets:this.finance.total_assets,
        net_assets:this.finance.net_assets,
        Loar:this.finance.Loar,
        quick_ratio:this.finance.quick_ratio,
        current_ratio:this.finance.current_ratio,
        days_inventory:this.finance.days_inventory,
        floating_debt:this.finance.floating_debt,
        rate_margin:this.finance.rate_margin,
        ROE:this.finance.ROE,
        accounts_receivable:this.finance.accounts_receivable,
        accounts_receivableDay:this.finance.accounts_receivableDay,
        accounts_payable:this.finance.accounts_payable,
        accounts_payableDay:this.finance.accounts_payableDay,
        operating_income:this.finance.operating_income,
        nonbusiness_income:this.finance.nonbusiness_income,
        net_profits:this.finance.net_profits,
        total_money:this.finance.total_money,
        total_money1:this.finance.total_money1,
        total_money2:this.finance.total_money2,
        nodeName:this.finance.nodeName
        }
        FinancialdataService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
             //userid拿不到，默认1
              userId:1,
              financeId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.FinanceStateId,
              operateId:1,
              }
              FinanceStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
        })
        .catch(e => {
          console.log(e);
        });
       },
        submit(finance){
          this.$refs[finance].validate((valid) => {
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
           console.log(this.pa)
        let financeId=this.pa
          FinanceStatelog.findByLog(financeId).then(response => {
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
           FinancialdataService.get(this.pa)
         .then(response => {
                this.finance=response.data;
                this.finance.nodeName = response.data.FinanceState.nodeName; 
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
           this.selectState();
          this.pa=this.tableData[index].id;
          this.selectlogs();
           FinancialdataService.get(this.pa)
         .then(response => {
                 this.finance=response.data;
                this.finance.nodeName = response.data.FinanceState.nodeName;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
            this.dialogFormVisible=false;
          var data = {
            id:this.finance.id,
            qiye_name: this.finance.qiye_name,
            year: this.finance.year,
            quarter: this.finance.quarter,
            total_assets:this.finance.total_assets,
            net_assets:this.finance.net_assets,
            Loar:this.finance.Loar,
            quick_ratio:this.finance.quick_ratio,
            current_ratio:this.finance.current_ratio,
            days_inventory:this.finance.days_inventory,
            floating_debt:this.finance.floating_debt,
            rate_margin:this.finance.rate_margin,
            ROE:this.finance.ROE,
            accounts_receivable:this.finance.accounts_receivable,
            accounts_receivableDay:this.finance.accounts_receivableDay,
            accounts_payable:this.finance.accounts_payable,
            accounts_payableDay:this.finance.accounts_payableDay,
            operating_income:this.finance.operating_income,
            nonbusiness_income:this.finance.nonbusiness_income,
            net_profits:this.finance.net_profits,
            total_money:this.finance.total_money,
            total_money1:this.finance.total_money1,
            total_money2:this.finance.total_money2,
            nodeName:this.finance.nodeName
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
        delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              FinancialdataService.delete(pa)
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
          this.delClickconfirm(index)
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
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "财务数据信息",
      },
        dialogTitle:"",
        filterId:'',
        filterQiye_name:'',
        filterYear:'',
        filterQuarter:'',
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          qiye_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
          ],
        },
        result:[],
        tableData:[],
        finance:{},
        dialogFormVisible: false,
      }
    }
  }
</script>