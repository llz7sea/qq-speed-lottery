<template>
  <div class="pageContainer">
    <topHeader></topHeader>
    <pageBody></pageBody>
    <initDialog v-show="!$store.state.registered"></initDialog>
  </div>
</template>

<script setup>
import topHeader from "@/components/construction/topHeader.vue"
import pageBody from "@/components/construction/pageBody";
import initDialog from "@/components/dialog/initDialog.vue"

</script>

<style scoped>
.pageContainer {
  padding-top: 42px;
}
</style>