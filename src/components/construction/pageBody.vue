<template>
  <div class="wrap f_text">
    <div class="container">
      <div class="head pr">
        <h1 class="hide">极品狂欢夜</h1>
        <p class="txt_head">活动时间：2023.1.28-2023.3.19</p>
        <div class="head_btn">
          <a href="javascript:check1();" class="sp db btn_buy2"
             onclick="PTTSendClick('btn','btn_buy2','2Q币购买')">2Q币购买</a>
          <a href="javascript:check2();" class="sp db btn_buy20" onclick="PTTSendClick('btn','btn_buy20','20Q币购买')">20Q币购买</a>
          <a href="javascript:check3();" class="sp db btn_buy100" onclick="PTTSendClick('btn','btn_buy100','100Q币购买')">100Q币购买</a>
        </div>
      </div>
      <div class="content">
        <div class="section1 dh_box">
          <h2 class="tit_s1 spt"></h2>
          <p class="txt_ts">每打开一个勋章宝盒，随机点亮一个赛车勋章，并获得对应的赛车奖励，概率得永久。</p>
          <ul class="list_s1">
            <!--li 添加类名 on 为获得道具点亮状态-->
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop1.png">
              <em class="sp"><b>S车</b></em>
              <p>至尊·盘龙<br>永久/30天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop1.png">
              <em class="sp"><b>S车</b></em>
              <p>至尊·盘龙<br>永久/1天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop2.png">
              <em class="sp"><b>S车</b></em>
              <p>至尊·麦凯伦<br>永久/30天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop2.png">
              <em class="sp"><b>S车</b></em>
              <p>至尊·麦凯伦<br>永久/1天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop3.png">
              <em class="sp"><b>T1</b></em>
              <p>启灵守护神<br>永久/30天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop3.png">
              <em class="sp"><b>T1</b></em>
              <p>启灵守护神<br>永久/1天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop4.png">
              <em class="sp"><b>T1</b></em>
              <p>侍武之魂<br>永久/30天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop4.png">
              <em class="sp"><b>T1</b></em>
              <p>侍武之魂<br>永久/1天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop5.png">
              <em class="sp"><b>A车</b></em>
              <p>缤纷神驹<br>永久/30天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop5.png">
              <em class="sp"><b>A车</b></em>
              <p>缤纷神驹<br>永久/1天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop6.png">
              <em class="sp"><b>A车</b></em>
              <p>白玉神驹<br>永久/30天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop6.png">
              <em class="sp"><b>A车</b></em>
              <p>白玉神驹<br>永久/1天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop7.png">
              <em class="sp"><b>B车</b></em>
              <p>睡梦阿狸<br>永久/10天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop8.png">
              <em class="sp"><b>B车</b></em>
              <p>萌菜出击<br>永久/10天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop9.png">
              <em class="sp"><b>B车</b></em>
              <p>逐浪独角兽<br>永久/10天</p>
              <span class="box_zz pa"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop10.png">
              <em class="sp"><b>B车</b></em>
              <p>消除联萌<br>永久/10天</p>
              <span class="box_zz pa"></span>
            </li>
          </ul>
          <div class="box_s1_bar"><!--进度条模块-->
            <div>
              <span></span><!--进度条，百分比改变宽度-->
            </div>
          </div>
          <div class="box_s1_num">
            <p><span class="zz">0</span><span class="zzz">/</span><span class="zzzz">0</span></p>
          </div>
          <div class="box_s1_txt">
            <b>车王的祝福：</b>
            <p>每当重复点亮已点亮的赛车勋章时，均会获得车王的祝福，每当祝福值达到满值时，下次打开宝盒必定能随机点亮一个未被点亮<br>的赛车勋章。每次点亮未点亮的赛车勋章时，祝福值会被清空。</p>
          </div>
          <div class="box_s1_btn">
            <a href="javascript:openOne();" class="sp db btn_open1"
               onclick="PTTSendClick('btn','btn_open1','打开1')">打开1</a>
            <a href="javascript:openTen();" class="sp db btn_open10" onclick="PTTSendClick('btn','btn_open10','打开10')">打开10</a>
            <!-- <a href="javascript:TGDialogS('pop10');" class="sp db btn_zc"onclick="PTTSendClick('btn','btn_zc','暂存')">暂存</a> -->
            <a href="javascript:openBox();" class="sp db btn_zc" onclick="PTTSendClick('btn','btn_zc','暂存')">暂存</a>
          </div>
          <p class="txt_s1_num">剩余的勋章宝盒数量：<span id="medalNum">0</span></p>
        </div>
        <div class="section2 dh_box">
          <h2 class="tit_s2 spt"></h2>
          <p class="txt_ts">累计点亮勋章数量达到4个、6个、8个、9个、11个、12个、14个、16个时，分别可以获得一次转动车王轮盘的机会，
            <br>每次转动可随机获得一个永久奖励，已经获得的永久奖励不会重复获得。</p>
          <div class="lottery" id="lotterycontent">
            <ul class="list_lo">
              <li id="show0"><!--添加ed类已获得-->
                <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop1.png">
                <em class="sp"><b>S</b></em>
                <p>终极烈焰新星<br>(永久)</p>
                <i></i>
              </li>
              <li id="show1"><!--添加ed类已获得-->
                <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop2.png">
                <em class="sp"><b>T1</b></em>
                <p>至尊青龙 <br>(永久)</p>
                <i></i>
              </li>
              <li id="show2"><!--添加ed类已获得-->
                <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop3.png">
                <em class="sp"><b>座椅</b></em>
                <p>恭贺新春座椅<br>(永久)</p>
                <i></i>
              </li>
              <li id="show3"><!--添加ed类已获得-->
                <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop4.png">
                <em class="sp"><b>宠物</b></em>
                <p>傲世青龙<br>(永久)</p>
                <i></i>
              </li>
              <li id="show4"><!--添加ed类已获得-->
                <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop5.png">
                <em class="sp"><b>羽翼</b></em>
                <p>浮华星海背饰<br>(永久)</p>
                <i></i>
              </li>
              <li id="show5"><!--添加ed类已获得-->
                <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop6.png">
                <em class="sp"><b>发饰</b></em>
                <p>天光云影发饰<br>(永久)</p>
                <i></i>
              </li>
              <li id="show6"><!--添加ed类已获得-->
                <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop7.png">
                <em class="sp"><b>服饰</b></em>
                <p>天光云影服饰<br>(永久)</p>
                <i></i>
              </li>
              <li id="show7"><!--添加ed类已获得-->
                <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop8.png">
                <em class="sp"><b>手杖</b></em>
                <p>暮色蔷薇手杖<br>(永久)</p>
                <i></i>
              </li>
            </ul>
            <a href="javascript:;" class="pa btn_cj" onclick="PTTSendClick('btn','btn_cj','抽奖')">
              <p>剩余的次数:<span id="residueNum">0</span></p>
            </a>
            <div id="swflotterycontent_container" class="lotterycontent_container"><a hidefocus="true"
                                                                                      id="lotterycontent_start"
                                                                                      href="javascript:;"
                                                                                      class="lotterycontent_start">
              <div class="lotterycontent_slight"></div>
            </a>
              <div id="lotterycontent_hover" class="lotterycontent_hover"></div>
            </div>
          </div>
        </div>
        <div class="section4 dh_box">
          <h2 class="tit_s4 spt"></h2>
          <p>1、本期活动时间：2023年1月28日-2023年3月19日。</p>
          <p>2、每打开一个勋章宝盒，随机点亮一个赛车勋章，并获得对应的赛车奖励，概率得永久。</p>
          <p>3、每当重复点亮已点亮的赛车勋章时，均会获得车王的祝福，每当祝福值达到满值时，下次打开宝盒必定能随机点亮一个未被点亮的赛车勋章。（每次点亮未点亮的赛车勋章时，祝福值会被清空。）</p>
          <p>4、累计点亮勋章数量达到4个、6个、8个、9个、11个、12个、14个、16个时，分别可以获得一次车王轮盘转动的机会，每次转动车王轮盘可以随机获得一个永久奖励，已经获得的永久奖励不会重复获得。</p>
          <p>5、车王赛车图鉴获得的可分解奖励存放在暂存箱中，玩家可在活动期间自行选择领取或分解奖励。</p>
          <p>6、由于篇幅限制，本活动概率公示将会在新闻概率公示页面中发布。<a
              href="javascript:location.href='https://speed.qq.com/webplat/info/news_version3/147/534/552/553/m15538/201801/684484.shtml';"
              onclick="PTTSendClick('btn','btn_look','点击查看')">点击查看</a></p>
          <p>7、关于“永久”的定义，请见<a href="javascript:" onclick="PTTSendClick('btn','btn_txxy','《腾讯游戏许可及服务协议》')">《腾讯游戏许可及服务协议》</a>第4.8条。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import $ from 'jquery'

$(document).ready(function () {
  var a, c;
  a = $(window).height();
  $(window).scroll(function () {
    var b = $(this).scrollTop();
    $(".dh_box").each(function () {
      c = $(this).offset().top;
      if (a + b > c) {
        $(this).addClass("move");
      }
    });
  });
});
</script>

<style scoped>
/*reset*/
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
  margin: 0;
  padding: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

address, caption, cite, code, dfn, em, strong, th, var {
  font-weight: normal;
  font-style: normal;
}

ol, ul {
  list-style: none;
}

caption, th {
  text-align: left;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-size: 100%;
}

q:before, q:after {
  content: '';
}

fieldset, img, abbr, acronym {
  border: 0;
}

iframe {
  position: absolute;
}

:focus {
  outline: none;
}

/*footer*/
#footer_ieg {
  text-align: center;
  font-size: 12px;
  line-height: 19px;
  min-width: 1100px;
  color: #c9f8ff;
}

.wrap_ieg {
  margin: 0 auto;
  padding: 16px 30px;
  width: 940px;
}

.wrap_ieg a {
  color: #c9f8ff;
}

#footer_ieg .e {
  font-size: 10px;
  -webkit-text-size-adjust: none;
}

.act_comm_box {
  background: #003249;
}

/*页面样式*/
.c:before, .c:after {
  content: "";
  display: table;
}

.c:after {
  clear: both;
}

.c {
  zoom: 1;
}

body {
  font-size: 12px;
  padding-top: 42px;
  text-align: justify;
  background-color: #0d3d46;
  overflow-x: hidden;
  -webkit-text-size-adjust: none !important;
}

#comm_act_wrap {
  height: 44px;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  animation: Light 0s linear both;
}

@keyframes Light {
  0% {
    filter: brightness(100%);
  }
  100% {
    filter: brightness(110%);
  }
}

.wrap, #footer_ied {
  min-width: 1300px;
  width: 100%;
  _width: expression((document.documentElement.clientWidth||document.body.clientWidth)<1102?'1300px':'');
}

.wrap {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/rp.jpg) no-repeat 50% 0;
  min-width: 1300px;
  overflow: hidden;
}

.act_comm_box {
  background: rgba(6, 6, 6, 0.8);
}

#afooter {
  font-size: 0.18rem;
  color: #ba829b;
  text-align: center;
  padding: 0.25rem 0;
  min-width: 1300px;
  position: relative;
  margin-top: -114px;
}

body, html, #_overlay_ {
  min-width: 1300px;
}

.pr {
  position: relative;
}

.pa {
  position: absolute;
}

.hide {
  display: block;
  width: 0;
  height: 0;
  overflow: hidden;
}

.db {
  display: block;
  text-indent: -999em;
}

.sp {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/sp.png) no-repeat;
}

.spt {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/spt.png) no-repeat;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

img {
  display: block;
  margin: 0 auto;
}

/*查看奖励弹窗*/
.pop_o {
  background-color: #28686d;
  border: 3px solid #5f9b9f;
  position: relative;
  display: none;
}

.pop-close_2 {
  display: block;
  background-color: #28686d;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 36px;
  font-size: 32px;
  color: #e5ffee;
  position: absolute;
  top: -3px;
  right: -44px;
}

.pop-close_2:hover, .pop-btn:hover {
  text-decoration: none;
}

.pop-w1 {
  width: 614px;
  padding: 20px;
}

.pop-w2 {
  width: 614px;
  padding: 50px 0;
}

.pop-em {
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #e5ffee;
  line-height: 32px;
}

/* 表格 */
.pop-tb2 {
  width: 100%;
  margin-top: 20px;
}

.pop-tb2 th, .pop-tb2 td {
  text-align: center;
  border: 1px solid #5f9b9f;
  height: 30px;
}

.pop-tb2 th {
  color: #e5ffee;
  font-weight: bold;
  text-align: center;
}

.pop-tb2 tbody td {
  color: #e5ffee;
}

.pop-tb2 tfoot td {
  color: #e5ffee;
}

.pop-tb2 tfoot a {
  color: #e5ffee;
  margin: 0 10px;
}

.pop-btn {
  display: block;
  background-position: 0 0;
  width: 191px;
  height: 58px;
  text-align: center;
  line-height: 58px;
  font-size: 20px;
  font-weight: bold;
  color: #bbb6e4;
  margin: 50px auto 0;
}

/*container*/
.container {
  width: 1100px;
  position: relative;
  margin: 0 auto;
}

@font-face {
  font-family: 'font_text';
  src: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/font_text.ttf);
  font-display: swap;
}

.f_text {
  font-family: 'font_text';
}

/*head*/
.head {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/head.jpg) no-repeat 50% 0;
  height: 972px;
}

.txt_head {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 758px;
}

.head_btn {
  width: 958px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 805px;
  left: 50%;
  margin-left: -479px;
}

.head_btn a {
  width: 311px;
  height: 99px;
}

.btn_buy2 {
  background-position: 0 0;
}

.btn_buy20 {
  background-position: -344px 0;
}

.btn_buy100 {
  background-position: -689px 0;
}

/*content*/
.content {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/content.jpg) no-repeat 50% 0;
  height: 2843px;
}

/*section1*/
.section1 {
  width: 100%;
  height: 1347px;
}

.tit_s1 {
  background-position: -199px 0;
  width: 603px;
  height: 38px;
  margin: 0 auto 12px;
}

.txt_ts {
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #d8dabf;
}

.list_s1 {
  width: 934px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 35px auto 0;
}

.list_s1 li {
  width: 201px;
  position: relative;
  margin-bottom: 21px;
}

.list_s1 li img {
  width: 201px;
  height: 202px;
}

.box_zz {
  display: none;
  width: 245px;
  height: 244px;
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/box_zz.png) no-repeat;
  top: 50%;
  left: 50%;
  margin-left: -122px;
  margin-top: -122px;
}

.list_s1 li.on .box_zz {
  display: block;
}

.list_s1 p {
  width: 220px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #0a403b;
  position: absolute;
  top: 147px;
  left: 50%;
  margin-left: -110px;
}

.list_s1 em {
  background-position: -954px -132px;
  width: 46px;
  height: 46px;
  font-size: 22px;
  line-height: 46px;
  color: #833e00;
  text-align: center;
  position: absolute;
  top: 7px;
  left: 6px;
}

.box_s1_bar {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/bar_bg.png) no-repeat;
  background-size: 100% 100%;
  width: 990px;
  height: 10px;
  margin: 9px auto 0;
}

.box_s1_bar div {
  width: 990px;
  height: 10px;
}

.box_s1_bar div span {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/bar_bg_jd.png) no-repeat;
  display: block;
  width: 0%;
  height: 10px;
  border-radius: 10px;
}

.box_s1_num {
  position: absolute;
  top: 1001px;
  right: 1050px;
  font-size: 16px;
  line-height: 20px;
  color: #fffec2;
}

.box_s1_txt {
  width: 1006px;
  display: flex;
  align-items: flex-start;
  margin: 18px auto 0;
}

.box_s1_txt b {
  font-size: 16px;
  line-height: 20px;
  color: #fffec2;
  width: 110px;
  display: block;
  letter-spacing: 2px;
}

.box_s1_txt p {
  font-size: 16px;
  line-height: 20px;
  color: #d3d4c7;
  width: 896px;
}

.box_s1_btn {
  width: 864px;
  display: flex;
  justify-content: space-between;
  margin: 22px auto 0;
}

.box_s1_btn a {
  width: 268px;
  height: 69px;
}

.btn_open1 {
  background-position: 0 -132px;
}

.btn_open10 {
  background-position: -285px -132px;
}

.btn_zc {
  background-position: -570px -132px;
}

.txt_s1_num {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #d3d4c7;
  font-weight: bold;
  margin-top: 25px;
}

.txt_s1_num span {
  color: #fffec2;
}

/*section2*/
.section2 {
  width: 100%;
  height: 937px;
}

.tit_s2 {
  background-position: -199px -90px;
  width: 603px;
  height: 38px;
  margin: 0 auto 12px;
}

.lottery {
  width: 793px;
  height: 720px;
  margin: 24px 0 0 162px;
  position: relative;
}

.list_lo {
  width: 100%;
  height: 100%;
  position: relative;
}

.list_lo li {
  width: 201px;
  position: absolute;
}

.list_lo li img {
  width: 201px;
  height: 202px;
}

.list_lo p {
  width: 220px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 147px;
  left: 50%;
  margin-left: -110px;
}

.list_lo em {
  background-position: -954px -132px;
  width: 46px;
  height: 46px;
  font-size: 20px;
  line-height: 46px;
  color: #833e00;
  text-align: center;
  position: absolute;
  top: 7px;
  left: 6px;
  display: block;
}

.list_lo li:nth-child(1) {
  top: 0px;
  left: 179px;
}

.list_lo li:nth-child(2) {
  top: 0px;
  left: 406px;
}

.list_lo li:nth-child(3) {
  top: 142px;
  left: 592px;
}

.list_lo li:nth-child(4) {
  top: 378px;
  left: 592px;
}

.list_lo li:nth-child(5) {
  top: 518px;
  left: 406px;
}

.list_lo li:nth-child(6) {
  top: 518px;
  left: 179px;
}

.list_lo li:nth-child(7) {
  top: 358px;
  left: 0px;
}

.list_lo li:nth-child(8) {
  top: 142px;
  left: 0px;
}

.list_lo li i {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/s2_prop1_ed.png) no-repeat;
  width: 201px;
  height: 202px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

.list_lo li.ed i {
  display: block;
}

.btn_cj {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/btn_play.png) no-repeat;
  width: 291px;
  height: 291px;
  left: 238px;
  top: 213px;
  display: block;
}

.btn_cj p {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  color: #aa7625;
  text-align: center;
  padding-top: 160px;
}

#lotterycontent_start {
  border-radius: 50%;
}

#lotterycontent_hover {
  border-radius: 50%;
}

/*section4*/
.section4 {
  width: 100%;
  height: 380px;
}

.tit_s4 {
  background-position: -233px -270px;
  width: 535px;
  height: 36px;
  margin: 0 auto 24px;
}

.section4 p {
  width: 994px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 28px;
  color: #d3d4c7;
}

.section4 p a {
  color: #d3d4c7;
}

/**/
.dh_box {
  opacity: 0;
}

.dh_box.move {
  animation: fadeInUp 1s 0.5s ease both;
  display: block;
  opacity: 1;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10%)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}

/*.section1{-webkit-animation:move_3 .7s  linear backwards;}
@-webkit-keyframes move_3{
    0%{ -webkit-transform:translateY(200px); opacity:0;}
}*/
/*弹窗*/
/*pop1*/
.dia-con1 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 80px;
}

.dia-close {
  background-position: -893px -206px;
  width: 34px;
  height: 35px;
  top: 7px;
  right: -44px;
}

.pop1_txt1 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
}

.pop1_txt1 span {
  color: #ffffff;
}

.pop1_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 30px 0 0;
}

.btn_yes {
  background-position: -351px -235px;
  width: 197px;
  height: 51px;
}

.dia-con1 .btn_yes {
  margin: 33px auto 0;
}

/*#comm_act_wrap, .ost, .speed_comm_top{min-width: 1100px;}*/
#comm_act_wrap, .ost, .speed_comm_top {
  min-width: 1300px !important;
}

/*pop2*/
.dia-con2 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 80px;
}

.pop2_txt1 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
}

.pop2_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 26px 0 28px;
}

.pop2_txt3 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
}

.dia-con2 .btn_yes {
  margin: 14px auto 0;
}

/*pop3*/
.dia-con3 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 57px;
}

.pop3_txt1 {
  width: 410px;
  height: 168px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 30px;
  color: #d8dabf;
  text-align: center;
}

.box_pop3_btn {
  width: 410px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.btn_cz {
  background-position: -577px -235px;
  width: 197px;
  height: 51px;
}

/*pop4*/
.dia-con4 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 57px;
}

.dia-con4 .btn_yes {
  margin: 0 auto 0;
}

/*pop5*/
.dia-con5 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 80px;
}

.pop5_txt1 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
}

.pop5_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 23px 0 16px;
}

.pop5_txt3 {
  width: 424px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #fff6c3;
  margin: 0 auto 18px;
}

.dia-con5 .btn_yes {
  margin: 0 auto 0;
}

/*pop6*/
.dia-con6 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg2.jpg) no-repeat;
  width: 474px;
  height: 395px;
  box-sizing: border-box;
  padding-top: 70px;
}

.pop6_txt1 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
  padding-bottom: 8px;
}

.pop6_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 8px;
}

.pop6_txt3 {
  width: 424px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #fff6c3;
  padding: 9px 0;
  margin: 0 auto;
}

.dia-con6 .btn_yes {
  margin: 0 auto 0;
}

/*pop7*/
.dia-con7 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 80px;
}

.pop7_txt1 {
  width: 435px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
  margin: 0 auto;
}

.pop7_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 23px 0 16px;
}

.pop7_txt3 {
  width: 424px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #fff6c3;
  margin: 0 auto 18px;
}

.dia-con7 .btn_yes {
  margin: 0 auto 0;
}

/*pop8*/
.dia-con8 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 80px;
}

.pop8_txt1 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
}

.pop8_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 43px 0 0;
}

.dia-con8 .btn_yes {
  margin: 50px auto 0;
}

/*pop10*/
.dia-con10 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/tc.png) no-repeat;
  width: 724px;
  height: 521px;
  box-sizing: border-box;
  padding-top: 86px;
}

.pop10_tab {
  width: 698px;
  margin: 0 auto;
}

.pop10_tab tr th {
  height: 44px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
}

.pop10_tab tr th:nth-child(1) {
  width: 60px;
}

.pop10_tab tr th:nth-child(2) {
  width: 127px;
}

.pop10_tab tr th:nth-child(3) {
  width: 127px;
}

.pop10_tab tr th:nth-child(4) {
  width: 159px;
}

.pop10_tab tr th:nth-child(5) {
  width: 96px;
}

.pop10_tab tr th:nth-child(6) {
  width: 129px;
}

.pop10_tab tr td {
  height: 38px;
  font-size: 14px;
  text-align: center;
  color: #d8dabf;
}

.btn_pop10_lq {
  background-position: -613px -313px;
  width: 84px;
  height: 28px;
  margin: 0 auto;
}

.btn_pop10_fj {
  background-position: -718px -313px;
  width: 84px;
  height: 28px;
  margin: 0 auto;
}

.pop10_box {
  width: 200px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 416px;
  left: 50%;
  margin-left: -100px;
}

.pop10_box p {
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
  width: 90px;
}

.pop10_box a {
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
}

.dia-con10 .btn_yes {
  position: absolute;
  top: 452px;
  left: 50%;
  margin-left: -98px;
}

/*pop11*/
.dia-con11 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 80px;
}

.pop11_txt1 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
}

.pop11_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 43px 0 52px;
}

.box_pop11_btn {
  width: 410px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.btn_qx {
  background-position: -351px -313px;
  width: 197px;
  height: 51px;
}

/*pop13*/
.dia-con13 {
  background: url(//game.gtimg.cn/images/speed/cp/a20221223jpk/pop_bg1.jpg) no-repeat;
  width: 474px;
  height: 305px;
  box-sizing: border-box;
  padding-top: 80px;
}

.pop13_txt1 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
}

.pop13_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 43px 0 52px;
}

.dia-con13 .btn_yes {
  margin: 0 auto;
}

/*pop14*/
.pop14_txt1 {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #d8dabf;
}

.pop14_txt2 {
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 43px 0 52px;
}
</style>