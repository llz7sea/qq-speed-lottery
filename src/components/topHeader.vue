<template>
  <div class="ost ost_bg" style="position: absolute; top: -500px;">
    <ul class="ost_b">
      <li class="ost_tg ost_bg"><a href="//game.qq.com" target="_blank" class="ost_blnk"
                                   onclick="pgvSendClick({hottag:'act.title.logo'});">腾讯游戏</a></li>
      <li class="ost_gg ost_bg"><a href="http://speed.qq.com/" id="ost_gg" target="_blank" class="ost_blnk"
                                   onclick="pgvSendClick({hottag:'act.title.index'});">精彩活动</a></li>
      <li class="ost_i"><p class="ost_t ost_bg"><a href="//speed.qq.com/main.shtml" target="_blank" class="ost_lnk"
                                                   onclick="pgvSendClick({hottag:'act.title.back'});">返回官网首页</a></p>
        <p class="ost_gl">
          <a href="//speed.qq.com/web201008/download.shtml" target="_blank" class="ost_lnk ost_ldc"
             onclick="pgvSendClick({hottag:'act.title.dl'});">游戏下载</a>
          <a
              href="//speed.qq.com/comm-htdocs/pay/?t=speed" target="_blank" class="ost_lnk ost_ldc"
              onclick="pgvSendClick({hottag:'act.title.cz'});">充值点券</a>
          <a href="//speed.qq.com/comm-htdocs/vip/?t=speed"
             target="_blank" class="ost_lnk ost_ldc"
             onclick="pgvSendClick({hottag:'act.title.vip'});">开通紫钻</a>
        </p>
      </li>
    </ul>
  </div>
  <div id="comm_act_wrap">
    <!-- 专题公用头部Start -->
    <div class="act_comm_box blue_act_comm_box">
      <!-- 左侧链接Start -->
      <div class="acb_links">
        <a href="//speed.qq.com/web201008/download.shtml" title="下载QQ飞车客户端" class="acb_big_btn acb_top_ico"
           target="_blank"><i class="acb_top_ico acb_down_ico "></i>下载游戏</a>
        <a href="//speed.qq.com/" title="QQ飞车官方网站" class="acb_big_btn acb_top_ico" target="_blank"><i
            class="acb_top_ico acb_home_ico "></i>官方网站</a>
        <a href="javascript:share('qqzone')" title="分享到Qzone" class="acb_qq_btn acb_top_ico"></a>
        <a href="javascript:share('qqwb')" title="分享到QQ微博" class="acb_qt_btn acb_top_ico"></a>
      </div>
      <!-- 左侧链接Start -->
      <div class="acb_user">
        <ul class="user_links">
          <li id="spanNotBind_923027"><a href="javascript:amsInit(530476, 923026);" title="绑定大区" class="l">绑定大区</a><i
              class="c"></i></li>
          <li id="spanBind_923027" style="display:none">所绑大区：<span id="area_info_923027"></span> 角色：<span
              id="role_info_923027"></span><a href="javascript:amsInit(530476, 923026);">更改绑定</a></li>
          <li><a href="javascript:amsSubmit(530476,923048);" title="查看我的奖励" class="l">查看我的奖励</a></li>
        </ul>
        <!-- 用户登录模块Start -->
        <div class="user_login">
          <span id="unlogin" style="display: block;">亲爱的用户，请<a href="javascript:;" id="dologin"
                                                               class="acb_log_btn acb_top_ico">登录</a></span>
          <span id="logined" style="display:none">欢迎您，<span id="login_qq_span"></span>，<a href="javascript:;"
                                                                                          id="dologout"
                                                                                          class="acb_log_btn acb_top_ico">注销</a></span>
        </div>
      </div>
      <!-- 用户登录模块END -->
    </div>
    <!-- 专题公用头部END -->
  </div>
  <div class="speed_comm_top">
    <!-- 专题公用头部E -->
    <!-- 导航S -->
    <div class="act_top_nav">
      <div class="act_nav_con">
        <a href="/main.shtml" onclick="PTTSendClick('SpeedCommTop','logo','QQ飞车')" target="_blank"
           class="act_nav_logo"></a>
        <div class="act_top_btn">
          <a href="/main.shtml" onclick="PTTSendClick('SpeedCommTop','home','进入官网')" target="_blank"><em
              class="top_icon1"></em><span>进入官网</span></a>
          <a href="/web201503/page/download.shtml" onclick="PTTSendClick('SpeedCommTop','down','下载游戏')" target="_blank"><em
              class="top_icon2"></em><span>下载游戏</span></a>
        </div>
        <div class="act_nav_list">
          <a href="https://speed.qq.com/act/a20221104gfy/index.html" target="_blank"
             onclick="PTTSendClick('SpeedCommTop','nav1','导航1')">
            <strong>感恩有你</strong>
            <span>A车-锯齿+A车-飓风</span>
            <em class="act_nav_icon"></em>
          </a>
          <a href="https://speed.qq.com/act/a20220615mxcz/index.html" target="_blank"
             onclick="PTTSendClick('SpeedCommTop','nav3','导航3')">
            <strong>萌新大礼</strong>
            <span>南瓜小妖淘淘+A车未来</span>
            <em class="act_nav_icon"></em>
          </a>
          <a href="http://speed.qq.com/webplat/info/news_version3/147/14551/14572/14578/m22624/202210/924474.shtml"
             target="_blank" onclick="PTTSendClick('SpeedCommTop','nav4','导航4')">
            <strong>11月签到</strong>
            <span>免费领A车+座椅</span>
            <em class="act_nav_icon"></em>
          </a>
          <a href="https://speed.qq.com/cp/a20221220btdb/index.html" target="_blank"
             onclick="PTTSendClick('SpeedCommTop','nav5','导航5')">
            <strong>爆天夺宝</strong>
            <span>2QB抢S车</span>
            <em class="act_nav_icon"></em>
          </a>
          <a href="https://speed.qq.com/cp/a20221226onejhy/index.html" target="_blank"
             onclick="PTTSendClick('SpeedCommTop','nav6','导航6')">
            <strong>周年集合</strong>
            <span>极品盛宴折扣狂欢</span>
            <em class="act_nav_icon"></em>
          </a>
          <a href="https://speed.qq.com/cp/a20221222rydt/index.html" target="_blank"
             onclick="PTTSendClick('SpeedCommTop','nav2','导航2')">
            <strong>荣耀战勋前瞻</strong>
            <span>18期荣耀殿堂</span>
            <em class="act_nav_icon"></em>
          </a>
        </div>
      </div>
    </div>
    <!-- 导航E -->
  </div>
</template>

<script setup>
</script>
<style scoped>
.ost {
  width: 100%;
  min-width: 1000px;
  height: 42px;
  background-repeat: repeat-x;
  color: #464646;
  left: 0;
  top: 0 !important;
  text-align: left;
  font-size: 12px;
  z-index: 8000;
  font-family: Tahoma;
  overflow: hidden;
}

.ost_bg {
  background: url("@/assets/pic/top.webp");
}

.ost_b {
  width: 980px;
  padding: 0 5px;
  margin: 0 auto;
  position: relative;
  list-style: none;
}

.ost_tg {
  width: 205px;
  height: 42px;
  padding: 0 15px 0 0;
  margin: 0 15px 0 0;
  float: left;
  background-position: 0 -42px;
}

.ost_blnk {
  display: block;
  width: 100%;
  height: 100%;
  text-indent: -5000px;
  overflow: hidden;
}

.ost_gg {
  width: 230px;
  height: 42px;
  float: left;
  background-position: 0 -84px;
}

.ost_i {
  height: 42px;
  line-height: 42px;
  *line-height: 44px !important;
  line-height: 44px \9;
  _line-height: 42px;
  float: right;
}

.ost_t {
  float: right;
  width: 80px;
  padding: 0 0 0 28px;
  background-position: 10px -126px;
}

.ost_lnk {
  color: #464646 !important;
  text-decoration: none;
}

.ost_gl {
  float: right;
}

.ost_ldc {
  border-right: 1px solid #BFC6D7;
  padding: 0 9px;
}

/* ===== reset ===== */
#comm_act_wrap {
  position: relative;
  zoom: 1;
}

.act_comm_box .acb_top_ico, .act_comm_box .c {
  background: url('//ossweb-img.qq.com/images/speed/comm/act_top/act_top_bar.png ') no-repeat;
  _background: url('//ossweb-img.qq.com/images/speed/comm/act_top/act_top_bar_ie6.png') no-repeat;
  display: inline-block
}

.my_record_box .mrb_btn {
  background: url('//ossweb-img.qq.com/images/speed/act/comm/img/act_top_bar_ie6.png') no-repeat;
}

.act_comm_box {
  height: 44px;
  background: rgba(6, 6, 6, 0.3);
  background: #0E0B1E \9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-family: \5FAE\8F6F\96C5\9ED1;
  z-index: 99;
}

.act_comm_box .acb_links {
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px 0 0 20px;
  z-index: 9;
}

.act_comm_box .acb_links a {
  height: 30px;
  line-height: 30px;
  color: #AEAEAE;
  font-weight: bold;
  margin: 0 0 0 8px;
  float: left;
}

.act_comm_box .acb_big_btn {
  width: 62px;
  padding: 0 0 0 31px;
  height: 30px;
  background-position: -95px 0;
  position: relative;
  overflow: hidden;
}

.act_comm_box .acb_big_btn:hover {
  background-position: 0 0;
  text-decoration: none;
}

.act_comm_box .acb_down_ico, .act_comm_box .acb_home_ico {
  width: 13px;
  height: 13px;
  position: absolute;
  left: 11px;
  top: 8px;
}

.act_comm_box .acb_down_ico {
  background-position: -307px -1px;
}

.act_comm_box .acb_home_ico {
  background-position: -330px 0px;
  width: 14px;
  height: 14px;
}

.act_comm_box .acb_qq_btn, .act_comm_box .acb_qt_btn {
  text-decoration: none;
  height: 30px;
  width: 30px;
  overflow: hidden;
  vertical-align: middle;
}

.act_comm_box .acb_qq_btn {
  background-position: -352px 0;
}

.act_comm_box .acb_qq_btn:hover {
  background-position: -429px 0;
}

.act_comm_box .acb_qt_btn {
  background-position: -392px 0;
}

.act_comm_box .acb_qt_btn:hover {
  background-position: -469px 0;
}

.act_comm_box .acb_user {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 20px;
}

.act_comm_box #unlogin, .act_comm_box #logined {
  float: right;
}

.act_comm_box .user_links, .act_comm_box .user_login {
  float: right;
  line-height: 23px;
  color: #AEAEAE;
  padding: 10px 0 0;
  vertical-align: top
}

.act_comm_box .user_links li {
  float: left;
  font-weight: bold;
  position: relative;
  padding: 0 12px;
}

.act_comm_box .user_links .l {
  color: #AEAEAE;
  position: relative;
  z-index: 9;
}

.act_comm_box .user_links a:hover {
  color: #FF6825;
}

.act_comm_box .c {
  width: 8px;
  height: 7px;
  font-size: 0px;
  overflow: hidden;
  background-position: -289px 0px;
  position: absolute;
  right: -2px;
  top: 50%;
  margin-top: -4px;
}

.act_comm_box .acb_log_btn {
  color: #AEAEAE;
  height: 24px;
  width: 77px;
  line-height: 23px;
  font-weight: bold;
  text-align: center;
  background-position: -205px 0;
  color: #fff;
  margin: 0 20px 0 10px;
  vertical-align: middle;
}

.act_comm_box .acb_log_btn:hover {
  text-decoration: none;
}

.act_comm_box #login_qq_span {
  color: #fff;
}

.my_record_box th, .my_record_box .mrb_tips, .my_record_box .mrb_page a {
  color: #FF6825;
}

.my_record_box, .my_record_box .tb {
  background: #191125;
  border: 1px solid #2F2F2F;
}

.my_record_box .tb {
  z-index: 2;
}

.my_record_box {
  position: absolute;
  top: 35px;
  right: 0px;
  _right: 6px;
  background: #191125;
  border: 1px solid #2F2F2F;
  color: #AEAEAE;
  width: 556px;
  z-index: 1;
}

.my_record_box .mrb_wp {
  padding: 20px 28px;
}

.my_record_box .mrb_tips {
  font-size: 12px;
  text-align: center;
  border-bottom: 1px solid #322C3C;
  margin: 0 0 8px;
  padding: 0 0 15px;
}

.my_record_box table {
  font-size: 12px;
  color: #AEAEAE;
}

.my_record_box th, .my_record_box td {
  height: 30px;
  text-align: center;
  line-height: 1.4;
}

.my_record_box .g {
  width: 150px;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
}

.my_record_box .mt_01 {
  width: 31%;
}

.my_record_box .mt_02 {
  width: 17%;
}

.my_record_box .mt_03 {
  width: 31%;
}

.my_record_box .mt_04 {
  width: 21%;
}

.my_record_box .mrb_page {
  text-align: center;
  background: #0D0A12;
  padding: 2px 0;
  font-weight: normal;
  margin: 5px 0;
}

.my_record_box .mrb_page a {
  display: inline-block;
  margin: 0 10px;
}

.my_record_box .tb {
  position: absolute;
  top: -41px;
  right: -1px;
  width: 92px;
  height: 40px;
  border-bottom: 1px solid #181021;
}

.my_record_box .mrb_btn {
  width: 77px;
  height: 23px;
  line-height: 23px;
  text-align: center;
  color: #fff;
  display: inline-block;
  background-position: 0 -83px;
}

.my_record_box .mrb_btn:hover {
  background-position: -80px -83px;
  text-decoration: none;
}

.blue_act_comm_box .acb_big_btn {
  background-position: -95px -33px;
}

.blue_act_comm_box .acb_big_btn:hover {
  background-position: 0 -33px;
}

.blue_act_comm_box .acb_qq_btn {
  background-position: -352px -33px;
}

.blue_act_comm_box .acb_qq_btn:hover {
  background-position: -429px -33px;
}

.blue_act_comm_box .acb_qt_btn {
  background-position: -392px -33px;
}

.blue_act_comm_box .acb_qt_btn:hover {
  background-position: -469px -33px;
}

.blue_act_comm_box .c {
  background-position: -289px -33px;
}

.blue_act_comm_box .acb_log_btn {
  background-position: -205px -33px;
}

.blue_act_comm_box .my_record_box th, .blue_act_comm_box .my_record_box .mrb_tips, .blue_act_comm_box .my_record_box .mrb_page a, .blue_act_comm_box .user_links a:hover {
  color: #22A7D3;
}

.blue_act_comm_box .my_record_box .mrb_btn {
  width: 77px;
  height: 23px;
  line-height: 23px;
  text-align: center;
  color: #fff;
  display: inline-block;
  background-position: -159px -83px;
}

.blue_act_comm_box .my_record_box .mrb_btn:hover {
  background-position: -238px -83px;
  text-decoration: none;
}

.acb_big_btn:hover .acb_top_ico {
  -webkit-animation: fadeInLeft .5s ease both;
  -ms-animation: fadeInLeft .5s ease both;
  -moz-animation: fadeInLeft .5s ease both;
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-3px)
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0)
  }
}

@-moz-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -moz-transform: translateX(-3px)
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0)
  }
}

@-ms-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -ms-transform: translateX(-3px)
  }
  100% {
    opacity: 1;
    -ms-transform: translateX(0)
  }
}

.user_links a:hover, .user_links a {
  -webkit-transition: .2s ease-in;
  -moz-transition: .2s ease-in;
  -ms-transition: .2s ease-in;
}

.speed_comm_top {
  font: 12px/1.5 '\5FAE\8F6F\96C5\9ED1';
  height: 90px;
  z-index: 9999;
  width: 100%;
}

#comm_act_wrap, .ost, .speed_comm_top {
  min-width: 1300px !important;
}
/* 导航 */
.speed_comm_top{font:12px/1.5 '\5FAE\8F6F\96C5\9ED1';height:90px;z-index:9999;width:100%}
.speed_comm_top a{text-decoration:none}

#comm_act_wrap{height:44px;background-color:#515151}
.act_top_nav{background-color:#0e0e0e;height:90px;width:100%;z-index:99}
.act_nav_con{width:1000px;height:90px;margin:0 auto;position:relative}
.act_nav_logo{background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/nav_sp.png) no-repeat 0 -167px;width:100px;height:74px;position:absolute;left:-138px;top:6px;}
.act_top_btn{width:126px;position:absolute;right:-140px;top:0;height:80px;padding-top:10px;background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/line1.jpg) no-repeat left top;padding-left:25px;}
.act_top_btn a{width:126px;height:31px;font-size:18px;color:#fff;line-height:31px;background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/nav_sp.png) no-repeat 0 -95px;display:block;position:relative;margin-bottom:7px;}
.act_top_btn a:hover{background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/nav_sp.png) no-repeat 0 -131px;color:#ff5a00;}
.top_icon1{width:18px;height:17px;position:absolute;left:13px;top:7px;background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/nav_sp.png) no-repeat -147px -101px;}
.act_top_btn a:hover .top_icon1{background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/nav_sp.png) no-repeat -147px -138px;}
.top_icon2{width:15px;height:15px;position:absolute;left:16px;top:9px;background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/nav_sp.png) no-repeat -129px -103px;}
.act_top_btn a:hover .top_icon2{background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/nav_sp.png) no-repeat -129px -140px;}
.act_top_btn a:hover .top_icon1,.top_btn a:hover .top_icon2{-webkit-animation:fadeInDown .8s ease both;-moz-animation:fadeInDown .8s ease both;-ms-animation:fadeInDown .8s ease both;-o-animation:fadeInDown .8s ease both;}
@-webkit-keyframes fadeInDown{0%{opacity:.2;-webkit-transform:translateY(-3px)}100%{opacity:1;-webkit-transform:translateY(0)}}
@-moz-keyframes fadeInDown{0%{opacity:.2;-moz-transform:translateY(-3px)}100%{opacity:1;-moz-transform:translateY(0)}}
@-ms-keyframes fadeInDown{0%{opacity:.2;-ms-transform:translateY(-3px)}100%{opacity:1;-ms-transform:translateY(0)}}
@-o-keyframes fadeInDown{0%{opacity:.2;-o-transform:translateY(-3px)}100%{opacity:1;-o-transform:translateY(0)}}
.act_top_btn a:hover span{-webkit-animation:fadeInRight .8s ease both;-moz-animation:fadeInRight .8s ease both;-ms-animation:fadeInRight .8s ease both;-o-animation:fadeInRight .8s ease both;}
@-webkit-keyframes fadeInRight{0%{opacity:.2;-webkit-transform:translateX(5px)}100%{opacity:1;-webkit-transform:translateX(0)}}
@-moz-keyframes fadeInRight{0%{opacity:.2;-moz-transform:translateX(5px)}100%{opacity:1;-moz-transform:translateX(0)}}
@-ms-keyframes fadeInRight{0%{opacity:.2;-ms-transform:translateX(5px)}100%{opacity:1;-ms-transform:translateX(0)}}
@-o-keyframes fadeInRight{0%{opacity:.2;-o-transform:translateX(5px)}100%{opacity:1;-o-transform:translateX(0)}}
.act_top_btn a span{position:absolute;left:39px;top:0;height:31px;}
.act_nav_list{height:90px}
.act_nav_list a{position:relative;float:left;width:165px;height:90px;background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/line1.jpg) no-repeat left top;text-align:center;}
.act_nav_list a:hover{background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/btn.gif) no-repeat;text-decoration:none;}
.act_nav_list a strong{color:#fff;font-weight:bold;font-size:18px;padding-top:15px;display:block;line-height:35px;}
.act_nav_list a span{font-size:13px;color:#fff;line-height:22px;display:block;}
.act_nav_list a:hover strong{padding-top:10px;background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/line2.png) no-repeat 50% bottom;text-shadow:#df3c00 0 1px 1px;-webkit-animation:fadeInDown .6s ease both;-moz-animation:fadeInDown .6s ease both;-ms-animation:fadeInDown .6s ease both;-o-animation:fadeInDown .6s ease both;}
.act_nav_list a:hover span{text-shadow:#df3c00 0 1px 1px;-webkit-animation:fadeInDown .6s .2s ease both;-moz-animation:fadeInDown .6s .2s ease both;-ms-animation:fadeInDown .6s .2s ease both;-o-animation:fadeInDown .6s .2s ease both;}
.act_nav_icon{width:18px;height:21px;position:absolute;left:73px;top:66px;background:url(//game.gtimg.cn/images/speed/act/a20171114top_nav/nav_sp.png) no-repeat -137px -183px;display:none;-webkit-animation:fadeInDown .6s .3s ease both;-moz-animation:fadeInDown .6s .3s ease both;-ms-animation:fadeInDown .6s .3s ease both;-o-animation:fadeInDown .6s .3s ease both;}
.act_nav_list a:hover .act_nav_icon{display:block}
/* 导航结束 */
</style>