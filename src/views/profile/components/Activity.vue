<template>
  <div class="user-activity">
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg'+avatarPrefix">
        <span class="username text-muted">番茄</span>
        <span class="description">.</span>
      </div>
        <p>一.选择品种，适时定值。</p>
        <p>二.施足基肥，及时追肥。</p>
        <p>三.斜蔓上架，换头再生。</p>
        <p>四.加强管理，适时采收。</p>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in fanqieImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li>
            <el-radio-group v-model="switchRoles">
            <el-radio-button label="fanqie"class="link-black text-sm">
              <i class="el-icon-share" />
              启用
            </el-radio-button>
            </el-radio-group>
          
        </li>
        <li>
          <el-radio-group>
            <router-link :to="'/excel/export-excel'" >
            <el-radio-button class="link-black text-sm">
              <i class="" />
              查看管理方案
            </el-radio-button>
            </router-link>
          </el-radio-group>
        </li>
        <li>
          <span class="link-black text-sm2">
            <svg-icon icon-class="like" />
            
          </span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg'+avatarPrefix">
        <span class="username text-muted">玉米</span>
      </div>
      <div>.</div>
      <p>一.育苗移栽，适时早播。</p>
      <p>二.移栽大鹏的整地作畦。</p>
      <p>三.移栽合理密植。</p>
      <p>四.田间管理。</p>
      <p>五.病虫防治。</p>
      <p>六.适时采收。</p>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in yumiImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li>
            <el-radio-group v-model="switchRoles">
            <el-radio-button label="yumi"class="link-black text-sm">
              <i class="el-icon-share" />
              启用
            </el-radio-button>
            </el-radio-group>
          
        </li>
        <li>
          <el-radio-group>
            <router-link :to="'/excel/export-excel'" >
            <el-radio-button class="link-black text-sm2">
              <i class="" />
              查看管理方案
            </el-radio-button>
            </router-link>
          </el-radio-group>
        </li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" />
            
          </span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg'+avatarPrefix">
        <span class="username">水稻</span>
      </div>
      <div>.</div>
      <p>一.选择品种，种子处理。</p>
      <p>二.床土配置，调整酸碱度。</p>
      <p>三.温度、水分管理。</p>
      <p>四.防病壮苗。</p>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in shuidaoImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
                <li>
            <el-radio-group v-model="switchRoles">
            <el-radio-button label="shuidao"class="link-black text-sm">
              <i class="el-icon-share" />
              启用
            </el-radio-button>
            </el-radio-group>
          
        </li>
        <li>
          <el-radio-group>
            <router-link :to="'/excel/export-excel'" >
            <el-radio-button class="link-black text-sm2">
              <i class="" />
              查看管理方案
            </el-radio-button>
            </router-link>
          </el-radio-group>
        </li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" /> </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'

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
      shuidaoImages: [
        'https://seopic.699pic.com/photo/50015/9432.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50111/2423.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50103/4590.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50127/8755.jpg_wh1200.jpg'
      ],
      fanqieImages: [
        'https://seopic.699pic.com/photo/50161/9088.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50158/4224.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/30336/5906.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/30336/4819.jpg_wh1200.jpg'
      ],
      yumiImages: [
        'https://seopic.699pic.com/photo/50158/8466.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50082/4912.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50148/8004.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50120/5896.jpg_wh1200.jpg'
      ],
      avatarPrefix,
      carouselPrefix
    }
  }
}
</script>

<style lang="scss" scoped>
.user-activity {
  .user-block {

    .username,
    .description {
      display: block;
      margin-left: 50px;
      padding: 2px 0;
    }

    .username{
      font-size: 16px;
      color: #000;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    span {
      font-weight: 500;
      font-size: 12px;
      margin-left: 50px;
    }
  }

  .post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: #666;

    .image {
      width: 100%;
      height: 100%;

    }

    .user-images {
      padding-top: 20px;
    }
  }

  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;

    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }

    .link-black {

      &:hover,
      &:focus {
        color: #999;
      }
    }
  }

}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>
