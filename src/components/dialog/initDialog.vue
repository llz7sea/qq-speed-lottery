<template>
  <div class="initBox" v-show="visible">
    <el-form ref="ruleForm" :model="form" label-width="150px" :rules="rules">
      <el-form-item label="预设qq帐号：" prop="qq">
        <el-input placeholder="输入预设qq帐号..." v-model="form.qq"></el-input>
      </el-form-item>
      <el-form-item label="预设qq密码：" prop="pwd">
        <el-input placeholder="输入预设qq密码..." v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="预设角色大区：" prop="region">
        <el-select placeholder="选择预设角色大区..." v-model="form.region">
          <el-option v-for="item in regions" :value="item" :key="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预设角色名：" prop="name">
        <el-input placeholder="输入预设角色名..." v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="预设q币余额：" prop="money">
        <el-input placeholder="输入预设q币余额..." v-model="form.money"></el-input>
      </el-form-item>
      <el-form-item label="预设勋章宝盒数量：" prop="chances">
        <el-input placeholder="输入预设勋章宝盒数量..." v-model="form.chances"></el-input>
      </el-form-item>
      <el-form-item label="卡密：" prop="token">
        <el-input :disabled="Boolean(registered)" placeholder="输入卡密.." v-model="form.token"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" style="width: 100%">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {callShade} from "@/utils/shadeControler";
import {defineEmits, defineProps, reactive, ref} from "vue";
import {useStore} from "vuex";
import {regions} from "@/enums/region"
import {dishPrizesSortByValue} from "@/enums/prizes";

defineProps({visible: {type: Boolean, default: false}})
const registered = localStorage.getItem("registered")
const emit = defineEmits(['close'])

if (registered != 1) {
  callShade("b")
}

const checkToken = (rule, value, callback) => {
  let token = form.token
  let tokens = Array.from(store.state.tokens)
  let tokenExist = tokens.some(item => item == token)
  if (!tokenExist) {
    callback(new Error('卡密无效'))
  } else {
    callback()
  }
}

const store = useStore()

const rules = {
  qq: [{required: true, message: "输入预设qq帐号", trigger: ['blur', 'change']},
    {
      pattern: /^[1-9][0-9]{4,10}$/,
      message: "输入正确的qq号",
      trigger: ['blur', 'change']
    }],
  pwd: [{required: true, message: "输入预设qq密码", trigger: ['blur', 'change']},
    {
      pattern: /^[\w\S]{6,16}$/,
      message: "输入正确的qq密码",
      trigger: ['blur', 'change']
    }],
  region: [{required: true, message: "输入预设qq密码", trigger: ['blur', 'change']}],
  name: [{required: true, message: "输入预设角色名", trigger: ['blur', 'change']}],
  token: [{required: true, message: "输入卡密", trigger: ['blur', 'change']},
    {
      validator: checkToken,
      trigger: ['blur']
    }],
  money: [{required: true, message: "输入预设q币余额", trigger: ['blur', 'change']},
    {
      pattern: /^[0-9]{0,5}$/,
      message: "输入1-6位的整数",
      trigger: ['blur', 'change']
    }],
  chances: [{required: true, message: "输入预设勋章宝盒数量", trigger: ['blur', 'change']},
    {
      pattern: /^[0-9]{0,5}$/,
      message: "输入1-6位的整数",
      trigger: ['blur', 'change']
    }]
}

const form = reactive({
  qq: localStorage.getItem("qq"),
  pwd: localStorage.getItem("pwd"),
  region: localStorage.getItem("region"),
  name: localStorage.getItem("name"),
  token: localStorage.getItem("token"),
  money: localStorage.getItem("money"),
  chances: localStorage.getItem("chances"),
  version: store.state.currenVersion,
  dishPrizes: JSON.stringify(dishPrizesSortByValue),
  highLight: "[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]",
  alreadyWinPrize: "[]",
  repository: "[]",
  rollDishChances: 0,
  blessValue: 0,
  blessTotal: 0
})

const ruleForm = ref(null)

const submit = () => {
  ruleForm.value.validate(valid => {
    if (valid) {
      if (registered) {
        store.commit('logout')
        store.commit('reset', form)
      }
      if (!registered) {
        store.commit('regist', form)
      }
      emit("close")
    } else {
      return false
    }
  })

}
</script>

<style scoped>
.initBox {
  flex-direction: column;
  padding: 10px;
  width: 310px;
  position: fixed;
  top: 42px;
  right: 0%;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  z-index: 1801;
  user-select: none;
}
</style>