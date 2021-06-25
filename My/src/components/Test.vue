<template>
  <div>
    <el-button size="mini" @click="handleAdd()" type="primary">Add</el-button>
    <el-table
      ref="mytable"
      :data="table_data"
      style="width: 100%"
      
    >
      <el-table-column
        align="center"
        v-for="(item,index,key) in table_columns"
        :item="item"
        :key="key"
        :index="index"
        :label="item.label"
      >
        <template slot-scope="scope">
          <el-input
            v-if=" scope.row.edit"
            size="small"
            v-model="scope.row[item.prop]"
            :placeholder="'请输入'+item.label"
          ></el-input>
          <span v-if="  !scope.row.edit">{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <!-- 添加控制 -->
          <div v-if="scope.row.add!=undefined&&scope.row.add" style="display: inline-block;">
            <!-- 保存 -->
            <el-button
              size="mini"
              type="success"
              :plain="true"
              v-if="scope.row.edit"
              @click="handleSave(scope.$index, scope.row)"
            >Save</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    //保存
    handleSave(index, row) {
      console.log(index, row);
      row.edit = false;

      delete this.table_data[index].add;

      this.$message({
        message: "保存成功！",
        type: "success"
      });
    },
    handleAdd() {
      var addDataJson = {};
      for (var key in this.new_date_json) {
        if (key === "edit") {
          delete addDataJson[key];
        } else if (key === "add") {
          delete addDataJson[key];
        } else {
          addDataJson[key] = "";
        }
      }
      addDataJson.edit = true;
      addDataJson.add = true;
      this.table_data.push(addDataJson);
    },
    //初始化编辑属性
    initEditAttribute() {
      var self = this;
      var edit = self.edit;

      var dataArray = [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          sex: 18
        },
        {
          date: "2016-05-02",
          sex: 18,
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          sex: 18,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ];

      if (dataArray.length > 0) {
        //添加编辑事件
        for (var index in dataArray) {
          dataArray[index]["edit"] = false;
          this.table_data.push(dataArray[index]);
        }

        if (Object.keys(this.new_date_json).length === 0) {
          //新增时，初始化数据结构
          this.initAddDataJson(dataArray[0]);
        }
      }
      console.log("this.tableData:", this.table_data);
    },
    initAddDataJson(dataArray) {
      //新增时，初始化数据结构
      var dataJson = dataArray;
      var newDateJson = {};
      for (var key in dataJson) {
        if (key === "edit") {
          newDateJson[key] = "true";
        } else {
          newDateJson[key] = "";
        }
      }
      newDateJson["add"] = true;
      this.new_date_json = newDateJson;
    }
  },
  mounted: function() {
    this.initEditAttribute();
    //确保方法在页面渲染后调用
    this.$nextTick(function() {
      /////方法
    //   this.tableRowClassName();
    });
  },
  watch: {
    space_color: function() {
      //监听数据变化
      this.$nextTick(function() {
        /////方法
        // this.tableRowClassName();
      });
    },
    // table_data: function() {
    //   //监听数据变化f
    //   this.$nextTick(function() {
    //     /////方法
    //     // this.tableRowClassName();
    //   });
    // }
  },
  data() {
    return {
      new_date_json: {}, //数据结构
      //表头信息
      table_columns: [
        {
          prop: "date",
          label: "日期",
          width: "150"
        },
        {
          prop: "name",
          label: "姓名",
          width: "150"
        },
        {
          prop: "sex",
          label: "年龄",
          width: "150"
        },
        {
          prop: "province",
          label: "省份",
          width: ""
        },
        {
          prop: "city",
          label: "城市",
          width: "150"
        },
        {
          prop: "address",
          label: "地址",
          width: "150"
        }
      ],
      //表格数据
      table_data: [
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   province: "上海",
        //   city: "普陀区",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   zip: 200333,
        //   sex: 18
        // },
        // {
        //   date: "2016-05-02",
        //   sex: 18,
        //   name: "王小虎",
        //   province: "上海",
        //   city: "普陀区",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   zip: 200333
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   sex: 18,
        //   province: "上海",
        //   city: "普陀区",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   zip: 200333
        // }
      ]
    };
  }
};
</script>
<style scoped>
</style>