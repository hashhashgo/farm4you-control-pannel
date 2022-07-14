
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  yes:{
    token:'yes-token'
  },
  no:{
    token:'no-token'
  },
  wang:{
    token:'wang-token'
  },
  zang:{
    token:'zang-token'
  },
  mo:{
    token:'mo-token'
},
  yi:{
  token:'yi-token'
},
  fanqie:{
  token:'fanqie-token'
},
  yumi:{
  token:'yumi-token'
  },
  shuidao:{
  token:'shuidao-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  'yes-token': {
    roles: ['yes'],
    introduction: 'I am ok',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Yes'
  },
  'no-token': {
      roles: ['no'],
      introduction: 'I am not ok',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'No'
},
'wang-token': {
  roles: ['wang'],
  introduction: 'I am ok',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: 'Wang'
},
'zang-token': {
  roles: ['zang'],
  introduction: 'I am not ok',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: 'Zang'
},
'mo-token': {
  roles: ['mo'],
  introduction: 'I am ok',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: '种植'
},
'yi-token': {
  roles: ['yi'],
  introduction: 'I am not ok',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: 'Yi'
},
'fanqie-token': {
  roles: ['fanqie'],
  introduction: '种植番茄',
  avatar: 'https://seopic.699pic.com/photo/50052/3781.jpg_wh1200.jpg',
  name: ['1、种子处理：番茄种子温水中浸泡15分钟，可以打破休眠，增加种子出芽率，在春季的3、4、5月都可以种植，只不过种植较早的话需要采取保温措施。\n2、培育管理：番茄种子播种的时候采用播撒的方式，种植密度30g/平方米，肥沃湿润的土壤播种出芽速度要快一些，所以在播种之前，可对土地深耕浇水、施肥处理。种子播完以后，膜内温度保持在22-28℃之间，基本上4天左右就出芽了，等到小苗长出4片叶子以后就可以移出育苗地进行栽植了，一般株距为25cm，栽种之后浇水定根，等到植株长高以后可以搭建支架，开花需要浇水和施肥，这样种植的番茄产量很高\n3.病虫害防治\n(1)青枯病：番茄的种植过程中病虫害主要集中在花果期，花期容易感染青枯病，提前做好预防，喷洒药剂防治可以减少影响。通过剪除番茄病害枝条，多喷几次药剂基本可以防治病害虫。\n(2)晚疫病：番茄果期很容易就得上这种病，主要症状是叶子边缘或者茎干腐烂，伤害比较严重。防治方法是疏剪病虫枝叶，增加通风和光照，喷施针对药剂。\n4、果期管理：番茄花期的时候用番茄灵保花保果，对生长密集的花朵进行摘除，遇到病虫害及时预防防治，等到植株出现大花蕾时浇一次大水，促进果实长成。如果白天在25-30℃而晚上温度较低时，控制温差，注意防风，以免造成果实落果。\n5、水肥管理：番茄结实率较高，基肥施够，生长期和果期还是要追肥的，每亩施尿素5公斤，适量的磷钾肥有助于促进果实膨大，因此第一穗变大时就要增加营养了。一般情况下，一亩地番茄每亩追肥总量钾肥70kg、尿素50kg、钾肥30kg。番茄的果期在夏季，浇水必不可少，尤其是在结果的时候，经常浇灌果实长得大']
},
'yumi-token': {
  roles: ['yumi'],
  introduction: '种植玉米',
  avatar: 'https://seopic.699pic.com/photo/50120/5896.jpg_wh1200.jpg',
  name: '1、选种：(1)、玉米品种一般要挑选生长周期适中、抗病、抗倒伏效果好、适应能力强的高产品种。一般当地到播种期之前会推荐出优良品种。\n(2)、玉米种子挑选时应特别关注籽粒完整、无破损、大小均匀、种子活力高、净度高的玉米种子。籽粒饱满、大小均匀能够保证玉米出苗整齐；活力高能保证发芽率高，养分含量充足。因此有好的品种还务必有高品质的籽粒。\n2、合理密植：在栽培玉米时，不能只为了追求高产，在有限的区域内增加播种量，却忽略了种植密度太大引起玉米之间氧气及其他营养物质的竞争，一般采用品字形种植，既宽松又紧凑。如发现缺苗问题，需要迅速补苗。\n3、地膜覆盖技术：采用地膜覆盖技术可以提升土壤温度、保温保湿隔热效果显著、留水良好。非常适合栽种生长期相对性比较长的品种。\n4、播种技术：(1)、溫度：当温度持续平稳在12℃之上时，播种下去的玉米苗只有在温度以上才能正常的发芽。\n(2)、湿度：土壤含水量在60-70%之间可以有益于种子萌发出芽。\n(3)、播种深度：土壤墒情好，播种深度在3-4cm，土壤层墒情一般的播种深度在4-5厘米，土壤墒情较弱播种深度5-6cm。'
},
'shuidao-token': {
  roles: ['shuidao'],
  introduction: '种植水稻',
  avatar: 'https://seopic.699pic.com/photo/50111/2423.jpg_wh1200.jpg',
  name: '1、育苗：先在某块田中培育秧苗，此田往往会被称为秧田，在撒下稻种后，农人多半会在*上洒一层稻壳灰；现代则多由专门的育苗中心使用育苗箱来使稻苗成长，好的稻苗是稻作成功的关键。在秧苗长高约八公分时，就可以进行插秧了。\n2、插秧：将秧苗仔细的插稻田中，间格有序。传统的插秧法会使用秧绳、秧标或插秧轮，来在稻田中做记号。手工插秧时，会在左手的大拇指上戴分秧器，帮助农人将秧苗分出，并插进田里。插秧的气候相当重要，如大雨则会将秧苗打坏。现代多有插秧机插秧，但在地形起伏大，形状不是方型的稻田中，还是需要人工插秧。秧苗一般会呈南北走向。还有更为便利的抛秧。\n3、除草除虫：秧苗成长的时候，得时时照顾，并拔除杂草、有时也需用农药来除掉害虫（如福寿螺）\n4、施肥：秧苗在抽高，长出第一节稻茎的时候称为分蘗期，这段期间往往需要施肥，让稻苗健壮的成长，并促进日后结穗米质的饱满和数量。\n5、灌排水：水稻比较依赖这个程序，旱稻的话是旱田，灌排水的过程较不一样，但是一般都需在插秧后，幼穗形成时，还有抽穗开花期加强水分灌溉\n注：\n1、水稻适宜在温度较高的地方生长，温度越高，生长越快，产量也就越高。水稻生长的环境温度必须高于13℃，当温度低于13℃时，水稻便会停止生长。所有绿色植物都是在光照条件下的生长过程和营养过程，水稻也不例外。在光照条件下，水稻生长正常，当自然光为50%时，水稻生长缓慢，当光照强度降至自然光强度的5%时，水稻会停止生长，甚至死亡。\n2、水稻的生长需要足够的水分，当水分供给不足时，植物的生理功能会降低。水稻分蘖期是水稻需水量的高峰期，是绝对不允许缺水的。水稻在生长过程中还需要充足的养分，在常规根际施肥的前提下，施用尿素、硫酸铵或绿肥，进行叶片施肥，帮助水稻生长，抵御外部环境的不利影响。'
},
}

module.exports = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
