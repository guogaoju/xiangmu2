<template>
<div>
  <!-- 客户管理/核心企业管理/核心企业页面 -->
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
      prop="register_name"
      label="注册名称"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="credit_code"
      label="社会信用代码"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="trade"
      label="行业"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="juridical_person"
      label="法人"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="register_money"
      label="注册资本"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="创建时间"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="business_term"
      label="营业期限"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="business_scope"
      label="营业范围"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="post_code"
      label="邮编"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="fax"
      label="传真"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="account_type"
      label="账户类型"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="bank_name"
      label="所属银行"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="bank_card"
      label="银行卡号"
      width="150"
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
  <el-dialog title="添加核心企业" :visible.sync="dialogFormVisible">
      <el-form
        :model="addQiye"
        status-icon :rules="rules"
        ref="addQiye"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="注册名称" prop="register_name" :label-width="formLabelWidth">
            <el-input v-model="addQiye.register_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="addQiye.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input v-model="addQiye.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人" prop="juridical_person" :label-width="formLabelWidth">
            <el-input v-model="addQiye.juridical_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="注册资本" prop="register_money" :label-width="formLabelWidth">
            <el-input v-model.number="addQiye.register_money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="创建时间" prop="create_time" :label-width="formLabelWidth">
            <el-input v-model="addQiye.create_time"></el-input>
            <!-- <el-date-picker v-model="addQiye.create_time" type="date" placeholder="选择日期"></el-date-picker> -->
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="营业期限" prop="business_term" :label-width="formLabelWidth">
            <el-input v-model="addQiye.business_term"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="营业范围" prop="business_scope" :label-width="formLabelWidth">
            <el-select v-model="addQiye.business_scope" placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select> 
        </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input v-model="addQiye.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input v-model="addQiye.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
            <el-input v-model="addQiye.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="addQiye.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="账户类型" prop="account_type" :label-width="formLabelWidth">
            <el-input v-model="addQiye.account_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input v-model="addQiye.bank_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="银行卡号" prop="bank_card" :label-width="formLabelWidth">
            <el-input v-model.number="addQiye.bank_card"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="社会信用代码" prop="credit_code" :label-width="formLabelWidth">
            <el-input v-model.number="addQiye.credit_code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addQiye.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
          <el-button @click="resetForm('addQiye')">重置</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <!-- 修改弹出层 -->
  <el-dialog title="修改核心企业" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updateQiye"
        status-icon :rules="rules"
        ref="updateQiye"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-form-item label="id" prop="id" :label-width="formLabelWidth">
            <el-input v-bind:readonly="TravelType==1" v-model="updateQiye.id"></el-input>
          </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="注册名称" prop="register_name" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.register_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="updateQiye.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人" prop="juridical_person" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.juridical_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="注册资本" prop="register_money" :label-width="formLabelWidth">
            <el-input v-model.number="updateQiye.register_money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="创建时间" prop="create_time" :label-width="formLabelWidth">
            <el-date-picker v-model="updateQiye.create_time" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="营业期限" prop="business_term" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.business_term"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="营业范围" prop="business_scope" :label-width="formLabelWidth">
            <el-select v-model="updateQiye.business_scope" placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select> 
        </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="账户类型" prop="account_type" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.account_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.bank_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="银行卡号" prop="bank_card" :label-width="formLabelWidth">
            <el-input v-model.number="updateQiye.bank_card"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="社会信用代码" prop="credit_code" :label-width="formLabelWidth">
            <el-input v-model.number="updateQiye.credit_code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row> 
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updateQiye.current_process"></el-input>
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

  <el-dialog title="查看核心企业" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanQiye"
        status-icon :rules="rules"
        ref="kanQiye"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="注册名称" prop="register_name" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.register_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="kanQiye.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人" prop="juridical_person" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.juridical_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="注册资本" prop="register_money" :label-width="formLabelWidth">
            <el-input v-model.number="kanQiye.register_money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="创建时间" prop="create_time" :label-width="formLabelWidth">
            <el-date-picker v-model="kanQiye.create_time" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="营业期限" prop="business_term" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.business_term"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="营业范围" prop="business_scope" :label-width="formLabelWidth">
            <el-select v-model="kanQiye.business_scope" placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select> 
        </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="账户类型" prop="account_type" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.account_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.bank_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="银行卡号" prop="bank_card" :label-width="formLabelWidth">
            <el-input v-model.number="kanQiye.bank_card"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="社会信用代码" prop="credit_code" :label-width="formLabelWidth">
            <el-input v-model.number="kanQiye.credit_code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanQiye.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import HexinService from "../services/HexinService";
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
        HexinService.getAll()
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
        register_name: this.addQiye.register_name,
        credit_code:this.addQiye.credit_code,
        trade: this.addQiye.trade,
        address: this.addQiye.address,
        juridical_person:this.addQiye.juridical_person,
        register_money:this.addQiye.register_money,
        create_time:this.addQiye.create_time,
        business_term:this.addQiye.business_term,
        business_scope:this.addQiye.business_scope,
        post_code:this.addQiye.post_code,
        phone:this.addQiye.phone,
        email:this.addQiye.email,
        fax:this.addQiye.fax,
        account_type:this.addQiye.account_type,
        bank_name:this.addQiye.bank_name,
        bank_card:this.addQiye.bank_card,
        current_process:this.addQiye.current_process
        }

        HexinService.create(data)
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
           HexinService.get(pa)
         .then(response => {
                this.kanQiye=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true;
           let pa=this.tableData[index].id;
           HexinService.get(pa)
         .then(response => {
                this.updateQiye=response.data;
               
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
        this.dialogFormVisible1=false;
          var data = {
            id:this.updateQiye.id,
        register_name: this.updateQiye.register_name,
         credit_code:this.updateQiye.credit_code,
        trade: this.updateQiye.trade,
        address: this.updateQiye.address,
        juridical_person:this.updateQiye.juridical_person,
        register_money:this.updateQiye.register_money,
        create_time:this.updateQiye.create_time,
        business_term:this.updateQiye.business_term,
        business_scope:this.updateQiye.business_scope,
        post_code:this.updateQiye.post_code,
        phone:this.updateQiye.phone,
        email:this.updateQiye.email,
        fax:this.updateQiye.fax,
        account_type:this.updateQiye.account_type,
        bank_name:this.updateQiye.bank_name,
        bank_card:this.updateQiye.bank_card,
        current_process:this.updateQiye.current_process
        }
          HexinService.update(data.id,data)
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
              HexinService.delete(pa)
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
    resetForm(addQiye) {
      this.$refs[addQiye].resetFields();
    },
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        TravelType:1,
        formLabelWidth: "100px",
        rules:{},
        tableData:[],
      addQiye:{},
      updateQiye:{},
      kanQiye:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>