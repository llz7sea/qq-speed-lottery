<template>
  <Teleport to="body" v-if="insufficientShow">
    <div class="dialog pr" id="pop4"
         style="display: block; visibility: visible; position: fixed; z-index: 9999; left: 50%; top: 50%; margin-top: -152.5px; margin-left: -237px;"
         data-milodialog="1" role="dialog" tabindex="-1">
      <div class="dia-con4 pr">
        <p class="pop3_txt1">很抱歉！您当前剩余的勋章宝盒数量不足本次点亮赛车勋章消耗，请先购买勋章宝盒！</p>
        <a @click="submit" class="sp db btn_yes">确认</a>
      </div>
      <a class="dia-close pa sp" @click="close" title="关闭"></a>
    </div>
  </Teleport>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

defineProps({insufficientShow: {type: Boolean, default: false}})
const emit = defineEmits("close")

const close = () => {
  emit('close')
}
const submit = () => {
  emit('close')
}
</script>

<style scoped>

</style>