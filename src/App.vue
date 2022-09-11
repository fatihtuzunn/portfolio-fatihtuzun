<script setup>

import CustomCursor from "./components/CustomCursor.vue";
</script>


<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />

    <CustomCursor />
  </div>
</template>



<style >
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



a {
  font-weight: bold;
  color: #2c3e50;


}

a.router-link-exact-active {
  color: #42b983;
}
</style>
