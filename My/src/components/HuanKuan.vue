<template>
<div>
  <!-- 业务管理/还款管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>业务管理</el-breadcrumb-item>
      <el-breadcrumb-item>还款管理</el-breadcrumb-item>
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
      label="还款项目名称"
      width="250"
      align="center">
    </el-table-column>
    <el-table-column
      prop="total_quota"
      label="授信总额度"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money"
      label="已用授信额度"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="huan_money"
      label="还款金额"
      width="150"
      align="center">
    </el-table-column>
     <el-table-column
      prop="huan_money1"
      label="还款后使用授信额度"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="huan_stream"
      label="还款流水"
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
  <el-dialog title="发起还款" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="addhuankuan"
        status-icon :rules="rules"
        ref="addhuankuan"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="还款项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="addhuankuan.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input v-model="addhuankuan.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已用授信额度" prop="money" :label-width="formLabelWidth">
           <el-input v-model="addhuankuan.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还款金额" prop="huan_money" :label-width="formLabelWidth">
            <el-input v-model="addhuankuan.huan_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
             <span>还款后使用授信额度</span>
          <el-form-item label="" prop="huan_money1" :label-width="formLabelWidth">
            <el-input v-model="addhuankuan.huan_money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
            <el-form-item label="还款流水" prop="huan_stream" :label-width="formLabelWidth">
                <el-upload
                class="avatar-uploader"
                action=""
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addhuankuan.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改评级弹出层 -->
  <el-dialog title="修改还款" width="45%" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatehuankuan"
        status-icon :rules="rules"
        ref="updatehuankuan"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="还款项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="updatehuankuan.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input v-model="updatehuankuan.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已用授信额度" prop="money" :label-width="formLabelWidth">
           <el-input v-model="updatehuankuan.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还款金额" prop="huan_money" :label-width="formLabelWidth">
            <el-input v-model="updatehuankuan.huan_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
             <span>还款后使用授信额度</span>
          <el-form-item label="" prop="huan_money1" :label-width="formLabelWidth">
            <el-input v-model="updatehuankuan.huan_money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
            <el-form-item label="还款流水" prop="huan_stream" :label-width="formLabelWidth">
                <el-upload
                class="avatar-uploader"
                action=""
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatehuankuan.current_process"></el-input>
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
  <el-dialog title="查看还款" width="45%" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanhuankuan"
        status-icon :rules="rules"
        ref="kanhuankuan"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="还款项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="kanhuankuan.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input v-model="kanhuankuan.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已用授信额度" prop="money" :label-width="formLabelWidth">
           <el-input v-model="kanhuankuan.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还款金额" prop="huan_money" :label-width="formLabelWidth">
            <el-input v-model="kanhuankuan.huan_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
             <span>还款后使用授信额度</span>
          <el-form-item label="" prop="huan_money1" :label-width="formLabelWidth">
            <el-input v-model="kanhuankuan.huan_money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
            <el-form-item label="还款流水" prop="huan_stream" :label-width="formLabelWidth">
                <el-upload
                class="avatar-uploader"
                action=""
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanhuankuan.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import HuanKuanService from "../services/HuanKuanService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
         HuanKuanService.getAll()
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
        item_name: this.addhuankuan.item_name,
        total_quota: this.addhuankuan.total_quota,
        money: this.addhuankuan.money,
        huan_money:this.addhuankuan.huan_money,
        huan_money1:this.addhuankuan.huan_money1,
        huan_stream:this.addhuankuan.huan_stream,
        current_process:this.addhuankuan.current_process
        }
        HuanKuanService.create(data)
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
           HuanKuanService.get(pa)
         .then(response => {
                this.kanhuankuan=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true
           let pa=this.tableData[index].id;
           HuanKuanService.get(pa)
         .then(response => {
                this.updatehuankuan=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
          this.dialogFormVisible1=false;
          var data = {
            id:this.updatehuankuan.id,
            item_name: this.updatehuankuan.item_name,
            total_quota: this.updatehuankuan.total_quota,
            money: this.updatehuankuan.money,
            huan_money:this.updatehuankuan.huan_money,
            huan_money1:this.updatehuankuan.huan_money1,
            huan_stream:this.updatehuankuan.huan_stream,
            current_process:this.updatehuankuan.current_process
        }
          HuanKuanService.update(data.id,data)
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
              HuanKuanService.delete(pa)
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

      handleAvatarSuccess(res, file) {
         
        this.imageUrl = URL.createObjectURL(file.raw);
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
      }
    },

    data() {
      return {
        imageUrl: '',
        TravelType:1,
        formLabelWidth: "100px",
        rules:{},
        tableData:[],
        result:[],
        addhuankuan:{},
        updatehuankuan:{},
        kanhuankuan:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
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