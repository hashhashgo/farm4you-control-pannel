<!-- 可新增/删除table表格页面 -->
<template>
    <div>
        <el-button type="success" icon="el-icon-plus" size="mini" @click="handleAddBtn">下载插件</el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleDeleteBtn">删除插件</el-button>

        <el-table :data="tableData" :header-cell-class-name="starAdd" :header-cell-style="{background:'rgb(113 167 228)',color:'#fff'}" :row-class-name="rowClassName" @selection-change="handleDetailSelectionChange" ref="tb" border style="width: 100%; cursor: pointer;">
            <el-table-column type="selection" align="center" width="50">
            </el-table-column>
            <el-table-column label="序号" align="center" prop="xh" width="50"></el-table-column>
            <el-table-column prop="username" align="center" :required="true" label="插件类型">
                <template slot-scope="{row,$index}">
                    <span>{{row.username}}</span>
                    <button @click="showoschoose($index,row)" style="float: right;margin-right: 3px;padding: 5px;" v-if="showEdit[$index]">选择</button>
                    <!-- <el-input v-model="tableData[row.xh-1].username" v-if="showEdit[$index]" clearable></el-input> -->
                </template>
            </el-table-column>
            <el-table-column prop="mescode" align="center" :required="true" label="插件描述">
                <template slot-scope="{row,$index}">
                    <span v-if="!showEdit[$index]">{{row.mescode}}</span>
                    <el-input v-model="tableData[row.xh-1].mescode" v-if="showEdit[$index]" placeholder="插件可自行选择下载">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </template>
            </el-table-column>
            <el-table-column header-align="center" align="center" width="100" label="操作">
                <template slot-scope="{row,$index}">
                    <el-button v-if="!showEdit[$index]" @click="showUpdate($index,row)" type="text" size="small">编辑</el-button>
                    <el-radio-group v-model="switchRoles">
                    <el-button label="hong"v-if="showEdit[$index]" @click="submit($index,row)" type="text" size="small" style="color: #85ce61;">确定</el-button></el-radio-group>
                    <el-button v-if="showEdit[$index]" @click="cancelUpdate($index)" type="text" size="small" style="color: red;">取消</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-input placeholder="输入关键字进行过滤" v-model="filterText">
            </el-input>
            <el-tree class="filter-tree" :data="treeData" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree" @node-click="checkUser">
            </el-tree>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="gerUserBtn">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  },
    components: {},
    data() {
        return {
            tableData: [],
            filterText: "",
            addressArray: [
                //用户选择住址部分
                {
                    ID: 1,
                    adrNAME: "北京",
                },
                {
                    ID: 2,
                    adrNAME: "杭州",
                },
                {
                    ID: 3,
                    adrNAME: "三亚",
                },
            ],
            treeData: [
                {
                    id: 1,
                    label: "种植方案插件",
                    children: [
                        {
                            id: 4,
                            label: "番茄",
                            children: [
                                {
                                    id: 9,
                                    label: "番茄品种1",
                                },
                                {
                                    id: 10,
                                    label: "番茄品种2",
                                },
                                                                {
                                    id: 11,
                                    label: "番茄品种3",
                                },
                            ],
                        },
                          {id: 3,
                          label: "玉米",
                          children: [
                              {
                                  id: 7,
                                  label: "玉米品种1",
                              },
                              {
                                  id: 8,
                                  label: "玉米品种2",
                              },
                                                                {
                                  id: 12,
                                  label: "玉米品种3",
                              },
                          ],
                        },
                          {id: 13,
                          label: "水稻",
                          children: [
                              {
                                  id: 14,
                                  label: "水稻品种1",
                              },
                              {
                                  id: 15,
                                  label: "水稻品种2",
                              },
                                                                {
                                  id: 16,
                                  label: "水稻品种3",
                              },
                          ],
                        },
                    ],
                },
                {
                    id: 2,
                    label: "视图主题插件",
                    children: [
                        {
                            id: 5,
                            label: "蓝色主题",
                        },
                        {
                            id: 6,
                            label: "红色主题",
                        },
                    ],
                },
            ],
            defaultProps: {
                children: "children",
                label: "label",
            },
            checkedDetail: [],
            showEdit: [], //控制显示及隐藏
            showSetTable: true, //是否显示
            rowIstemp: [], //点击浏览后对应的行信息
            getaddress: [],
            getUser: [],
            dialogVisible: false,
            nowIndex: "",
        };
    },
    methods: {
        //表格的新增
        rowClassName({ row, rowIndex }) {
            row.xh = rowIndex + 1;
        },
        //单选框选中数据
        handleDetailSelectionChange(selection) {
            this.checkedDetail = selection;
        },
        //点击新增更多
        handleAddBtn() {
            this.getaddress = "";
            let obj = {};
            obj.username = "";
            obj.mescode = "";
            obj.address = "";
            obj.group = "";
            this.tableData.push(obj);
        },
        //删除
        handleDeleteBtn() {
            if (this.checkedDetail.length == 0) {
                this.$alert("请先选择要删除的数据", "提示", {
                    confirmButtonText: "确定",
                });
            } else {
                this.$confirm("请是否确认删除该属性?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                    callback: (action) => {
                        if (action === "confirm") {
                            let val = this.checkedDetail;
                            val.forEach((val, index) => {
                                this.tableData.forEach((v, i) => {
                                    if (val.xh === v.xh) {
                                        this.tableData.splice(i, 1);
                                    }
                                });
                            });
                            this.$message({
                                message: "删除成功，记得保存修改喔！",
                                type: "success",
                            });
                            this.$refs.tb.clearSelection();
                            return;
                        } else {
                            this.$message({
                                message: "已取消删除操作",
                                type: "warning",
                            });
                            return;
                        }
                    },
                });
            }
        },
        //红色五角星提示
        starAdd(obj) {
            if (obj.columnIndex === 2 || obj.columnIndex === 3) {
                return "star";
            }
        },
        //点击修改
        showUpdate(index, row) {
            console.log("index");
            this.showEdit[index] = true;
            this.$set(this.showEdit, index, true); //这里要用$set方法，否则页面状态不更新
        },
        //取消修改
        cancelUpdate(index) {
            this.$confirm("取消修改？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    this.$set(this.showEdit, index, false);
                })
                .catch(() => {});
        },
        //提交修改
        submit(index, row) {
            console.log("index", index);
            this.tableData[index].address = this.getaddress.adrNAME;
            // this.tableData[index].username = this.getUser.label;
            console.log("tableData===submit", this.tableData);

            //发送请求，隐藏输入框
            this.$message({
                type: "success",
                message: "已缓存，记得点击保存提交修改喔！",
                duration: 888,
                onClose: () => {
                    this.$set(this.showEdit, index, false); //vue添加属性的方法
                },
            });
        },
        //住址选择的下拉框
        addressChange(e) {
            console.log("住址中选择中的e", e);
            this.getaddress = e;
        },
        //选择用户的点击事件
        showoschoose(index, row) {
            console.log("index", index);
            console.log("row", row);
            this.nowIndex = index;
            this.dialogVisible = true;
        },
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then((_) => {
                    done();
                })
                .catch((_) => {});
        },
        //选中的后的点击回调事件
        checkUser(data) {
            console.log("data", data);
            this.getUser = data;
        },
        //选择人员后的确定点击事件
        gerUserBtn() {
            console.log("getUser", this.getUser);
            this.tableData[this.nowIndex].username = this.getUser.label;
            this.dialogVisible = false;
        },
        //树形结构的过滤
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
    },
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        },
    },
};
</script>
<style>
</style>
