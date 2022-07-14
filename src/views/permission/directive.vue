<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8">
        <h3 style="margin-left:30px">{{isEdit?'信息编辑':'信息添加'}}</h3>
        <el-form ref="studentForm" :model="studentForm" :rules="rules" label-width="80px">
          <el-form-item label="控制对象" prop="name">
            <el-select v-model="studentForm.name" placeholder="请选择">
              <el-option label="空调" :value="1"></el-option>
              <el-option label="喷淋头" :value="0"></el-option>
              <el-option label="二氧化碳" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开启状态" prop="sex">
            <el-select v-model="studentForm.sex" placeholder="请选择">
              <el-option label="开" :value="1"></el-option>
              <el-option label="关" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目的状态" prop="score">
            <el-input v-model.number="studentForm.score" placeholder="请输入"></el-input>
          </el-form-item>
          <div style="text-align:center">
            <el-button type="primary" @click="dialogVisible = true,onSubmit('studentForm')">{{isEdit?'提交修改':'添加'}}</el-button>
            <el-button @click="onReset('studentForm')">重置</el-button>
          </div>
        </el-form>
      </el-col>
      <el-col :span="12" :offset="1">
        <h3>控制列表</h3>
        <el-table :data="dataList" border style="width: 100%">
          <el-table-column prop="name" label="控制对象" width="180">
            <template slot-scope="scope">{{scope.row.name == '0' ? '喷淋头' : scope.row.name == '1' ? '空调' :'二氧化碳'}}</template>
          </el-table-column>
          <el-table-column prop="age" label="当前状态" width="100"></el-table-column>
          <el-table-column prop="sex" label="开启状态">
            <template slot-scope="scope">{{scope.row.sex === 1?'开':'关'}}</template>
          </el-table-column>
          <el-table-column prop="score" label="目的状态"></el-table-column>
          <el-table-column label="编辑" width="180">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      dialogVisible: false,
      studentForm: {
        name: 1,
        age: "",
        sex: 1,
        score: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入控制对象", trigger: "blur" },
        ],
        age: [
          {
            required: true,
            message: "当前状态不能为空",
          }
        ],
        score: [
          {
            required: true,
            message: "目的状态不能为空",
          }
        ]
      },
      dataList: [
        { name: 1, age: 23, sex: 1, score: 25 },
        { name: 2, age: 0.030, sex: 1, score: 0.031 },
        { name: 0, age: 67, sex: 1, score: 69 }
      ],
      isEdit: false,
      index: null
    };
  },
  methods: {
    onSubmit: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const student = {
            name: this.studentForm.name,
            age: this.studentForm.age,
            sex: this.studentForm.sex,
            score: this.studentForm.score,
          };
          if (this.isEdit) {
            this.dataList.splice(this.index, 1, student);
            this.isEdit = false;
          } else {
            this.dataList.push(student);
          }
          this.$refs['studentForm'].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleEdit(index, data) {
      this.index = index;
      this.isEdit = true;
      this.studentForm = this.$utils.deepCopy(data);
    },
    handleDelete(index) {
      this.$confirm("确定删除该条数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.dataList.splice(index, 1);
          this.$refs['studentForm'].resetFields();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {}
};
</script>
