<template>
  <el-form class="inputDeep">
    <el-form-item label="种植方案">
      <el-input  v-model.trim="user.name" :rows="1" type="textarea" class="article-textarea" autosize/>
    </el-form-item>
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
        <div>万事称心如意</div>
        </pan-thumb>
    <el-form-item>
      <router-link :to="'/permission/page'" >
      <el-button type="primary" @click="submit">完成</el-button>
      </router-link>
    </el-form-item>
  </el-form>
</template>

<script>
import PanThumb from '@/components/PanThumb'
export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          role: ''
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


