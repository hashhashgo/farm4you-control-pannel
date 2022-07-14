<template>
  <div class="block">
    <el-timeline>
      <div>
    监控方案的开启状态:
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="yes" >开启</el-radio-button>
      <el-radio-button label="no" >关闭</el-radio-button>
    </el-radio-group>
  </div>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
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
  data() {
    return {
      timeline: [
        {
          timestamp: '',
          title: '温度传感器1',
          content: ''
        },
        {
          timestamp: '',
          title: '温度传感器2',
          content: ''
        },
        {
          timestamp: '',
          title: '温度传感器3',
          content: ''
        },
                {
          timestamp: '',
          title: '湿度传感器1',
          content: ''
        },
        {
          timestamp: '',
          title: '湿度传感器2',
          content: ''
        },
        {
          timestamp: '',
          title: '湿度传感器3',
          content: ''
        },
      ]
    }
  }
}
</script>
