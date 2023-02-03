<template>
  <Teleport v-if="paymentShow" to="body">
    <div class="midas_minipay_dialog_wrap_no_border" style="position:fixed;left: 50%; top: 50%; margin-top: -152.5px; margin-left: -330px; width: 690px; z-index: 5000;">
      <div class="midas_minipay_dialog_header">
        <div class="header-icon-first" style="display: none;"><i
            class="midas_minipay_dialog_icon midas_minipay_dialog_icon_i midas_minipay_dialog_icon_back"></i>&nbsp;
        </div>
        <div class="cp-header-title">订单支付</div>
        <div
            title="关闭"
            class="header-icon-last"
            @click="cancle"
        ><i
            class="midas_minipay_dialog_icon midas_minipay_dialog_icon_i midas_minipay_dialog_icon_clear"></i>&nbsp;
        </div>
      </div>
      <div class="midas_minipay_dialog_content" style="height: auto">
        <div class="cp-container" id="body" inited="1" style="display: block;">
          <div id="wrapper" avalonctrl="root">
            <div id="order" class="panel show" style="display: block;">
              <div avalonctrl="order">
                <div>
                  <div>
                    <div id="order_info">
                      <!--ms-if-->
                      <div class="prop" style="padding-top: 25px;padding-bottom: 25px">
                        <div class="account">

                          <div class="account-area">
                            <!-- 账号 & 游戏大厅 -->
                            <!--  <p class="account-title">购入账号：565220833(QQ) | 游戏大区1</p>-->

                            <!-- 账号 & 赠送功能 -->
                            <span class="account-title"></span>
                            <div class="account-id active account-default-id" style="margin-left: 0">
                              <div>
                                <span class="loged-id"></span>
                                <!--ms-if-->
                              </div>

                              <!--ms-if-->

                            </div>
                          </div>


                        </div>

                        <div class="prop-detail">
                          <div class="prop-img">
                            <img height="90px" src="//ossweb-img.qq.com/images/daoju/mall/djlogo90_90.png">
                          </div>
                          <div class="prop-info">
                            <p class="prop-title">支付订单</p>
                            <!--ms-if-->
                            <p class="unit" style="display: none;">
                              单价：<span>0</span>元
                            </p>
                            <div></div>
                          </div>
                          <div class="prop-price">
                            <em>{{ payMoney }}</em>元
                          </div>
                        </div>
                      </div>
                      <div style="display: none;"></div>
                    </div>
                    <div>
                      <div class="pay-area" style="min-height:100px;" avalonctrl="channel">
                        <div class="pay-area-header" id="channelSelectWrap"
                             style="position: relative;*zoom:1;min-height: 60px;">
                          <h3 class="pay-title">
                            <span>支付方式：</span>
                          </h3>
                          <div class="channels">
                            <div class="channel" :class="mode==0 && 'checked'" @click="mode=0">
                              <span>Q币支付</span>
                              <!--ms-if-->
                              <i class="icon-corner-checked"></i>
                            </div>
                            <div class="channel" :class="mode==1 && 'checked'" @click="mode=1">
                              <span>QQ钱包</span>
                              <!--ms-if-->
                              <i class="icon-corner-checked"></i>
                            </div>
                            <div class="channel" :class="mode==2 && 'checked'" @click="mode=2">
                              <span>微信支付</span>
                              <i class="icon-corner-checked"></i>
                            </div>
                            <div class="more">
                              <div class="channel" data-track="channel">
                                <span>更多方式</span>
                                <!--ms-if-->
                                <i class="icon-more-arrow"></i>
                                <i class="icon-corner-checked"></i>
                              </div>

                              <!--ms-if-->
                              <div
                                  style="position: absolute; top: 0px; left: -70px; width: 100px; height: 50px; z-index: 3; background: white; opacity: 0; display: none;">

                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pay-area-body" style="position: relative; height: auto;padding-bottom: 40px">
                          <div style="width: 100%;" v-show="mode == 0">
                            <div class="channel-detail" style="display: none;"></div>
                            <div class="channel-detail">
                              <div avalonctrl="qb-controller">
                                <!--<div class="left-money" id="qb_left_money_container">-->
                                <!--<a class="query-left-money" href="javascript:;" ms-click="queryBalance">查询余额</a>-->
                                <!--</div>-->

                                <!--ms-if-->
                                <!--ms-if-->
                                <!--ms-if-->

                                <div class="left-money-warn" v-show="payMoney > $store.state.role.money">
                                  <p>
                                    <i class="icon-error"></i>Q币余额不足
                                    <span>余额：<em class="left-money-em">{{ $store.state.role.money }}</em>Q币</span>
                                  </p>
                                  <p class="tips sub-tips">还需<em>{{ payMoney - $store.state.role.money }}</em>Q币，请先去充值，或选择其他支付方式
                                  </p>
                                </div>

                                <div class="left-money" style="position: static"
                                     v-show="payMoney <= $store.state.role.money">
                                  <p class="tips sub-tips query-after">账户余额： <em>{{ $store.state.role.money }}</em> Q币<!--ms-if--></p>
                                </div>
                                <!--ms-if-->

                                <!-- 无法在跨域iframe里完成Q币支付的场景，引导跳出 -->
                                <!--ms-if-->

                                <div>
                                  <a v-show="payMoney > $store.state.role.money"
                                     hidefocus="true"
                                     class="btn btn-default"
                                  >去充值</a>
                                  <a v-show="payMoney <= $store.state.role.money"
                                     class="btn btn-default"
                                     hidefocus="true"
                                     @click="confirmPay"
                                  >
                                      <span>
                                        <!--ms-if-->
                                        <span>确认支付 <em class="total-price-in-button">{{payMoney}}</em>Q币</span>
                                      </span>
                                  </a>
                                  <div class="oper-to-pay" data-track="payBtn">
                                    <!--ms-if-->
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div></div>
                          </div>
                          <div style="width: 100%;" v-show="mode == 1">
                            <div class="channel-detail" style="display: none;"></div>
                            <div class="channel-detail">
                              <div avalonctrl="qqwallet-controller">
                                <!--ms-if-->
                                <div class="qr-code-txt">
                                  <i class="icon-qq"></i>手Q扫码，支付<em>{{ payMoney }}</em>元<!--ms-if-->
                                </div>
                                <div class="qr-code-area">
                                  <div class="qr-code-container qq">
                                    <div id="qr-code-qqwallet" style="display: none"></div>
                                    <img
                                        src="//pay.qq.com/cgi-bin/account/get_qr_image.cgi?size=120&amp;url=https%3A%2F%2Fapi.unipay.qq.com%2Fv1%2Fr%2F1450013294%2Fqrcode%3Fa%3Dl%26t%3D63dca47b-e533-a922-780e-dcb55defa2c7&amp;t=1675404411130&amp;orig=1">
                                    <!--ms-if-->
                                    <!--ms-if-->
                                    <!--ms-if-->
                                  </div>
                                  <div class="qr-code-container qq" style="display: none;"></div>
                                </div>
                                <div class="qr-code-area" style="display: none;">
                                  <i class="icon-phone"></i>
                                  <p>请在手机上进行支付</p>
                                  <a href="javascript:void(0);">返回二维码</a>
                                </div>
                                <div class="qr-code-area" style="display: none;">
                                  <i class="icon-phone"></i>
                                  <p></p>
                                  <a href="javascript:void(0);">刷新二维码</a>
                                </div>
                                <!--ms-if-->
                              </div>
                            </div>
                            <div></div>
                          </div>
                          <div style="width: 100%;" v-show="mode == 2">
                            <div id="channelListWrap" class="channel-detail" style="display: none;"></div>
                            <div class="channel-detail">
                              <div avalonctrl="wechat-controller">
                                <!--ms-if-->
                                <div class="qr-code-txt">
                                  <i class="icon-wx"></i>微信扫码，支付<em>{{ payMoney }}</em>元
                                </div>
                                <div class="qr-code-area">
                                  <div class="qr-code-container wx">
                                    <div id="qr-code-wx" style="display: none"></div>
                                    <img
                                        src="//pay.qq.com/cgi-bin/account/get_qr_image.cgi?size=120&amp;url=weixin%3A%2F%2Fwxpay%2Fbizpayurl%3Fpr%3Dpk7eK8G39&amp;t=1675405467586&amp;orig=1">
                                    <!--ms-if-->
                                    <!--ms-if-->
                                    <!--ms-if-->
                                  </div>
                                  <div class="qr-code-container wx" style="display: none;"></div>
                                </div>
                                <div class="qr-code-area" style="display: none;">
                                  <i class="icon-phone"></i>
                                  <p>请在手机上进行支付</p>
                                  <a href="javascript:void(0);">返回二维码</a>
                                </div>
                                <div class="qr-code-area" style="display: none;">
                                  <i class="icon-phone"></i>
                                  <p></p>
                                  <a href="javascript:void(0);">刷新二维码</a>
                                </div>
                              </div>
                            </div>
                            <div id="channelDetailExtraArea"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="subChannel" class="panel">
              <div avalonctrl="subChannel">
                <div>
                  <div style="display: none;"></div>
                </div>
              </div>
            </div>
            <div id="result" class="panel">
              <div avalonctrl="result">
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div id="animation_mask" class="animation_mask"></div>
          <div id="animation_masktop" class="animation_masktop"></div>
          <div id="mkey"
               mkey="4eb682fcfb6368a20c7ffdcd32e3014bac429ab777d0ef23b6ed16099d638adabad6978dd6f59fed4573f8b7d11882a401e176c62204a0fb35db74d96f974953b143a36df60ebc2b57eb8775fbbe9f329844c442f54bd1187eb2d176aa744f2eea039719e463cd195a7d24c5662bc4c338e74b79fd37e44957a7d765517a1b8c"></div>
          <input type="hidden" id="xMidasToken"
                 value="580993133BB6678F9206D3544A351650F1F0DCBA029A4CABA766000A9BB15A6E44B9131124B2BE5EF829B4B6CB09A8F1">
          <input type="hidden" id="xMidasVersion" value="web_1.0.4">
          <input type="hidden" id="xMidasTicket"
                 value="7113547f15e2059c99ec4093328b60909337d38cb78f406ea8e8e1b321bbd4e0d5e5b01f37166fbfb933f53e341970f80544d9b7af9bfbc9ef9e24271500693b0b201417862668e652ebf27568a666f18e8570a0bf7c9ef4c915198646b1d417">
          <div class="cp-body mdsweb-loading-wrapper" id="cp_loading_" style="display: none;">
            <div class="mdsweb-loading">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <input type="hidden" id="antiAutoScriptToken"
                 value="46183448097B9873B41FB181FEE81545C5D0A29AB1659E952A4DCDFBBE3C4820E0182A3DBA358CAB7F94C807634AC6BA6C296562FA78713E0C3C434B6863F1D6">
          <a href="https://pay.qq.com/midas/minipay_v2/views/cpay/goods.shtml?appid=1450013294&amp;openid=717215209&amp;openkey=XSIVF44TSBdr0y6u*xXTKX*FGxuMPXhZF045H1qBQc0_&amp;session_id=uin&amp;session_type=pskey_8&amp;sandbox=0&amp;pf=website&amp;goodstokenurl=%2Fv1%2Fr%2F1450013294%2Fmobile_goods_info%3Ftoken_id%3DDBBA1E190FD7035AEBBD7E38751CA79830136%26transaction_id%3DDBBA1E190FD7035AEBBD7E38751CA79830136%26out_trade_no%3D%26new_cpay%3D1%26offer_type%3D0&amp;skin=&amp;supportCloseConfirm=1&amp;cash_param=v%3D1%26_fd_id%3Ddialog_1675404408925%26_fd_c%3D8253218125%26_fd_size%3D690%7C550%26_fd_w%3D%26_fd_ms%3DonResize%7ConSuccess%7ConClose%7ConHeaderDataReady&amp;t=1675404408925"
             style="display: none" id="1bda749e293c806a"></a>
          <div avalonctrl="couponlist">
            <div class="pop-vouchers-list" id="coupon-list-container" style="bottom: 168px; display: none;">
              <ul>
              </ul>
              <div class="mdsweb-loading-wrapper abs" style="z-index: 1000; background: none; display: none;">
                <div class="mdsweb-loading">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
              <!-- 分页 -->
              <div class="topage">
                <div class="tpage">
                  <div class="tpage-left">
                    <span class="tpage-left-btn" style="*top: -5px">
                        <img
                            src="//midas.gtimg.cn/midas/minipay_v2/images/tpage-left.528507587363213c439b0b52baf76604.png"
                            class="tpage-left-btn-img">
                    </span>
                  </div>
                  <p class="tpage-center">
                    <span class="tpage-now" id="tpage-now">1</span> / <span class="tpage-all" id="tpage-all">1</span>
                  </p>
                  <div class="tpage-right">
                    <span class="tpage-right-btn" style="*top: -5px">
                        <img
                            src="//midas.gtimg.cn/midas/minipay_v2/images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png"
                            class="tpage-left-btn-img">
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="_cp__mask__"
               class="cp_mask"
               style="top: 0px; left: 0px; opacity: 0; display: none; z-index: 9998;"
          >
          </div>
        </div>
      </div>
      <div class="midas_minipay_dialog_border" style="left: 0px; top: 0px; width: 690px;">
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import {defineProps, defineEmits, ref} from "vue";
import {cancelShade} from "@/utils/shadeControler";

const mode = ref(0)
defineProps({
  paymentShow: {
    type: Boolean,
    default: false
  },
  payMoney: {type: Number, default: 0}
})
const emit = defineEmits(['close', "update"])
const cancle = () => {
  cancelShade()
  emit('close')
}
const confirmPay = () => {
  cancelShade()
  emit('update')
}
</script>

<style scoped>
.midas_minipay_dialog_content a:link, .midas_minipay_dialog_content a:visited {
  text-underline: none;
  color: white;
}
</style>