<template>
  <Teleport v-if="loginShow" to="body">
    <div class="loginDiv">
      <div class="login" id="login" style="height: 366px;">
        <div class="header">
          <a class="close" id="close" title="关闭" tabindex="14" @click="handleClose"></a>
        </div>
        <div class="error_tips" id="error_tips" v-show="errorFlag"><span class="error_logo" id="error_logo"></span>
          <span class="err_m" id="err_m">{{ errorMsg }}</span>
        </div>
        <div class="loading_tips" id="loading_tips" v-show="loginLoading"><span id="loading_wording">登录中</span><img
            id="loading_img"
            place_src="https://ui.ptlogin2.qq.com/style/0/images/load.gif"
            align="absmiddle"
            src="https://ui.ptlogin2.qq.com/style/0/images/load.gif">
        </div>
        <div class="qlogin" id="qlogin" style="display: block;" v-show="!loginMode">
          <div class="title" id="title_0" style="display: block;">快捷登录</div>
          <div class="title" id="title_1" style="display: none;">安全验证</div>
          <div class="qlogin_tips" id="qlogin_tips_0" style="display: none;">使用<a class="link_tips"
                                                                                  href="http://im.qq.com/mobileqq/#from=login"
                                                                                  target="_blank">QQ手机版</a>扫码登录，或点击头像授权登录。
          </div>
          <div class="qlogin_tips" id="qlogin_tips_1" style="display: block;">使用<a class="link_tips"
                                                                                   href="http://im.qq.com/mobileqq/#from=login"
                                                                                   target="_blank">QQ手机版</a>扫码登录，或点击头像授权登录。
          </div>
          <div class="qlogin_tips" id="qlogin_tips_2" style="display: none;">登录环境异常（异地登录或IP存在风险）<br>请使用<a
              class="link_tips" href="http://im.qq.com/mobileqq/#from=login" target="_blank">QQ手机版</a>扫码登录，保护帐号安全。
          </div>
          <div class="qlogin_tips" id="qlogin_tips_3" style="display: none;">你已开启了设备锁安全登录服务，<br>请使用<a class="link_tips"
                                                                                                      href="http://im.qq.com/mobileqq/#from=login"
                                                                                                      target="_blank">QQ手机版</a>扫码进行登录。
          </div>
          <div class="qlogin_tips" id="qlogin_tips_4" style="display: none;">请在<a class="link_tips"
                                                                                  href="http://im.qq.com/mobileqq/#from=login"
                                                                                  target="_blank">QQ手机版</a>上确认使用此帐号登录
          </div>
          <a title="上一页" class="prePage" id="prePage" href="javascript:void(0);" style="display: none;"><span
              class="preRow" tabindex="6"></span></a>
          <div class="qlogin_show" id="qlogin_show" style="width: 315px; left: 50%; margin-left: -157.5px;">
            <div class="qlogin_list" id="qlogin_list" style="width: 315px;">
              <span id="qr_area" class="qr_1">
                <img id="qrlogin_img" class="qrImg" alt="" src="@/assets/pic/ptqrshow.png" style="">
                <span class="qrlogin_img_out"></span>
                <span id="qr_invalid" class="qr_invalid" style="display: none;">
                  <span id="qr_mengban" class="qr_mengban">
                  </span>
                  <span id="qr_invalid_tips" class="qr_invalid_tips"> 二维码失效 <br> 请点击刷新 </span></span></span>
              <a hidefocus="true" draggable="false" tabindex="2" :uin="$store.state.role.qq" type="5" class="face">
                <img id="img_95478654" :uin="$store.state.role.qq" type="5"
                     src="https://thirdqq.qlogo.cn/g?b=sdk&amp;k=k0W8ibDqSpcGibYO5yblvpjQ&amp;kti=Y9o4ywAAAAE&amp;s=100&amp;t=1555644955">
                <span id="mengban_95478654"></span>
                <span class="uin_menban"></span>
                <span class="uin">{{ $store.state.role.qq }}</span>
                <span id="img_out_95478654" :uin="$store.state.role.qq" type="5" class="img_out"></span>
                <span id="nick_95478654" class="nick">{{ $store.state.role.qq }}</span>
                <span class=""></span> <span class="onekey_logo"></span>
              </a>
            </div>
          </div>
          <div class="guanjia hide"><img class="guanjia_logo hide"
                                         src="//imgcache.qq.com/ptlogin/v4/style/40/images/logo.png"><input
              type="checkbox"
              class="guanjia_checkbox hide"><span class="guanjia_tips"></span></div>
          <a title="下一页" class="nextPage" id="nextPage" href="javascript:void(0);" style="display: none;"><span
              class="nextRow" tabindex="7"></span></a>
        </div>
        <div class="web_qr_login" id="web_qr_login" v-show="loginMode">
          <div class="web_qr_login_show" id="web_qr_login_show">
            <div class="web_login" id="web_login">
              <div class="tips" id="tips">
                <noscript id="noscript_area"><span class="noscript">你的浏览器脚本被禁用了， <a href="/assistant/noscript.html"
                                                                                    target="_blank"
                                                                                    style="color: #29B1F1">查看启用方法</a> </span><img
                    id="noscript_img"
                    style="width:1px;height:1px;" src="https://ui.ptlogin2.qq.com/cgi-bin/report?id=301240"></noscript>
                <div class="title" id="title_2">密码登录</div>
                <div id="qlogin_entry">
                  推荐使用<a class="switch_btn_focus link_tips" hidefocus="true" id="switcher_qlogin"
                         href="javascript:void(0);"
                         tabindex="7" @click="checkToPwd">快捷登录</a>，防止盗号。
                </div>
                <div class="operate_tips" id="operate_tips"><span class="operate_content">手机号码也可登录哦， <a
                    class="tips_link" id="bind_account" href="javascript:void(0);">登录个人中心绑定</a> </span><span
                    class="down_row"></span></div>
              </div>
              <div></div>
              <div class="login_form">
                <form id="loginform" autocomplete="off" name="loginform" action="" method="post" target="1"
                      style="margin:0px;" onsubmit="1">
                  <div class="uinArea" id="uinArea"><label class="input_tips" id="uin_tips" for="u" data-onlyqq="QQ号码"
                                                           style="display: none;">支持QQ号/邮箱/手机号登录</label>
                    <div class="inputOuter">
                      <input
                          type="text"
                          class="inputstyle"
                          id="u"
                          name="u"
                          placeholder="支持QQ号/邮箱/手机号登录"
                          v-model="qq"
                          tabindex="1"
                      >
                      <a class="uin_del"
                         id="uin_del"
                         href="javascript:void(0);"
                         style="display: block;"
                         @click="clearQQinput"
                      ></a>
                    </div>
                    <ul class="email_list" id="email_list"></ul>
                  </div>
                  <div class="pwdArea" id="pwdArea">
                    <div class="inputOuter" id="pwdAreaInputOuter">
                      <input type="password"
                             class="inputstyle password"
                             id="p"
                             name="p"
                             v-model="pwd"
                             placeholder="请输入密码"
                             maxlength="16"
                             tabindex="2"
                      >
                    </div>
                    <div
                        class="lock_tips"
                        id="caps_lock_tips"
                        style="display: none;">
                      <span class="lock_tips_row"></span>
                      <span>大写锁定已打开</span>
                    </div>
                  </div>
                  <div class="verifyArea" id="verifyArea">
                    <div class="verifyinputArea" id="verifyinputArea"><label class="input_tips" id="vc_tips"
                                                                             for="verifycode">验证码</label>
                      <div class="inputOuter"><input name="verifycode" type="text" class="inputstyle verifycode"
                                                     id="verifycode" value="" tabindex="3"></div>
                    </div>
                    <div class="verifyimgArea" id="verifyimgArea"><img class="verifyimg" id="verifyimg" title="看不清，换一张">
                      <a tabindex="4" href="javascript:void(0);" class="verifyimg_tips">看不清，换一张</a>
                    </div>
                  </div>
                  <div class="submit">
                    <span class="login_button" hidefocus="true">
                      <input type="button" tabindex="6" value="登录" class="btn" id="login_button" @click="handleLogin">
                    </span>
                  </div>
                </form>
              </div>
              <div class="guanjia hide"><img class="guanjia_logo hide"
                                             src="//imgcache.qq.com/ptlogin/v4/style/40/images/logo.png"><input
                  type="checkbox"
                  class="guanjia_checkbox hide"><span class="guanjia_tips"></span></div>
            </div>
            <div class="bottom" id="bottom_web"><a href="https://ssl.ptlogin2.qq.com/ptui_forgetpwd" class="link"
                                                   id="forgetpwd" target="_blank">找回密码</a><span class="dotted"></span><a
                href="https://ssl.ptlogin2.qq.com/j_newreg_url" class="link" target="_blank">注册帐号</a><span
                class="dotted"></span><a class="link" id="feedback_web" href="https://support.qq.com/products/14800"
                                         target="_blank">意见反馈</a>
            </div>
          </div>
        </div>
        <div id="qrlogin_step2" class="qrlogin_step2">
          <div class="step2_outer">
            <div class="qr_h3">扫描成功，请在手机上确认是否授权登录</div>
            <div class="goBack"> 使用其它方式登录，请 <a id="goBack" href="javascript:void(0);" tabindex="14">返回</a></div>
          </div>
        </div>
        <div id="onekey_step2" class="onekey_step2">
          <div class="outer">
            <div class="title">QQ手机版授权</div>
            <div class="container">
              <div class="prompt">请打开<a class="link_tips" href="http://im.qq.com/mobileqq/#from=login"
                                        target="_blank">QQ手机版</a>，确认登录
              </div>
              <div class="operate"> 没有收到登录确认？请<a href="javascript:pt.qlogin.onekeyPush(pt.qlogin.__onekeyUin)">重新发送。</a>
              </div>
              <div class="operate"> 使用扫码登录/密码登录，请&nbsp;<a style="text-decoration: underline;"
                                                          href="javascript:pt.plogin.go_onekey_step(1)">返回</a></div>
              <div id="onekey_tips"></div>
            </div>
          </div>
          <div class="bottom"><a class="link" href="https://support.qq.com/products/14800" target="_blank">意见反馈</a>
          </div>
        </div>
        <div id="qr_tips" class="qr_tips" style="display: none;">
          <div class="qr_tips_menban" id="qr_tips_menban"></div>
          <div class="qr_tips_pic qr_tips_pic_chs" id="qr_tips_pic"></div>
        </div>
        <div id="bottom_qlogin" v-show="!loginMode" class="bottom hide" style="display: block;">
          <a class="link" hidefocus="true" id="switcher_plogin" href="javascript:void(0);" tabindex="8"
              @click="checkToPwd">密码登录</a><span class="dotted" id="docs_dotted"></span><a
            href="https://ssl.ptlogin2.qq.com/j_newreg_url" class="link" target="_blank"
           >注册帐号</a><span class="dotted"></span><a class="link" id="feedback_qlogin"
                                                                       href="https://support.qq.com/products/14800"
                                                                       target="_blank">意见反馈</a>
        </div>
        <div id="authLogin" class="authLogin">
          <div class="authHeader" id="authHeader">
            <div class="logo"></div>
            <span class="title">腾讯业务</span>
          </div>
          <div class="authTips"></div>
          <div class="authWording"><span><span>点击头像，确认帐号登录</span><span>腾讯业务</span></span></div>
          <div class="authInfo"><a class="face" id="auth_area" tabindex="1" href="javascript:void(0);" draggable="false"
                                   hidefocus="true"><img id="auth_face"> <span id="auth_mengban" class=""></span>
            <span class="uin" id="auth_uin"></span> <span class="img_out_focus"></span> <span class="nick"
                                                                                              id="auth_nick"></span></a>
          </div>
          <div class="cancleAuthOuter" id="cancleAuthOuter"><a id="cancleAuth" class="cancleAuth">使用其他帐号</a></div>
          <div class="bottom"></div>
        </div>
        <div id="newVcodeArea" class="newVcodeArea" style="display: none;">
          <div style="margin: 0px; padding: 0px; line-height: 40px;">
            <div style="border-bottom: 1px solid #d7d7d7;">
              <div style="position: absolute; margin-left: 10px"><a href="javascript:pt.plogin.hideVC();"
                                                                    style="color: #007aff; text-decoration: none;">返回</a>
              </div>
              <div style="width: 100%; text-align: center; font-size: 16px; font-weight: bold">安全验证</div>
            </div>
          </div>
          <div id="newVcodeIframe"
               style="background: none rgb(255, 255, 255); position: absolute; width: 300px; left: 50%; margin-left: -150px; z-index: 9999;">
          </div>
        </div>
      </div>
      <div id="proxy" class="hide"></div>
      <div id="tcaptcha_transform_dy"
           style="opacity: 0; position: absolute; transition: opacity 0.3s linear 0s; top: 6px;">
      </div>
      <div style="opacity: 0.005; user-select: none; position: absolute; left: 0px; top: 0px;">
        14ec0995863d11dc-31deb742fdc6ea57-7350
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import {defineProps, defineEmits, ref} from "vue";
import {useStore} from 'vuex'
import {cancelShade} from "@/utils/shadeControler";

defineProps({
  loginShow: {
    type: Boolean,
    default: false
  }
})

window.addEventListener("keydown", e=>{
  if (e.code=='Escape') {
    handleClose()
  }
})

const store = useStore()

const loginMode = ref(false)

const loginLoading = ref(false)

const qq = ref(store.state.role.qq)

const pwd = ref(store.state.role.pwd)

const errorFlag = ref(false)

const errorMsg = ref("")

const emits = defineEmits(['update'])

const clearQQinput = () => {
  qq.value = ''
  document.querySelector("#u").focus()
}

const checkToPwd = () => {
  loginMode.value = !loginMode.value
}

const handleClose = () => {
  emits('update', false)
  cancelShade()
}

const handleLogin = () => {
  let qqPattern = /^[1-9][0-9]{4,10}$/;
  if (qq.value && pwd.value) {
    if (pwd.value!== localStorage.getItem('pwd') || qq.value!== localStorage.getItem('qq')) {
      errorFlag.value = true
      errorMsg.value = "你输入的帐号或密码不正确，请重新输入。"
    } else if (!qqPattern.test(qq.value.toString())) {
      document.querySelector("#u").focus()
      errorFlag.value = true
      errorMsg.value = "请输入正确的qq号！"
    } else {
      loginLoading.value = true
      errorFlag.value = false
      errorMsg.value = ""
      window.setTimeout(() => {
        store.commit('login')
        emits('update', false)
        loginLoading.value = false
      }, 1000 * Math.random())
    }
  } else {
    document.querySelector("#u").focus()
    if (!pwd.value) {
      errorFlag.value = true
      errorMsg.value = "你还没有输入密码！"
    }
    if (!qq.value) {
      errorFlag.value = true
      errorMsg.value = "你还没有输入帐号！"
    }
  }
}
</script>

<style scoped>
.loginDiv {
  height: 368px;
  width: 623px;
  border: 0px;
  padding: 0px;
  margin: -184px 0px 0px -311px;
  position: fixed;
  z-index: 100002;
  top: 50%;
  left: 50%;
  display: block;
  visibility: visible;
  background: red;
}

html {
  overflow: hidden
}

body {
  font-family: PingFang SC, helvetica, arial, 微软雅黑, 华文黑体;
  font-size: 12px;
  margin: 0;
  min-height: 305px;
  min-width: 370px
}

body,
html {
  height: 100%
}

ul {
  padding: 0;
  margin: 0
}

ul li {
  list-style-type: none
}

a,
a:hover {
  text-decoration: none
}

input[type=text]:focus,
input[type=password]:focus {
  outline: 0
}

input::-ms-clear,
input::-ms-reveal {
  display: none;
  width: 0;
  height: 0
}

.grayscale {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)
}

.uncheck {
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/checkbox_unchecked.png") no-repeat;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/checkbox_unchecked_ie.png") no-repeat \9;
  background-size: contain
}

.checked {
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/checkbox_checked.png") no-repeat;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/checkbox_checked_ie.png") no-repeat \9;
  background-size: contain
}

.login,
.login_no_qlogin {
  margin: 0 auto;
  border: 2px solid #eee;
  position: relative;
  height: 100%
}

.header {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  font-family: "微软雅黑";
  z-index: 1000
}

.header .switch {
  height: 45px;
  position: absolute;
  left: 60px;
  bottom: 0;
  font-size: 16px
}

.header .switch #switcher_qlogin {
  margin-right: 85px
}

.header .switch .switch_btn {
  color: #999;
  display: inline-block;
  height: 45px;
  line-height: 45px;
  outline: 0
}

.header .switch .switch_btn_focus {
  color: #333;
  display: inline-block;
  height: 45px;
  line-height: 45px;
  outline: 0
}

.login_no_qlogin .header .switch .switch_bottom,
.login_no_qlogin .header .switch .switch_btn {
  display: none
}

.header .switch .switch_btn:hover {
  color: #333;
  text-decoration: none
}

.header .switch .switch_btn_focus:hover {
  text-decoration: none
}

.header .switch .switch_bottom {
  position: absolute;
  bottom: -1px;
  border-bottom: 2px solid #848484
}

.header .close {
  width: 47px;
  height: 20px;
  float: right;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -225px -126px no-repeat;
  outline: 0
}

.login_no_qlogin .header {
  border: none;
  height: 40px
}

.login_no_qlogin .header .switch {
  height: 40px;
  position: absolute;
  left: 20px;
  top: 10px;
  font-size: 22px
}

.login_no_qlogin .header .switch .switch_btn_focus {
  color: #333;
  cursor: default;
  text-decoration: none;
  display: inline-block;
  height: 30px;
  line-height: 30px
}

.web_login {
  position: relative;
  height: 100%;
  top: 50%;
  margin-top: -166px
}

.web_login .tips {
  position: relative;
  margin: 0 auto 26px;
  z-index: 11;
  font-size: 12px;
  line-height: 16px;
  color: #000;
  text-align: center
}

.error_tips {
  position: absolute;
  width: 250px;
  left: 50%;
  margin-left: -125px;
  z-index: 1000;
  top: 55%
}

.error_tips .error_logo {
  position: absolute;
  height: 16px;
  line-height: 16px;
  width: 16px;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/error_icon.png") no-repeat;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/error_icon_ie.png") no-repeat \9;
  background-size: contain
}

.loading_tips {
  text-align: center;
  height: 24px;
  position: absolute;
  top: 87px;
  left: 50%;
  margin-left: -28px;
  z-index: 1000
}

.error_tips .err_m {
  display: inline-block;
  padding-left: 22px;
  line-height: 16px;
  color: #FF5765;
  vertical-align: middle;
  text-align: left
}

.web_login .operate_tips {
  display: none;
  padding: 8px;
  border: 1px solid #dad699;
  background: #f9f5c7;
  position: absolute;
  bottom: -3px;
  border-radius: 2px
}

.web_login .operate_tips .tips_link {
  color: #f39800
}

.web_login .operate_tips .down_row {
  position: absolute;
  bottom: -6px;
  left: 20px;
  width: 12px;
  height: 6px;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -162px -161px no-repeat;
  font-size: 1px
}

.web_login .operate_tips .operate_content {
  width: 100%;
  text-align: left
}

.web_login .login_form {
  width: 250px;
  margin: 0 auto
}

.web_login .inputOuter,
.web_login .inputOuter_focus {
  width: 250px;
  height: 38px
}

.web_login .inputstyle {
  width: 232px;
  position: relative;
  height: 16px;
  padding: 10px 0 10px 16px;
  line-height: 16px;
  border: 1px solid #CCC;
  border-radius: 4px;
  background: 0 0;
  color: #000;
  font-family: PingFang SC;
  font-size: 13px
}

.web_login .inputstyle:-webkit-autofill {
  box-shadow: 0 0 0 1000px #FFF inset
}

.web_login .input_tips,
.web_login .input_tips_focus {
  position: absolute;
  top: 10px;
  left: 16px;
  font-size: 13px;
  line-height: 18px;
  color: #CCC;
  cursor: text
}

.web_login .input_tips_focus {
  color: #CCC
}

.web_login .uinArea {
  height: 48px;
  position: relative;
  z-index: 10
}

.web_login .uin_del {
  width: 21px;
  height: 21px;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 8px;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -116px -160px no-repeat;
  display: none
}

.web_login .uin_del:hover {
  background-position: -139px -160px
}

.web_login .email_list {
  border: 1px solid #70c2ec;
  background: #fff;
  width: 266px;
  position: absolute;
  z-index: 10;
  display: none;
  border-radius: 1px;
  padding: 1px;
  left: 2px
}

.web_login .email_list li,
.web_login .email_list p {
  height: 31px;
  line-height: 31px;
  margin: 0;
  overflow: hidden;
  padding-left: 10px
}

.web_login .email_list p {
  height: 16px;
  line-height: 10px
}

.web_login .email_list .hover {
  background: #cbe2fa
}

.web_login .pwdArea {
  height: 68px;
  position: relative;
  z-index: 3
}

.web_login .lock_tips {
  position: absolute;
  top: 32px;
  left: -15px;
  height: 16px;
  padding: 5px;
  text-align: center;
  display: none;
  border: 1px solid #dad699;
  background: #f9f5c7;
  border-radius: 2px
}

.web_login .lock_tips .lock_tips_row {
  position: absolute;
  top: -6px;
  left: 25px;
  width: 12px;
  height: 6px;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -162px -168px no-repeat;
}

.web_login .verifyArea {
  display: none;
  height: 120px;
  position: relative
}

.web_login .verifyinputArea {
  height: 55px
}

.web_login .verifycode {
  color: #333;
  font-size: 16px
}

.web_login .verifyimgArea {
  position: relative;
  height: 55px;
  cursor: pointer
}

.web_login .verifyimgArea .verifyimg {
  height: 55px;
  width: 150px;
  position: absolute;
  left: 0
}

.web_login .verifyimgArea .verifyimg_tips {
  position: absolute;
  left: 165px;
  top: 15px;
  color: #000
}

.web_login .submit {
  position: relative;
  height: 38px;
  border-radius: 4px;
  background-color: #09F
}

.web_login .login_button {
  position: absolute;
  left: 0;
  outline: 0;
  width: 100%
}

.web_login .login_button .btn {
  width: 100%;
  height: 38px;
  line-height: 18px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  background: 0 0;
  cursor: pointer
}

.web_login .login_button:hover .btn {
  background-position: -116px -90px
}

.web_login .login_button:hover {
  text-decoration: none
}

.web_login .low_login {
  margin-top: 6px
}

.web_login .low_login .checked,
.web_login .low_login .uncheck {
  float: left;
  height: 16px;
  width: 16px
}

.web_login .low_login .low_login_wording {
  height: 16px;
  line-height: 16px;
  line-height: 16px \9;
  cursor: pointer;
  margin-left: 6px
}

.bottom {
  height: 16px;
  width: 100%;
  position: absolute;
  bottom: 32px;
  text-align: center;
  font-size: 12px;
  color: #000;
  line-height: 16px
}

.bottom .bottom_menu {
  display: flex;
  align-items: center;
  justify-content: space-between
}

.bottom .link {
  color: #000;
  vertical-align: middle
}

.bottom .dotted {
  display: inline-block;
  height: 12px;
  margin: 0 22px;
  border-left: 1px solid #F5F5F5;
  vertical-align: middle;
  color: transparent
}

.bottom .vip_link:hover {
  color: red
}

.bottom .low_login {
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  width: fit-content;
  margin: 0 auto
}

.bottom .low_login .checked,
.bottom .low_login .uncheck {
  float: left;
  height: 16px;
  width: 16px
}

.bottom .low_login .low_login_wording {
  height: 16px;
  line-height: 16px;
  line-height: 16px \9;
  cursor: pointer;
  margin-left: 6px
}

.web_qr_login {
  position: relative;
  overflow: hidden;
  height: 100%
}

.web_qr_login .web_qr_login_show {
  top: 0;
  height: 100%
}

.noscript {
  background: #F9F5C7;
  border: 1px solid #DAD699;
  display: inline-block;
  height: 24px;
  line-height: 24px;
  padding: 5px;
  text-align: center
}

.authLogin,
.newVcodeArea {
  background: #FFF;
  z-index: 9999
}

.authLogin,
.hide {
  display: none
}

.authLogin {
  height: 325px;
  position: absolute;
  top: 0;
  width: 100%
}

.authLogin .authHeader {
  height: 50px;
  border-bottom: 1px solid #e2e2e2;
  position: relative;
  font-family: "Hiragino Sans GB", "微软雅黑"
}

.authLogin .authHeader .title {
  position: absolute;
  top: 5px;
  left: 20px;
  line-height: 30px;
  height: 30px;
  font-size: 22px
}

.authLogin .authTips {
  height: 30px
}

.authLogin .authInfo {
  text-align: center
}

.authLogin .authWording {
  text-align: center;
  color: #A0A0A0;
  line-height: 20px;
  height: 35px
}

.authLogin .face {
  display: inline-block;
  height: 120px;
  width: 120px;
  text-align: center;
  position: relative;
  cursor: pointer;
  outline: 0
}

.authLogin .face:focus {
  outline: 0
}

.authLogin .face:hover {
  border: none;
  text-decoration: none
}

.authLogin .face img {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 10px;
  left: 19px;
  border: none
}

.authLogin .face .img_out {
  width: 88px;
  height: 88px;
  position: absolute;
  top: 4px;
  left: 14px;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) 0 -182px no-repeat;
}

.authLogin .face .img_out_focus,
.authLogin .face:hover .img_out {
  width: 88px;
  height: 88px;
  position: absolute;
  top: 5px;
  left: 15px;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -91px -183px no-repeat;
}

.authLogin .face .nick {
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 100px;
  left: 0;
  height: 20px;
  line-height: 18px;
  vertical-align: middle;
  width: 100%;
  overflow: hidden;
  color: #6f7479
}

.authLogin .red {
  color: red
}

.authLogin .face .vip_logo {
  width: 26px;
  height: 12px;
  position: absolute;
  top: 12px;
  left: 21px;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -236px -92px no-repeat;
}

.authLogin .face .uin {
  display: none
}

.authLogin .face:hover .uin {
  display: block;
  background: #000;
  height: 20px;
  width: 80px;
  line-height: 20px;
  position: absolute;
  left: 20px;
  top: 72px;
  filter: Alpha(opacity=50);
  opacity: .5;
  color: #fff;
  border-radius: 0 0 4px 4px
}

.authLogin .face .face_mengban {
  background: #000;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 10px;
  left: 20px;
  filter: Alpha(opacity=30);
  opacity: .3
}

.authLogin .cancleAuthOuter {
  margin-top: 10px;
  text-align: center
}

.authLogin .cancleAuth {
  display: inline-block;
  height: 14px;
  border: 1px solid #d3d3d3;
  padding: 3px;
  cursor: pointer;
  color: #888;
  text-decoration: none
}

.authLogin .bottom {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 25px
}

.authLogin .low_login {
  position: absolute;
  bottom: 0;
  left: 10px
}

.authLogin .low_login .checked,
.authLogin .low_login .uncheck {
  float: left;
  height: 16px;
  width: 16px
}

.authLogin .low_login .low_login_wording {
  height: 16px;
  line-height: 16px;
  line-height: 16px \9;
  cursor: pointer;
  margin-left: 6px
}

.authLogin .feedback_authLogin {
  position: absolute;
  bottom: 0;
  right: 10px
}

.qlogin {
  height: 50%;
  top: 50%;
  position: absolute;
  margin: -166px auto 0;
  display: none;
  width: 100%
}

.qlogin .nextPage,
.qlogin .prePage {
  top: 82px;
  text-align: center;
  position: absolute;
  display: none
}

.qlogin .qlogin_tips {
  color: #000;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  position: relative;
  margin-bottom: 16px;
  zoom: 1
}

.qlogin .qlogin_select {
  height: 160px;
  position: relative
}

.qlogin .qlogin_show {
  height: 210px;
  margin-left: 30px;
  margin-right: 30px;
  overflow: hidden;
  position: relative
}

.qlogin .qlogin_list {
  text-align: center;
  position: relative
}

.qlogin .prePage {
  width: 12px;
  height: 120px;
  left: 15px
}

.qlogin .nextPage {
  width: 12px;
  height: 120px;
  right: 15px
}

.qlogin .nextRow,
.qlogin .preRow {
  height: 21px;
  display: inline-block
}

.qlogin .preRow {
  width: 12px;
  margin-top: 43px;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/go_left.png") no-repeat;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/go_left_ie.png") no-repeat \9;
  background-size: contain;
  cursor: pointer
}

.qlogin .nextRow {
  width: 12px;
  margin-top: 43px;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/go_right.png") no-repeat;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/go_right_ie.png") no-repeat \9;
  background-size: contain;
  cursor: pointer
}

.qlogin .face {
  display: inline-block;
  height: 120px;
  width: 105px;
  text-align: center;
  position: relative;
  cursor: pointer;
  outline: 0
}

.qlogin .face:focus {
  outline: 0
}

.qlogin .face:hover {
  border: none;
  text-decoration: none
}

.qlogin .face img {
  width: 85px;
  height: 85px;
  position: absolute;
  top: 10px;
  left: 10px;
  border: none
}

.qlogin .face .img_out,
.qlogin .face .img_out_focus,
.qlogin .face:hover .img_out {
  width: 85px;
  height: 85px;
  position: absolute;
  left: 9px;
  top: 9px
}

.qlogin .face .img_out,
.qlogin .face .img_out_focus {
  background: 0 0;
  border: 1px solid #F5F5F5;
  border-radius: 2px
}

.qlogin .face .nick,
.qlogin_list .return {
  display: inline-block;
  text-align: center;
  left: 0;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  height: 16px;
  position: absolute;
  vertical-align: middle;
  overflow: hidden
}

.qlogin .face .nick {
  top: 101px;
  color: #000
}

.qlogin_list .return {
  top: 120px;
}

.bottom .red {
  color: red
}

.qlogin .face .red {
  color: #000
}

.qlogin .face .vip_logo {
  width: 28.67px;
  height: 16px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/vip.png") no-repeat;
  background-size: contain;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/vip_ie.png") no-repeat \9
}

.qlogin .face .onekey_logo {
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 25px;
  right: 7px;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/phone.png") no-repeat;
  background-size: contain;
  background: url("https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/40/images/phone_ie.png") no-repeat \9
}

.qlogin .face .uin,
.qlogin .face .uin_menban {
  display: none
}

.qlogin .face:hover .uin,
.qlogin .face:hover .uin_menban {
  display: block;
  height: 20px;
  line-height: 20px;
  top: 76px;
  position: absolute;
  width: 85px;
  left: 10px
}

.qlogin .face:hover .uin_menban {
  background: #000;
  filter: Alpha(opacity=50);
  opacity: .5;
  border-radius: 0 0 2px 2px
}

.qlogin .face:hover .uin {
  color: #fff
}

.qlogin .face .face_mengban {
  background: #000;
  width: 85px;
  height: 85px;
  position: absolute;
  top: 10px;
  left: 9px;
  filter: Alpha(opacity=30);
  opacity: .3
}

.qlogin .tips {
  height: 60px;
  margin-top: 20px
}

.qlogin .tips_logo {
  display: none
}

.qlogin .err_m {
  display: inline-block;
  height: 18px;
  vertical-align: middle;
  line-height: 18px;
  color: #a0a0a0
}

.qlogin .loading_tips,
.qlogin .wording_tips {
  height: 25px;
  text-align: center
}

.qlogin .low_login {
  position: absolute;
  top: 213px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content
}

.qlogin .low_login .checked,
.qlogin .low_login .uncheck {
  float: left;
  height: 16px;
  width: 16px
}

.qlogin .low_login .low_login_wording {
  float: left;
  height: 16px;
  line-height: 16px;
  line-height: 16px \9;
  margin-left: 6px;
  color: #000;
  cursor: pointer
}

.qlogin .qr_0 {
  display: inline-block;
  height: 100%;
  min-height: 120px;
  width: 105px;
  text-align: center;
  position: relative
}

.qlogin .qr_0 a {
  outline: 0
}

.qlogin .qr_0 .qr_safe_login,
.qlogin .qr_0 .qr_short_tips {
  display: none
}

.qlogin .qr_0 .qr_info_link {
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) 0 -541px no-repeat;
  color: grey;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  width: 152px
}

.qlogin .qr_0 .qr_info_link:hover {
  background-position: 0 -573px;
  text-decoration: none
}

.qlogin .qr_0 .qr_info_link_en {
  text-decoration: none;
  display: inline-block;
  width: 152px;
  height: 38px;
  line-height: 18px;
  color: grey;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) 0 -606px no-repeat;
}

.qlogin .qr_0 .qr_info_link_en:hover {
  background-position: 0 -647px;
  text-decoration: none
}

.qlogin .qr_0 .qr_safe_tips {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-left: 5px
}

.qlogin .qr_0 .qrImg {
  position: absolute;
  height: 85px;
  width: 85px;
  top: 9px;
  left: 9px;
  border: 1px solid #F5F5F5;
  z-index: 1000
}

.qlogin .qr_0 .qr_app_name {
  display: inline-block;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 4px;
  vertical-align: middle;
  width: 100%;
  overflow: hidden
}

.qlogin .qr_0 .qr_mengban,
.qlogin .qr_0 .qrlogin_img_out {
  background: rgba(0, 0, 0, .4);
  #background: none;
  -ms-filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#66000000', EndColorStr='#66000000');
  filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#66000000', EndColorStr='#66000000');
  zoom: 1;
  height: 85px;
  left: 10px;
  opacity: .5;
  position: absolute;
  top: 10px;
  width: 85px;
  z-index: 1000
}

.qlogin .qr_0 .qrlogin_img_out,
:root .qlogin .qr_0 .qr_mengban {
  filter: none \9
}

.qlogin .qr_0 .qrlogin_img_out {
  background: 0 0;
  -ms-filter: none;
  filter: none
}

.qlogin .qr_0 .qr_invalid_tips {
  color: #FFF;
  cursor: pointer;
  left: 10px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 32px;
  width: 85px;
  z-index: 1000
}

.qlogin .qr_1 {
  display: inline-block;
  height: 120px;
  width: 105px;
  text-align: center;
  position: relative
}

.qlogin .qr_1 .qr_info_link,
.qlogin .qr_1 .qr_info_link_en {
  display: none
}

.qlogin .qr_1 .qrImg {
  height: 85px;
  position: absolute;
  top: 9px;
  left: 9px;
  width: 85px;
  border-radius: 2px;
  border: 1px solid #F5F5F5
}

.qlogin .qr_1 .qr_app_name {
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 100px;
  left: 0;
  height: 20px;
  line-height: 18px;
  vertical-align: middle;
  width: 108px;
  overflow: hidden
}

.qlogin .qr_1 .qr_app_name a {
  cursor: pointer;
  outline: 0
}

.qlogin .qr_short_tips {
  color: #3481CF
}

.qlogin .qr_1 .qr_tips {
  position: absolute;
  left: 0;
  width: 100px;
  height: 150px;
  display: none
}

.qlogin .qr_invalid {
  display: none
}

.qlogin .qr_1 .qr_mengban,
.qlogin .qr_1 .qrlogin_img_out {
  background: rgba(0, 0, 0, .4);
  #background: none;
  -ms-filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#66000000', EndColorStr='#66000000');
  filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#66000000', EndColorStr='#66000000');
  zoom: 1;
  height: 85px;
  left: 10px;
  opacity: .4;
  position: absolute;
  top: 10px;
  width: 85px;
  z-index: 1000
}

.qlogin .qr_1 .qrlogin_img_out,
:root .qlogin .qr_1 .qr_mengban {
  filter: none \9
}

.qlogin .qr_1 .qrlogin_img_out {
  background: 0 0;
  -ms-filter: none;
  filter: none
}

.qlogin .qr_1 .qr_invalid_tips {
  color: #FFF;
  cursor: pointer;
  left: 10px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 32px;
  width: 85px;
  z-index: 1000
}

.onekey_step2,
.qrlogin_step2 {
  width: 100%;
  left: 0;
  z-index: 1000;
  top: 0;
  display: none
}

.qlogin .qr_1 .qr_safe_tips {
  display: none
}

.qrlogin_step2 {
  position: absolute;
  height: 100%;
  background: #fff
}

.qrlogin_step2 .step2_outer {
  height: 110px;
  margin: 50px 0 0 33px;
  padding: 80px 0 0 115px;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) 0 -348px no-repeat #fff;
}

.qrlogin_step2 .qr_h3 {
  text-align: left;
  margin: 0;
  padding-bottom: 20px;
  font-size: 14px;
  font-weight: 700
}

.qrlogin_step2 .goBack {
  color: #b4b4b4
}

.qrlogin_step2 .goBack a {
  color: #3481cf
}

.onekey_step2 {
  background: #fff;
  height: 100%;
  text-align: center;
  position: absolute
}

.onekey_step2 .outer,
.qr_tips {
  left: 50%;
  top: 50%;
  position: absolute
}

.onekey_step2 .outer {
  margin-top: -120px;
  width: 330px;
  margin-left: -165px
}

.onekey_step2 .container {
  height: 198px;
  padding-left: 115px;
  background: url(//imgcache.qq.com/ptlogin/v4/style/40/images/onekey_tips.png) no-repeat #fff;
  text-align: left
}

.bottom.center,
.docsqq .bottom,
.guanjia,
.title {
  text-align: center
}

.onekey_step2 .container .prompt {
  font-size: 16px;
  margin-bottom: 12px
}

.onekey_step2 .container .operate {
  font-size: 12px;
  margin-bottom: 10px
}

.onekey_step2 .container .operate a {
  margin-right: 20px
}

#onekey_tips {
  color: #FF5765
}

.qr_tips {
  display: none;
  width: 92px;
  height: 172px;
  z-index: 1999;
  margin-top: -64px
}

.qr_tips .qr_tips_menban {
  opacity: .5;
  filter: alpha(opacity=50);
  background: #fff;
  width: 100%;
  height: 100%
}

.qr_tips .qr_tips_pic {
  width: 92px;
  height: 172px;
  position: absolute;
  top: 0
}

.qr_tips .qr_tips_pic_chs,
.qr_tips .qr_tips_pic_cht,
.qr_tips .qr_tips_pic_en {
  background: url(https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/20/images/shouQ_v2/qr_tips.png) no-repeat;
  background-size: 100%
}

@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min--moz-device-pixel-ratio: 2) {

  .qr_tips .qr_tips_pic_chs,
  .qr_tips .qr_tips_pic_cht,
  .qr_tips .qr_tips_pic_en {
    background: url(https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.41.0/ptlogin/v4/style/20/images/shouQ_v2/qr_tips@2x.png) no-repeat;
    background-size: 100%
  }
}

.newVcodeArea {
  height: 315px;
  position: absolute;
  top: 0;
  width: 100%;
  display: none
}

#onekey_verify {
  width: 289px;
  color: #2f3436;
  margin: 12px auto 0;
  letter-spacing: 1px;
  display: none
}

.ov-tips {
  letter-spacing: 1px;
  height: 35px;
  display: none
}

.ov-tips em {
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0
}

.ov-scene {
  width: 100%;
  height: 137px;
  margin-top: 18px
}

.ov-1 .aq-app,
.ov-2 .aq-wx {
  display: block
}

.invalid .aq-app,
.invalid .aq-wx {
  display: none
}

.invalid .timeout {
  display: block;
  color: red
}

.invalid .ov-scene {
  background-position: 39px -150px
}

.link_tips,
.timeout a {
  color: #2E77E5
}

.title {
  font-size: 20px;
  line-height: 28px;
  color: #000;
  margin: 16px 0 6px
}

.guanjia {
  position: relative
}

.web_login .guanjia {
  top: 10px
}

.qlogin .guanjia {
  top: -61px
}

.bottom.center {
  right: 0
}

.guanjia_checkbox,
.guanjia_logo {
  vertical-align: bottom;
  margin: 0;
  padding: 0
}

.guanjia_tips {
  font-size: 12px;
  color: #666;
  padding-left: 3px
}

.docsqq {
  border: none;
  height: 100% !important;
  font-family: PingFang SC, Microsoft YaHei, -apple-system-font, \\9ED1\4F53, Helvetica Neue, Helvetica, STHeiTi, sans-serif
}

.docsqq .title {
  font-size: 28px;
  line-height: 28px;
  color: #000
}

.docsqq .bottom {
  right: 0
}

.docsqq .docs-dotted {
  display: none
}

.ptui-dialog-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
}

.ptui-dialog-wrap__inner {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10002;
  width: 360px;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  border-radius: 6px;
  overflow: hidden;
}

.ptui-dialog-wrap__hd {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
}

.ptui-dialog-wrap__btn-close {
  display: block;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  border: 0 none;
}

.ptui-dialog-wrap__icon {
  display: block;
  width: 16px;
  height: 16px;
}

.ptui-dialog-wrap__text-title {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: #000000;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ptui-dialog-wrap__text-title + .ptui-dialog-wrap__text-content {
  margin-top: 8px;
}

.ptui-dialog-wrap__text-link {
  color: #2E77E5;
}

.ptui-dialog-wrap__bd {
  padding: 20px 20px 10px 20px;
}

.ptui-dialog-wrap__text-content {
  display: inline-block;
  line-height: 1.5;
  font-size: 12px;
  color: #000000;
}

.ptui-dialog-wrap__ft {
  padding: 10px 20px 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.ptui-dialog-wrap__btn {
  margin-right: 10px;
  padding: 3px 19px;
  max-height: 28px;
  line-height: 1.5;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  box-sizing: border-box;
  outline: 0 transparent;
  border-radius: 4px;
  cursor: pointer;
}

.ptui-dialog-wrap__btn:nth-last-of-type(1) {
  margin-right: 0;
}

.ptui-dialog-wrap__btn-confirm {
  color: #FFF;
  background-color: #0099FF;
  border: 1px solid transparent;
}

.ptui-dialog-wrap__btn-cancel {
  border: 1px solid #CCCCCC;
  color: #000000;
  background-color: transparent;
}

.ptui-dialog-wrap__mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
}

.login,
.login_no_qlogin {
  background-color: #ffffff;
}

.header .logo,
.authHeader .logo {
  background: url("https://ui.ptlogin2.qq.com/style/11/images/icon_24_c_3.png") no-repeat;
  _background: url("https://ui.ptlogin2.qq.com/style/11/images/icon_3.png") no-repeat;
  background-position: 0 -280px;
}

/* 搜狗客户端 */
</style>