<template>
  <el-form>
    <el-form-item label="温度">
      <el-input v-model.trim="user.name" />
    </el-form-item>
    <el-form-item label="湿度">
      <el-input v-model.trim="user.avatar" />
    </el-form-item>
    <el-form-item>
      <router-link :to="'/permission/page'" >
      <el-button type="primary" @click="submit">完成</el-button>
      </router-link>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
        }
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: '场地已创建完成',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
