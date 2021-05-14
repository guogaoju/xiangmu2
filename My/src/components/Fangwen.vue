<template>
<div>
   <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业访问记录</el-breadcrumb-item>
    </el-breadcrumb>
  <!-- 客户管理/企业信息管理/企业访问记录 -->
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
      &(!filterVisit_time || data.visit_time.toLowerCase().includes(filterVisit_time.toString().toLowerCase()))
      &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
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
    <el-table-column prop="visit_type" label="拜访方式" width="120" align="center" :filters="[{text:'上门', value:'上门'},{text:'电话', value:'电话'}]" :filter-method="filtervisit_type">
    </el-table-column>
    <el-table-column min-width='70' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterVisit_time"> </el-input>
                    <div slot="reference"> <label> 拜访时间 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.visit_time}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="contract" label="是否违约" width="120" align="center" :filters="[{text:'是', value:'是'},{text:'否', value:'否'}]" :filter-method="filtercontract">
    </el-table-column>
    <el-table-column min-width='70' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterRemarks"> </el-input>
                    <div slot="reference"> <label> 备注 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.remarks}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="current_process" label="当前流程" width="120" align="center" :filters="[{text:'通过', value:'通过'},{text:'拒绝', value:'拒绝'},{text:'审核中', value:'审核中'}]" :filter-method="filterCurrent">
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
  <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible">
      <el-form
        :model="addfangwen"
        status-icon :rules="rules"
        ref="addfangwen"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-select filterable v-model="addfangwen.qiye_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.register_name" :value="item.register_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="拜访方式" prop="visit_type" :label-width="formLabelWidth">
            <el-select v-model="addfangwen.visit_type" clearable placeholder="请选择" >
              <el-option label="电话" value="电话"></el-option>
              <el-option label="上门" value="上门"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
          <el-form-item label="拜访时间" prop="visit_time" :label-width="formLabelWidth">
           <el-date-picker v-model="addfangwen.visit_time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="是否违约" prop="contract" :label-width="formLabelWidth">
            <el-input v-model="addfangwen.contract"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="addfangwen.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addfangwen.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit('addfangwen')">确定</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import FangwenService from "../services/FangwenService";
import QiyeService from "../services/QiyeService";
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
        FangwenService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
        this.addfangwen={},
        this.dialogFormVisible=true
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
            qiye_name:this.addfangwen.qiye_name,
            visit_type:this.addfangwen.visit_type,
            visit_time:this.addfangwen.visit_time,
            contract:this.addfangwen.contract,
            remarks:this.addfangwen.remarks,
            current_process:this.addfangwen.current_process
        }
            
        FangwenService.create(data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       addsubmit(addfangwen){
         this.$refs[addfangwen].validate((valid) => {
          if (this.dialogTitle ==  "addData" ) {
        this.addservice();
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else{
        this.kanClick();
      }
        });
        },
       kanClick(index,row){
          this.dialogFormVisible=true
          this.dialogTitle = "kanData";
          let pa=this.tableData[index].id;
        FangwenService.get(pa)
         .then(response => {
                this.addfangwen=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true;
           this.dialogTitle = "updataData"; 
           let pa=this.tableData[index].id;
           FangwenService.get(pa)
         .then(response => {
                this.addfangwen=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible=false;
          var data = {
            id:this.addfangwen.id,
            qiye_name:this.addfangwen.qiye_name,
            visit_type:this.addfangwen.visit_type,
            visit_time:this.addfangwen.visit_time,
            contract:this.addfangwen.contract,
            remarks:this.addfangwen.remarks,
            current_process:this.addfangwen.current_process
        }
          FangwenService.update(data.id,data)
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
              FangwenService.delete(pa)
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
      filtervisit_type(value, row){
            return row.visit_type === value;
        },
      filtercontract(value, row){
            return row.contract === value;
        },
    },

    data() {
      return {

         titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
      },
      dialogTitle:"",
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          qiye_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
          ],
          visit_type: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          visit_time: [
            { required: true, message: '请选择时间', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        addfangwen:{},
        filterId:'',
        filterQiye_name:'',
        filterVisit_time:'',
        filterRemarks:'',
        dialogFormVisible: false,
      }
    }
  }
</script>