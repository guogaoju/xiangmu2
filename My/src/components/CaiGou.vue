<template>
<div>
  <!-- 业务管理/采购管理 -->
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
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="qiye_name"
      label="企业名称"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="item_name"
      label="项目名称"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money"
      label="已使用授信额度"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="totalmoney"
      label="总授信额度"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="statement"
      label="结算单"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="delivery_note"
      label="送货单"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="bill"
      label="发票"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money1"
      label="融资总预算"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money2"
      label="实际融资金额"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money3"
      label="项目已使用融资额度"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money4"
      label="更新后已使用融资额度"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="current_process"
      label="当前流程"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="250"
      align="center">
      <template slot-scope="scope">
        <el-button @click="kanClick(scope.$index,tableData)" type="primary" round size="small">查看</el-button>
        <el-button type="primary" @click="updateClick(scope.$index,tableData)" round size="small">修改</el-button>
        <el-button type="danger" @click="delClick(scope.$index,tableData)" round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加弹出层 -->
  <el-dialog title="添加采购" :visible.sync="dialogFormVisible">
      <el-form
        :model="addcaigou"
        status-icon :rules="rules"
        ref="addcaigou"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="企业信息" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="已使用授信额度" prop="money" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总授信额度" prop="totalmoney" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.totalmoney"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="结算单" prop="statement" :label-width="formLabelWidth">
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
        <el-col :span="12">
            <el-form-item label="送货单" prop="delivery_note" :label-width="formLabelWidth">
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
            <el-form-item label="发票" prop="bill" :label-width="formLabelWidth">
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
          <el-form-item label="融资总预算" prop="money1" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实际融资金额" prop="money2" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.money2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目已使用融资额度" prop="money3" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.money3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后已使用融资额度" prop="money4" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.money4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addcaigou.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
            <el-button type="primary" @click="addform()">添加物料</el-button></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
          <el-button @click="resetForm('addcaigou')">重置</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>
<!-- 修改弹出层 -->
  <el-dialog title="修改采购" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatecaigou"
        status-icon :rules="rules"
        ref="updatecaigou"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="企业信息" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="已使用授信额度" prop="money" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总授信额度" prop="totalmoney" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.totalmoney"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="结算单" prop="statement" :label-width="formLabelWidth">
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
        <el-col :span="12">
            <el-form-item label="送货单" prop="delivery_note" :label-width="formLabelWidth">
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
            <el-form-item label="发票" prop="bill" :label-width="formLabelWidth">
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
          <el-form-item label="融资总预算" prop="money1" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实际融资金额" prop="money2" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.money2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目已使用融资额度" prop="money3" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.money3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后已使用融资额度" prop="money4" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.money4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatecaigou.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="updatesubmit()">立即添加</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>
<!-- 查看弹出层 -->
  <el-dialog title="查看采购" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kancaigou"
        status-icon :rules="rules"
        ref="kancaigou"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="企业信息" prop="qiye_name" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.qiye_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="已使用授信额度" prop="money" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总授信额度" prop="totalmoney" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.totalmoney"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="结算单" prop="statement" :label-width="formLabelWidth">
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
        <el-col :span="12">
            <el-form-item label="送货单" prop="delivery_note" :label-width="formLabelWidth">
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
            <el-form-item label="发票" prop="bill" :label-width="formLabelWidth">
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
          <el-form-item label="融资总预算" prop="money1" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.money1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实际融资金额" prop="money2" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.money2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目已使用融资额度" prop="money3" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.money3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后已使用融资额度" prop="money4" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.money4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kancaigou.current_process"></el-input>
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
      <el-form-item label="申请数量" :label-width="formLabelWidth">
        <el-input v-model="form.shu" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="预估单价" :label-width="formLabelWidth">
        <el-input v-model="form.unit_price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="预估总价" :label-width="formLabelWidth">
        <el-input v-model="form.unit_totalprice" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="供应商" :label-width="formLabelWidth">
        <el-input v-model="form.supplier" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="实际数量" :label-width="formLabelWidth">
        <el-input v-model="form.reality_number" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="实际单价" :label-width="formLabelWidth">
        <el-input v-model="form.reality_price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="实际总价" :label-width="formLabelWidth">
        <el-input v-model="form.reality_totalprice" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="税率%" :label-width="formLabelWidth">
        <el-input v-model="form.tax_rate" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="税率单价" :label-width="formLabelWidth">
        <el-input v-model="form.tax_rateprice" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="税率金额" :label-width="formLabelWidth">
        <el-input v-model="form.tax_ratemoney" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="交货日期" :label-width="formLabelWidth">
        <el-input v-model="form.time" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="addsubmit1()">立即添加</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
    </el-form>
      
</el-drawer>
</div>

</template>

<script>
import addWuliaoService from "../services/addWuliaoService";
import CaiGouwuliaoService from "../services/CaiGouwuliaoService";
import CaiGouService from "../services/CaiGouService";
import WuliaoService from "../services/WuliaoService";
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
        CaiGouService.getAll()
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
        qiye_name: this.addcaigou.qiye_name,
        item_name:this.addcaigou.item_name,
        money: this.addcaigou.money,
        totalmoney : this.addcaigou.totalmoney ,
        statement:this.addcaigou.statement,
        total_quota:this.addcaigou.total_quota,
        delivery_note:this.addcaigou.delivery_note,
        bill:this.addcaigou.bill,
        money1:this.addcaigou.money1,
        money2:this.addcaigou.money2,
        money3:this.addcaigou.money3,
        money4:this.addcaigou.money4,
        current_process:this.addcaigou.current_process
        }

        CaiGouService.create(data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        },
        addform(){
            this.dialog=true;
            WuliaoService.getAll()
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
        shu : this.form.shu ,
        unit_price:this.form.unit_price,
        unit_totalprice:this.form.unit_totalprice,
        supplier:this.form.supplier,
        reality_number:this.form.reality_number,
        reality_price:this.form.reality_price,
        reality_totalprice:this.form.reality_totalprice,
        tax_rate:this.form.tax_rate,
        tax_rateprice:this.form.tax_rateprice,
        tax_ratemoney:this.form.tax_ratemoney,
        time:this.form.time,
        }

        CaiGouwuliaoService.create(data)
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
           CaiGouService.get(pa)
         .then(response => {
                this.kancaigou=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true;
           let pa=this.tableData[index].id;
           CaiGouService.get(pa)
         .then(response => {
                this.updatecaigou=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
        this.dialogFormVisible1=false;
          var data = {
            id:this.updatecaigou.id,
        qiye_name: this.updatecaigou.qiye_name,
        item_name:this.updatecaigou.item_name,
        money: this.updatecaigou.money,
        totalmoney : this.updatecaigou.jindu ,
        statement:this.updatecaigou.statement,
        total_quota:this.updatecaigou.total_quota,
        delivery_note:this.updatecaigou.delivery_note,
        bill:this.updatecaigou.bill,
        money1:this.updatecaigou.money1,
        money2:this.updatecaigou.money2,
        money3:this.updatecaigou.money3,
        money4:this.updatecaigou.money4,
        current_process:this.updatecaigou.current_process
        }
          CaiGouService.update(data.id,data)
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
              let a = this;
              CaiGouService.delete(pa)
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
    resetForm(addcaigou) {
      this.$refs[addcaigou].resetFields();
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
      },

    // 
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  
    },

    data() {
      return {
          imageUrl: '',
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
        TravelType:1,
        formLabelWidth: "100px",
        rules:{},
        tableData:[],
        result:[],
      addcaigou:{},
      updatecaigou:{},
      kancaigou:{},
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
