<script setup>

import CustomCursor from "./components/CustomCursor.vue";
import HomeView from "./views/HomeView.vue";
</script>


<template>
  
    <HomeView />
    <CustomCursor />
 
</template>



<style >

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--backg);
  margin: 0;
  overflow: hidden;
}


</style>
