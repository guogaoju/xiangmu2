<template>
<div>
  <!-- 项目管理/制造业项目管理 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>制造业项目管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin : 8px;">
      <el-col :span="10">
        <el-button type="warning" v-show="isshow1" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
  @row-click="handdle"
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
      &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
      &(!filterTime || data.time.toLowerCase().includes(filterTime.toString().toLowerCase()))
      &(!filterJindu || data.jindu.toLowerCase().includes(filterJindu.toString().toLowerCase()))
      &(!filterItem_money || data.item_money.toLowerCase().includes(filterItem_money.toString().toLowerCase()))
      &(!filterTotal_quota || data.total_quota.toLowerCase().includes(filterTotal_quota.toString().toLowerCase()))
      &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
      &(!filterInterest || data.interest.toLowerCase().includes(filterInterest.toString().toLowerCase()))
      &(!filterReturn || data.Return.toLowerCase().includes(filterReturn.toString().toLowerCase()))
      &(!filterHuan_money || data.huan_money.toLowerCase().includes(filterHuan_money.toString().toLowerCase()))
      &(!filterfax || data.fax.toLowerCase().includes(filterfax.toString().toLowerCase()))
      )" border style="width: 100%">
    <el-table-column min-width='80' align="center">
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
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterQiye_name"> </el-input>
                    <div slot="reference"> <label> 企业信息 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.qiye_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='200' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterItem_name"> </el-input>
                    <div slot="reference"> <label> 项目名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.item_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTime"> </el-input>
                    <div slot="reference"> <label> 截至日期 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.time}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterJindu"> </el-input>
                    <div slot="reference"> <label> 工程进度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.jindu}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterItem_money"> </el-input>
                    <div slot="reference"> <label> 项目总金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.item_money}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTotal_quota"> </el-input>
                    <div slot="reference"> <label> 供应链合同金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.total_quota}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney"> </el-input>
                    <div slot="reference"> <label> 已贷金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='80' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterInterest"> </el-input>
                    <div slot="reference"> <label> 利息% </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.interest}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterReturn"> </el-input>
                    <div slot="reference"> <label> 回款率% </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.Return}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterHuan_money"> </el-input>
                    <div slot="reference"> <label> 本月待还款 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.huan_money}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterfax"> </el-input>
                    <div slot="reference"> <label> 有无欠款 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.fax}}
                </div>
            </template>
    </el-table-column>
     <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="250"
      align="center">
      <template slot-scope="scope">
        <el-button @click.stop="kanClick(scope.$index,tableData)" type="success" plain round size="small">查看</el-button>
        <el-button type="success" @click.stop="updateClick(scope.$index,tableData)" plain round size="small">修改</el-button>
        <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" plain round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="60%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="xiangmu"
        status-icon :rules="rules"
        ref="xiangmu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="18">
          <el-row>
        <el-col :span="12">
          <el-form-item label="企业信息" prop="qiye_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="截至日期" prop="time" :label-width="formLabelWidth">
            <el-date-picker :disabled="validated" v-model="xiangmu.time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工程进度" prop="jindu" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="项目总金额" prop="item_money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.item_money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已贷金额" prop="money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="利息%" prop="interest" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.interest"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
            <el-col :span="4">
            <el-form-item></el-form-item>
            </el-col>
           <el-col :span="4">
             <el-button type="warning" :disabled="annui1" v-show="isshow" @click="addform()">添加物料</el-button> 
             </el-col>
         </el-row>
      <el-row>
        <el-col :span="4">
            <el-form-item></el-form-item>
        </el-col>
        <el-col :span="20">
          <el-table
            :data="tableData2"
            border
            style="width: 100%">
            <el-table-column
              prop="supplier_name"
              label="供应商"
              width="120">
            </el-table-column>
            <el-table-column
              prop="item_name"
              label="项目名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="wuliaoname"
              label="物料名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="danwei"
              label="单位"
              width="100">
            </el-table-column>
            <el-table-column
              prop="need"
              label="合同需求"
              width="100">
            </el-table-column>
            <el-table-column
              prop="Supplied"
              label="已供应"
              width="100">
            </el-table-column>
            <el-table-column
              prop="Supplieds"
              label="还需供应"
              width="100">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="回款率%" prop="Return" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.Return"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="本月待还款" prop="huan_money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.huan_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="有无欠款" prop="fax" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.fax"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="xiangmu.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col> 
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" :disabled="annui"  v-show="isshow" ref="buttonname" id="submitButton" @click="submit('xiangmu')">{{buttonText}}</el-button>
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
  <el-drawer
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
    <el-form :model="form">
      <el-form-item label="供应商名称" :label-width="formLabelWidth">
        <el-input v-model="form.supplier_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-input v-model="form.item_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="物料名称" :label-width="formLabelWidth">
          <el-select filterable v-model="form.wuliaoname" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单位" prop="danwei" :label-width="formLabelWidth">
                        <el-select v-model="form.danwei" placeholder="请选择单位">
                            <el-option v-for="item in result1" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
            </el-form-item>
      <el-form-item label="需要数量" :label-width="formLabelWidth">
        <el-input v-model="form.need" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="已供应" :label-width="formLabelWidth">
        <el-input v-model="form.Supplied" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="还需供应" :label-width="formLabelWidth">
        <el-input v-model="form.Supplieds" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="addsubmit1()">立即添加</el-button>
    </el-form-item>
    </el-form>
</el-drawer>
</div>

</template>

<script>
import authservice from "../services/auth.service"
import DanweiService from "../services/DanweiService";
import addWuliaoService from "../services/addWuliaoService";
import WuliaoService from "../services/WuliaoService";
import ZhizaoService from "../services/ZhizaoService";
import ZhizaoState from "../services/ZhizaoState";
import ZhizaoStatelog from "../services/ZhizaoStatelog";
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
      this.isshow=false;
    },
      selectState(){
         ZhizaoState.getAll()
        .then(response => {
          this.activities=response.data
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      selectdept(){
           authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          for (let j = 0; j < this.deptId.length; j++) {
                    let old = this.deptId[j];
                    // console.log(old)
                        for (var i = 0; i < this.adddept.length; i++) {
                            let pre = this.adddept[i];
                            // console.log(pre)
                                if (pre === old) {
                                    this.isshow1=true;
                                    // console.log("显示")
                                }
                            }
                       }  
        })
      },
      handdle(row, event, column) { 
        this.dialogFormVisible=true
        this.annui=false
        this.annui1=true;
        this.liucheng=true,
        this.dialogTitle = "examine";
          this.pa=row.id;
          this.selectdept();
           addWuliaoService.findByLog(row.id).then(response =>{
            this.tableData2=response.data
            console.log(response.data )
          })
           ZhizaoService.get(this.pa)
         .then(response => {
            this.lastone=response.data.ZhizaoState.lastone;
          ZhizaoState.get(response.data.ZhizaoState.id).then(response =>{
                   this.statedeptId = [];
                for (var i = 0; i < response.data.depts.length; i++) {
                      this.statedeptId.push(response.data.depts[i].id); 
                    }
          for (let j = 0; j < this.deptId.length; j++) {
                    let old = this.deptId[j];
                    // console.log(old)
                        for (var i = 0; i < this.statedeptId.length; i++) {
                            let pre = this.statedeptId[i];
                            // console.log(pre)
                                if (pre === old) {
                                    this.isshow=true;
                                    // console.log("显示")
                                }else{
                                   this.isshow=false;
                                  //  console.log("消失")
                                };
                                if(this.lastone===1){
                                  this.isshow=false;
                                  //  console.log("消失")
                                }
                            }
                       }
          // console.log(this.statedeptId)
               })
          this.qiyeid=this.pa
          this.nextState=response.data.ZhizaoState.nextStateid
          this.oldStateid=response.data.ZhizaoState.id
          // console.log(this.activities)
                this.xiangmu=response.data;
                this.xiangmu.nodeName = response.data.ZhizaoState.nodeName;
                this.validated=true;
                this.buttonText = response.data.ZhizaoState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       addStatelog(){
         var data = {
           //userid拿不到，默认2
              userId:this.currentUser.id,
              zhizaoId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              ZhizaoStatelog.create(data).then(response => {
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           ZhizaoStateId:this.nextState
          }
          ZhizaoService.update(this.pa,data)
        .then(response => {
          this.tableonload();
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        ZhizaoState.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      getfor(row,column){
            return row.ZhizaoState.nodeName;
          },
      async tableonload(){
        ZhizaoService.getAll()
        .then(response => {
          this.tableData = response.data;
          this.selectdept();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
         this.isshow=true;
           this.xiangmu={},
          this.dialogFormVisible=true
          this.dialogTitle = "addData";
          this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
          this.annui1=false;
       },
       addform(){
            this.form={},
            this.dialog=true;
            DanweiService.getAll()
                .then(response => {
                    this.result1 = response.data;
                }).catch(e => {
                    console.log(e);
                });
            WuliaoService.getAll()
        .then(response => {
          this.result = response.data;
        })
        .catch(e => {
          console.log(e);
        });
        },
        addsubmit1(){
          this.dialog=false;
          var data = {
        supplier_name:this.form.supplier_name,
        item_name:this.form.item_name,
        wuliaoname:this.form.wuliaoname,
        danwei: this.form.danwei ,
        need:this.form.need,
        Supplied:this.form.Supplied,
        Supplieds:this.form.Supplieds,
        zhizaoId:0,
        //暂时写死的，
        }
        this.tableData2.push(data);
        },
         addservice(){
                this.dialogFormVisible=false;
          var data = {
          qiye_name: this.xiangmu.qiye_name,
          item_name:this.xiangmu.item_name,
          time: this.xiangmu.time,
          jindu : this.xiangmu.jindu ,
          item_money:this.xiangmu.item_money,
          total_quota:this.xiangmu.total_quota,
          money:this.xiangmu.money,
          interest:this.xiangmu.interest,
          Return:this.xiangmu.Return,
          huan_money:this.xiangmu.huan_money,
          fax:this.xiangmu.fax,
          nodeName:this.xiangmu.nodeName
        }
        ZhizaoService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              zhizaoId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.ZhizaoStateId,
              operateId:1,
              }
              ZhizaoStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
              for(let i=0;i<this.tableData2.length;i++){
              // console.log(this.tableData2[i]);
              this.tableData2[i].zhizaoId=response.data.id
              addWuliaoService.create(this.tableData2[i])
            .then(response => {
              this.tableonload();
              // console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });  
         } 
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        
        },
        submit(xiangmu){
          this.$refs[xiangmu].validate((valid) => {
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
          //  console.log(this.pa)
        let zhizaoId=this.pa
          ZhizaoStatelog.findByLog(zhizaoId).then(response => {
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
                       this.$forceUpdate();
        })
        .catch(e => {
          console.log(e);
        });   
      },
       kanClick(index,row){
         authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          if(this.deptId.length===0){
            alert("当前用户没有权限进行该操作")
          }
          let xunhuan=false;
          for (let j = 0; j < this.kandept.length; j++) {
                    let old = this.kandept[j];
                        for (var i = 0; i < this.deptId.length; i++) {
                            let pre = this.deptId[i];
                                if (pre === old) {
                                    xunhuan=true
                                }
                            }
                       }
                       if(xunhuan==true){
                                    this.annui1=true;
                                    this.tableData2=[],
                                    this.dialogFormVisible=true
                                    this.dialogTitle = "kanData";
                                    this.annui=true;
                                    this.liucheng=true,
                                    this.validated=true;
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    addWuliaoService.findByLog(this.pa).then(response =>{
                                      this.tableData2=response.data
                                      // console.log(response.data )
                                    })
                                    ZhizaoService.get(this.pa)
                                  .then(response => {
                                          this.xiangmu=response.data;
                                          this.xiangmu.nodeName = response.data.ZhizaoState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
                       }
                       else{
                              alert("你所在的部门没有权限进行该操作")
                                    }                        
        })
       },
       updateaddwuliao(){
          var data = {
        supplier_name:this.form.supplier_name,
        item_name:this.form.item_name,
        wuliaoname:this.form.wuliaoname,
        danwei: this.form.danwei ,
        need:this.form.need,
        Supplied:this.form.Supplied,
        Supplieds:this.form.Supplieds,
        zhizaoId:this.pa,
        }
        addWuliaoService.create(data).then(response =>{
          // console.log(response.data +"111111111")
        })
       },
        updateClick(index,row){
          authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          if(this.deptId.length===0){
            alert("当前用户没有权限进行该操作")
          }
          let xunhuan=false;
          for (let j = 0; j < this.updatedept.length; j++) {
                    let old = this.updatedept[j];
                        for (var i = 0; i < this.deptId.length; i++) {
                            let pre = this.deptId[i];
                                if (pre === old) {
                                    xunhuan=true
                                }
                            }
                       }
                       if(xunhuan==true){
                                    this.isshow=true;
                                    this.annui1=false;
                                    this.tableData2=[],
                                    this.dialogFormVisible=true;
                                    this.dialogTitle = "updataData";
                                    this.annui=false;
                                    this.validated=false; 
                                    this.liucheng=true,
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    addWuliaoService.findByLog(this.pa).then(response =>{
                                      this.tableData2=response.data
                                      // console.log(response.data )
                                    })
                                    ZhizaoService.get(this.pa)
                                  .then(response => {
                                          this.xiangmu=response.data;
                                          this.xiangmu.nodeName = response.data.ZhizaoState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
                       }
                       else{
                              alert("你所在的部门没有权限进行该操作")
                                    }                          
        })
       },
       updateservice(){
         this.updateaddwuliao();
            this.dialogFormVisible=false;
          var data = {
            id:this.xiangmu.id,
            qiye_name: this.xiangmu.qiye_name,
            item_name:this.xiangmu.item_name,
            time: this.xiangmu.time,
            jindu : this.xiangmu.jindu ,
            item_money:this.xiangmu.item_money,
            total_quota:this.xiangmu.total_quota,
            money:this.xiangmu.money,
            interest:this.xiangmu.interest,
            Return:this.xiangmu.Return,
            huan_money:this.xiangmu.huan_money,
            fax:this.xiangmu.fax,
            nodeName:this.xiangmu.nodeName
        }
          ZhizaoService.update(data.id,data)
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
              let a = this;
              ZhizaoService.delete(pa)
              .then(response => {
                this.tableonload();
                console.log(response.pa);
              })
              .catch(e => {
                console.log(e);
              });
       },
       delClick(index,row){   
          authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          if(this.deptId.length===0){
            alert("当前用户没有权限进行该操作")
          }
          let xunhuan=false;
          for (let j = 0; j < this.deletedept.length; j++) {
                    let old = this.deletedept[j];
                        for (var i = 0; i < this.deptId.length; i++) {
                            let pre = this.deptId[i];
                                if (pre === old) {
                                    xunhuan==true
                                }
                            }
                       }
          if(xunhuan==true){
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
                       }
                       else{
                              alert("你所在的部门没有权限进行该操作")
                                    }                                         
        })
       },
      handleClick(row) {
        console.log(row);
      },
      cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
     filterCurrent(value, row){
            return row.current_process === value;
        }
    },

    data() {
      return {
        deletedept:[2],
        updatedept:[2],
        kandept:[1],
        isshow1:false,
        adddept:[1,2],
        lastone:"",
        deptId:[],
        statedeptId:[],
        pa:'',
        paa:'',
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        oldStateid:'',
        nextState:'',
        annui:'',
        annui1:'',
        isshow:false,
        validated:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "制造项目",
      },
        dialogTitle:"",
        dialog: false,
        loading: false,
form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      result:[],
      result1:[],
        TravelType:1,
        formLabelWidth: "160px",
        rules:{
          qiye_name: [
            { required: true, message: '请输入企业信息', trigger: 'blur' },
          ],
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'change' }
          ],
        },
        tableData:[],
        tableData2:[],
      xiangmu:{},
      filterId:'',
        filterQiye_name: '',
        filterItem_name:'',
        filterTime: '',
        filterJindu : '',
        filterItem_money:'',
        filterTotal_quota:'',
        filterMoney:'',
        filterReturn:'',
        filterInterest:'',
        filterHuan_money:'',
        filterfax:'',
        dialogFormVisible: false,
      }
    }
  }
</script>