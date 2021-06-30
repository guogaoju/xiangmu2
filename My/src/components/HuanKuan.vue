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
  @row-click="handdle"
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
    <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300"
      align="center">
      <template slot-scope="scope">
        <el-button @click.stop="kanClick(scope.$index,tableData)" type="primary" round size="small">查看</el-button>
        <el-button type="primary" @click.stop="updateClick(scope.$index,tableData)" round size="small">修改</el-button>
        <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="45%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="huankuan"
        status-icon :rules="rules"
        ref="huankuan"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
          <el-row>
         <el-col :span="12">
          <el-form-item label="还款项目名称" prop="item_name" :label-width="formLabelWidth">
            <!-- <el-select filterable v-model="addPingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select> -->
            <el-input :disabled="validated" v-model="huankuan.item_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="huankuan.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已用授信额度" prop="money" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model="huankuan.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还款金额" prop="huan_money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="huankuan.huan_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
             <span>还款后使用授信额度</span>
          <el-form-item label="" prop="huan_money1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="huankuan.huan_money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
                <el-form-item label="还款流水" ref="uploadElement" prop="huan_stream" :label-width="formLabelWidth">
                    <el-upload :disabled="validated" ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/HuanKuan/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="huankuan" 
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
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="huankuan.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col>   
        <el-col :span="12">
        <el-form-item>
           <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('huankuan')">{{buttonText}}</el-button>
        </el-form-item>
         </el-col>  
      </el-row>
        </el-col>  
         <el-col :span="6">
           <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :size="activity.size"
            :timestamp="activity.createdAt"
            :color="activity.color"
            >
            {{activity.nodeName}}
          </el-timeline-item>
          </el-timeline>
         </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import HuanKuanService from "../services/HuanKuanService"
import HuankuanState from "../services/HuankuanState"
import HuankuanStatelog from "../services/HuankuanStatelog"
  export default {
    created () {
          this.tableonload();
      },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
    methods: {
      //关闭弹框的事件
    closeDialog(){
      this.buttonText="确定"
      this.isshow=true;
    },
      selectState(){
         HuankuanState.getAll()
        .then(response => {
          this.activities=response.data
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      selectlog(){
        let huankuanId=this.qiyeid
        console.log(huankuanId)
          HuankuanStatelog.findByLog(huankuanId).then(response => {
            console.log(response.data)
              for (let j = 0; j < this.activities.length; j++) {
                    let old = this.activities[j].id;
                        for (var i = 0; i < response.data.length; i++) {
                            let pre = response.data[i].newstateid;
                                if (pre === old) {
                                    this.activities[j].color='#0bbd87'
                                     this.activities[j].createdAt=response.data[j].createdAt  
                                }
                            }
                       }
       
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });   
      },
      handdle(row, event, column) { 
        this.dialogFormVisible=true
        this.annui=false
        this.dialogTitle = "examine";
        this.selectState();
          let pa=row.id;
          this.paa=pa
           HuanKuanService.get(pa)
         .then(response => {
            if(response.data.HuankuanState.lastone===1){
                  this.isshow=false;
                }
          this.qiyeid=pa
          this.nextState=response.data.HuankuanState.nextStateid
          this.oldStateid=response.data.HuankuanState.id
          this.selectlog();
          // console.log(this.activities)
                this.huankuan=response.data;
                this.huankuan.nodeName = response.data.HuankuanState.nodeName;
                this.imageUrl=response.data.huan_stream
                this.validated=true;
                this.buttonText = response.data.HuankuanState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              huankuanId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              HuankuanStatelog.create(data).then(response => {
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           HuankuanStateId:this.nextState
          }
          HuanKuanService.update(this.paa,data)
        .then(response => {
          this.tableonload();
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
      getfor(row,column){
            return row.HuankuanState.nodeName;
          },
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
          this.huankuan={},
          this.dialogFormVisible=true
          this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
        this.dialogTitle = "addData";
       },
       addservice(){
              this.dialogFormVisible=false;
          var data = {
            item_name: this.huankuan.item_name,
            total_quota: this.huankuan.total_quota,
            money: this.huankuan.money,
            huan_money:this.huankuan.huan_money,
            huan_money1:this.huankuan.huan_money1,
            huan_stream:this.imageUrl,
            nodeName:this.huankuan.nodeName
          }
        HuanKuanService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              huankuanId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.HuankuanStateId,
              operateId:1,
              }
              HuankuanStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
        submit(huankuan){
          this.$refs[huankuan].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else if(this.dialogTitle ==  "kanData"){
        this.kanClick();
      }else if(this.dialogTitle ==  "examine"&&valid){
        this.dialogFormVisible=false;
        this.updateState();
        this.addStatelog();
      }else{
        return false
      }
        });
        },
        selectlogs(){
        let huankuanId=this.pa
          HuankuanStatelog.findByLog(huankuanId).then(response => {
            console.log(response.data)
              for (let j = 0; j < this.activities.length; j++) {
                    let old = this.activities[j].id;
                        for (var i = 0; i < response.data.length; i++) {
                            let pre = response.data[i].newstateid;
                                if (pre === old) {
                                    this.activities[j].color='#0bbd87'
                                     this.activities[j].createdAt=response.data[j].createdAt  
                                }
                            }
                       }
        })
        .catch(e => {
          console.log(e);
        });   
      },
       kanClick(index,row){
          this.dialogFormVisible=true
          this.dialogTitle = "kanData";
          this.annui=true;
          this.validated=true;
           this.selectState();
          this.pa=this.tableData[index].id;
          this.selectlogs();
           HuanKuanService.get(this.pa)
         .then(response => {
                this.huankuan=response.data;
                this.huankuan.nodeName = response.data.FangwenState.nodeName; 
                this.imageUrl=response.data.huan_stream
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true
           this.dialogTitle = "updataData";
           this.annui=false;
           this.validated=false;
           this.liucheng=true, 
           this.selectState();
          this.pa=this.tableData[index].id;
          this.selectlogs();
           HuanKuanService.get(this.pa)
         .then(response => {
                this.huankuan=response.data;
                this.huankuan.nodeName = response.data.FangwenState.nodeName; 
                 this.imageUrl=response.data.huan_stream;
                    //旧图片url另存一份,将来imageUrl会被覆盖
                    this.oldUrl = this.imageUrl;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible=false;
            var data = {
            id:this.huankuan.id,
            item_name: this.huankuan.item_name,
            total_quota: this.huankuan.total_quota,
            money: this.huankuan.money,
            huan_money:this.huankuan.huan_money,
            huan_money1:this.huankuan.huan_money1,
            huan_stream:this.imageUrl,
            nodeName:this.huankuan.nodeName
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
       },
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              HuanKuanService.delete(pa)
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
        pa:'',
        paa:'',
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        oldStateid:'',
        nextState:'',
        annui:'',
        isshow:true,
        validated:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "还款信息",
      },
        dialogTitle:"",
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
        huankuan:{},
        filterId:'',
        filterItem_name:'',
        filterTotal_quota:'',
        filterMoney:'',
        filterHuan_money:'',
        filterHuan_money1:'',
        dialogFormVisible: false,
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
  .huan_stream {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>