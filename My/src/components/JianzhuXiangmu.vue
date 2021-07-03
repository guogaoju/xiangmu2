<template>
<div>
  <!-- 项目管理/建筑项目管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>建筑项目管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin : 8px;">
      <el-col :span="10">
        <el-button type="warning" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
  @row-click="handdle"
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterBuilder || data.builder.toLowerCase().includes(filterBuilder.toString().toLowerCase()))
      &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
      &(!filterTime || data.time.toLowerCase().includes(filterTime.toString().toLowerCase()))
      &(!filterJindu || data.jindu.toLowerCase().includes(filterJindu.toString().toLowerCase()))
      &(!filterItem_money || data.item_money.toLowerCase().includes(filterItem_money.toString().toLowerCase()))
      &(!filterTotal_quota || data.total_quota.toLowerCase().includes(filterTotal_quota.toString().toLowerCase()))
      &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
      &(!filterMoney1 || data.money1.toLowerCase().includes(filterMoney1.toString().toLowerCase()))
      &(!filterMoney2 || data.money2.toLowerCase().includes(filterMoney2.toString().toLowerCase()))
      &(!filterInterest || data.interest.toLowerCase().includes(filterInterest.toString().toLowerCase()))
      &(!filterInterest1 || data.interest1.toLowerCase().includes(filterInterest1.toString().toLowerCase()))
      &(!filterReturn || data.Return.toLowerCase().includes(filterReturn.toString().toLowerCase()))
      &(!filterHuan_money || data.huan_money.toLowerCase().includes(filterHuan_money.toString().toLowerCase()))
      &(!filterfax || data.fax.toLowerCase().includes(filterfax.toString().toLowerCase()))
      &(!filterA || data.A.toLowerCase().includes(filterA.toString().toLowerCase()))
      &(!filterB || data.B.toLowerCase().includes(filterB.toString().toLowerCase()))
      &(!filterC || data.C.toLowerCase().includes(filterC.toString().toLowerCase()))
      &(!filterGrade || data.grade.toLowerCase().includes(filterGrade.toString().toLowerCase()))
      &(!filterCause || data.cause.toLowerCase().includes(filterCause.toString().toLowerCase()))
      )" border style="width: 100%">
    <el-table-column min-width='80' align="center">
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
                    <el-input v-model="filterBuilder"> </el-input>
                    <div slot="reference"> <label> 建筑商 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.builder}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterItem_name"> </el-input>
                    <div slot="reference"> <label> 项目名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.item_name}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTime"> </el-input>
                    <div slot="reference"> <label> 竣工时间 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.time}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterJindu"> </el-input>
                    <div slot="reference"> <label> 工程进度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.jindu}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterItem_money"> </el-input>
                    <div slot="reference"> <label> 项目总金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.item_money}}
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
                    <div slot="reference"> <label> 已申请金额 </label> <i class='el-icon-arrow-down'> </i> </div>
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
                    <el-input v-model="filterMoney1"> </el-input>
                    <div slot="reference"> <label> 已完工金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money1}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney2"> </el-input>
                    <div slot="reference"> <label> 已付工程款 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money2}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterInterest"> </el-input>
                    <div slot="reference"> <label> 利息% </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.interest}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterInterest1"> </el-input>
                    <div slot="reference"> <label> 利息收入 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.interest1}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterReturn"> </el-input>
                    <div slot="reference"> <label> 回款率% </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.Return}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterfax"> </el-input>
                    <div slot="reference"> <label> 有无欠款 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.fax}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterA"> </el-input>
                    <div slot="reference"> <label> A分数 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.A}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterB"> </el-input>
                    <div slot="reference"> <label> α比率 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.B}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterC"> </el-input>
                    <div slot="reference"> <label> β比率 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.C}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterGrade"> </el-input>
                    <div slot="reference"> <label> 项目评级 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.grade}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='100' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterCause"> </el-input>
                    <div slot="reference"> <label> 原因 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.cause}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="250"
      align="center">
      <template slot-scope="scope">
        <el-button @click.stop="kanClick(scope.$index,tableData)" type="success" plain round size="small">查看</el-button>
        <el-button type="success" @click.stop="updateClick(scope.$index,tableData)" plain round size="small">修改</el-button>
        <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" plain round size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="60%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="xiangmu"
        status-icon :rules="rules"
        ref="xiangmu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
        <el-row>
        <el-col :span="12">
          <el-form-item label="建筑商" prop="builder" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.builder"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.item_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="竣工时间" prop="time" :label-width="formLabelWidth">
            <el-date-picker :disabled="validated" v-model="xiangmu.time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工程进度" prop="jindu" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
           <el-form-item label="项目总价" prop="item_money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.item_money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.total_quota"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已申请金额" prop="money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.money"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="已完工金额" prop="money1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.money1"></el-input>
        </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已付工程款" prop="money2" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.money2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="A分数" prop="A" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.A"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="α比率" prop="B" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.B"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="β比率" prop="C" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.C"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="利息%" prop="interest" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.interest"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="利息收入" prop="interest1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.interest1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="回款率%" prop="Return" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.Return"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="有无欠款" prop="fax" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
            <el-col :span="4">
            <el-form-item></el-form-item>
            </el-col>
           <el-col :span="4">
             <el-button type="warning" :disabled="annui" v-show="isshow" @click="addform()">添加物料</el-button> 
             </el-col>
         </el-row>
      <el-row>
        <el-col :span="4">
            <el-form-item></el-form-item>
        </el-col>
        <el-col :span="20">
          <el-table
            :data="tableData2"
            border
            style="width: 100%">
            <el-table-column
              prop="supplier_name"
              label="供应商"
              width="120">
            </el-table-column>
            <el-table-column
              prop="item_name"
              label="项目名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="wuliaoname"
              label="物料名称"
              width="100">
            </el-table-column>
            <el-table-column
              prop="danwei"
              label="单位"
              width="100">
            </el-table-column>
            <el-table-column
              prop="need"
              label="合同需求"
              width="100">
            </el-table-column>
            <el-table-column
              prop="Supplied"
              label="已供应"
              width="100">
            </el-table-column>
            <el-table-column
              prop="Supplieds"
              label="还需供应"
              width="100">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目评级" prop="grade" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.grade"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="原因" prop="cause" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="xiangmu.cause"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="xiangmu.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col> 
        <!-- <el-col :span="6">
            <el-button type="primary" :disabled="annui" v-show="isshow" @click="addform()">添加物料</el-button></el-col>   -->
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" :disabled="annui"  v-show="isshow" ref="buttonname" id="submitButton" @click="submit('xiangmu')">{{buttonText}}</el-button>
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

  <el-drawer
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
    <el-form :model="form">
      <el-form-item label="供应商名称" :label-width="formLabelWidth">
        <el-input v-model="form.supplier_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-input v-model="form.item_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="物料名称" :label-width="formLabelWidth">
          <el-select filterable v-model="form.wuliaoname" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单位" prop="danwei" :label-width="formLabelWidth">
                        <el-select v-model="form.danwei" placeholder="请选择单位">
                            <el-option v-for="item in result1" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
            </el-form-item>
      <el-form-item label="需要数量" :label-width="formLabelWidth">
        <el-input v-model="form.need" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="已供应" :label-width="formLabelWidth">
        <el-input v-model="form.Supplied" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="还需供应" :label-width="formLabelWidth">
        <el-input v-model="form.Supplieds" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="addsubmit1()">立即添加</el-button>
    </el-form-item>
    </el-form>
</el-drawer>
</div>

</template>

<script>
import DanweiService from "../services/DanweiService";
import addjianzhuwuliao from "../services/Addjianzhuwuliao";
import JianzhuService from "../services/JianzhuService";
import JianzhuState from "../services/JianzhuState";
import JianzhuStatelog from "../services/JianzhuStatelog";
import WuliaoService from "../services/WuliaoService";
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
         JianzhuState.getAll()
        .then(response => {
          this.activities=response.data
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      selectlog(){
        let jianzhuId=this.qiyeid
          JianzhuStatelog.findByLog(jianzhuId).then(response => {
            // console.log(response.data)
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
          addjianzhuwuliao.findByLog(row.id).then(response =>{
            this.tableData2=response.data
            console.log(response.data )
          })
           JianzhuService.get(pa)
         .then(response => {
            if(response.data.JianzhuState.lastone===1){
                  this.isshow=false;
                }
          this.qiyeid=pa
          this.nextState=response.data.JianzhuState.nextStateid
          this.oldStateid=response.data.JianzhuState.id
          this.selectlog();
          // console.log(this.activities)
                this.xiangmu=response.data;
                this.xiangmu.nodeName = response.data.JianzhuState.nodeName;
                this.validated=true;
                this.buttonText = response.data.JianzhuState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              jianzhuId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              JianzhuStatelog.create(data).then(response => {
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           JianzhuStateId:this.nextState
          }
          JianzhuService.update(this.paa,data)
        .then(response => {
          this.tableonload();
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
      getfor(row,column){
            return row.JianzhuState.nodeName;
          },
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
          this.xiangmu={},
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
        builder: this.xiangmu.builder,
        item_name:this.xiangmu.item_name,
        time: this.xiangmu.time,
        jindu : this.xiangmu.jindu ,
        item_money:this.xiangmu.item_money,
        total_quota:this.xiangmu.total_quota,
        money:this.xiangmu.money,
        money1:this.xiangmu.money1,
        money2:this.xiangmu.money2,
        interest:this.xiangmu.interest,
        interest1:this.xiangmu.interest1,
        Return:this.xiangmu.Return,
        fax:this.xiangmu.fax,
        A:this.xiangmu.A,
        B:this.xiangmu.B,
        C:this.xiangmu.C,
        grade:this.xiangmu.grade,
        cause:this.xiangmu.cause,
        nodeName:this.xiangmu.nodeName
        }
        JianzhuService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              jianzhuId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.JianzhuStateId,
              operateId:1,
              }
          JianzhuStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
          //在这个地方把tableData2里的数据逐条拿出来，把id填上，提交到后端
          //如果是修改已有的，那应该先把原先的该企业相关的建筑物料先从数据库里删除，新增不需要。
          //for each item in tableData2:
            //tabledata2[i].id=response.data.id
            //addjianzhuwuliao.create(tabledata2[i])
            // .then(response => {
            //   this.tableonload();
            //   console.log(response.data);
            // })
            // .catch(e => {
            //   console.log(e);
            // });  
        })
        .catch(e => {
          console.log(e);
        });
       },
      submit(xiangmu){
          this.$refs[xiangmu].validate((valid) => {
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
        addform(){
            this.dialog=true;
            DanweiService.getAll()
                .then(response => {
                    this.result1 = response.data;
                }).catch(e => {
                    console.log(e);
                });
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
        supplier_name:this.form.supplier_name,
        item_name:this.form.item_name,
        wuliaoname:this.form.wuliaoname,
        danwei: this.form.danwei ,
        need:this.form.need,
        Supplied:this.form.Supplied,
        Supplieds:this.form.Supplieds,
        //如果查看或修改已有项目，那这个id是可以拿到的
        jianzhuId:5,
        //暂时写死的，
        }
        //数据先放入tableData2里，这样前端的表格就可以正常显示，因为没有拿到项目id。
        //这里应该分成两种情况，需要你处理一下：
        //1.如果是新增项目，那就暂时还没有项目id，就先不提交数据到后端。等母表单提交后，拿到id，在then里面提交数据。
        //2.如果是已有的项目，查看或修改，那就已经拿到id了，正常提交数据。
        this.tableData2.push(data);
        // addjianzhuwuliao.create(data)
        // .then(response => {
        //   this.tableonload();
        //   console.log(response.data);
        // })
        // .catch(e => {
        //   console.log(e);
        // });  
        },
        selectlogs(){
          //  console.log(this.pa)
        let jianzhuId=this.pa
          JianzhuStatelog.findByLog(jianzhuId).then(response => {
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
           JianzhuService.get(this.pa)
         .then(response => {
                this.xiangmu=response.data;
                this.xiangmu.nodeName = response.data.JianzhuState.nodeName;
              })
              .catch(e => {
                console.log(e);
              });
       },
        updateClick(index,row){
           this.dialogFormVisible=true;
           this.dialogTitle = "updataData"; 
            this.annui=false;
           this.validated=false;
           this.liucheng=true, 
           this.selectState();
          this.pa=this.tableData[index].id;
          this.selectlogs();
           JianzhuService.get(this.pa)
         .then(response => {
                this.xiangmu=response.data;
                this.xiangmu.nodeName = response.data.JianzhuState.nodeName;
              })
              .catch(e => {
                console.log(e);
              });
       },
       updateservice(){
            this.dialogFormVisible=false;
          var data = {
            id:this.xiangmu.id,
        builder: this.xiangmu.builder,
        item_name:this.xiangmu.item_name,
        time: this.xiangmu.time,
        jindu : this.xiangmu.jindu ,
        item_money:this.xiangmu.item_money,
        total_quota:this.xiangmu.total_quota,
        money:this.xiangmu.money,
        money1:this.xiangmu.money1,
        money2:this.xiangmu.money2,
        interest:this.xiangmu.interest,
        interest1:this.xiangmu.interest1,
        Return:this.xiangmu.Return,
        fax:this.xiangmu.fax,
        A:this.xiangmu.A,
        B:this.xiangmu.B,
        C:this.xiangmu.C,
        grade:this.xiangmu.grade,
        cause:this.xiangmu.cause,
        nodeName:this.xiangmu.nodeName
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
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              let a = this;
              JianzhuService.delete(pa)
              .then(response => {
                this.delClickconfirm(index);
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
          this.delClickconfirm(index)
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

    // 
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
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
         examine: "建筑项目",
      },
        dialogTitle:"",
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
        formLabelWidth: "160px",
        rules:{
          builder: [
            { required: true, message: '请输入建筑商', trigger: 'blur' },
          ],
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'change' }
          ],
        },
        tableData2:[],
        tableData:[],
        result1:[],
        result:[],
        xiangmu:{},
        filterId:'',
        filterReturn:'',
        filterHuan_money:'',
        filterBuilder:'',
        filterItem_name:'',
        filterTime:'',
        filterJindu:'',
        filterItem_money:'',
        filterTotal_quota:'',
        filterMoney:'',
        filterMoney1:'',
        filterMoney2:'',
        filterInterest:'',
        filterInterest1:'',
        Return:'',
        filterfax:'',
        filterA:'',
        filterB:'',
        filterC:'',
        filterGrade:'',
        filterCause:'',
        dialogFormVisible: false,
      }
    }
  }
</script>