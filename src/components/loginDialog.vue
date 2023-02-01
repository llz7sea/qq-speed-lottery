<template>
  <Teleport
      to="body"
  >
    <div v-if="loginShow" id="_overlay_">
      <div class="loginDiv">
        <iframe id="loginIframe"
                name="loginIframe"
                scrolling="no"
                width="100%"
                height="100%"
                frameborder="0"
                src="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?proxy_url=https://game.qq.com/comm-htdocs/milo/proxy.html&appid=21000118&target=top&s_url=https%3A%2F%2Fspeed.qq.com%2Fcp%2Fa20221223jpk%2Findex.html%3Fe_code%3D507753&style=20&daid=8"
        >
        </iframe>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import {defineProps} from "vue";
    defineProps({
      loginShow: {
        type:Boolean,
        default: false
      }
    })
</script>

<style scoped>
#_overlay_ {
  background-color: rgb(230, 245, 255);
  border-top: 1px solid rgb(230, 245, 255);
  position: absolute;
  height: 4005px;
  z-index: 100001;
  width: 100%;
  left: 0px;
  top: 0px;
  opacity: 0.7;
}
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
</style>