<template>
<div>
  <!-- 业务管理/还款管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>业务管理</el-breadcrumb-item>
      <el-breadcrumb-item>还款管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
     :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
      &(!filterTotal_quota || data.total_quota.toLowerCase().includes(filterTotal_quota.toString().toLowerCase()))
      &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
      &(!filterHuan_money || data.huan_money.toLowerCase().includes(filterHuan_money.toString().toLowerCase()))
      &(!filterHuan_money1 || data.huan_money1.toLowerCase().includes(filterHuan_money1.toString().toLowerCase()))
      &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
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
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterItem_name"> </el-input>
                    <div slot="reference"> <label> 还款项目名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.item_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTotal_quota"> </el-input>
                    <div slot="reference"> <label> 授信总额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.total_quota}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney"> </el-input>
                    <div slot="reference"> <label> 已用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterHuan_money"> </el-input>
                    <div slot="reference"> <label> 还款金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.huan_money}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterHuan_money1"> </el-input>
                    <div slot="reference"> <label> 还款后使用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.huan_money1}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width="55"  prop="huan_stream" label="还款流水" align="center">
            <template slot-scope="scope">
                <el-image style="width: 100px; height: 100px" :src="scope.row.huan_stream" :preview-src-list="[scope.row.huan_stream]">
                </el-image>
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
                <el-form-item label="还款流水" ref="uploadElement" prop="huan_stream" :label-width="formLabelWidth">
                    <el-upload ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/HuanKuan/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="addhuankuan" 
                    :on-change="handleAvatarChange" 
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl" :src="imageUrl" class="huan_stream">
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
          <el-button type="primary" @click="addsubmit('addhuankuan')">立即添加</el-button>
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
            <el-form-item label="还款流水" ref="uploadElement" prop="huan_stream" :label-width="formLabelWidth">
                    <!-- <el-input v-model="addwuliao.avatar" v-if="false"></el-input> -->
                    <el-upload ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/HuanKuan/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="updatehuankuan" 
                    :on-change="handleAvatarChange" 
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl" :src="imageUrl" class="huan_stream">
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
          <el-button type="primary" @click="updatesubmit('updatehuankuan')">立即修改</el-button>
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
            <el-form-item label="还款流水" ref="uploadElement" prop="huan_stream" :label-width="formLabelWidth">
                    <!-- <el-input v-model="addwuliao.avatar" v-if="false"></el-input> -->
                    <el-upload ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/HuanKuan/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="kanhuankuan" 
                    :on-change="handleAvatarChange" 
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl" :src="imageUrl" class="huan_stream">
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
         //新建时候清空url
          this.imageUrl=""
          this.dialogFormVisible=true
       },
       addsubmit(formName){
         let vm = this;
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible=false;
          var data = {
            item_name: this.addhuankuan.item_name,
            total_quota: this.addhuankuan.total_quota,
            money: this.addhuankuan.money,
            huan_money:this.addhuankuan.huan_money,
            huan_money1:this.addhuankuan.huan_money1,
            huan_stream:this.imageUrl,
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
          } else {
            return false;
          }
          //上传完成后清空一下
                this.imageUrl=""
                this.tmpUrl=""
        });
        },
       kanClick(index,row){
          this.dialogFormVisible2=true
          let pa=this.tableData[index].id;
           HuanKuanService.get(pa)
         .then(response => {
                this.kanhuankuan=response.data;
                this.imageUrl=response.data.huan_stream
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
                 this.imageUrl=response.data.huan_stream;
                    //旧图片url另存一份,将来imageUrl会被覆盖
                    this.oldUrl = this.imageUrl;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible1=false;
            var data = {
            id:this.updatehuankuan.id,
            item_name: this.updatehuankuan.item_name,
            total_quota: this.updatehuankuan.total_quota,
            money: this.updatehuankuan.money,
            huan_money:this.updatehuankuan.huan_money,
            huan_money1:this.updatehuankuan.huan_money1,
            huan_stream:this.imageUrl,
            current_process:this.updatehuankuan.current_process
        }
          HuanKuanService.update(data.id,data)
        .then(response => {
          this.tableonload();
          //删除旧图片
              http.delete('/general/deletefile',{data:{filename:this.oldUrl}});
              this.oldUrl=""
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
          } else {
            return false;
          }
        });
        this.imageUrl=""
        this.tmpUrl=""
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
      filterCurrent(value, row){
            return row.current_process === value;
        },
        handleAvatarChange(file,filelist) {
            //选中文件,上传成功,上传失败都会调用这个函数
            //只有选择新文件的时候(file.status非ready),才执行后面的上传代码
            //否则直接返回
            if (file.status !== 'ready'){
                return;
            }
            this.$refs.upload.submit();
        },
        handleAvatarSuccess(res, file) {
            //如果上传过图片,先把旧的删除掉
            if (this.tmpUrl){
                http.delete('/general/deletefile',{data:{filename:this.tmpUrl}});
            }
            //上传成功后，会返回后端的图片地址，存到imageUrl里面，将来调用create的api
            this.imageUrl = res.url;
            this.tmpUrl = this.imageUrl;
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
        fileList:[{imageUrl:""}],
        imageUrl: '',
        oldUrl: '',
        tmpUrl: '',
        TravelType:1,
        formLabelWidth: "130px",
        rules:{
          item_name: [
            { required: true, message: '请输入还款项目名称', trigger: 'blur' },
          ],
          huan_money: [
            { required: true, message: '请输入还款金额', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        addhuankuan:{},
        updatehuankuan:{},
        kanhuankuan:{},
        filterId:'',
        filterItem_name:'',
        filterTotal_quota:'',
        filterMoney:'',
        filterHuan_money:'',
        filterHuan_money1:'',
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