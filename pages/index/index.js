//index.js
var util = require("../../utils/util")
//获取应用实例
var app = getApp()
Page({
  data: {
    lists: [
      {
        imgUrl: util.ossAliyuncs + "/images/Screenshot_2016-12-13-10-19-12-215.png",
        title: "《高山流水》 - 古筝",
        info: "高山流水，梅花三弄，夕阳箫鼓，汉宫秋月，阳春白雪，渔樵问答，胡笳十八拍，广陵散，平沙落雁，十面埋伏。",
        avatar: util.ossAliyuncs + "/images/banner6.jpg",
        uName: "张珊珊",
        isVideo: true,
        videoUrl: util.ossAliyuncs + "/videos/VID20161029121958.mp4",
        browse: 13299,
        like: 595,
        comment: 789,
        time: "刚刚"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/banner2.jpg",
        title: "女儿情-西游记 电视剧配乐原声",
        info: "九九八十一难，最难过的，其实是女儿国这一关，因为比起其他的艰难困苦来说，此时的唐僧是真的动心了，一句“来生若有缘分”道尽一切，只是为了心中崇高的理想，纵使心动也要断绝柔情继续西行。为国王惋惜，同时也对唐僧充满崇敬，尤其是了解了史上真实的唐玄奘以后，更是觉得此人了不起。",
        avatar: util.ossAliyuncs + "/images/banner5.jpg",
        uName: "麦田的守望者",
        browse: 32499,
        like: 222,
        comment: 789,
        time: "1小时前"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/Screenshot_2016-12-13-10-13-16-926.png",
        title: "犯错-双管巴乌",
        info: "小哥的声音真好。《一剪梅》改了这么多版，还是这版耐听。如泣如诉，余音袅袅。",
        avatar: util.ossAliyuncs + "/images/banner4.jpg",
        uName: "雨碎江南",
        isVideo: true,
        videoUrl: util.ossAliyuncs + "/videos/%E7%8A%AF%E9%94%99-%E5%8F%8C%E7%AE%A1%E5%B7%B4%E4%B9%8C.mp4",
        browse: 4299,
        like: 2113,
        comment: 789,
        time: "昨天"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/Screenshot_2016-12-13-10-13-38-305.png",
        title: "车站-双管巴乌",
        info: "虽然但现在为止还没有去过彩云之南，但是这支曲子几乎包含了我全部的关于那里的畅想：绿油油的树林，精巧的竹楼，还有美丽的月光……太美了……",
        avatar: util.ossAliyuncs + "/images/banner3.jpg",
        uName: "小丸子",
        isVideo: true,
        videoUrl: util.ossAliyuncs + "/videos/%E8%BD%A6%E7%AB%99-%E5%8F%8C%E7%AE%A1%E5%B7%B4%E4%B9%8C.mp4",
        browse: 3299,
        like: 80,
        comment: 352,
        time: "2016-08-12"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/banner5.jpg",
        title: "美丽的神话-孙楠",
        info: "自从张艺谋《英雄》之后，国内开始了“拍大片”潮流，05年《无极》《神话》扎堆贺岁，《无极》因为《一个馒头引发的血案》成就了张柏芝谢霆锋的预言片，也算神作。《神话》剧情平平，只留下这首歌，记得这歌05年火了整整一整年啊，我惨绿的高中岁月啊。",
        avatar: util.ossAliyuncs + "/images/banner2.jpg",
        uName: "丶Song",
        browse: 23299,
        like: 810,
        comment: 221,
        time: "2016-12-13"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/banner6.jpg",
        title: "赛马-二胡独奏",
        info: "想起来武林外传里有一集，老白他们挖地道，小六拉这个曲，最后老白掉地道里了哈哈哈哈哈",
        avatar: util.ossAliyuncs + "/images/banner1.jpg",
        uName: "狂凝眉",
        browse: 3599,
        like: 134,
        comment: 12,
        time: "2016-12-12"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/bg0.jpg",
        title: "痴情冢-电视剧《新天龙八部》主题曲",
        info: "塞上旧约终成空，夜阑魂归应梦同。纵死未肯忘心盟，何妨濡沫泥涂中。雁字依稀相思浓，女儿痴情谁与共？从此相见殊参商，却无画图忆姣容。地匝万芦一鸿起，老翅不回缘情重。碧落黄泉两孤冢，君自南北我西东。”写了个同人，唱起来佶屈聱牙，但似乎比原歌词稍微贴合一点。",
        avatar: util.ossAliyuncs + "/images/bg2.jpg",
        uName: "Sarbanes-Oxley",
        browse: 3299,
        like: 80,
        comment: 789,
        time: "2016-12-12"
      },
      {
        imgUrl: util.ossAliyuncs + "/images/bg01.jpg",
        title: "西海情歌-降央卓玛",
        info: "前天看了CCTV的top10点播的这首歌，现场版的，感觉歌手很美，歌声也犹如天籁",
        avatar: util.ossAliyuncs + "/images/bg2.jpg",
        uName: "Sarbanes-Oxley",
        browse: 3299,
        like: 80,
        comment: 789,
        time: "2016-12-12"
      }
    ],
    controls: true//是否显示播放控件
  },
  onLoad: function (options) {

  },
  //下拉刷新
  onPullDownRefresh: function () {

  },
  //上拉加载
  onReachBottom: function () {

  },
  //点击video对象播放当前视频
  play: function (e) {
    //当前对象索引
    var index = e.currentTarget.id.split("-")[1],
      lists = this.data.lists,
      video = wx.createVideoContext(e.currentTarget.id);
    //当前video对象 isPlay设置     
    lists[index].isPlay = !!lists[index].isPlay ? false : true;

    console.log(lists[index].isPlay)

    //isPlay为true 执行播放操作
    if (lists[index].isPlay) {
      //播放当前video对象时其他video对象全部停止
      lists.forEach(function (item, i) {
        if (item.isVideo) {
          var video = wx.createVideoContext("vds-" + i);
          video.pause();
          //设置其他其他video对象isPlay为false
          if (i != index)
            item.isPlay = false;
        }
      });
      video.play();
    } else {
      video.pause();
    }
  },
  //进入详情
  detail: function (e) {
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../details/detail?id=' + e.currentTarget.dataset.id + '&title=' + e.currentTarget.dataset.title
    })
  }
})
