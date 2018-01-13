<template>
  <div class="page has-navbar" v-nav="{ title: 'About', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content">

    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      back() {
        $router.back('/home')
      }
    }
  }
</script>
