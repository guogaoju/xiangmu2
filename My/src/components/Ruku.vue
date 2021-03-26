<template>
<div>
  <!-- 仓库管理/入库管理 -->
      <el-col>
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
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
      prop="supplier"
      label="供应商"
      width="150"
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
      prop="ruku_number"
      label="入库数量"
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
      prop="before_supply"
      label="当前已供应"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="after_supply"
      label="更新后已供应"
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
  <el-dialog title="入库" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="addruku"
        status-icon :rules="rules"
        ref="addruku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="addruku.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="供应商" prop="supplier" :label-width="formLabelWidth">
            <el-input v-model="addruku.supplier"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
           <el-input v-model="addruku.goods_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="addruku.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="入库数量" prop="ruku_number" :label-width="formLabelWidth">
            <el-input v-model="addruku.ruku_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="addruku.before_stock"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="addruku.after_stock"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前已供应" prop="before_supply" :label-width="formLabelWidth">
                <el-input v-model="addruku.before_supply"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
            <el-form-item label="更新后已供应" prop="after_supply" :label-width="formLabelWidth">
                <el-input v-model="addruku.after_supply"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addruku.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
          <el-button @click="resetForm('addruku')">重置</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="修改入库" width="45%" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updateruku"
        status-icon :rules="rules"
        ref="updateruku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="updateruku.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="供应商" prop="supplier" :label-width="formLabelWidth">
            <el-input v-model="updateruku.supplier"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
           <el-input v-model="updateruku.goods_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="updateruku.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="入库数量" prop="ruku_number" :label-width="formLabelWidth">
            <el-input v-model="updateruku.ruku_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="updateruku.before_stock"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="updateruku.after_stock"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前已供应" prop="before_supply" :label-width="formLabelWidth">
                <el-input v-model="updateruku.before_supply"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
            <el-form-item label="更新后已供应" prop="after_supply" :label-width="formLabelWidth">
                <el-input v-model="updateruku.after_supply"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updateruku.current_process"></el-input>
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
  <el-dialog title="查看入库" width="45%" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanruku"
        status-icon :rules="rules"
        ref="kanruku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="kanruku.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="供应商" prop="supplier" :label-width="formLabelWidth">
            <el-input v-model="kanruku.supplier"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
           <el-input v-model="kanruku.goods_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="kanruku.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="入库数量" prop="ruku_number" :label-width="formLabelWidth">
            <el-input v-model="kanruku.ruku_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="kanruku.before_stock"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="kanruku.after_stock"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前已供应" prop="before_supply" :label-width="formLabelWidth">
                <el-input v-model="kanruku.before_supply"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
            <el-form-item label="更新后已供应" prop="after_supply" :label-width="formLabelWidth">
                <el-input v-model="kanruku.after_supply"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanruku.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import RukuService from "../services/RukuService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
         RukuService.getAll()
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
       addsubmit(){
         this.dialogFormVisible=false;
          var data = {
        item_name: this.addruku.item_name,
        supplier: this.addruku.supplier,
        goods_name: this.addruku.goods_name,
        goods_danwei:this.addruku.goods_danwei,
        ruku_number:this.addruku.ruku_number,
        before_stock:this.addruku.before_stock,
        after_stock:this.addruku.after_stock,
        before_supply:this.addruku.before_supply,
        after_supply:this.addruku.after_supply,
        current_process:this.addruku.current_process
        }
        RukuService.create(data)
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
           RukuService.get(pa)
         .then(response => {
                this.kanruku=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true
           let pa=this.tableData[index].id;
           RukuService.get(pa)
         .then(response => {
                this.updateruku=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
          this.dialogFormVisible1=false;
          var data = {
            id:this.updateruku.id,
            item_name: this.updateruku.item_name,
            supplier: this.updateruku.supplier,
            goods_name: this.updateruku.goods_name,
            goods_danwei:this.updateruku.goods_danwei,
            ruku_number:this.updateruku.ruku_number,
            before_stock:this.updateruku.before_stock,
            after_stock:this.updateruku.after_stock,
            before_supply:this.updateruku.before_supply,
            after_supply:this.updateruku.after_supply,
            current_process:this.updateruku.current_process
        }
          RukuService.update(data.id,data)
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
              RukuService.delete(pa)
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
    resetForm(addruku) {
      this.$refs[addruku].resetFields();
    },
      handleClick(row) {
        console.log(row);
      },
    },

    data() {
      return {
        TravelType:1,
        formLabelWidth: "100px",
        rules:{},
        tableData:[],
        result:[],
        addruku:{},
        updateruku:{},
        kanruku:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>