<template>
  <div class="pageContainer">
    <topHeader></topHeader>
    <pageBody></pageBody>
    <initDialog :visible="initShow" @close="initShow = false"></initDialog>
    <commandDialog :visible="consoleShow" @close="consoleShow=false"></commandDialog>
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

if (store.state.registered) {
  window.addEventListener('keydown', e => {
    if (e.key == "Home") {
      initShow.value = !initShow.value
    }
  })
  window.addEventListener('keydown', e => {
    if (e.key == "Insert") {
      consoleShow.value = !consoleShow.value
    }
  })
  if (!localStorage.getItem("version") || store.state.version != store.state.currenVersion) {
    console.log(localStorage.getItem("version"))
    console.log(store.state.version)
    console.log(store.state.currenVersion)
    localStorage.clear()
    location.reload()
  }
}
</script>

<style scoped>
.pageContainer {
  width: 100%;
}
</style>