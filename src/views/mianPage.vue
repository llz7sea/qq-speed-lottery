<template>
  <div class="pageContainer">
    <topHeader></topHeader>
    <pageBody></pageBody>
    <initDialog v-show="initShow"></initDialog>
    <commandDialog v-show="consoleShow"></commandDialog>
  </div>
</template>

<script setup>
import topHeader from "@/components/construction/topHeader.vue"
import pageBody from "@/components/construction/pageBody";
import initDialog from "@/components/dialog/initDialog.vue"
import commandDialog from "@/components/dialog/commandDialog.vue"
import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore()
window['consoleShow'] = false
const consoleShow = ref(false)
const initShow = ref(!store.state.registered)

window.addEventListener('keydown',e=>{
  if(e.key == "p") {
    consoleShow.value = !consoleShow.value
  }
})
</script>

<style scoped>
.pageContainer {
  width: 100%;
}
</style>