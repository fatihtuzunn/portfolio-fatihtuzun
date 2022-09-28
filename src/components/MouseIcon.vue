<template>
  <div class="mouse-icon">
    <div class="wheel"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mouse-icon {
  border: 2px solid #fff;
  border-radius: 16px;
  height: 40px;
  width: 24px;
  display: block;
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  margin: auto;

}

.mouse-icon .wheel {

  position: relative;
  border-radius: 10px;
  background: #fff;
  width: 2px;
  height: 6px;
  top: 4px;
  margin-left: auto;
  margin-right: auto;
  -webkit-animation-name: drop;
  -webkit-animation-duration: 1.4s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 0s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-play-state: running;
  animation-name: drop;
  animation-duration: 1.4s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-play-state: running;

}

@keyframes drop {
  0% {

    transform: translateY(0px);
  }

  50% {

    transform: translateY(5px);
  }
  100% {

    transform: translateY(0px);
  }
 

}
</style>>



