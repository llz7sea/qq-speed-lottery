<template>
    <div class="commandBox">
      <el-form ref="ruleForm" :model="form" label-width="100px" :rules="rules">
        <el-form-item label="qq：" prop="qq">
          <el-input placeholder="请输入预设qq帐号..." v-model="form.qq"></el-input>
        </el-form-item>
        <el-form-item label="qq密码：" prop="pwd">
          <el-input placeholder="请输入预设qq密码..." v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label="大区：" prop="region">
          <el-select placeholder="请选择预设角色大区..." v-model="form.region">
            <el-option v-for="item in regions" :value="item" :key="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色名：" prop="name">
          <el-input placeholder="请输入预设角色名..." v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="q币：" prop="money">
          <el-input placeholder="请输入预设q币余额..." v-model="form.money"></el-input>
        </el-form-item>
        <el-form-item label="宝盒数量：" prop="chances">
          <el-input placeholder="请输入预设角色名..." v-model="form.chances"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit" style="width: 100%">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script setup>
import {cancelShade} from "@/utils/shadeControler";
import {reactive, ref} from "vue";
import {regions} from "@/enums/region";
import {useStore} from "vuex";

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
  money: [{required: true, message: "请输入预设q币余额", trigger: ['blur', 'change']},
    {
      pattern: /^[0-9]{0,5}$/,
      message: "请输入1-6位的整数",
      trigger: ['blur', 'change']
    }],
  chances: [{required: true, message: "请输入预设勋章宝盒数量", trigger: ['blur', 'change']},
    {
      pattern: /^[0-9]{0,5}$/,
      message: "请输入1-6位的整数",
      trigger: ['blur', 'change']
    }]
}

const form = reactive({
  qq: localStorage.getItem("qq"),
  pwd: localStorage.getItem("pwd"),
  region: localStorage.getItem("region"),
  name: localStorage.getItem("name"),
  money: localStorage.getItem("money"),
  chances: localStorage.getItem("chances")
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
.commandBox {
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 10%;
  left: 0;
  padding: 20px;
  width: 200px;
  left: 40%;
  background-color: blue;
  z-index: 1801;
}
</style>