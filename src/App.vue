<template>
  <the-header/>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// import liff from "@line/liff";

import TheHeader from "@/components/molecules/header/TheHeader.vue";

// TODO: ここにProvide, Inject 情報を管理する

export default defineComponent({
  name: "TopLayout",
  components:{
    TheHeader
  }
 
});
</script>

