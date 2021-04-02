<template>
<div>
  <!-- 业务管理/建筑项目进度更新 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>业务管理</el-breadcrumb-item>
      <el-breadcrumb-item>建筑项目进度更新</el-breadcrumb-item>
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
      prop="before_jindu"
      label="当前进度"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="after_jindu"
      label="更新后进度"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="photo"
      label="现场照片"
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
  <el-dialog title="发起更新项目进度" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="addjindu"
        status-icon :rules="rules"
        ref="addjindu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="addjindu.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前进度" prop="before_jindu" :label-width="formLabelWidth">
            <el-input v-model="addjindu.before_jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="更新后进度" prop="after_jindu" :label-width="formLabelWidth">
           <el-input v-model="addjindu.after_jindu"></el-input>
          </el-form-item>
        </el-col>
         <el-col>
            <el-form-item label="现场照片" prop="photo" :label-width="formLabelWidth">
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
            <el-input v-model="addjindu.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
            <el-button type="primary" @click="addform()">添加物料</el-button>
        </el-col>   
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit('addjindu')">立即添加</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="修改项目进度" width="45%" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatejindu"
        status-icon :rules="rules"
        ref="updatejindu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="updatejindu.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前进度" prop="before_jindu" :label-width="formLabelWidth">
            <el-input v-model="updatejindu.before_jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="更新后进度" prop="after_jindu" :label-width="formLabelWidth">
           <el-input v-model="updatejindu.after_jindu"></el-input>
          </el-form-item>
        </el-col>
         <el-col>
            <el-form-item label="现场照片" prop="photo" :label-width="formLabelWidth">
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
            <el-input v-model="updatejindu.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="updatesubmit('updatejindu')">立即修改</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>
  <!-- 查看弹出层 -->
  <el-dialog title="查看项目进度" width="45%" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanjindu"
        status-icon :rules="rules"
        ref="kanjindu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input v-model="kanjindu.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前进度" prop="before_jindu" :label-width="formLabelWidth">
            <el-input v-model="kanjindu.before_jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="更新后进度" prop="after_jindu" :label-width="formLabelWidth">
           <el-input v-model="kanjindu.after_jindu"></el-input>
          </el-form-item>
        </el-col>
         <el-col>
            <el-form-item label="现场照片" prop="photo" :label-width="formLabelWidth">
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
            <el-input v-model="kanjindu.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <el-drawer
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
    <el-form :model="form">
      <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="物料名称" :label-width="formLabelWidth">
          <el-select filterable v-model="form.wname" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="当前库存" :label-width="formLabelWidth">
        <el-input v-model="form.before_stock" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="消耗量" :label-width="formLabelWidth">
        <el-input v-model="form.consume" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="更新后库存" :label-width="formLabelWidth">
        <el-input v-model="form.after_stock" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="addsubmit1()">立即添加</el-button>
    </el-form-item>
    </el-form>
      
</el-drawer>
</div>

</template>

<script>
import addjinduwuliao from "../services/addjinduwuliao";
import WuliaoService1 from "../services/WuliaoService1";
import JinduService from "../services/JinduService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
         JinduService.getAll()
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
       addform(){
            this.dialog=true;
            WuliaoService1.getAll()
        .then(response => {
          this.result = response.data;
        })
        .catch(e => {
          console.log(e);
        });
        },
        addsubmit1(){
          this.dialog=false;
          var data = {
        name: this.form.name,
        wname:this.form.wname,
        before_stock : this.form.before_stock ,
        consume:this.form.consume,
        after_stock:this.form.after_stock,
        }

        addjinduwuliao.create(data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });  
        },
        async addservice(){
              this.dialogFormVisible=false;
          var data = {
          item_name: this.addjindu.item_name,
          before_jindu: this.addjindu.before_jindu,
          after_jindu: this.addjindu.after_jindu,
          photo:this.addjindu.photo,
          current_process:this.addjindu.current_process
        }
        JinduService.create(data)
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
           JinduService.get(pa)
         .then(response => {
                this.kanjindu=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true
           let pa=this.tableData[index].id;
           JinduService.get(pa)
         .then(response => {
                this.updatejindu=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible1=false;
            var data = {
            id:this.updatejindu.id,
            item_name: this.updatejindu.item_name,
            before_jindu: this.updatejindu.before_jindu,
            after_jindu: this.updatejindu.after_jindu,
            photo:this.updatejindu.photo,
            current_process:this.updatejindu.current_process
        }
          JinduService.update(data.id,data)
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
              JinduService.delete(pa)
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
      cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
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
          dialog: false,
        loading: false,
form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
        imageUrl: '',
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          before_jindu: [
            { required: true, message: '请输入当前进度', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        addjindu:{},
        updatejindu:{},
        kanjindu:{},
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