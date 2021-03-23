<template>
<div>
  <!-- 基本资料/物料参数/物料资料 -->
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
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="Specification"
      label="规格型号"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="wuliaotype"
      label="物料类型"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="danwei"
      label="计量单位"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="avatar"
      label="图片"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="remarks"
      label="备注"
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
  <el-dialog title="添加物料资料" :visible.sync="dialogFormVisible">
      <el-form
        :model="addwuliao"
        status-icon :rules="rules"
        ref="addwuliao"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
            <el-input v-model="addwuliao.name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="规格型号" prop="Specification" :label-width="formLabelWidth">
           <el-input v-model="addwuliao.Specification"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
          <el-form-item label="物料类型" prop="wuliaotype" :label-width="formLabelWidth">
            <el-input v-model="addwuliao.wuliaotype"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
            <el-input v-model="addwuliao.danwei"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-form-item label="物料图片" prop="avatar" :label-width="formLabelWidth">
           <el-upload
            class="avatar-uploader"
            action="http://localhost:8080/api/Wuliao/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
          </el-form-item>
      </el-row>
      <el-row>
          <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="addwuliao.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addwuliao.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
          <el-button @click="resetForm('addwuliao')">重置</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="修改物料资料" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatewuliao"
        status-icon :rules="rules"
        ref="updatewuliao"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
            <el-input v-model="updatewuliao.name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="规格型号" prop="Specification" :label-width="formLabelWidth">
           <el-input v-model="updatewuliao.Specification"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
          <el-form-item label="物料类型" prop="wuliaotype" :label-width="formLabelWidth">
            <el-input v-model="updatewuliao.wuliaotype"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
            <el-input v-model="updatewuliao.danwei"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-form-item label="物料图片" prop="avatar" :label-width="formLabelWidth">
           <el-upload
           v-model="updatewuliao.avatar"
            class="avatar-uploader"
            action="D:\img"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
          </el-form-item>
      </el-row>
      <el-row>
          <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="updatewuliao.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatewuliao.current_process"></el-input>
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
  <el-dialog title="查看物料资料" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanwuliao"
        status-icon :rules="rules"
        ref="kanwuliao"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
            <el-input v-model="kanwuliao.name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="规格型号" prop="Specification" :label-width="formLabelWidth">
           <el-input v-model="kanwuliao.Specification"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
          <el-form-item label="物料类型" prop="wuliaotype" :label-width="formLabelWidth">
            <el-input v-model="kanwuliao.wuliaotype"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
            <el-input v-model="kanwuliao.danwei"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-form-item label="物料图片" prop="avatar" :label-width="formLabelWidth">
           <el-upload
           v-model="kanwuliao.avatar"
            class="avatar-uploader"
            action="http://localhost:80/system/user/uploadAvatar"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
          </el-form-item>
      </el-row>
      <el-row>
          <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="kanwuliao.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanwuliao.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import http from "../http-common";
import WuliaoService from "../services/WuliaoService";
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
        WuliaoService.getAll()
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
        name:this.addwuliao.name,
        Specification:this.addwuliao.Specification,
        wuliaotype:this.addwuliao.wuliaotype,
        danwei:this.addwuliao.danwei,
        avatar:this.addwuliao.avatar,
        remarks:this.addwuliao.remarks,
        current_process:this.addwuliao.current_process
        }

        WuliaoService.create(data)
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
           WuliaoService.get(pa)
         .then(response => {
                this.kanwuliao=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true;
           let pa=this.tableData[index].id;
           WuliaoService.get(pa)
         .then(response => {
                this.updatewuliao=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
        this.dialogFormVisible1=false;
          var data = {
            id:this.updatewuliao.id,
            name:this.updatewuliao.name,
            Specification:this.updatewuliao.Specification,
            wuliaotype:this.updatewuliao.wuliaotype,
            danwei:this.updatewuliao.danwei,
            avatar:this.updatewuliao.avatar,
            remarks:this.updatewuliao.remarks,
            current_process:this.updatewuliao.current_process
        }
          WuliaoService.update(data.id,data)
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
              WuliaoService.delete(pa)
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
    resetForm(addwuliao) {
      this.$refs[addwuliao].resetFields();
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
      addwuliao:{},
      updatewuliao:{},
      kanwuliao:{},
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
