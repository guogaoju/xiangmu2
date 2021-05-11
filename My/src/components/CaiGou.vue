<template>
<div>
  <!-- 业务管理/采购管理 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>业务管理</el-breadcrumb-item>
      <el-breadcrumb-item>采购管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="14">
        <el-button type="primary" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
  <el-table
    :data="tableData.filter(data => (!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
      &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
      &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
      &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
      &(!filterTotalmoney || data.totalmoney.toLowerCase().includes(filterTotalmoney.toString().toLowerCase()))
      &(!filterMoney1 || data.money1.toLowerCase().includes(filterMoney1.toString().toLowerCase()))
      &(!filterMoney2 || data.money2.toLowerCase().includes(filterMoney2.toString().toLowerCase()))
      &(!filterMoney3 || data.money3.toLowerCase().includes(filterMoney3.toString().toLowerCase()))
      &(!filterMoney4 || data.money4.toLowerCase().includes(filterMoney4.toString().toLowerCase()))
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
    <el-table-column min-width='150' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney"> </el-input>
                    <div slot="reference"> <label> 已使用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterTotalmoney"> </el-input>
                    <div slot="reference"> <label> 总授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.totalmoney}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width="120"  prop="statement" label="结算单" align="center">
            <template slot-scope="scope">
                <el-image style="width: 100px; height: 100px" :src="scope.row.statement" :preview-src-list="[scope.row.statement]">
                </el-image>
            </template>
    </el-table-column>
    <el-table-column min-width="120"  prop="delivery_note" label="送货单" align="center">
            <template slot-scope="scope">
                <el-image style="width: 100px; height: 100px" :src="scope.row.delivery_note" :preview-src-list="[scope.row.delivery_note]">
                </el-image>
            </template>
    </el-table-column>
    <el-table-column min-width="120"  prop="bill" label="发票" align="center">
            <template slot-scope="scope">
                <el-image style="width: 100px; height: 100px" :src="scope.row.bill" :preview-src-list="[scope.row.bill]">
                </el-image>
            </template>
    </el-table-column>
    <el-table-column min-width='120' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney1"> </el-input>
                    <div slot="reference"> <label> 融资总预算 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money1}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='130' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney2"> </el-input>
                    <div slot="reference"> <label> 实际融资金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money2}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='170' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney3"> </el-input>
                    <div slot="reference"> <label> 项目已使用融资额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money3}}
                </div>
            </template>
    </el-table-column>
    <el-table-column min-width='180' align="center">
             <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterMoney4"> </el-input>
                    <div slot="reference"> <label> 更新后已使用融资额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.money4}}
                </div>
            </template>
    </el-table-column>
    <el-table-column prop="current_process" label="当前流程" width="100" align="center" :filters="[{text:'通过', value:'通过'},{text:'拒绝', value:'拒绝'},{text:'审核中', value:'审核中'}]" :filter-method="filterCurrent">
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
  <el-dialog title="添加采购" width="55%" :visible.sync="dialogFormVisible">
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
           <el-form-item label="已使用额度" prop="money" :label-width="formLabelWidth">
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
          <el-form-item label="结算单" ref="uploadElement" prop="statement" :label-width="formLabelWidth">
                    <!-- <el-input v-model="addwuliao.avatar" v-if="false"></el-input> -->
                    <el-upload ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/Caigou/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="addcaigou" 
                    :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,imageUrl)}" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl" :src="imageUrl" class="statement">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="送货单" ref="uploadElement" prop="delivery_note" :label-width="formLabelWidth">
                    <!-- <el-input v-model="addwuliao.avatar" v-if="false"></el-input> -->
                    <el-upload ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/Caigou/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="addcaigou" 
                    :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,imageUrl1)}" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl1" :src="imageUrl1" class="delivery_note">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="发票" ref="uploadElement" prop="bill" :label-width="formLabelWidth">
                    <!-- <el-input v-model="addwuliao.avatar" v-if="false"></el-input> -->
                    <el-upload ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/Caigou/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="addcaigou" 
                    :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,imageUrl2)}" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl2" :src="imageUrl2" class="bill">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
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
          <el-button type="primary" @click="addsubmit('addcaigou')">立即添加</el-button>
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
          <el-button type="primary" @click="updatesubmit('updatecaigou')">立即修改</el-button>
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
  status-icon :rules="rules1"
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
       addsubmit(formName){
          let vm = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
             vm.$refs.upload.submit();
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
          CaiGouService.create(data).then(response => {
          this.tableonload();
           this.$router.go(0)
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
       updateservice(){
          this.dialogFormVisible1=false;
          var data = {
            id:this.updatecaigou.id,
        qiye_name: this.updatecaigou.qiye_name,
        item_name:this.updatecaigou.item_name,
        money: this.updatecaigou.money,
        totalmoney : this.updatecaigou.totalmoney ,
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
      handleClick(row) {
        console.log(row);
      },
      filterCurrent(value, row){
            return row.current_process === value;
        },
    handleAvatarChange(file,filelist,imageUrl) {
             imageUrl = URL.createObjectURL(file.raw);
           console.log(imageUrl)
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
        fileList:[{imageUrl:""}],
          imageUrl: '',
          imageUrl1: '',
          imageUrl2: '',
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
        rules1:{
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          wname: [
            { required: true, message: '请选择物料名称', trigger: 'change' }
          ],
          shu: [
            { required: true, message: '请输入数量', trigger: 'change' }
          ],
        },
        rules:{
          qiye_name: [
            { required: true, message: '请输入企业信息', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          item_name: [
            { required: true, message: '请选择项目', trigger: 'change' }
          ],
          money: [
            { required: true, message: '请输入已使用额度', trigger: 'change' }
          ],
          totalmoney: [
            { required: true, message: '请输入总授信额度', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        addcaigou:{},
        updatecaigou:{},
        kancaigou:{},
        filterId:'',
        filterQiye_name:'',
        filterItem_name:'',
        filterMoney:'',
        filterTotalmoney:'',
        filterMoney1:'',
        filterMoney2:'',
        filterMoney3:'',
        filterMoney4:'',
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
