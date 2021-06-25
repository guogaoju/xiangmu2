<template>
<div>
  <!-- 业务管理/采购管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>业务管理</el-breadcrumb-item>
      <el-breadcrumb-item>采购管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="14">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
  @row-click="handdle"
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
      &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
      &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
      &(!filterTotalmoney || data.totalmoney.toLowerCase().includes(filterTotalmoney.toString().toLowerCase()))
      &(!filterMoney1 || data.money1.toLowerCase().includes(filterMoney1.toString().toLowerCase()))
      &(!filterMoney2 || data.money2.toLowerCase().includes(filterMoney2.toString().toLowerCase()))
      &(!filterMoney3 || data.money3.toLowerCase().includes(filterMoney3.toString().toLowerCase()))
      &(!filterMoney4 || data.money4.toLowerCase().includes(filterMoney4.toString().toLowerCase()))
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
                    <div slot="reference"> <label> 企业名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.qiye_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
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
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney"> </el-input>
                    <div slot="reference"> <label> 已使用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTotalmoney"> </el-input>
                    <div slot="reference"> <label> 总授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.totalmoney}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width="120"  prop="statement" label="结算单" align="center">
            <template slot-scope="scope">
                <el-image style="width: 100px; height: 100px" :src="scope.row.statement" :preview-src-list="[scope.row.statement]">
                </el-image>
            </template>
    </el-table-column>
    <el-table-column min-width="120"  prop="delivery_note" label="送货单" align="center">
            <template slot-scope="scope">
                <el-image style="width: 100px; height: 100px" :src="scope.row.delivery_note" :preview-src-list="[scope.row.delivery_note]">
                </el-image>
            </template>
    </el-table-column>
    <el-table-column min-width="120"  prop="bill" label="发票" align="center">
            <template slot-scope="scope">
                <el-image style="width: 100px; height: 100px" :src="scope.row.bill" :preview-src-list="[scope.row.bill]">
                </el-image>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney1"> </el-input>
                    <div slot="reference"> <label> 融资总预算 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money1}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='130' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney2"> </el-input>
                    <div slot="reference"> <label> 实际融资金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money2}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='170' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney3"> </el-input>
                    <div slot="reference"> <label> 项目已使用融资额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money3}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='180' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney4"> </el-input>
                    <div slot="reference"> <label> 更新后已使用融资额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money4}}
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
        <el-button @click.stop="kanClick(scope.$index,tableData)" type="primary" round size="small">查看</el-button>
        <el-button type="primary" @click.stop="updateClick(scope.$index,tableData)" round size="small">修改</el-button>
        <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="60%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="caigou"
        status-icon :rules="rules"
        ref="caigou"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="20">
        <el-row>
        <el-col :span="12">
          <el-form-item label="企业信息" prop="qiye_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="已使用额度" prop="money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总授信额度" prop="totalmoney" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.totalmoney"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
            <el-form-item label="结算单" ref="uploadElement" prop="statement" :label-width="formLabelWidth">
                    <el-upload :disabled="validated" ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/Caigou/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="caigou" 
                    :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,0)}"
                    :on-success="(response,file,fileList) =>{return handleAvatarSuccess(response,file,fileList,0)}" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrlback[0]" :src="imageUrlback[0]" class="statement">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
            </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="送货单" ref="uploadElement" prop="delivery_note" :label-width="formLabelWidth">
                    <el-upload :disabled="validated" ref="upload1" class="avatar-uploader" 
                    action="http://localhost:8080/api/Caigou/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="caigou" 
                    :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,1)}"
                    :on-success="(response,file,fileList) =>{return handleAvatarSuccess(response,file,fileList,1)}" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrlback[1]" :src="imageUrlback[1]" class="delivery_note">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
            </el-form-item>
        </el-col> 
        <el-col :span="8">
            <el-form-item label="发票" ref="uploadElement" prop="bill" :label-width="formLabelWidth">
                    <el-upload :disabled="validated" ref="upload2" class="avatar-uploader" 
                    action="http://localhost:8080/api/Caigou/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="caigou" 
                    :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,2)}"
                    :on-success="(response,file,fileList) =>{return handleAvatarSuccess(response,file,fileList,2)}" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrlback[2]" :src="imageUrlback[2]" class="bill">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
            </el-form-item>
          </el-col> 
        </el-row>
         <el-row>
            <el-col :span="4">
            <el-form-item></el-form-item>
            </el-col>
           <el-col :span="4">
             <el-button type="warning" :disabled="annui" v-show="isshow" @click="addform()">添加物料</el-button> 
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
              prop="wuliaotype"
              label="物料类型"
              width="120">
            </el-table-column>
            <el-table-column
              prop="danwei"
              label="单位"
              width="100">
            </el-table-column>
            <el-table-column
              prop="shenqing"
              label="申请数量"
              width="100">
            </el-table-column>
            <el-table-column
              prop="price"
              label="单价"
              width="100">
            </el-table-column>
            <el-table-column
              prop="yugutatol"
              label="预估融资"
              width="120">
            </el-table-column>
            <el-table-column
              prop="shijitatol"
              label="实际融资"
              width="100">
            </el-table-column>
            <el-table-column
              prop="rate"
              label="税率%"
              width="80">
            </el-table-column>
            <el-table-column
              prop="supplier_name"
              label="供应商"
              width="150">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="融资总预算" prop="money1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实际融资金额" prop="money2" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.money2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目已使用融资额度" prop="money3" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.money3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后已使用融资额度" prop="money4" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.money4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="caigou.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col> 
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" :disabled="annui"  v-show="isshow" ref="buttonname" id="submitButton" @submit="submit('caigou')" @click="add('rongzi')">{{buttonText}}</el-button>
        </el-form-item>
         </el-col>  
         
      </el-row>
         </el-col>  
         <el-col :span="4">
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
  status-icon :rules="rules1"
  >
     <el-form
        :model="rongzi"
        status-icon :rules="rules"
        ref="rongzi"
        label-width="100px"
        class="demo-ruleForm"
      >
      <span>融资预算</span>
          <el-form-item label="物料种类" prop="wuliaotype" :label-width="formLabelWidth">
                        <el-select v-model="rongzi.wuliaotype" placeholder="请选择物料">
                            <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
            </el-form-item>
          <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
                        <el-select v-model="rongzi.danwei" placeholder="请选择单位">
                            <el-option v-for="item in result1" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
            </el-form-item>
          <el-form-item label="申请数量" prop="shenqing" :label-width="formLabelWidth">
            <el-input v-model="rongzi.shenqing"></el-input>
          </el-form-item>
       
       
          <el-form-item label="单价" prop="price" :label-width="formLabelWidth">
            <el-input  v-model="rongzi.price"></el-input>
          </el-form-item>
       
        
          <el-form-item label="预估总额" prop="yugutatol" :label-width="formLabelWidth">
            <el-input  v-model="rongzi.yugutatol"></el-input>
          </el-form-item>
       
          <el-form-item label="实际总额" prop="shijitatol" :label-width="formLabelWidth">
            <el-input v-model="rongzi.shijitatol"></el-input>
          </el-form-item>
     
        
       
          <el-form-item label="税率" prop="rate" :label-width="formLabelWidth">
            <el-input  v-model="rongzi.rate"></el-input>
          </el-form-item>
      
       
          <el-form-item label="供应商" prop="supplier_name" :label-width="formLabelWidth">
            <el-input v-model="rongzi.supplier_name"></el-input>
          </el-form-item>
      
       <el-button type="primary" @click="addsubmit1('rongzi')">立即添加</el-button>
      </el-form>   
</el-drawer>
</div>

</template>

<script>
import DanweiService from "../services/DanweiService";
import CaiGouwuliaoService from "../services/CaiGouwuliaoService";
import CaiGouService from "../services/CaiGouService";
import CaigouState from "../services/CaigouState";
import CaigouStatelog from "../services/CaigouStatelog";
import WuliaoService from "../services/WuliaoService";
import RongziService from "../services/RongziService";
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
         CaigouState.getAll()
        .then(response => {
          this.activities=response.data
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      selectlog(){
        let caigouId=this.qiyeid
          CaigouStatelog.findByLog(caigouId).then(response => {
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
          RongziService.findByLog(row.id).then(response =>{
            this.tableData2=response.data
            console.log(response.data )
          })
           CaiGouService.get(pa)
         .then(response => {
            if(response.data.CaigouState.lastone===1){
                  this.isshow=false;
                }
          this.qiyeid=pa
          this.nextState=response.data.CaigouState.nextStateid
          this.oldStateid=response.data.CaigouState.id
          this.selectlog();
          // console.log(this.activities)
                this.caigou=response.data;
                this.caigou.nodeName = response.data.CaigouState.nodeName;
                this.validated=true;
                this.buttonText = response.data.CaigouState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
       },
       addStatelog(){
         var data = {
           //userid拿不到，默认2
              userId:1,
              caigouId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              CaigouStatelog.create(data).then(response => {
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           CaigouStateId:this.nextState
          }
          CaiGouService.update(this.paa,data)
        .then(response => {
          this.tableonload();
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
      getfor(row,column){
            return row.CaigouState.nodeName;
          },
      async tableonload(){
        CaiGouService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(this.tableData);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
          this.imageUrlback[0]=""
          this.imageUrlback[1]=""
          this.imageUrlback[2]=""
          this.caigou={},
          this.dialogFormVisible=true
          // RongziService.getAll()
          this.dialogTitle = "addData";
          this.selectState();
          this.validated=false;
          this.annui=false;
       },
       addrongzi(){
          var data = {
              wuliaotype: this.rongzi.wuliaotype,
              danwei:this.rongzi.danwei,
              shenqing: this.rongzi.shenqing,
              price : this.rongzi.price ,
              yugutatol:this.rongzi.yugutatol,
              shijitatol:this.rongzi.shijitatol,
              rate:this.rongzi.rate,
              supplier_name:this.rongzi.supplier_name,
              
          }
          RongziService.create(data).then(response =>{
            this.tableonload();
            console.log(response.data);
          }).catch(e => {
          console.log(e);
        });   
       },
       addsubmit1(rongzi){
          this.$refs[rongzi].validate((valid) => {
this.addrongzi();
this.dialog=false;
          })
          
       },
       addservice(){
              this.dialogFormVisible=false;
            var data = {
              qiye_name: this.caigou.qiye_name,
              item_name:this.caigou.item_name,
              money: this.caigou.money,
              totalmoney : this.caigou.totalmoney ,
              total_quota:this.caigou.total_quota,
              statement:this.imageUrlback[0],
              delivery_note:this.imageUrlback[1],
              bill:this.imageUrlback[2],
              money1:this.caigou.money1,
              money2:this.caigou.money2,
              money3:this.caigou.money3,
              money4:this.caigou.money4,
              nodeName:this.caigou.nodeName
          } 
          CaiGouService.create(data).then(response => {
          this.tableonload();
          var data = {
             //userid拿不到，默认1
              userId:1,
              caigouId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.CaigouStateId,
              operateId:1,
              }
              CaigouStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(caigou){
          this.$refs[caigou].validate((valid) => {
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
        this.imageUrlback[0]=""
        this.imageUrlback[1]=""
        this.imageUrlback[2]=""
        this.tmpUrl=""
        },
        
        addform(){
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
         selectlogs(){
          //  console.log(this.pa)
        let caigouId=this.pa
          CaigouStatelog.findByLog(caigouId).then(response => {
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
       kanClick(index,row){
          this.dialogFormVisible=true
          this.dialogTitle = "kanData";
          this.annui=true;
          this.validated=true;
           this.selectState();
          this.pa=this.tableData[index].id;
          this.selectlogs();
           CaiGouService.get(this.pa)
         .then(response => {
                this.caigou=response.data;
                this.caigou.nodeName = response.data.CaigouState.nodeName;
                this.imageUrlback[0]=response.data.statement
                this.imageUrlback[1]=response.data.delivery_note
                this.imageUrlback[2]=response.data.bill
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true;
           this.dialogTitle = "updataData";
           this.annui=false;
           this.validated=false; 
           this.selectState();
          this.pa=this.tableData[index].id;
          this.selectlogs();
           CaiGouService.get(this.pa)
         .then(response => {
                this.caigou=response.data;
                this.caigou.nodeName = response.data.CaigouState.nodeName;
                this.imageUrlback[0]=response.data.statement
                this.imageUrlback[1]=response.data.delivery_note
                this.imageUrlback[2]=response.data.bill
                //旧图片url另存一份,将来imageUrl会被覆盖
                    this.oldUrl = this.imageUrlback[index];
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible=false;
          var data = {
            id:this.caigou.id,
            qiye_name: this.caigou.qiye_name,
            item_name:this.caigou.item_name,
            money: this.caigou.money,
            totalmoney : this.caigou.totalmoney ,
            total_quota:this.caigou.total_quota,
            statement:this.imageUrlback[0],
            delivery_note:this.imageUrlback[1],
            bill:this.imageUrlback[2],
            money1:this.caigou.money1,
            money2:this.caigou.money2,
            money3:this.caigou.money3,
            money4:this.caigou.money4,
            nodeName:this.caigou.nodeName
        }

          CaiGouService.update(data.id,data)
        .then(response => {
          this.tableonload();
           //删除旧图片
                            http.delete('/general/deletefile',{data:{filename:this.oldUrl}});
                            this.oldUrl=""
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              let a = this;
              CaiGouService.delete(pa)
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
        },
    handleAvatarChange(file,fileList,index) {
           //this.imageUrlfront[index] = URL.createObjectURL(file.raw);
            if (file.status !== 'ready'){
              return;
            }
           if (index===0)
              this.$refs.upload.submit();
           if (index===1)
             this.$refs.upload1.submit();
           if (index===2)
             this.$refs.upload2.submit();
        },
       handleAvatarSuccess(response,file,fileList,index) {
         if (this.tmpUrl){
                http.delete('/general/deletefile',{data:{filename:this.tmpUrl}});
            }
            //上传成功后，会返回后端的图片地址，存到imageUrl里面，将来调用create的api
            this.imageUrlback[index] = response.url;
            this.$forceUpdate();
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        filterCurrent(value, row){
            return row.current_process === value;
        },

    // 
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  
    },

    data() {
      return {
       tableData2: [],
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
        examine: "采购",
      },
        dialogTitle:"",
        oldUrl: '',
        tmpUrl: '',
        fileList:[],
        imageUrl:'',
        imageUrlfront:[],
        imageUrlback:[],
        dialog: false,
        loading: false,
        TravelType:1,
        formLabelWidth: "160px",
        rules1:{
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          wname: [
            { required: true, message: '请选择物料名称', trigger: 'change' }
          ],
          shu: [
            { required: true, message: '请输入数量', trigger: 'change' }
          ],
        },
        rules:{
          qiye_name: [
            { required: true, message: '请输入企业信息', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          item_name: [
            { required: true, message: '请选择项目', trigger: 'change' }
          ],
          money: [
            { required: true, message: '请输入已使用额度', trigger: 'change' }
          ],
          totalmoney: [
            { required: true, message: '请输入总授信额度', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        result1:[],
        caigou:{},
        rongzi:{},
        filterId:'',
        filterQiye_name:'',
        filterItem_name:'',
        filterMoney:'',
        filterTotalmoney:'',
        filterMoney1:'',
        filterMoney2:'',
        filterMoney3:'',
        filterMoney4:'',
        dialogFormVisible: false,
      }
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
