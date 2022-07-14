<template>
  <div class="user-activity">
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'http://www.gx8899.com/uploads/allimg/180317/3-1P31G10R5.jpg'+avatarPrefix">
        <span class="username text-muted">耕地类型为菜地</span>
      </div>
        <div>.</div>
        <p>通常为常年种植绿色蔬菜的耕地，包括大棚用地。</p>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in caidiImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li>
          <el-button class="link-black text-sm"@click="submit1">
            <i class="el-icon-share" />
            启用
          </el-button>
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
        <img class="img-circle" :src="'https://seopic.699pic.com/photo/50047/4567.jpg_wh1200.jpg'+avatarPrefix">
        <span class="username text-muted">耕地类型为旱地</span>
      </div>
      <div>.</div>
      <p>通常为无灌溉设施，依靠天然降水种植旱作物的耕地。</p>
      <p>主要分布于东北、华北、西南地区。</p>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in handiImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li>
          <el-button class="link-black text-sm"@click="submit2">
            <i class="el-icon-share" />
            启用
          </el-button>
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
        <img class="img-circle" :src="'https://seopic.699pic.com/photo/40214/5235.jpg_wh1200.jpg'+avatarPrefix">
        <span class="username">耕地类型为水浇地</span>
      </div>
      <div>.</div>
      <p>通常指具有灌溉设施，水源有保障，一般年份都能正常耕作的耕地。</p>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in shuijiaodiImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <el-button @click="submit3"><span class="link-black text-sm"><i class="el-icon-share" /> 启用</span></el-button>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" /> </span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'http://www.gx8899.com/uploads/allimg/180317/3-1P31G10R7.jpg'+avatarPrefix">
        <span class="username">耕地类型为望天田</span>
      </div>
      <div>.</div>
      <p>通常指没有灌溉设施，主要依靠天然降水，用来种植水生作物的耕地。</p>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in wangtiantianImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <el-button @click="submit4"><span class="link-black text-sm"><i class="el-icon-share" /> 启用</span></el-button>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" /> </span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://www.beihaiting.com/uploads/allimg/161221/10723-1612211350004S.jpg'+avatarPrefix">
        <span class="username">耕地类型为灌溉水田</span>
      </div>
      <div>.</div>
      <p>通常指具有灌溉设施，水源有保障，一般年份都能正常耕作，用来种植水生作物的耕地。</p>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in guangaishuitianImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <el-button @click="submit5"><span class="link-black text-sm"><i class="el-icon-share" /> 启用</span></el-button>
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
  methods: {
    submit1() {
      this.$message({
        message: '场地方案已选择菜地',
        type: 'success',
        duration: 2 * 1000
      })
    },
    submit2() {
      this.$message({
        message: '场地方案已选择旱地',
        type: 'success',
        duration: 2 * 1000
      })
    },
    submit3() {
      this.$message({
        message: '场地方案已选择水浇地',
        type: 'success',
        duration: 2 * 1000
      })
    },
    submit4() {
      this.$message({
        message: '场地方案已选择望天田',
        type: 'success',
        duration: 2 * 1000
      })
    },
    submit5() {
      this.$message({
        message: '场地方案已选择灌溉水田',
        type: 'success',
        duration: 2 * 1000
      })
    },
  },
  data() {
    return {
      caidiImages: [
        'https://seopic.699pic.com/photo/50158/5995.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50158/5876.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50162/6411.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50130/4150.jpg_wh1200.jpg'
      ],
      handiImages: [
        'https://seopic.699pic.com/photo/50069/2244.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50158/2200.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/30007/2923.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50136/8515.jpg_wh1200.jpg'
      ],
      shuijiaodiImages: [
        'https://seopic.699pic.com/photo/30375/2353.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/30374/6702.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/30702/3885.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/30687/7059.jpg_wh1200.jpg'
      ],
      wangtiantianImages: [
        'https://seopic.699pic.com/photo/50051/5976.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50159/5771.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50162/5083.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50159/5769.jpg_wh1200.jpg'
      ],
      guangaishuitianImages: [
        'https://seopic.699pic.com/photo/50043/9028.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50059/4768.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50062/6698.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50083/5392.jpg_wh1200.jpg'
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
