<template>
  <div
      v-show="visible"
      class="dialog pr"
      id="pop10"
      style="display: block; visibility: visible; position: fixed; z-index: 9999; left: 50%; top: 50%; margin-top: -260.5px; margin-left: -362px;"
      data-milodialog="1"
      role="dialog"
      tabindex="-1">
    <div class="dia-con10 pr">
      <table class="pop10_tab">
        <tbody>
        <tr>
          <th>序号</th>
          <th>大区</th>
          <th>奖励名称</th>
          <th>个数/期限</th>
          <th>领取</th>
          <th>分解</th>
        </tr>
        <tr>
        </tr>
        </tbody>
        <tbody id="shareList"></tbody>
        <tr v-for="(item,index) in currentPageData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ $store.state.role.region }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
          <td><a class="sp db btn_pop10_lq" @click="getPrize">领取</a></td>
          <td><a class="sp db btn_pop10_fj" @click="resolve">分解</a></td>
        </tr>
      </table>
      <div class="pop10_box" id="pageC">
        <a @click="previewPage">上一页</a>
        <p><span>{{ pageNum }}</span>/<span>{{ pageSize }}</span></p>
        <a @click="nextPage">下一页</a>
      </div>
      <a class="sp db btn_yes" @click="close">确认</a>
    </div>
    <a class="dia-close pa sp" @click="close" title="关闭"></a>
  </div>
</template>

<script setup>
import {defineEmits, defineProps, ref, watch} from "vue";
import {cancelShade} from "@/utils/shadeControler";
import {useStore} from "vuex";
import {prizes} from "@/enums/prizes"

console.log(prizes)


const store = useStore()
const repository = ref([])
const props = defineProps(["visible"])
const currentPageData = ref([])
const pageNum = ref(1)
const pageSize = ref(1)

watch(() => props.visible, () => {
  pageNum.value = 1
  repository.value = store.state.role.repository.map(code=>{
    return prizes.find(p=>{
      return p.code == code
    })
  })
  console.log(repository.value)
  pageSize.value = Math.ceil(repository.value.length / 7)
  currentPageData.value = Array.from(repository.value).slice(0, 7)
})

const emit = defineEmits(["close"])
const previewPage = () => {
  if (pageNum.value > 1) {
    pageNum.value--
    currentPageData.value = Array.from(repository.value).slice((pageNum.value - 1) * 7, (pageNum.value - 1) * 7 + 7)
  }
}
const nextPage = () => {
  if (pageNum.value < pageSize.value && pageNum.value > 0) {
    currentPageData.value = Array.from(repository.value).slice(pageNum.value * 7, pageNum.value * 7 + 7)
    pageNum.value++
  }
}
const close = () => {
  cancelShade()
  emit("close")
}
</script>

<style scoped>

</style>