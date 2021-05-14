<template>
<div>
  <!-- 仓库管理/出库管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>仓库管理</el-breadcrumb-item>
      <el-breadcrumb-item>出库管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
      &(!filterGoods_name || data.goods_name.toLowerCase().includes(filterGoods_name.toString().toLowerCase()))
      &(!filterGoods_danwei || data.goods_danwei.toLowerCase().includes(filterGoods_danwei.toString().toLowerCase()))
      &(!filterChuku_number || data.chuku_number.toLowerCase().includes(filterChuku_number.toString().toLowerCase()))
      &(!filterBefore_stock || data.before_stock.toLowerCase().includes(filterBefore_stock.toString().toLowerCase()))
      &(!filterAfter_stock || data.after_stock.toLowerCase().includes(filterAfter_stock.toString().toLowerCase()))
      )" border style="width: 100%">
    <el-table-column min-width='30' align="center">
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
    <el-table-column min-width='50' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterGoods_name"> </el-input>
                    <div slot="reference"> <label> 商品名 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.goods_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='50' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterGoods_danwei"> </el-input>
                    <div slot="reference"> <label> 计量单位 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.goods_danwei}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='50' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterChuku_number"> </el-input>
                    <div slot="reference"> <label> 出库数量 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.chuku_number}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='50' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterBefore_stock"> </el-input>
                    <div slot="reference"> <label> 当前库存 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.before_stock}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='50' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterAfter_stock"> </el-input>
                    <div slot="reference"> <label> 更新后库存 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.after_stock}}
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

  <!-- 弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="chuku"
        status-icon :rules="rules"
        ref="chuku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="chuku.item_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
           <el-input v-model="chuku.goods_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-input v-model="chuku.goods_danwei"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出库数量" prop="chuku_number" :label-width="formLabelWidth">
            <el-input v-model="chuku.chuku_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input v-model="chuku.before_stock"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input v-model="chuku.after_stock"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="chuku.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="submit('chuku')">确定</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
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
          this.chuku={},
          this.dialogFormVisible=true
          this.dialogTitle = "addData";
       },
       addservice(){
          this.dialogFormVisible=false;
          var data = {
        item_name: this.chuku.item_name,
        goods_name: this.chuku.goods_name,
        goods_danwei:this.chuku.goods_danwei,
        chuku_number:this.chuku.chuku_number,
        before_stock:this.chuku.before_stock,
        after_stock:this.chuku.after_stock,
        current_process:this.chuku.current_process
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
       submit(chuku){
          this.$refs[chuku].validate((valid) => {
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
           ChukuService.get(pa)
         .then(response => {
                this.chuku=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true
           this.dialogTitle = "updataData"; 
           let pa=this.tableData[index].id;
           ChukuService.get(pa)
         .then(response => {
                this.chuku=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible=false;
          var data = {
            id:this.chuku.id,
            item_name: this.chuku.item_name,
            goods_name: this.chuku.goods_name,
            goods_danwei:this.chuku.goods_danwei,
            chuku_number:this.chuku.chuku_number,
            before_stock:this.chuku.before_stock,
            after_stock:this.chuku.after_stock,
            current_process:this.chuku.current_process
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
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              ChukuService.delete(pa)
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
        chuku:{},
        filterId:'',
        filterItem_name:'',
        filterGoods_name:'',
        filterGoods_danwei:'',
        filterChuku_number:'',
        filterBefore_stock:'',
        filterAfter_stock:'',
        dialogFormVisible: false,
      }
    }
  }
</script>