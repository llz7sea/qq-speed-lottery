<template>
  <div class="pageContainer">
    <topHeader></topHeader>
    <pageBody></pageBody>
  </div>
</template>

<script setup>
import topHeader from "@/components/topHeader.vue"
import pageBody from "@/components/pageBody";
</script>

<style scoped>
.pageContainer {
  padding-top: 42px;
}
</style>