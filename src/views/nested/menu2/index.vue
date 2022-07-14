<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="场地方案" name="activity">
                <activity />
              </el-tab-pane>
              <el-tab-pane label="传感器" name="timeline">
                <timeline />
              </el-tab-pane>
              <el-tab-pane label="控制器" name="timeline2">
                <timeline2/>
                </el-tab-pane>
              <el-tab-pane label="终端设备" name="timeline3">
                <timeline3/>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Timeline2 from './components/Timeline2'
import Timeline3 from './components/Timeline3'

export default {
  name: 'Profile',
  components: { UserCard, Activity, Timeline, Timeline2, Timeline3 },
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: this.email,
        number: this.number,
        avatar: this.avatar

      }
    }
  }
}
</script>
