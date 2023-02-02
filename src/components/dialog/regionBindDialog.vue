<template>
  <Teleport v-if="bindShow" to="body">
    <div
        id="roleselecterspeed"
        class="floaterdialog"
        data-milodialog="1"
        role="dialog"
        tabindex="-1"
        style="width: 350px;
               display: block;
               visibility: visible;
               position: fixed;
               z-index: 100002;
               left: 50%;
               top: 50%;
               margin-top: -61.5px;
               margin-left: -175px;
              "
    >
      <div class="floater_head">
        <div class="floater_title">请选择大区</div>
        <div class="floater_close" id="floater_close" @click="cancel"><span style="font-size:20px;">×</span></div>
      </div>
      <div class="floater_content" style="overflow:hidden;">
        <div id="milo_policy_tips" @click="confirmPolicy">
          <div class="milo_policy_allow">
            <div class="milo_policy_allow_status"
                 id="milo_policy_allow_status"
                 data-checked="0"
                 v-show="policyFlag"
            ></div>
          </div>
          <span class="milo_policy_allow_text">我同意“本活动获取并存储到的游戏区服和角色相关信息，仅用于该活动的抽奖、领取、发货、签到等操作”</span>
        </div>
        <ul class="role_select">
          <li style="display:inline;" class="area_select_li">
            <select v-model="region" id="areaContentId_speed" :disabled="!policyFlag">
              <option value="">请选择大区</option>
              <option value="电信区">电信区</option>
              <option value="电信二区">电信二区</option>
              <option value="联通区">联通区</option>
            </select>
          </li>
          <li
              class="role_select_li"
              v-show="region == $store.state.role.region"
          ><span>请选择角色：</span>
            <select
                id="roleContentId_speed"
                :disabled="!policyFlag"
            >
              <option :value="$store.state.role.name">{{ $store.state.role.name }}</option>
            </select>
          </li>
          <li class="error_message_li"
              id="errorMessage_speed"
              v-show="region != $store.state.role.region && region"
          >
            在该服务器上未获取到角色信息！
          </li>
          <li style="padding-top:5px;" class="button">
            <button class="role-confirm" id="confirmButtonId_speed" @click="submit">确 定</button>
            <button class="role-cancel" id="cancelButtonId_speed" @click="cancel">取 消</button>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import {defineProps, defineEmits, ref} from "vue";
import {cancelShade} from "@/utils/shadeControler";
import {useStore} from "vuex";

const store =useStore()
const emit = defineEmits(["update"])
const policyFlag = ref(false)
const region = ref("")
defineProps({
  bindShow: {
    type: Boolean,
    default: false
  }
})
const confirmPolicy = () => {
  policyFlag.value = !policyFlag.value
}
const cancel = () => {
  cancelShade()
  emit('update', false)
}
const submit = () => {
  emit('update', false)
  store.commit('binding')
}
</script>

<style scoped>
.floaterdialog {
  background: #FFFFFF;
  border-radius: 5px;
  max-width: 95%;
  width: 350px;
}

.floaterdialog .floater_head {
  font-size: 12px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  background-color: #2196F3;
  color: white;
  border-radius: 5px 5px 0px 0px;
}

.floaterdialog .floater_head .floater_title {
  color: white;
  float: left;
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
  padding-left: 10px;
  text-align: left;
  text-indent: 0;
  width: auto
}

.floaterdialog .floater_head .floater_close {
  cursor: pointer;
  float: right;
  height: 30px;
  overflow: hidden;
  /*width: 30px;*/
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  padding: 0px 10px;
  color: #fff
}

.floaterdialog .floater_head .floater_close:hover, .floaterdialog .floater_head .floater_close:active {
  color: red;
}

.floaterdialog .floater_content {
  background: none repeat scroll 0 0 transparent;
  font-size: 10pt;
  padding: 8px;
  position: relative;
}

.floaterdialog .floater_content ul {
  width: 100%;
  margin: 0px auto;
  display: block;
  padding: 0px;
}

.floaterdialog .floater_content ul li {
  /* display: block; */
  width: 100%;
}

.floaterdialog .floater_content ul li.error_message_li {
  line-height: 25px;
}

.floaterdialog .floater_content ul li select {
  height: 30px;
  width: 100%;
  border: solid 1px #c1bdbd;
  float: none;
  margin: 5px auto
}


.floaterdialog .floater_content ul li.button {
  /*margin-top: 10px;*/
  margin-bottom: 0px;
  position: relative;
  height: 30px
}

.floaterdialog .floater_content ul li.button button {
  display: inline-block;
  height: 30px;
  padding: 0px;
  width: 45%;
  text-align: center;
  line-height: 30px;
  position: absolute;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

.floaterdialog .floater_content ul li.button button.role-confirm {
  left: 0px;
  background-color: #2196f3
}

.floaterdialog .floater_content ul li.button button.role-confirm:active, .floaterdialog .floater_content ul li.button button.role-confirm:hover {
  left: 0px;
  background-color: #027bdc
}

.floaterdialog .floater_content ul li.button button.role-cancel {
  right: 0px;
  background-color: #a7a6a4
}

.floaterdialog .floater_content ul li.button button.role-cancel:active, .floaterdialog .floater_content ul li.button button.role-cancel:hover {
  background-color: #908f8d;
}

/*鎸夐挳*/

.floaterdialog input[type=button] {
  display: inline-block;
  height: 30px;
  padding: 0px;
  width: 45%;
  text-align: center;
  line-height: 30px;
  /* position: absolute; */
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  background-color: #2196f3;
}

.floaterdialog input[type=button]:hover, .floaterdialog input[type=button]:active {
  background-color: #027bdc;
}

#milo_policy_tips {
  width: 100%;
}

.milo_policy_allow {
  border: 1px solid #c1bdbd;
  color: white;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  padding: 2px;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  top: 2px;
  box-sizing: content-box;
}

.milo_policy_allow_status {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: black;
}

.milo_policy_allow_text {
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}

.role_select {
  width: 240px;
}

.role_select li select {
  width: 220px;
}

.role_select {
  font: normal 12px Tahoma, "宋体";
  color: #222222;
  text-align: left;
  list-style: none;
  padding: 5px 0 0 5px;
  margin: 0px;
  margin-top: -5px;
}

.role_select li {
  *height: 50px;
  margin: 0px;
}

.role_select .error_message_li {
  height: 25px;
  color: #FF0000;
  clear: both;
}

.role_select li span {
  display: block;
  font-weight: normal;
  height: 22px;
  line-height: 22px;
}

.role_select li select, .role_select li input {
  *border: 1px solid #616162;
  float: left;
  margin-right: 3px;
}

.role_select li select {
  height: 22px;
}

.role_select li button {
  width: 75px;
  height: 25px;
}

.role_select .role_select_li {
  clear: both;
}

.role_select li.button {
  *height: 30px;
  clear: both;
}
</style>