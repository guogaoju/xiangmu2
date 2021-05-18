<template>
<div>
  <!-- 客户管理/企业信息管理/建筑企业评级 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>客户管理</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>建筑企业评级</el-breadcrumb-item>
      </el-breadcrumb>
  <el-row>
    <el-col :span="6">
          <el-button type="primary" @click="openFrom()">添加</el-button>
        </el-col>
  </el-row>
  <el-table
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
      &(!filterYear || data.year.toLowerCase().includes(filterYear.toString().toLowerCase()))
      &(!filterQuarter || data.quarter.toLowerCase().includes(filterQuarter.toString().toLowerCase()))
      &(!filterTotal_points || data.total_points.toLowerCase().includes(filterTotal_points.toString().toLowerCase()))
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
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterQiye_name"> </el-input>
                    <div slot="reference"> <label> 企业名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.qiye_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="trade" label="行业" width="100" align="center" :filters="[{text:'建筑业', value:'建筑业'},{text:'制造业', value:'制造业'},{text:'其他', value:'其他'}]" :filter-method="filterTrade">
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterYear"> </el-input>
                    <div slot="reference"> <label> 年度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.year}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterQuarter"> </el-input>
                    <div slot="reference"> <label> 季度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.quarter}}
                </div>
            </template>
    </el-table-column>
    <el-table-column
      prop="score1"
      label="偿债能力"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score2"
      label="盈利能力"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score3"
      label="现金流量"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score4"
      label="运营能力"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score5"
      label="股东背景"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score6"
      label="重大事件"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score7"
      label="行业口碑"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score8"
      label="重大事故"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score9"
      label="过往经验"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="quantify_points"
      label="定量总分"
      width="80"
      align="center">
    </el-table-column>
     <el-table-column
      prop="qualitative_points"
      label="定性总分"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column min-width='130' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTotal_points"> </el-input>
                    <div slot="reference"> <label> 最终评级总分 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.total_points}}
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
  <el-dialog :title="titleMap[dialogTitle]" width="45%" :visible.sync="dialogFormVisible">
      <el-form
        :model="Pingji"
        status-icon :rules="rules"
        ref="Pingji"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-select filterable v-model="Pingji.qiye_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.register_name" :value="item.register_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select v-model="Pingji.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select v-model="Pingji.year" clearable placeholder="请选择" >
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select v-model="Pingji.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>偿债能力</span>
          <el-form-item label="满分30分" prop="score1" :label-width="formLabelWidth">
            <el-input v-on:change="test" v-model.number="Pingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>盈利能力</span>
          <el-form-item label="满分30分" prop="score2" :label-width="formLabelWidth">
            <el-input v-on:change="test" v-model.number="Pingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>现金流量</span>
          <el-form-item label="满分20分" prop="score3" :label-width="formLabelWidth">
           <el-input v-on:change="test" v-model.number="Pingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
            <span>运营能力</span>
          <el-form-item label="满分20分" prop="score4" :label-width="formLabelWidth">
           <el-input v-on:change="test" v-model.number="Pingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>股东背景</span>
          <el-form-item label="满分20分" prop="score5" :label-width="formLabelWidth">
           <el-input v-on:change="test1" v-model.number="Pingji.score5"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <span>重大事件</span>
          <el-form-item label="满分25分" prop="score6" :label-width="formLabelWidth">
           <el-input v-on:change="test1" v-model.number="Pingji.score6"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>行业口碑</span>
          <el-form-item label="满分10分" prop="score7" :label-width="formLabelWidth">
           <el-input v-on:change="test1" v-model.number="Pingji.score7"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <span>重大事故</span>
          <el-form-item label="满分20分" prop="score8" :label-width="formLabelWidth">
           <el-input v-on:change="test1" v-model.number="Pingji.score8"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
           <span>过往经验</span>
          <el-form-item label="满分25分" prop="score9" :label-width="formLabelWidth">
           <el-input v-on:change="test1" v-model.number="Pingji.score9"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量总分" prop="quantify_points " :label-width="formLabelWidth">
           <el-input v-model.number="Pingji.quantify_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
            <el-input v-model.number="Pingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最终评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input v-model.number="Pingji.total_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="Pingji.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="submit('Pingji')">确定</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import QiyeService from "../services/QiyeService"
import QiyePingjiService from "../services/QiyePingjiService"
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      test: function () {
            this.Pingji.quantify_points=this.Pingji.score1+this.Pingji.score2+this.Pingji.score3+this.Pingji.score4
        },
        test1: function () {
            this.Pingji.qualitative_points=this.Pingji.score5+this.Pingji.score6+this.Pingji.score7+this.Pingji.score8+this.Pingji.score9,
this.Pingji.total_points=this.Pingji.qualitative_points+this.Pingji.quantify_points
        },
      async tableonload(){
         QiyePingjiService.getAll()
         .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
          this.Pingji={},
          this.dialogFormVisible=true
          this.dialogTitle = "addData";
           QiyeService.getAll()
           .then(response =>{
 this.result=response.data;
           }).catch(e => {
          console.log(e);
        });
       },
       addservice(){
            this.dialogFormVisible=false;
          var data = {
        qiye_name: this.Pingji.qiye_name,
        trade:this.Pingji.trade,
        year: this.Pingji.year,
        quarter: this.Pingji.quarter,
        score1:this.Pingji.score1,
        score2:this.Pingji.score2,
        score3:this.Pingji.score3,
        score4:this.Pingji.score4,
        score5:this.Pingji.score5,
        score6:this.Pingji.score6,
        score7:this.Pingji.score7,
        score8:this.Pingji.score8,
        score9:this.Pingji.score9,
        quantify_points:this.Pingji.quantify_points,
        qualitative_points:this.Pingji.qualitative_points,
        total_points:this.Pingji.total_points,
        current_process:this.Pingji.current_process
        }
        QiyePingjiService.create(data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(Pingji){
          this.$refs[Pingji].validate((valid) => {
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
           QiyePingjiService.get(pa)
         .then(response => {
                this.Pingji=response.data; 
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true
           this.dialogTitle = "updataData";
           let pa=this.tableData[index].id;
           QiyePingjiService.get(pa)
         .then(response => {
                this.Pingji=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
              this.dialogFormVisible=false;
          var data = {
            id:this.Pingji.id,
            qiye_name: this.Pingji.qiye_name,
            trade:this.Pingji.trade,
            year: this.Pingji.year,
            quarter: this.Pingji.quarter,
            score1:this.Pingji.score1,
            score2:this.Pingji.score2,
            score3:this.Pingji.score3,
            score4:this.Pingji.score4,
            score5:this.Pingji.score5,
            score6:this.Pingji.score6,
            score7:this.Pingji.score7,
            score8:this.Pingji.score8,
            score9:this.Pingji.score9,
            quantify_points:this.Pingji.quantify_points,
            qualitative_points:this.Pingji.qualitative_points,
            total_points:this.Pingji.total_points,
            current_process:this.Pingji.current_process
        }
          QiyePingjiService.update(data.id,data)
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
              QiyePingjiService.delete(pa)
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
      filterTrade(value, row){
            return row.trade === value;
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
          qiye_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
          ],
          trade: [
            { required: true, message: '请选择行业', trigger: 'change' }
          ],
          year: [
            { required: true, message: '请选择年份', trigger: 'change' }
          ],
          quarter: [
            { required: true, message: '请选择季度', trigger: 'change' }
          ],
          current_process: [
            { required: true, message: '请输入', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        Pingji:{},
        filterId:'',
        filterQiye_name:'',
        filterYear:'',
        filterQuarter:'',
        filterTotal_points:'',
        dialogFormVisible: false,
      }
    }
  }
</script>