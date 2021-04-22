<template>
<div>
    <!-- 基本资料管理/物料参数/物料资料 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>基本资料管理</el-breadcrumb-item>
        <el-breadcrumb-item>物料参数</el-breadcrumb-item>
        <el-breadcrumb-item>物料资料</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
        <el-col :span="10">
            <el-button type="primary" @click="openFrom()">添加</el-button>
        </el-col>
    </el-row>
    <el-table :data="tableData.filter(data => (!filteredName || data.name.toLowerCase().includes(filteredName.toString().toLowerCase()))
        &(!filterDanwei || data.danwei.toLowerCase().includes(filterDanwei.toString().toLowerCase()))
        &(!filterId || data.id.toString().toLowerCase().includes(filterId.toString().toLowerCase()))
        &(!filterSpecification || data.Specification.toLowerCase().includes(filterSpecification.toString().toLowerCase()))
        &(!filterWuliaotype || data.wuliaotype.toLowerCase().includes(filterWuliaotype.toString().toLowerCase()))
        &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
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
        <el-table-column min-width='50' align="center">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filteredName"> </el-input>
                    <div slot="reference"> <label> 名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.name}}
                </div>
            </template>
        </el-table-column>
        <el-table-column min-width='50' align="center">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterSpecification"> </el-input>
                    <div slot="reference"> <label> 规格型号 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.Specification}}
                </div>
            </template>
        </el-table-column>
        <el-table-column min-width='50' align="center">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterWuliaotype"> </el-input>
                    <div slot="reference"> <label> 物料类型 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.wuliaotype}}
                </div>
            </template>
        </el-table-column>
        <el-table-column min-width='50' align="center">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
                <el-popover placement="bottom" trigger="click">
                    <el-input v-model="filterDanwei"> </el-input>
                    <div slot="reference"> <label> 计量单位 </label> <i class='el-icon-arrow-down'> </i> </div>
                </el-popover>
            </template>
            <template slot-scope="scope">
                <div>
                    {{scope.row.danwei}}
                </div>
            </template>
        </el-table-column>
        <el-table-column min-width="55"  prop="avatar" label="物料图片" align="center">
            <template slot-scope="scope">
                <el-image style="width: 100px; height: 100px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]">
                </el-image>
            </template>
        </el-table-column>
        <el-table-column min-width='50' align="center">
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
        <el-table-column prop="current_process" label="当前流程" width="120" align="center" :filters="[{text:'通过', value:'通过'},{text:'拒绝', value:'拒绝'},{text:'审核中', value:'审核中'}]" :filter-method="filterCurrent">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300" align="center">
            <template slot-scope="scope">
                <el-button @click="kanClick(scope.$index,tableData)" type="primary" round size="small">查看</el-button>
                <el-button type="primary" @click="updateClick(scope.$index,tableData)" round size="small">修改</el-button>
                <el-button type="danger" @click="delClick(scope.$index,tableData)" round size="small">删除</el-button>
            </template>
        </el-table-column>

    </el-table>

    <!-- 添加弹出层 -->
    <el-dialog title="添加物料资料" :visible.sync="dialogFormVisible">
        <el-form :model="addwuliao" status-icon :rules="rules" ref="addwuliao" label-width="100px" class="demo-ruleForm">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
                        <el-input v-model="addwuliao.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="规格型号" prop="Specification" :label-width="formLabelWidth">
                        <el-input v-model="addwuliao.Specification"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="物料类型" prop="wuliaotype" :label-width="formLabelWidth">
                        <el-select filterable v-model="addwuliao.wuliaotype" placeholder="请选择">
                            <el-option v-for="item in result1" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
                        <el-select filterable v-model="addwuliao.danwei" placeholder="请选择单位">
                            <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="物料图片" ref="uploadElement" prop="avatar" :label-width="formLabelWidth">
                    <!-- <el-input v-model="addwuliao.avatar" v-if="false"></el-input> -->
                    <el-upload ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/Wuliao/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="addwuliao" 
                    :on-change="handleAvatarChange" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
                        <el-input v-model="addwuliao.remarks"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
                        <el-input v-model="addwuliao.current_process"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6"></el-col>
                <el-col :span="12">
                    <el-form-item>
                        <el-button type="primary" @click="addsubmit('addwuliao')">立即添加</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
            </el-row>
        </el-form>
    </el-dialog>

    <!-- 修改弹出层 -->
    <el-dialog title="修改物料资料" :visible.sync="dialogFormVisible1">
        <el-form :model="updatewuliao" status-icon :rules="rules" ref="updatewuliao" label-width="100px" class="demo-ruleForm">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
                        <el-input v-model="updatewuliao.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="规格型号" prop="Specification" :label-width="formLabelWidth">
                        <el-input v-model="updatewuliao.Specification"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="物料类型" prop="wuliaotype" :label-width="formLabelWidth">
                        <el-input v-model="updatewuliao.wuliaotype"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
                        <el-input v-model="updatewuliao.danwei"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="物料图片" prop="avatar" :label-width="formLabelWidth">
                    <el-upload v-model="updatewuliao.avatar" class="avatar-uploader" 
                    action="" 
                    :show-file-list="false" 
                    :on-success="handleAvatarSuccess" 
                    :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
                        <el-input v-model="updatewuliao.remarks"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
                        <el-input v-model="updatewuliao.current_process"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6"></el-col>
                <el-col :span="12">
                    <el-form-item>
                        <el-button type="primary" @click="updatesubmit('updatewuliao')">立即修改</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="6"></el-col>
            </el-row>
        </el-form>
    </el-dialog>
    <!-- 查看弹出层 -->
    <el-dialog title="查看物料资料" :visible.sync="dialogFormVisible2">
        <el-form :model="kanwuliao" status-icon :rules="rules" ref="kanwuliao" label-width="100px" class="demo-ruleForm">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
                        <el-input v-model="kanwuliao.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="规格型号" prop="Specification" :label-width="formLabelWidth">
                        <el-input v-model="kanwuliao.Specification"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="物料类型" prop="wuliaotype" :label-width="formLabelWidth">
                        <el-input v-model="kanwuliao.wuliaotype"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
                        <el-input v-model="kanwuliao.danwei"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="物料图片" prop="avatar" :label-width="formLabelWidth">
                    <el-upload v-model="kanwuliao.avatar" class="avatar-uploader" 
                    action="" 
                    :show-file-list="false" 
                    :on-change="handleAvatarChange" 
                    :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
                        <el-input v-model="kanwuliao.remarks"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前流程" prop="current_process" :label-width="formLabelWidth">
                        <el-input v-model="kanwuliao.current_process"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-dialog>
</div>
</template>

<script>
import DanweiService from "../services/DanweiService";
import WuliaoService from "../services/WuliaoService";
import WuliaoTypeService from "../services/WuliaoTypeService";
export default {
    created() {
        this.tableonload();
    },
    methods: {
        async tableonload() {
            WuliaoService.getAll()
                .then(response => {
                    this.tableData = response.data;
                    //console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
            DanweiService.getAll()
                .then(response => {
                    this.result = response.data;
                }).catch(e => {
                    console.log(e);
                });
        },
        openFrom() {
            this.dialogFormVisible = true
            DanweiService.getAll()
                .then(response => {
                    this.result = response.data;
                }).catch(e => {
                    console.log(e);
                });
            WuliaoTypeService.getAll()
                .then(response => {
                    this.result1 = response.data;
                }).catch(e => {
                    console.log(e);
                });
        },
        addsubmit(formName) {
            let vm = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    vm.$refs.upload.submit();
                    this.dialogFormVisible = false;
                    var data = {
                        name: this.addwuliao.name,
                        Specification: this.addwuliao.Specification,
                        wuliaotype: this.addwuliao.wuliaotype,
                        danwei: this.addwuliao.danwei,
                        avatar: this.addwuliao.avatar,
                        remarks: this.addwuliao.remarks,
                        current_process: this.addwuliao.current_process
                    }
                    WuliaoService.create(data)
                        .then(response => {
                            this.tableonload();
                            //s刷新页面
                            this.$router.go(0)
                            console.log(response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                } else {
                    return false;
                }
            })
        },
        kanClick(index, row) {
            this.dialogFormVisible2 = true
            let pa = this.tableData[index].id;
            WuliaoService.get(pa)
                .then(response => {
                    this.kanwuliao = response.data;
                    this.fileList[0].imageUrl=row.avatar;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        updateClick(index, row) {
            this.dialogFormVisible1 = true;
            let pa = this.tableData[index].id;
            WuliaoService.get(pa)
                .then(response => {
                    this.updatewuliao = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        updatesubmit() {
            this.dialogFormVisible1 = false;
            var data = {
                id: this.updatewuliao.id,
                name: this.updatewuliao.name,
                Specification: this.updatewuliao.Specification,
                wuliaotype: this.updatewuliao.wuliaotype,
                danwei: this.updatewuliao.danwei,
                avatar: this.updatewuliao.avatar,
                remarks: this.updatewuliao.remarks,
                current_process: this.updatewuliao.current_process
            }
            WuliaoService.update(data.id, data)
                .then(response => {
                    this.tableonload();
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        delClick(index, row) {
            let pa = this.tableData[index].id;
            WuliaoService.delete(pa)
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
        handleAvatarChange(file,filelist) {

            this.imageUrl = URL.createObjectURL(file.raw);
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
        }
    },

    data() {
        return {
            fileList:[{imageUrl:""}],
            imageUrl: '',
            TravelType: 1,
            formLabelWidth: "100px",
            rules: {},
            tableData: [],
            result: [],
            result1: [],
            addwuliao: {},
            updatewuliao: {},
            kanwuliao: {},
            // current_process:'',
            filteredName: '',
            filterDanwei: '',
            filterId:'',
            filterWuliaotype:'',
            filterRemarks:'',
            filterSpecification:'',
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
