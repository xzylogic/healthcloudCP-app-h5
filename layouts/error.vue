<template>
  <div id="error" v-title="' '" class="container">
    <div class="error-content">
      <img src="~/assets/neterror.png" alt="NETWORK ERROR" width="100">
      <p>{{error.msg}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'error',
    props: ['error']
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    max-width: 768px;
    margin: 0 auto;
  }

  .error-content {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -150px;
    width: 100%;
    height: 300px;
    text-align: center;
    color: #666;
  }
</style>
