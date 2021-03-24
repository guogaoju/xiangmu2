<template>
<div>
  <!-- 项目管理/建筑项目管理 -->
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
      prop="builder"
      label="建筑商"
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
      prop="time"
      label="竣工时间"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="jindu"
      label="工程进度"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="item_money"
      label="项目总价"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="total_quota"
      label="授信总额度"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money"
      label="已申请融资金额"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money1"
      label="已完工金额"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="money2"
      label="已付工程款"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="interest"
      label="利息%"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="interest1"
      label="利息收入"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="Return"
      label="回款率%"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="fax"
      label="有无欠款"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="A"
      label="A分数"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="B"
      label="α比率"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="C"
      label="β比率"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="项目评级"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="cause"
      label="原因"
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
  <el-dialog title="添加建筑项目" :visible.sync="dialogFormVisible">
      <el-form
        :model="addxiangmu"
        status-icon :rules="rules"
        ref="addxiangmu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="建筑商" prop="builder" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.builder"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="竣工时间" prop="time" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.time"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工程进度" prop="jindu" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="项目总价" prop="item_money" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.item_money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已申请融资金额" prop="money" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="已完工金额" prop="money1" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.money1"></el-input>
        </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已付工程款" prop="money2" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.money2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="A分数" prop="A" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.A"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="α比率" prop="B" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.B"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="β比率" prop="C" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.C"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="利息%" prop="interest" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.interest"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="利息收入" prop="interest1" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.interest1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="回款率%" prop="Return" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.Return"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="有无欠款" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目评级" prop="grade" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.grade"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="原因" prop="cause" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.cause"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="addxiangmu.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit()">立即添加</el-button>
          <el-button @click="resetForm('addxiangmu')">重置</el-button>
        </el-form-item>
         </el-col>  
         <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </el-dialog>
<!-- 修改弹出层 -->
  <el-dialog title="修改建筑项目" :visible.sync="dialogFormVisible1">
      <el-form
        :model="updatexiangmu"
        status-icon :rules="rules"
        ref="updatexiangmu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="建筑商" prop="builder" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.builder"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="竣工时间" prop="time" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.time"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工程进度" prop="jindu" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="项目总价" prop="item_money" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.item_money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已申请融资金额" prop="money" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="已完工金额" prop="money1" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.money1"></el-input>
        </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已付工程款" prop="money2" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.money2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="A分数" prop="A" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.A"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="α比率" prop="B" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.B"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="β比率" prop="C" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.C"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="利息%" prop="interest" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.interest"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="利息收入" prop="interest1" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.interest1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="回款率%" prop="Return" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.Return"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="有无欠款" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目评级" prop="grade" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.grade"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="原因" prop="cause" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.cause"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="updatexiangmu.current_process"></el-input>
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
  <el-dialog title="查看建筑项目" :visible.sync="dialogFormVisible2">
      <el-form
        :model="kanxiangmu"
        status-icon :rules="rules"
        ref="kanxiangmu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="建筑商" prop="builder" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.builder"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="竣工时间" prop="time" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.time"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工程进度" prop="jindu" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="项目总价" prop="item_money" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.item_money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已申请融资金额" prop="money" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="已完工金额" prop="money1" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.money1"></el-input>
        </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已付工程款" prop="money2" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.money2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="A分数" prop="A" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.A"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="α比率" prop="B" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.B"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="β比率" prop="C" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.C"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="利息%" prop="interest" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.interest"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="利息收入" prop="interest1" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.interest1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="回款率%" prop="Return" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.Return"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="有无欠款" prop="fax" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目评级" prop="grade" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.grade"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="原因" prop="cause" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.cause"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
            <el-input v-model="kanxiangmu.current_process"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import JianzhuService from "../services/JianzhuService";
  export default {
    created () {
          this.tableonload();
      },
    methods: {
      async tableonload(){
        JianzhuService.getAll()
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
        builder: this.addxiangmu.builder,
        item_name:this.addxiangmu.item_name,
        time: this.addxiangmu.time,
        jindu : this.addxiangmu.jindu ,
        item_money:this.addxiangmu.item_money,
        total_quota:this.addxiangmu.total_quota,
        money:this.addxiangmu.money,
        money1:this.addxiangmu.money1,
        money2:this.addxiangmu.money2,
        interest:this.addxiangmu.interest,
        interest1:this.addxiangmu.interest1,
        Return:this.addxiangmu.Return,
        fax:this.addxiangmu.fax,
        A:this.addxiangmu.A,
        B:this.addxiangmu.B,
        C:this.addxiangmu.C,
        grade:this.addxiangmu.grade,
        cause:this.addxiangmu.cause,
        current_process:this.addxiangmu.current_process
        }

        JianzhuService.create(data)
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
           JianzhuService.get(pa)
         .then(response => {
                this.kanxiangmu=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible1=true;
           let pa=this.tableData[index].id;
           JianzhuService.get(pa)
         .then(response => {
                this.updatexiangmu=response.data;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updatesubmit(){
        this.dialogFormVisible1=false;
          var data = {
            id:this.updatexiangmu.id,
        builder: this.updatexiangmu.builder,
        item_name:this.updatexiangmu.item_name,
        time: this.updatexiangmu.time,
        jindu : this.updatexiangmu.jindu ,
        item_money:this.updatexiangmu.item_money,
        total_quota:this.updatexiangmu.total_quota,
        money:this.updatexiangmu.money,
        money1:this.updatexiangmu.money1,
        money2:this.updatexiangmu.money2,
        interest:this.updatexiangmu.interest,
        interest1:this.updatexiangmu.interest1,
        Return:this.updatexiangmu.Return,
        fax:this.updatexiangmu.fax,
        A:this.updatexiangmu.A,
        B:this.updatexiangmu.B,
        C:this.updatexiangmu.C,
        grade:this.updatexiangmu.grade,
        cause:this.updatexiangmu.cause,
        current_process:this.updatexiangmu.current_processs
        }
          JianzhuService.update(data.id,data)
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
              JianzhuService.delete(pa)
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
    resetForm(addxiangmu) {
      this.$refs[addxiangmu].resetFields();
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
      addxiangmu:{},
      updatexiangmu:{},
      kanxiangmu:{},
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>