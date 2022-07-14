<template>
  <div class="errPage-container">
    <div class="div1"style="position:relative;left:300px;width: 100px;height:10px;line-height:60px;font-size:2em;">
    <span>名称：</span></div>
    <div class="div2"style="white-space: pre-line;">{{ message }}
    <br>
    <textarea style="position:relative;left:300px;height:30px;"v-model="message" placeholder="输入场地名称">
    </textarea>
    </div>
      <div style="position:relative;left:16px;;width: 1000px;height:30px;line-height:250px;font-size:2em;">
      <span>视图：</span>
    </div>
    <h3>
      <h2><router-link :to="'/documentation/index'" >
      <div @click="change($event)" style="color:#00BBFF;width: 100px;height:30px;position:relative;bottom:-4px;left:450px;font-size:3em;">
      +
      </div></router-link></h2>
    </h3>
      <div style="position:relative;left:300px;;width: 100px;height:30px;line-height:200px;font-size:2em;">
      <span>场地：</span>
    </div>
    <h3>
      <h2><router-link :to="'/nested/menu2'" >
      <div @click="change($event)" style="color:#00BBFF;width: 100px;height:30px;position:relative;bottom:0px;left:450px;font-size:3em;">
      +
      </div></router-link></h2>
   </h3>
       <div style="position:relative;left:300px;width: 1000px;height:30px;line-height:160px;font-size:2em;">
       <span>种植：</span>
    </div>
    <h3>
      <h2><router-link :to="'/profile/index'" >
      <div @click="change($event)" style="color:#00BBFF;width: 100px;height:30px;position:relative;bottom:20px;left:450px;font-size:3em;">
      +
      </div></router-link></h2>
   </h3>
    <el-radio-group v-model="switchRoles"fill='#DDAA00'style="position:relative;left:230px; padding: 30px 0">
      <el-radio-button label="admin"class="edit_btn" icon="el-icon-document" size="big" type="primary">
      <div style="color:#227700;position:relative;width: 500px;height:30px;line-height:24px;font-size:2em;">完成</div></el-radio-button>
    </el-radio-group>

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
methods:{
  change(event) {
      let temp= event.currentTarget;  
      temp.style.color = 'grey';
    }

}
}
</script>

<style lang="scss" scoped>
.div1{
  margin-top:20px;
  font-size:16px;
  font-weight:900;
  float:left;
  display:inline-block;
  white-space: nowrap;
}
.div2{
  margin-top:20px;
  font-size:16px;
  font-weight:900;
  float:left;
  display:inline-block;
  white-space: nowrap;
}
.edit_btn {
  min-height: 40px;
  min-width: 500px;
  background: #e6a23c 80%;
  border: #e6a23c;
}
</style>