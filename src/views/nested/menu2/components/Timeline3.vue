<template>
  <div class="block">
    <el-timeline>
      <div>
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
          title: '空调',
          content: ''
        },
        {
          timestamp: '',
          title: '喷淋头',
          content: ''
        },
        {
          timestamp: '',
          title: '二氧化碳控制器',
          content: ''
        },
      ]
    }
  }
}
</script>
