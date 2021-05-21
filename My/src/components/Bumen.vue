<template>
    <div>
        <el-row>
          <el-col :span="6" style="float:right">
                <el-button type="warning" @click="openFrom()">添加成员</el-button>
            </el-col>
            <el-col :span="18" style="float:right;">
                <el-button type="warning" @click="openFrom1()">添加部门</el-button>
            </el-col>
        </el-row>
            <el-row :gutter="12">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
        <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color=""
      text-color="black"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">全部成员</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">CEO办公室</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">信融部</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">集采部</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">风控部</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">法务部</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">财务部</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-setting"></i>
        <span slot="title">研发部</span>
      </el-menu-item>
    </el-menu>
    </el-col>
    <el-col :xs="16" :sm="16" :md="16" :lg="16">
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark">
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="username"
      label="账号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="dept"
      label="部门"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      label="操作"
      width="250"
      align="center">
      <template slot-scope="scope">
        <el-button type="warning" @click="updateClick(scope.$index,tableData)" round size="small">修改</el-button>
        <el-button type="danger" @click="delClick(scope.$index,tableData)" round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-col>
    </el-row>
    <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible">
                    <el-form ref="form" :model="form" status-icon :rules="rules" label-width="80px">
                    <el-form-item label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="账号">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="部门权限" prop="dept" :label-width="formLabelWidth">
                      <el-checkbox-group v-model="form.dept">
                          <el-checkbox-button v-for="item in result" :label="item.name" :key="item.id" :value="item.name">{{item}}</el-checkbox-button>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="warning" @click="submit('form')">确定</el-button>
                    </el-form-item>
                    </el-form>
        </el-dialog>
        <el-dialog title="添加部门" :visible.sync="dialogFormVisible1">
                    <el-form ref="form1" :model="form1" status-icon :rules="rules" label-width="80px">
                    <el-form-item label="部门名称">
                        <el-input v-model="form1.name" :label-width="formLabelWidth"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="warning" @click="addsubmit('form1')">确定</el-button>
                    </el-form-item>
                    </el-form>
        </el-dialog>
    </div>
</template>
<script>
import DeptService from "../services/DeptService";
import BumenService from "../services/BumenService";
export default {
    created () {
          this.tableonload();
          this.dialog = true
          DeptService.getAll()
          .then(response => {
          this.result1 = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
    methods: {
        async tableonload(){
        BumenService.getAll()
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
          this.form={},
          this.dialogTitle = "addData";
          DeptService.getAll()
                .then(response => {
                    this.result = response.data;
                }).catch(e => {
                    console.log(e);
                });
       },
       addservice(){
              this.dialogFormVisible=false;
            var data = {
              name: this.form.name,
              username:this.form.username,
              dept: this.form.dept,
          } 
          BumenService.create(data).then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       openFrom1(){
          this.dialogFormVisible1=true
          this.form1={}
       },
        addservice1(){
              this.dialogFormVisible1=false;
            var data = {
              name: this.form1.name,
          } 
          DeptService.create(data).then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       addsubmit(form1){
            this.$refs[form1].validate((valid) => {
          if (valid) {
            this.addservice1();
          } else {
            console.log('error submit!!');
            return false;
          }
        });        
       },
       submit(form){
          this.$refs[form].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
        this.form=""
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else{
        return false
      }
        });
        },
        updateClick(index,row){
           this.dialogFormVisible=true;
           this.dialogTitle = "updataData";
           let pa=this.tableData[index].id;
           BumenService.get(pa)
         .then(response => {
                this.form=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible=false;
          var data = {
            id:this.form.id,
            name: this.form.name,
            username:this.form.username,
            dept: this.form.dept,
        }
        BumenService.update(data.id,data)
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
              BumenService.delete(pa)
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
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
        result:'',
        result1:'',
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
      },
        dialogTitle:"",
          form: {},
          form1: {},
          rules: {},
        tableData: [],
        size:'50%',
        dialog: false,
        loading: false,
        TravelType:1,
        formLabelWidth: "160px",
        dialogFormVisible:false, 
        dialogFormVisible1:false,
      }
    }
  }
</script>