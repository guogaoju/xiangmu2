<template>
<div>
  <!-- 仓库管理/出库管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>仓库管理</el-breadcrumb-item>
      <el-breadcrumb-item>出库管理</el-breadcrumb-item>
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
      prop="goods_name"
      label="商品名"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goods_danwei"
      label="商品单位"
      width="150"
      align="center">
    </el-table-column>
     <el-table-column
      prop="chuku_number"
      label="出库数量"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="before_stock"
      label="当前库存"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="after_stock"
      label="更新后库存"
      width="150"
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
  <el-dialog title="出库库" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="addchuku"
        status-icon :rules="rules"
        ref="addchuku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="addchuku.item_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
           <el-input v-model="addchuku.goods_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="addchuku.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出库数量" prop="chuku_number" :label-width="formLabelWidth">
            <el-input v-model="addchuku.chuku_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="addchuku.before_stock"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="addchuku.after_stock"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addchuku.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit('addchuku')">立即添加</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="修改出库" width="45%" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatechuku"
        status-icon :rules="rules"
        ref="updatechuku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="updatechuku.item_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
           <el-input v-model="updatechuku.goods_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="updatechuku.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出库数量" prop="chuku_number" :label-width="formLabelWidth">
            <el-input v-model="updatechuku.chuku_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="updatechuku.before_stock"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="updatechuku.after_stock"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatechuku.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="updatesubmit('updatechuku')">立即修改</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 查看弹出层 -->
  <el-dialog title="查看出库" width="45%" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanchuku"
        status-icon :rules="rules"
        ref="kanchuku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="kanchuku.item_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
           <el-input v-model="kanchuku.goods_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="kanchuku.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出库数量" prop="ruku_number" :label-width="formLabelWidth">
            <el-input v-model="kanchuku.chuku_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="kanchuku.before_stock"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="kanchuku.after_stock"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanchuku.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import ChukuService from "../services/ChukuService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
         ChukuService.getAll()
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
        item_name: this.addchuku.item_name,
        goods_name: this.addchuku.goods_name,
        goods_danwei:this.addchuku.goods_danwei,
        chuku_number:this.addchuku.chuku_number,
        before_stock:this.addchuku.before_stock,
        after_stock:this.addchuku.after_stock,
        current_process:this.addchuku.current_process
        }
        ChukuService.create(data)
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
           ChukuService.get(pa)
         .then(response => {
                this.kanchuku=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true
           let pa=this.tableData[index].id;
           ChukuService.get(pa)
         .then(response => {
                this.updatechuku=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible1=false;
          var data = {
            id:this.updatechuku.id,
            item_name: this.updatechuku.item_name,
            goods_name: this.updatechuku.goods_name,
            goods_danwei:this.updatechuku.goods_danwei,
            chuku_number:this.updatechuku.chuku_number,
            before_stock:this.updatechuku.before_stock,
            after_stock:this.updatechuku.after_stock,
            current_process:this.updatechuku.current_process
        }
          ChukuService.update(data.id,data)
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
              ChukuService.delete(pa)
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
          goods_name: [
            { required: true, message: '请输入商品名', trigger: 'change' }
          ],
          chuku_number: [
            { required: true, message: '请输入出库数量', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        addchuku:{},
        updatechuku:{},
        kanchuku:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>