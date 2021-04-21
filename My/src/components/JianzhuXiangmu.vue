<template>
<div>
  <!-- 项目管理/建筑项目管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>建筑项目管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
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
            <el-date-picker v-model="addxiangmu.time" type="date" placeholder="选择日期"></el-date-picker>
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
          <el-form-item label="已申请金额" prop="money" :label-width="formLabelWidth">
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
        <el-col :span="6">
            <el-button type="primary" @click="addform()">添加物料</el-button></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" @click="addsubmit('addxiangmu')">立即添加</el-button>
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
                  <el-date-picker v-model="updatexiangmu.time" type="date" placeholder="选择日期"></el-date-picker>
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
          <el-form-item label="已申请金额" prop="money" :label-width="formLabelWidth">
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
          <el-button type="primary" @click="updatesubmit('updatexiangmu')">立即修改</el-button>
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
            <el-date-picker v-model="kanxiangmu.time" type="date" placeholder="选择日期"></el-date-picker>
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
          <el-form-item label="已申请金额" prop="money" :label-width="formLabelWidth">
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
      <el-form-item label="需要数量" :label-width="formLabelWidth">
        <el-input v-model="form.shu" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="已供应" :label-width="formLabelWidth">
        <el-input v-model="form.shu1" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="还需供应" :label-width="formLabelWidth">
        <el-input v-model="form.shu2" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="产值对比" :label-width="formLabelWidth">
        <el-input v-model="form.output_value" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="完成量" :label-width="formLabelWidth">
        <el-input v-model="form.wancheng" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="库存" :label-width="formLabelWidth">
        <el-input v-model="form.stock" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="addsubmit1()">立即添加</el-button>
    </el-form-item>
    </el-form>
      
</el-drawer>
</div>

</template>

<script>
import addWuliaoService from "../services/addWuliaoService";
import JianzhuService from "../services/JianzhuService";
import WuliaoService from "../services/WuliaoService";
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
       async addservice(){
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
       addsubmit(formName){
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.addservice();
          } else {
            return false;
          }
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
        shu1:this.form.shu1,
        shu2:this.form.shu2,
        output_value:this.form.output_value,
        wancheng:this.form.wancheng,
        stock:this.form.stock,
        }

        addWuliaoService.create(data)
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
       updateservice(){
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
        rules:{
          builder: [
            { required: true, message: '请输入建筑商', trigger: 'blur' },
          ],
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        addxiangmu:{},
        updatexiangmu:{},
        kanxiangmu:{},
        filterId:'',
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
        dialogFormVisible1: false,
        dialogFormVisible2: false,
      }
    }
  }
</script>