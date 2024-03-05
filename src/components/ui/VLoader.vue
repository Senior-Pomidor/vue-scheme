<template>
  <div class="Loader">
    <div class="spinner"></div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Loader{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 9999;
    background: fade(white, 50%);
    display: flex;
    align-items: center;
}
.spinner {
    border: 15px solid @red;
    border-top: 15px solid gray;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 0.7s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
