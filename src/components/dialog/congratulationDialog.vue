<template>
  <Teleport to="body" v-if="visible">
    <div class="dialog pr" id="pop2"
         style="display: block; visibility: visible; position: fixed; z-index: 9999; left: 50%; top: 50%; margin-top: -152.5px; margin-left: -237px;"
         data-milodialog="1"
         role="dialog"
         tabindex="-1">
      <div class="dia-con2 pr">
        <p class="pop2_txt1">恭喜您购买成功！您获得了：</p>
        <p class="pop2_txt2">勋章宝盒*{{ chanceNum }}</p>
        <p class="pop2_txt3">本次购买您将获得{{ money }}魅力值和{{ money * 10 }}回馈点</p>
        <a  class="sp db btn_yes" @click="close">确认</a>
      </div>
      <a class="dia-close pa sp" @click="close" title="关闭"></a>
    </div>
  </Teleport>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

defineProps(['visible', 'chanceNum', 'money'])
const emit = defineEmits(["close"])
const close = () => {
  emit("close")
}
</script>

<style scoped>

</style>