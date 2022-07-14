<template>
  <div id="moCharts" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    // index页面type变量定义
    type: {
      type: String,
      required: true,
      default: '1'
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      // 定义echarts字段，接收可变值
      chartData: {
        days: [],
        users: []
      }
    }
  },
  // 监听index传过来的type字段
  watch: {
    type: {
      handler(newValue, oldValue) {
        this.type = newValue
        this.initChart()
      }
    }
  },
  mounted() {
    // 初始化echart数据
    this.initChart()
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      const myChart = document.getElementById(('moCharts'))
      myChart.style.width = window.innerWidth - 290 + 'px'
      window.addEventListener('resize', this.__resizeHandler)
    }
    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  destroyed() {
    clearInterval(this.myInterval)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }
    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    init() {
      this.chart.setOption({
        // 鼠标移上去显示数值工具
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        // x轴
        xAxis: {
          type: 'category',
          data: this.chartData.days
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          data: this.chartData.shuju,
        },
        series: [{
          name: this.chartData.shuju,
          data: this.chartData.users,
          type: 'line'
        }]
      })
    },
    initChart() {
    // 数据修改
      this.chartData.days = ['2022-7-01', '2022-7-02', '2022-7-03', '2022-7-04', '2022-7-05', '2022-7-06', '2022-7-07', '2022-7-08', '2022-7-09']
      if (this.type == 1) {
        this.chartData.users = [24, 25, 28, 27, 25, 20, 23, 29, 30],this.chartData.shuju = "温度"
      } if (this.type == 2) {
        this.chartData.users = [67, 68, 70, 63, 69, 65, 70, 62, 66],this.chartData.shuju = "湿度"
      }if (this.type == 3) {
        this.chartData.users = [0.310, 0.315, 0.316, 0.320, 0.314, 0.313, 0.321, 0.311, 0.315],this.chartData.shuju = "二氧化碳浓度"
      }
      // 渲染echarts组件
      this.chart = echarts.init(this.$el, 'macarons')
      this.init()
    }
  }
}
</script>