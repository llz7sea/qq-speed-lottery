<template>
  <div class="wrap f_text">
    <div class="container">
      <div class="head pr">
        <h1 class="hide">极品狂欢夜</h1>
        <p class="txt_head">活动时间：2023.1.28-2023.3.19</p>
        <div class="head_btn">
          <a
              class="sp db btn_buy2"
              @click="purchase(2)"
          >2Q币购买</a>
          <a
              class="sp db btn_buy20"
              @click="purchase(20)"
          >20Q币购买</a>
          <a
              class="sp db btn_buy100"
              @click="purchase(100)"
          >100Q币购买</a>
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
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[0][0]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop1.png">
              <em class="sp"><b>S车</b></em>
              <p>至尊·盘龙<br>永久/1天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[0][1]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop2.png">
              <em class="sp"><b>S车</b></em>
              <p>至尊·麦凯伦<br>永久/30天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[0][2]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop2.png">
              <em class="sp"><b>S车</b></em>
              <p>至尊·麦凯伦<br>永久/1天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[0][3]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop3.png">
              <em class="sp"><b>T1</b></em>
              <p>启灵守护神<br>永久/30天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[1][0]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop3.png">
              <em class="sp"><b>T1</b></em>
              <p>启灵守护神<br>永久/1天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[1][1]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop4.png">
              <em class="sp"><b>T1</b></em>
              <p>侍武之魂<br>永久/30天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[1][2]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop4.png">
              <em class="sp"><b>T1</b></em>
              <p>侍武之魂<br>永久/1天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[1][3]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop5.png">
              <em class="sp"><b>A车</b></em>
              <p>缤纷神驹<br>永久/30天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[2][0]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop5.png">
              <em class="sp"><b>A车</b></em>
              <p>缤纷神驹<br>永久/1天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[2][1]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop6.png">
              <em class="sp"><b>A车</b></em>
              <p>白玉神驹<br>永久/30天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[2][2]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop6.png">
              <em class="sp"><b>A车</b></em>
              <p>白玉神驹<br>永久/1天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[2][3]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop7.png">
              <em class="sp"><b>B车</b></em>
              <p>睡梦阿狸<br>永久/10天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[3][0]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop8.png">
              <em class="sp"><b>B车</b></em>
              <p>萌菜出击<br>永久/10天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[3][1]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop9.png">
              <em class="sp"><b>B车</b></em>
              <p>逐浪独角兽<br>永久/10天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[3][2]"></span>
            </li>
            <li>
              <img src="//game.gtimg.cn/images/speed/cp/a20221223jpk/s1_prop10.png">
              <em class="sp"><b>B车</b></em>
              <p>消除联萌<br>永久/10天</p>
              <span class="box_zz pa" v-show="$store.state.logined && $store.state.role.highLight[3][3]"></span>
            </li>
          </ul>

          <!--进度条模块srtart-->
          <div class="box_s1_bar">
            <div>
              <span
                  :style="`width: ${$store.state.role.blessTotal == 0 ? 0 : ($store.state.role.blessValue / $store.state.role.blessTotal) * 100}%`"></span>
              <!--进度条，百分比改变宽度-->
            </div>
          </div>
          <div class="box_s1_num">
            <p><span class="zz">{{ $store.state.role.blessValue }}</span><span class="zzz">/</span><span
                class="zzzz">{{ $store.state.role.blessTotal }}</span></p>
          </div>
          <!--进度条模块end-->
          <div class="box_s1_txt">
            <b>车王的祝福：</b>
            <p>每当重复点亮已点亮的赛车勋章时，均会获得车王的祝福，每当祝福值达到满值时，下次打开宝盒必定能随机点亮一个未被点亮<br>的赛车勋章。每次点亮未点亮的赛车勋章时，祝福值会被清空。</p>
          </div>
          <div class="box_s1_btn">
            <a
                class="sp db btn_open1"
                @click="openCase(1)"
            >打开1</a>
            <a
                class="sp db btn_open10"
                @click="openCase(10)"
            >打开10</a>
            <a
                class="sp db btn_zc"
                @click="openRepository">暂存</a>
          </div>
          <p class="txt_s1_num">剩余的勋章宝盒数量：<span id="medalNum">{{
              $store.state.logined ? $store.state.role.chances : 0
            }}</span></p>
        </div>
        <div class="section2 dh_box">
          <h2 class="tit_s2 spt"></h2>
          <p class="txt_ts">累计点亮勋章数量达到4个、6个、8个、9个、11个、12个、14个、16个时，分别可以获得一次转动车王轮盘的机会，
            <br>每次转动可随机获得一个永久奖励，已经获得的永久奖励不会重复获得。</p>
          <div id="lotterycontent" class="lottery">
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
            <a class="pa btn_cj"
               href="javascript:;"
               @click="rollDish"
            >
              <p>剩余的次数:<span id="residueNum">{{ $store.state.role.rollDishChances }}</span></p>
            </a>
            <div id="swflotterycontent_container" class="lotterycontent_container"><a id="lotterycontent_start"
                                                                                      class="lotterycontent_start"
                                                                                      hidefocus="true"
                                                                                      href="javascript:;">
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
              >点击查看</a></p>
          <p>7、关于“永久”的定义，请见<a href="javascript:"
                              >《腾讯游戏许可及服务协议》</a>第4.8条。
          </p>
        </div>
      </div>
    </div>
  </div>
  <loginDialog
      :loginShow="loginShow"
      @update="finishLogin"
  ></loginDialog>
  <regionBindDialog
      :bindShow="bindShow"
      @update="bindShow=false"
  ></regionBindDialog>
  <purchaseDialog
      :money="payMoney"
      :purchaseShow="purchaseShow"
      @close="purchaseShow=false"
      @update="confirmPurchase"
  ></purchaseDialog>
  <insufficientDialog
      :insufficientShow="insufficientShow"
      @close="insufficientShow=false"
  ></insufficientDialog>
  <paymentDialog
      :payMoney="payMoney"
      :paymentShow="paymentShow"
      @close="paymentShow = false"
      @update="confirmPay"
  ></paymentDialog>
  <congratulationDialog
      :chanceNum="moneyToChance[payMoney]"
      :money="payMoney"
      :visible="congratulationShow"
      @close="congratulationShow=false"
  ></congratulationDialog>
  <cantRollDialog :visible="cantRollShow" @close="cantRollShow = false"></cantRollDialog>
  <resultDialog :visible="resultShow" :resultData="resultData" @close="resultShow = false"></resultDialog>
  <repositoryDialog :visible="repositoryShow" @close="repositoryShow = false"></repositoryDialog>
</template>

<script setup>
import $ from 'jquery'
import {reactive, ref} from "vue";
import {callShade} from "@/utils/shadeControler";
import {useStore} from "vuex";
import {moneyToChance} from "@/enums/price";
import loginDialog from "@/components/dialog/loginDialog.vue"
import regionBindDialog from "@/components/dialog/regionBindDialog.vue"
import purchaseDialog from "@/components/dialog/purchaseDialog.vue"
import insufficientDialog from "@/components/dialog/insufficientDialog.vue"
import paymentDialog from "@/components/dialog/paymentDialog.vue"
import congratulationDialog from "@/components/dialog/congratulationDialog.vue"
import cantRollDialog from "@/components/dialog/cantRollDialog.vue"
import resultDialog from "@/components/dialog/resultDialog.vue"
import repositoryDialog from "@/components/dialog/repositoryDialog"
import bus from "vue3-eventbus"

console.log(loginDialog)
console.log(regionBindDialog)
console.log(purchaseDialog)
console.log(insufficientDialog)
console.log(paymentDialog)
console.log(congratulationDialog)
console.log(cantRollDialog)
console.log(resultDialog)
console.log(repositoryDialog)

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

const store = useStore()
bus.on("win", () => {
  resultData.win = true
})

const loginShow = ref(false)
const bindShow = ref(false)
const purchaseShow = ref(false)
const insufficientShow = ref(false)
const paymentShow = ref(false)
const congratulationShow = ref(false)
const cantRollShow = ref(false)
const resultShow = ref(false)
const repositoryShow = ref(false)

const resultData = reactive({current: 0})
const payMoney = ref(2)

const checkLogin = () => {
  if (!store.state.logined) {
    callShade('white')
    setTimeout(() => {
      loginShow.value = true
    }, 100)
  }
}
const bindRegion = () => {
  if (store.state.logined) {
    setTimeout(() => {
      bindShow.value = true
      callShade('white')
    }, 100)
  } else {
    checkLogin()
  }
}
const finishLogin = () => {
  loginShow.value = false
  if (!store.state.bound && store.state.logined) {
    bindRegion()
  }
}
const purchase = m => {
  checkLogin()
  if (store.state.logined) {
    purchaseShow.value = true
    payMoney.value = m
  }
}
const confirmPurchase = () => {
  purchaseShow.value = false
  callShade("blcak")
  setTimeout(() => {
    paymentShow.value = true
  }, 200)
}
const confirmPay = m => {
  paymentShow.value = false
  congratulationShow.value = true
  if (!m) {
    store.commit("purchaseChances", [moneyToChance[payMoney.value], payMoney.value])
  }
  if (m) {
    store.commit("purchaseChancesWithoutQcoin", moneyToChance[payMoney.value])
  }
}
// 核心抽奖 start
const openCase = q => {
  checkLogin()
  if (store.state.logined) {
    if (store.state.role.chances < q) {
      insufficientShow.value = true
    } else {
      let count = 0
      store.commit("lottery", q)
      store.state.role.highLight.flat().forEach(c => {
        if (c == 1) {
          count++
        }
      })
      resultData.current = count
      resultShow.value = true
    }
  }
}
// 核心抽奖 end

const openRepository = () => {
  checkLogin()
  if (store.state.logined) {
    callShade("black")
    repositoryShow.value = true
  }
}
const rollDish = () => {
  checkLogin()
  if (store.state.logined) {
    callShade("grey")
    cantRollShow.value = true
  }
}
</script>

<style scoped>
</style>