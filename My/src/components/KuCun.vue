<template>
<div>
  <!-- 仓库管理/库存信息 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>仓库管理</el-breadcrumb-item>
      <el-breadcrumb-item>库存信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
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
      prop="item_name"
      label="项目名称"
      width="250"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goods_type"
      label="材料种类"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goods_danwei"
      label="单位"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="before_stock"
      label="当前库存"
      width="170"
      align="center">
    </el-table-column>
    <el-table-column
      prop="after_stock"
      label="以供应总量"
      width="170"
      align="center">
    </el-table-column>
    <el-table-column
      prop="current_process"
      label="当前流程"
      width="170"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
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
  <el-dialog title="库存" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="addkucun"
        status-icon :rules="rules"
        ref="addkucun"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="addkucun.item_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="材料种类" prop="goods_type" :label-width="formLabelWidth">
           <el-input v-model="addkucun.goods_type"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="addkucun.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="addkucun.before_stock"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="以供应总量" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="addkucun.after_stock"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addkucun.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit('addkucun')">立即添加</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="修改库存" width="45%" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatekucun"
        status-icon :rules="rules"
        ref="updatekucun"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="updatekucun.item_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="材料种类" prop="goods_type" :label-width="formLabelWidth">
           <el-input v-model="updatekucun.goods_type"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="updatekucun.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="updatekucun.before_stock"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="以供应总量" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="updatekucun.after_stock"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatekucun.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="updatesubmit('updatekucun')">立即修改</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 查看弹出层 -->
  <el-dialog title="查看库存" width="45%" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kankucun"
        status-icon :rules="rules"
        ref="kankucun"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="kankucun.item_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="材料种类" prop="goods_type" :label-width="formLabelWidth">
           <el-input v-model="kankucun.goods_type"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="kankucun.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="kankucun.before_stock"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="以供应总量" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="kankucun.after_stock"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kankucun.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
import KucunService from "../services/KucunService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
         KucunService.getAll()
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
        //    CailiaogysService.getAll()
        // .then(response => {
        //   this.result = response.data;
        //   console.log(response.data);
        // })
        // .catch(e => {
        //   console.log(e);
        // });
       },
       async addservice(){
              this.dialogFormVisible=false;
          var data = {
        item_name: this.addkucun.item_name,
        goods_type: this.addkucun.goods_type,
        goods_danwei:this.addkucun.goods_danwei,
        before_stock:this.addkucun.before_stock,
        after_stock:this.addkucun.after_stock,
        current_process:this.addkucun.current_process
        }
        KucunService.create(data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       addsubmit(formName){
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.addservice();
          } else {
            return false;
          }
        });
        },
       kanClick(index,row){
          this.dialogFormVisible2=true
          let pa=this.tableData[index].id;
           KucunService.get(pa)
         .then(response => {
                this.kankucun=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true
           let pa=this.tableData[index].id;
           KucunService.get(pa)
         .then(response => {
                this.updatekucun=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
             this.dialogFormVisible1=false;
          var data = {
            id:this.updatekucun.id,
            item_name: this.updatekucun.item_name,
            goods_type: this.updatekucun.goods_type,
            goods_danwei:this.updatekucun.goods_danwei,
            before_stock:this.updatekucun.before_stock,
            after_stock:this.updatekucun.after_stock,
            current_process:this.updatekucun.current_process
        }
          KucunService.update(data.id,data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       updatesubmit(formName){
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.updateservice();
          } else {
            return false;
          }
        });
       },
        delClick(index,row){
              let pa=this.tableData[index].id;
              KucunService.delete(pa)
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
      handleClick(row) {
        console.log(row);
      },
    },

    data() {
      return {
        TravelType:1,
        formLabelWidth: "100px",
         rules:{
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          goods_type: [
            { required: true, message: '请输入材料种类', trigger: 'change' }
          ],
          before_stock: [
            { required: true, message: '请输入当前库存', trigger: 'change' }
          ],
          after_stock: [
            { required: true, message: '请输入以供应数量', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        addkucun:{},
        updatekucun:{},
        kankucun:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>