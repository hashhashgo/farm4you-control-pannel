<template>
  <div class="errPage-container">
    <div style="position:relative;left:550px;;width: 1000px;height:30px;line-height:40px;font-size:2em;">
    <h3>点击新建场地：</h3>
    </div>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    <h3>
      <router-link :to="'/pdf/index'" >
      <a  class="link-type">
      <div style="height:320px;"></div>
      </a></router-link>
      <h2><router-link :to="'/pdf/index'" >
      <div style="color:#00BBFF;width: 1000px;height:30px;position:relative;bottom:400px;left:50px;font-size:15em;">
      +
      </div></router-link></h2>
    </h3>
  </div>
</template>

<script>
import errGif from '@/assets/401_images/401.gif'

export default {
  name: 'Page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      //dialogVisible: false
    }
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

