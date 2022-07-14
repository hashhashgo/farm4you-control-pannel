<template>
 <div class="detail_tables">
   <el-table :data="markList" border :span-method="objectSpanMethod">
        <el-table-column label="植物长势指标" width="135">
            <template slot-scope="scope">
                {{scope.row.FactorCode}} {{scope.row.FactorName}}
            </template>
        </el-table-column>
        <el-table-column prop="FactorDivide" label="指标数值" width="82" align="center"></el-table-column>
        <el-table-column label="指标图" align="center">
            <template slot-scope="scope">
                <!-- 指标图 -->
                <BarEcharts :markList="markList"></BarEcharts>
            </template>
        </el-table-column>
        <el-table-column prop="DegreeLevel" label="程度" width="85" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import BarEcharts from './components/BarEchart'
export default {
  components: {BarEcharts},
  data() {
    return {
      markList:[
       {FactorCode: '叶面积指数', FactorName: '(7.1)', FactorDivide: 3.4, DegreeLevel: '基本正常'},
       {FactorCode: '叶面积指数', FactorName: '(7.2)', FactorDivide: 3.3, DegreeLevel: '基本正常'},
       {FactorCode: '叶面积指数', FactorName: '(7.3)', FactorDivide: 3.7, DegreeLevel: '基本正常'},
       {FactorCode: '叶面积指数', FactorName: '(7.4)', FactorDivide: 3.8, DegreeLevel: '基本正常'},
       {FactorCode: '叶面积指数', FactorName: '(7.5)', FactorDivide: 3.3, DegreeLevel: '基本正常'},
       {FactorCode: '叶面积指数', FactorName: '(7.6)', FactorDivide: 3.1, DegreeLevel: '需要改善'},
       {FactorCode: '叶面积指数', FactorName: '(7.7)', FactorDivide: 4.2, DegreeLevel: '需要改善'},
       {FactorCode: '叶面积指数', FactorName: '(7.8)', FactorDivide: 3.6, DegreeLevel: '基本正常'},
       {FactorCode: '叶面积指数', FactorName: '(7.9)', FactorDivide: 3.4, DegreeLevel: '基本正常'},
       {FactorCode: '叶面积指数', FactorName: '(7.10)', FactorDivide: 4.0, DegreeLevel: '需要改善'}
       ]
     }
  },
  methods: {
    // 合并第3列
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
       if (columnIndex === 2) {
         if (rowIndex === 0) {
            return { // 合并第三列（columnIndex === 2），从第1行开始往下10行
              rowspan: 10,
              colspan: 1
            }
         } else {
            return {
               rowspan: 0,
               colspan: 0
            }
         }
       }
     }
  }
}
</script>
 
<style lang="scss" scoped>
 .detail_tables{
  display: flex;
  flex-wrap: wrap;
  margin: 10mm 0 20mm 0;
  .el-table{
     margin: 1.5mm;
  }
  .el-table__cell{
     font-size: 4mm;
     line-height: inherit;
     padding: 2mm 0px;
  }
  .el-table td, .el-table th.is-leaf,.el-table--border, .el-table--group{
     border-color: #333;
  }
}
</style>