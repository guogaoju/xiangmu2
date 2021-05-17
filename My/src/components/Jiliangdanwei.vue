<template>
<div>
  <!-- 基本资料管理/基本资料/计量单位 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>基本资料管理</el-breadcrumb-item>
      <el-breadcrumb-item>基本资料</el-breadcrumb-item>
      <el-breadcrumb-item>计量单位</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filteredName || data.name.toLowerCase().includes(filteredName.toString().toLowerCase()))
      &(!filteredType || data.type.toLowerCase().includes(filteredType.toString().toLowerCase()))
      &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
      )" border style="width: 100%">
    <el-table-column min-width='50' align="center">
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
    <el-table-column min-width='50' align="center">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filteredName"> </el-input>
                    <div slot="reference"> <label> 名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='50' align="center">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filteredType"> </el-input>
                    <div slot="reference"> <label> 类型 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.type}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='50' align="center">
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
      label="操作"
      width="350"
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
        :model="danwei"
        status-icon :rules="rules"
        ref="danwei"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
            <el-input v-model="danwei.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="类型" prop="type" :label-width="formLabelWidth">
            <el-input v-model="danwei.type"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="danwei.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="danwei.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="submit('danwei')">确定</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import DanweiService from "../services/DanweiService";
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
        DanweiService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
          this.danwei={}
          this.dialogFormVisible=true
          this.dialogTitle = "addData";
       },
       addservice(){
              this.dialogFormVisible=false;
          var data = {
        name:this.danwei.name,
        type:this.danwei.type,
        remarks:this.danwei.remarks,
        current_process:this.danwei.current_process
        }

        DanweiService.create(data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(danwei){
          this.$refs[danwei].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else if(this.dialogTitle ==  "kanData"){
        this.kanClick();
      }else{
        return false
      }
        });
        },
       kanClick(index,row){
          this.dialogFormVisible=true
          this.dialogTitle = "kanData";
          let pa=this.tableData[index].id;
           DanweiService.get(pa)
         .then(response => {
                this.danwei=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true;
           this.dialogTitle = "updataData"; 
           let pa=this.tableData[index].id;
           DanweiService.get(pa)
         .then(response => {
                this.danwei=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
          this.dialogFormVisible=false;
          var data = {
            id:this.danwei.id,
            name:this.danwei.name,
            type:this.danwei.type,
            remarks:this.danwei.remarks,
            current_process:this.danwei.current_process
        }
          DanweiService.update(data.id,data)
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
              DanweiService.delete(pa)
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
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
      },
        dialogTitle:"",
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          type: [
            { required: true, message: '请输入类型', trigger: 'change' }
          ],
        },
        tableData:[],
        danwei:{},
        filterId:'',
        filteredName:'', 
        filteredType:'',
        filterRemarks:'',
        dialogFormVisible: false,
      }
    }
  }
</script>