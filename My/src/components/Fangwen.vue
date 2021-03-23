<template>
<div>
  <!-- 客户管理/企业信息管理/企业信息 -->
      <el-col :span="14">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="编号"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="qiye_name"
      label="企业名称"
      width="250"
      align="center">
    </el-table-column>
    <el-table-column
      prop="visit_type"
      label="拜访方式"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="visit_time"
      label="拜访时间"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="contract"
      label="是否违约"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="remarks"
      label="备注"
      width="200"
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
  <el-dialog title="添加企业访问记录" :visible.sync="dialogFormVisible">
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
            <el-input v-model="addfangwen.qiye_name"></el-input>
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
            <el-input v-model="addfangwen.visit_time"></el-input>
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
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
          <el-button @click="resetForm('addfangwen')">重置</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="修改企业访问记录" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatefangwen"
        status-icon :rules="rules"
        ref="updatefangwen"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="updatefangwen.qiye_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="拜访方式" prop="visit_type" :label-width="formLabelWidth">
            <el-select v-model="updatefangwen.visit_type" clearable placeholder="请选择" >
              <el-option label="电话" value="电话"></el-option>
              <el-option label="上门" value="上门"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
          <el-form-item label="拜访时间" prop="visit_time" :label-width="formLabelWidth">
            <el-input v-model="updatefangwen.visit_time"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="是否违约" prop="contract" :label-width="formLabelWidth">
            <el-input v-model="updatefangwen.contract"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="updatefangwen.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatefangwen.current_process"></el-input>
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
  <el-dialog title="查看企业访问记录" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanfangwen"
        status-icon :rules="rules"
        ref="kanfangwen"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="kanfangwen.qiye_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="拜访方式" prop="visit_type" :label-width="formLabelWidth">
            <el-select v-model="kanfangwen.visit_type" clearable placeholder="请选择" >
              <el-option label="电话" value="电话"></el-option>
              <el-option label="上门" value="上门"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
          <el-form-item label="拜访时间" prop="visit_time" :label-width="formLabelWidth">
            <el-input v-model="kanfangwen.visit_time"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="是否违约" prop="contract" :label-width="formLabelWidth">
            <el-input v-model="kanfangwen.contract"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="kanfangwen.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanfangwen.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import FangwenService from "../services/FangwenService";
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
           this.dialogFormVisible=true
       },
       addsubmit(){
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
       kanClick(index,row){
          this.dialogFormVisible2=true
          let pa=this.tableData[index].id;
           FangwenService.get(pa)
         .then(response => {
                this.kanfangwen=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true;
           let pa=this.tableData[index].id;
           FangwenService.get(pa)
         .then(response => {
                this.updatefangwen=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
        this.dialogFormVisible1=false;
          var data = {
            id:this.updatefangwen.id,
         qiye_name:this.updatefangwen.qiye_name,
        visit_type:this.updatefangwen.visit_type,
        visit_time:this.updatefangwen.visit_time,
        contract:this.updatefangwen.contract,
        remarks:this.updatefangwen.remarks,
        current_process:this.updatefangwen.current_process
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
       delClick(index,row){
              let pa=this.tableData[index].id;
              FangwenService.delete(pa)
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
    resetForm(addfangwen) {
      this.$refs[addfangwen].resetFields();
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
      addfangwen:{},
      updatefangwen:{},
      kanfangwen:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>