<template>
  <Teleport v-if="visible" to="body">
    <div class="amsdialog_modal"
         style="left: 40%; top: 40%; min-width: 400px; max-width: 100%; background-color: white; font-size: 14px; font-family: &quot;Microsoft YaHei&quot;, Arial, sans-serif; z-index: 100020; display: block; position: fixed;"
    >
      <div class="amsdialog_header" style="width:auto;"><a class="amsdialog_close" @click="cancel">×</a><span>系统消息</span>
      </div>
      <div class="amsdialog_content">
        <div class="amsdialog_cmain" style="max-height: 554.5px; overflow: hidden auto; width: 400px;">转动车王轮盘的机会次数不足！
        </div>
        <div class="amsdialog_footer"><a class="amsdialog_btn amsdialog_bconfirm"
                                         style="display: inline-block;" @click="cancel">确认</a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import {defineEmits, defineProps} from "vue";
import {cancelShade} from "@/utils/shadeControler";

defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(["close"])
const cancel = () => {
  emit("close")
  cancelShade()
}
</script>

<style scoped>
.amsdialog_modal {
  border-radius: 3px 3px 0px 0px;
  overflow: hidden;
}

.amsdialog_header {
  line-height: 30px;
  color: #fff;
  background-color: #2196F3;
  padding: 0px 5px;
  font-size: 16px;
}

.amsdialog_close {
  float: right;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 24px;
}

.amsdialog_cmain {
  padding: 5px;
  min-height: 50px;
  font-size: 14px;
  color: #000;
}.amsdialog_footer {
   line-height: 40px;
   text-align: right;
 }
.amsdialog_footer a.amsdialog_btn.amsdialog_bconfirm {
    background-color: #2096f3;
  }
.amsdialog_footer a.amsdialog_btn {
     line-height: 30px;
     display: inline-block;
     min-width: 100px;
     text-align: center;
     text-decoration: none;
     color: #fff;
     border-radius: 3px;
     margin: 0px 5px;
   }
</style>