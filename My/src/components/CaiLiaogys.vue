<template>
<div>
  <!-- 客户管理/材料供应商信息管理/材料供应商资料页面 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>材料供应商信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>材料供应商资料</el-breadcrumb-item>
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
      width="60"
      align="center">
    </el-table-column>
    <el-table-column
      prop="supplier_name"
      label="供应商名称"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="trade"
      label="行业"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="contact_person"
      label="联系人"
      width="80"
      align="center">
    </el-table-column>
     <el-table-column
      prop="phone"
      label="电话"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="fax"
      label="传真"
      width="120"
      align="center">
    </el-table-column>
     <el-table-column
      prop="post_code"
      label="邮编"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="juridical_person"
      label="法人"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="bank_name"
      label="开户银行"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="bank_card"
      label="银行账号"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="tax_card"
      label="税务登记号"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="vat"
      label="增值税率"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="supplier_type"
      label="供应商类型"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="discount"
      label="折扣"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="registered_trademark"
      label="注册商标"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="business_license"
      label="营业执照"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="remarks"
      label="备注"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="最新评级"
      width="80"
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
  <el-dialog title="添加供应商资料" :visible.sync="dialogFormVisible">
      <el-form
        :model="addZiliao"
        status-icon :rules="rules"
        ref="addZiliao"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.supplier_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="addZiliao.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系人" prop="contact_person" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.contact_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人" prop="juridical_person" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.juridical_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="开户银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.bank_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行账号" prop="bank_card" :label-width="formLabelWidth">
            <el-input v-model.number="addZiliao.bank_card"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="税务登记号" prop="tax_card" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.tax_card"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="税率" prop="vat" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.vat"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商类型" prop="supplier_type" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.supplier_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="折扣" prop="discount" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.discount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="注册商标" prop="registered_trademark" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.registered_trademark"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业执照" prop="business_license" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.business_license"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评级" prop="grade" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.grade"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addZiliao.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit('addZiliao')">立即添加</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="供应商资料" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updateZiliao"
        status-icon :rules="rules"
        ref="updateZiliao"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-form-item label="id" prop="id" :label-width="formLabelWidth">
            <el-input v-bind:readonly="TravelType==1" v-model="updateZiliao.id"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.supplier_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="updateZiliao.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系人" prop="contact_person" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.contact_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人" prop="juridical_person" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.juridical_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="开户银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.bank_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行账号" prop="bank_card" :label-width="formLabelWidth">
            <el-input v-model.number="updateZiliao.bank_card"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="税务登记号" prop="tax_card" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.tax_card"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="税率" prop="vat" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.vat"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商类型" prop="supplier_type" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.supplier_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="折扣" prop="discount" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.discount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="注册商标" prop="registered_trademark" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.registered_trademark"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业执照" prop="business_license" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.business_license"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评级" prop="grade" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.grade"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updateZiliao.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="updatesubmit('updateZiliao')">立即修改</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>
  <!-- 查看弹出层 -->
  <el-dialog title="供应商资料" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanZiliao"
        status-icon :rules="rules"
        ref="kanZiliao"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.supplier_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="kanZiliao.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系人" prop="contact_person" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.contact_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人" prop="juridical_person" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.juridical_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="开户银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.bank_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行账号" prop="bank_card" :label-width="formLabelWidth">
            <el-input v-model.number="kanZiliao.bank_card"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="税务登记号" prop="tax_card" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.tax_card"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="税率" prop="vat" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.vat"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商类型" prop="supplier_type" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.supplier_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="折扣" prop="discount" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.discount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="注册商标" prop="registered_trademark" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.registered_trademark"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业执照" prop="business_license" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.business_license"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评级" prop="grade" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.grade"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanZiliao.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import CailiaogysService from "../services/CailiaogysService";
import PingjiService from "../services/PingjiService";
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
        CailiaogysService.getAll()
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
           PingjiService.getAll()
        .then(response => {
          this.result = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       async addservice(){
              this.dialogFormVisible=false;
          var data = {
        supplier_name: this.addZiliao.supplier_name,
        trade: this.addZiliao.trade,
        address: this.addZiliao.address,
        contact_person:this.addZiliao.contact_person,
        phone:this.addZiliao.phone,
        fax:this.addZiliao.fax,
        post_code:this.addZiliao.post_code,
        juridical_person:this.addZiliao.juridical_person,
        bank_name:this.addZiliao.bank_name,
        bank_card:this.addZiliao.bank_card,
        tax_card:this.addZiliao.tax_card,
        vat:this.addZiliao.vat,
        email:this.addZiliao.email,
        supplier_type:this.addZiliao.supplier_type,
        discount:this.addZiliao.discount,
        registered_trademark:this.addZiliao.registered_trademark,
        business_license:this.addZiliao.business_license,
        remarks:this.addZiliao.remarks,
        grade:this.addZiliao.grade,
        current_process:this.addZiliao.current_process
        }

        CailiaogysService.create(data)
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
           CailiaogysService.get(pa)
         .then(response => {
                this.kanZiliao=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true
           let pa=this.tableData[index].id;
           CailiaogysService.get(pa)
         .then(response => {
                this.updateZiliao=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
            this.dialogFormVisible1=false;
        var data = {
          id:this.updateZiliao.id,
        supplier_name: this.updateZiliao.supplier_name,
        trade: this.updateZiliao.trade,
        address: this.updateZiliao.address,
        contact_person:this.updateZiliao.contact_person,
        phone:this.updateZiliao.phone,
        fax:this.updateZiliao.fax,
        post_code:this.updateZiliao.post_code,
        juridical_person:this.updateZiliao.juridical_person,
        bank_name:this.updateZiliao.bank_name,
        bank_card:this.updateZiliao.bank_card,
        tax_card:this.updateZiliao.tax_card,
        vat:this.updateZiliao.vat,
        email:this.updateZiliao.email,
        supplier_type:this.updateZiliao.supplier_type,
        discount:this.updateZiliao.discount,
        registered_trademark:this.updateZiliao.registered_trademark,
        business_license:this.updateZiliao.business_license,
        remarks:this.updateZiliao.remarks,
        grade:this.updateZiliao.grade,
        current_process:this.updateZiliao.current_process
        }
         CailiaogysService.update(data.id,data)
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
              CailiaogysService.delete(pa)
              .then(response => {
                this.tableonload();
                console.log(response.pa);
              })
              .catch(e => {
                console.log(e);
              });
       },
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          supplier_name: [
            { required: true, message: '请输入供应商名称', trigger: 'blur' },
          ],
          trade: [
            { required: true, message: '请选择行业', trigger: 'change' }
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'change' }
          ],
          contact_person: [
            { required: true, message: '请输入联系人', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请输入电话', trigger: 'change' }
          ],
          juridical_person: [
            { required: true, message: '请输入法人', trigger: 'change' }
          ],
          registered_trademark: [
            { required: true, message: '请输入注册商标', trigger: 'change' }
          ],
          business_license: [
            { required: true, message: '请输入营业执照', trigger: 'change' }
          ],
        },
        addZiliao:{},
        updateZiliao:{},
        kanZiliao:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
        tableData: [],
        result:[]
      }
    }
  }
</script>