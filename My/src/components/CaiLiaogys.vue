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
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterSupplier_name || data.supplier_name.toLowerCase().includes(filterSupplier_name.toString().toLowerCase()))
      &(!filterAddress || data.address.toLowerCase().includes(filterAddress.toString().toLowerCase()))
      &(!filterContact_person || data.contact_person.toLowerCase().includes(filterContact_person.toString().toLowerCase()))
      &(!filterPhone || data.phone.toLowerCase().includes(filterPhone.toString().toLowerCase()))
      &(!filterFax || data.fax.toLowerCase().includes(filterFax.toString().toLowerCase()))
      &(!filterPost_code || data.post_code.toLowerCase().includes(filterPost_code.toString().toLowerCase()))
      &(!filterJuridical_person || data.juridical_person.toLowerCase().includes(filterJuridical_person.toString().toLowerCase()))
      &(!filterBank_name || data.bank_name.toLowerCase().includes(filterBank_name.toString().toLowerCase()))
      &(!filterBank_card || data.bank_card.toLowerCase().includes(filterBank_card.toString().toLowerCase()))
      &(!filterTax_card || data.tax_card.toLowerCase().includes(filterTax_card.toString().toLowerCase()))
      &(!filterVat || data.vat.toLowerCase().includes(filterVat.toString().toLowerCase()))
      &(!filterDiscount || data.discount.toLowerCase().includes(filterDiscount.toString().toLowerCase()))
      &(!filterRegistered_trademark || data.registered_trademark.toLowerCase().includes(filterRegistered_trademark.toString().toLowerCase()))
      &(!filterBusiness_license || data.business_license.toLowerCase().includes(filterBusiness_license.toString().toLowerCase()))
      &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
      &(!filterGrade || data.grade.toLowerCase().includes(filterGrade.toString().toLowerCase()))
      )" border style="width: 100%">
    <el-table-column min-width='70' align="center">
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
                    <el-input v-model="filterSupplier_name"> </el-input>
                    <div slot="reference"> <label> 供应商名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.supplier_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="trade" label="行业" width="100" align="center" :filters="[{text:'制造业', value:'制造业'},{text:'建筑业', value:'建筑业'}]" :filter-method="filtertrade">
    </el-table-column>
    <el-table-column min-width='250' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterAddress"> </el-input>
                    <div slot="reference"> <label> 地址 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.address}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterContact_person"> </el-input>
                    <div slot="reference"> <label> 联系人 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.contact_person}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterPhone"> </el-input>
                    <div slot="reference"> <label> 电话 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.phone}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterFax"> </el-input>
                    <div slot="reference"> <label> 传真 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.fax}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterPost_code"> </el-input>
                    <div slot="reference"> <label> 邮编 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.post_code}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterJuridical_person"> </el-input>
                    <div slot="reference"> <label> 法人 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.juridical_person}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='200' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterBank_name"> </el-input>
                    <div slot="reference"> <label> 开户银行 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.bank_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterBank_card"> </el-input>
                    <div slot="reference"> <label> 银行账号 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.bank_card}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='180' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTax_card"> </el-input>
                    <div slot="reference"> <label> 税务登记号 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.tax_card}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterVat"> </el-input>
                    <div slot="reference"> <label> 增值税率 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.vat}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="supplier_type" label="供应商类型" width="120" align="center" :filters="[{text:'往来单位', value:'往来单位'},{text:'其他客户', value:'其他客户'}]" :filter-method="filtersupplier_type">
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterDiscount"> </el-input>
                    <div slot="reference"> <label> 折扣 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.discount}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterRegistered_trademark"> </el-input>
                    <div slot="reference"> <label> 注册商标 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.registered_trademark}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='180' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterBusiness_license"> </el-input>
                    <div slot="reference"> <label> 营业执照 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.business_license}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterRemarks"> </el-input>
                    <div slot="reference"> <label> 备注 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.remarks}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterGrade"> </el-input>
                    <div slot="reference"> <label> 最新评级 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.grade}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="current_process" label="当前流程" width="120" align="center" :filters="[{text:'通过', value:'通过'},{text:'拒绝', value:'拒绝'},{text:'审核中', value:'审核中'}]" :filter-method="filterCurrent">
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

  <!-- 弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible">
      <el-form
        :model="Ziliao"
        status-icon :rules="rules"
        ref="Ziliao"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.supplier_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="Ziliao.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系人" prop="contact_person" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.contact_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人" prop="juridical_person" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.juridical_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="开户银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.bank_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行账号" prop="bank_card" :label-width="formLabelWidth">
            <el-input v-model.number="Ziliao.bank_card"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="税务登记号" prop="tax_card" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.tax_card"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="税率" prop="vat" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.vat"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商类型" prop="supplier_type" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.supplier_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="折扣" prop="discount" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.discount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="注册商标" prop="registered_trademark" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.registered_trademark"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业执照" prop="business_license" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.business_license"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评级" prop="grade" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.grade"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="Ziliao.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="submit('Ziliao')">立即添加</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
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
          this.Ziliao={},
          this.dialogFormVisible=true
          this.dialogTitle = "addData";
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
        supplier_name: this.Ziliao.supplier_name,
        trade: this.Ziliao.trade,
        address: this.Ziliao.address,
        contact_person:this.Ziliao.contact_person,
        phone:this.Ziliao.phone,
        fax:this.Ziliao.fax,
        post_code:this.Ziliao.post_code,
        juridical_person:this.Ziliao.juridical_person,
        bank_name:this.Ziliao.bank_name,
        bank_card:this.Ziliao.bank_card,
        tax_card:this.Ziliao.tax_card,
        vat:this.Ziliao.vat,
        email:this.Ziliao.email,
        supplier_type:this.Ziliao.supplier_type,
        discount:this.Ziliao.discount,
        registered_trademark:this.Ziliao.registered_trademark,
        business_license:this.Ziliao.business_license,
        remarks:this.Ziliao.remarks,
        grade:this.Ziliao.grade,
        current_process:this.Ziliao.current_process
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
      submit(Ziliao){
          this.$refs[Ziliao].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else if(this.dialogTitle ==  "kanData"){
        this.kanClick();
      }else{
        return false
      }
        });
        },
       kanClick(index,row){
          this.dialogFormVisible=true
          this.dialogTitle = "kanData";
          let pa=this.tableData[index].id;
           CailiaogysService.get(pa)
         .then(response => {
                this.Ziliao=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true
           this.dialogTitle = "updataData";
           let pa=this.tableData[index].id;
           CailiaogysService.get(pa)
         .then(response => {
                this.Ziliao=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
            this.dialogFormVisible=false;
        var data = {
          id:this.Ziliao.id,
        supplier_name: this.Ziliao.supplier_name,
        trade: this.Ziliao.trade,
        address: this.Ziliao.address,
        contact_person:this.Ziliao.contact_person,
        phone:this.Ziliao.phone,
        fax:this.Ziliao.fax,
        post_code:this.Ziliao.post_code,
        juridical_person:this.Ziliao.juridical_person,
        bank_name:this.Ziliao.bank_name,
        bank_card:this.Ziliao.bank_card,
        tax_card:this.Ziliao.tax_card,
        vat:this.Ziliao.vat,
        email:this.Ziliao.email,
        supplier_type:this.Ziliao.supplier_type,
        discount:this.Ziliao.discount,
        registered_trademark:this.Ziliao.registered_trademark,
        business_license:this.Ziliao.business_license,
        remarks:this.Ziliao.remarks,
        grade:this.Ziliao.grade,
        current_process:this.Ziliao.current_process
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
       delClickconfirm(index,row){
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
      filtertrade(value, row){
            return row.trade === value;
        },
      filterCurrent(value, row){
            return row.current_process === value;
        },
      filtersupplier_type(value, row){
            return row.supplier_type === value;
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
        Ziliao:{},
        filterId:'',
        filterSupplier_name:'',
        filterAddress:'',
        filterContact_person:'',
        filterPhone:'',
        filterFax:'',
        filterPost_code:'',
        filterJuridical_person:'',
        filterBank_name:'',
        filterBank_card:'',
        filterTax_card:'',
        filterVat:'',
        filterDiscount:'',
        filterRegistered_trademark:'',
        filterBusiness_license:'',
        filterRemarks:'',
        filterGrade:'',
        dialogFormVisible: false,
        tableData: [],
        result:[]
      }
    }
  }
</script>