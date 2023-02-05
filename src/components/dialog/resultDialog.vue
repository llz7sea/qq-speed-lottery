<template>
  <div
      v-show="visible"
      class="dialog pr"
      id="pop5"
      style="display: block; visibility: visible; position: fixed; z-index: 9999; left: 50%; top: 50%; margin-top: -152.5px; margin-left: -237px;"
      data-milodialog="1"
      role="dialog"
      tabindex="-1"
  >
    <div class="dia-con5 pr" style="padding-bottom: 30px;">
      <p class="pop5_txt1">恭喜！您打开了勋章宝盒。获得了如下奖励：</p>
      <p class="pop5_txt2">{{ $store.state.lotteryResult }}</p>
      <p class="pop5_txt3" v-show="win">
        本次打开未点亮新的赛车勋章，目前已点亮{{ resultData.current }}个，<br>再点亮{{ left() }}个可获得1次转动车王轮盘的机会！</p>
      <a class="sp db btn_yes" @click="submit">确认</a>
    </div>
    <a class="dia-close pa sp" @click="close" title="关闭"></a>
  </div>
</template>

<script setup>
import {defineEmits, defineProps, ref} from "vue";
import {winCountNum} from "@/enums/countNum"
import {useStore} from "vuex";

const props = defineProps({
  visible: {type: Boolean, default: false},
  resultData: {
    type: Object
  }
})
const store = useStore()

const total = ref(winCountNum[0])
const win = ref(false)

const left = () => {
  if (total.value - props.resultData.current <= 0) {
    total.value = winCountNum.find(i => {
      return i > props.resultData.current
    })
    store.commit("addRollDishChance")
    win.value = true
  }
  return total.value - props.resultData.current
}
const emit = defineEmits(["close", "update"])

const close = () => {
  emit("close")
}
const submit = () => {
  emit("close")
}
</script>

<style scoped>

</style>