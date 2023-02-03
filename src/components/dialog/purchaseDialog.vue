<template>
  <Teleport
      to="body"
      v-if="purchaseShow"
  >
    <div class="dialog pr"
         id="buy2"
         style="display: block; visibility: visible; position: fixed; z-index: 9999; left: 50%; top: 50%; margin-top: -152.5px; margin-left: -237px;"
         data-milodialog="1"
         role="dialog"
         tabindex="-1"><!--消耗XQB来购买小橘子挂饰(X天)-->
      <div class="dia-con1">
        <div class="pop1_txt1">
          <p class="pop1_txt2">
            您确定要消耗{{ money }}QB来购买小橘子挂饰({{
              money == 2 ? 1 : money == 20 ? 10 : 50
            }}天)吗？<br>本次购买将赠送您：<br><b>勋章宝盒×{{ moneyToChance[money] }}</b>
          </p>
        </div>
        <a class="sp db btn_yes"
           @click="submit"></a>
      </div>
      <a class="dia-close sp pa" @click="handleClose" title="关闭"></a>
    </div>
  </Teleport>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";
import {moneyToChance} from "@/enums/price";

const props = defineProps({
  money: {
    type: Number,
    default: 2
  },
  purchaseShow: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update', "close"])

const submit = () => {
  emit('update', moneyToChance[props.money])
}

const handleClose = () => {
  emit('close')
}
</script>

<style scoped>
</style>