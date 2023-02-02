<template>
  <div class="initBox">
    <el-form ref="ruleForm" :model="form" label-width="130px" :rules="rules">
      <el-form-item label="预设qq帐号：" prop="qq">
        <el-input placeholder="请输入预设qq帐号..." v-model="form.qq"></el-input>
      </el-form-item>
      <el-form-item label="预设qq密码：" prop="pwd">
        <el-input placeholder="请输入预设qq密码..." v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="预设角色大区：" prop="region">
        <el-select placeholder="请选择预设角色大区..." v-model="form.region">
          <el-option v-for="item in regions" :value="item" :key="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预设角色名：" prop="name">
        <el-input placeholder="请输入预设角色名..." v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="卡密：" prop="token">
        <el-input placeholder="请输入卡密.." v-model="form.token"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" style="width: 100%">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {callShade, cancelShade} from "@/utils/shadeControler";
import {reactive, ref} from "vue";
import {regions} from "@/enums/region";
import {useStore} from "vuex";


const registered = localStorage.getItem("registered")

if (registered != 'true') {
  callShade()
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
  qq: [{required: true, message: "请输入预设qq帐号", trigger: ['blur', 'change']},
    {
      pattern: /^[1-9][0-9]{4,10}$/,
      message: "请输入正确的qq号",
      trigger: ['blur', 'change']
    }],
  pwd: [{required: true, message: "请输入预设qq密码", trigger: ['blur', 'change']},
    {
      pattern: /^[\w\S]{6,16}$/,
      message: "请输入正确的qq密码",
      trigger: ['blur', 'change']
    }],
  region: [{required: true, message: "请输入预设qq密码", trigger: ['blur', 'change']}],
  name: [{required: true, message: "请输入预设角色名", trigger: ['blur', 'change']}],
  token: [{required: true, message: "请输入预卡密", trigger: ['blur', 'change']},
    {
      validator: checkToken,
      trigger: ['blur']
    }]
}

const form = reactive({
  qq: "",
  pwd: "",
  region: "电信",
  name: "",
  token: ""
})

const ruleForm = ref(null)

const submit = () => {
  ruleForm.value.validate(valid => {
    console.log(valid)
    if (valid) {
      store.commit('regist', form)
      cancelShade()
    } else {
      return false
    }
  })

}
</script>

<style scoped>
.initBox {
  flex-direction: column;
  padding: 20px;
  width: 320px;
  position: fixed;
  top: 30%;
  left: 40%;
  background-color: blue;
  z-index: 100002;
}
</style>