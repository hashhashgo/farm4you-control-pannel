<template>
  <div class="app-container documentation-container">
  <el-button style="{background:color,borderColor:color}" icon="el-icon-circle-plus" size="big" type="primary"@click="dialogVisible = true">切换视图</el-button>
  <!-- 换肤弹窗 -->
    <el-dialog title="更改主题颜色" :visible.sync="dialogVisible">
      <el-form class="small-space" label-position="left" label-width="130px" style="width: 400px; margin-left:50px;">

        <el-form-item label="请选择主题模式：" prop="resource">
          <el-radio-group v-model="themeValue">
            <el-radio label="blue">浅色主题</el-radio>
            <el-radio label="green">深色模式</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleChangeTheme">确 定</el-button>
      </div>
    </el-dialog>
    <el-card class="box-card">
      <div slot="header">
        <a class="link-type link-title" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/theme.html">
         视图模板
        </a>
      </div>
      <div class="box-item">
        <el-button style="{background:color,borderColor:color}" icon="el-icon-guide" size="mini" type="primary" @click="theme=true" round>
              模板A
        </el-button>
        <el-button style="{background:color,borderColor:color}" icon="el-icon-guide" size="mini" type="primary" @click="theme=false" round>
              模板B
        </el-button>
        </aside>
      </div>
    </el-card>

    <div class="block">
      <el-button type="primary">
        主要
      </el-button>
      <el-button type="success">
        成功
      </el-button>
      <el-button type="info">
        信息
      </el-button>
      <el-button type="warning">
        警告
      </el-button>
      <el-button type="danger">
        危险
      </el-button>
    </div>

    <div class="block">
      <el-button type="primary" icon="el-icon-edit" />
      <el-button type="primary" icon="el-icon-share" />
      <el-button type="primary" icon="el-icon-delete" />
      <el-button type="primary" icon="el-icon-search">
        搜索
      </el-button>
      <el-button type="primary">
        下载
        <i class="el-icon-upload el-icon-right" />
      </el-button>
    </div>

    <div class="block">
      <el-tag v-for="tag in tags" :key="tag.type" :type="tag.type" class="tag-item">
        {{ tag.name }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'
import {global} from '@/global/global'
import { toggleClass } from '@/utils'
import '@/assets/custom-theme/index.css' // the theme changed version element-ui css

export default {
  name: 'Theme',
  data() {
    return {
      theme: false,
      tags: [
        { name: 'Tag One', type: '' },
        { name: 'Tag Two', type: 'info' },
        { name: 'Tag Three', type: 'success' },
        { name: 'Tag Four', type: 'warning' },
        { name: 'Tag Five', type: 'danger' }
      ],
      slideValue: 50,
      radio: 3
    }
  },
  watch: {
    theme() {
      toggleClass(document.body, 'custom-theme')
    }
  },
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
        { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
        { title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
        { title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
        { title: 'v4.0 篇', href: 'https://juejin.im/post/5c92ff94f265da6128275a85' },
        { title: '自行封装 component', href: 'https://segmentfault.com/a/1190000009090836' },
        { title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（上）', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（下）', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
      ],
        dialogVisible: false,
        themeValue: localStorage.getItem('themeValue') ? localStorage.getItem('themeValue') : 'blue',
    }
  },

      methods: {
      // 换肤
      handleChangeTheme() {
        var vm = this
        global.changeTheme(vm.themeValue)

        const {
          fullPath
        } = this.$route
        // this.$router.go(0) 刷新
        this.$nextTick(() => {
          this.$router.replace({
            path: '/redirect' + fullPath
            // path: fullPath
          })
        })
        this.dialogVisible = false
      },
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
      async logout() {
        await this.$store.dispatch('user/logout')
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      }
    }
}
</script>

<style scoped>
.field-label{
  vertical-align: middle;
}
.box-card {
  width: 400px;
  max-width: 100%;
  margin: 20px auto;
}

.block {
  padding: 30px 24px;
}

.tag-item {
  margin-right: 15px;
}
</style>
