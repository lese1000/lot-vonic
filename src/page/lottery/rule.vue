<template lang="html">
  <div class="">
    <div class="item item-divider">
      选择性别:
    </div>

    <von-radio :options="genderOptions" v-model="gender"></von-radio>
  </div>

</template>

<script>
export default {
  data(){
    return {
      gender: 0,
      genderOptions: ["男", "女"]
    }
  }
}
</script>

<style lang="css">
</style>
