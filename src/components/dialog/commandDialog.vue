<template>
  <div class="commandBox" v-if="visible">
    <el-form ref="ruleForm" :model="form" :rules="rules">
      <el-form-item prop="prize">
        <el-select
            multiple
            collapse-tags
            collapse-tags-tooltip
            style="display: inline-block;width: 140px"
            placeholder="选择必出奖品..."
            v-model="form.prize"
            size="small"
            clearable
        >
          <el-option
              v-for="item in prizes"
              :label="item.name"
              :value="item.code"
              :key="item.code">
          </el-option>
        </el-select>
        <el-button style="display: inline-block" type="primary" :icon="Check" circle size="small"
                   @click="submit"></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {cancelShade} from "@/utils/shadeControler";
import {defineEmits, defineProps, reactive, ref} from "vue";
import bus from "vue3-eventbus"
import {Check} from '@element-plus/icons-vue'
import {prizes} from "@/enums/prizes";


defineProps({visible: {type: Boolean, default: false}})
const emit = defineEmits(["close"])

const rules = {
  prize: [{required: true, message: "请选择必出奖品", trigger: ['blur', 'change']}]
}

window['chosenPrizes'] = []
const form = reactive({prize: window.chosenPrizes})
const ruleForm = ref(null)

bus.on("updatePrize", () => {
  form.prize = []
})

const submit = () => {
  ruleForm.value.validate(valid => {
    if (valid) {
      emit('close')
      window.chosenPrizes = Array.from(form.prize)
      cancelShade()
    } else {
      return false
    }
  })

}
</script>

<style scoped>
.commandBox {
  position: fixed;
  top: 2px;
  right: 0;
  z-index: 100000;
}

.el-select-dropdown__item {
  width: 140px;
  margin: 0;
  padding: 0;
  height: auto;
  line-height: 1;
}

</style>