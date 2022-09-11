<template>
  <div class="home">
    <NavBar />
    <div>
      <h1>sadsa</h1>
      <h1>sadsa</h1>
      <h1>sadsa</h1>
      <h1>sadsa</h1>
      <h1>sadsa</h1>
    </div>
    <TriangleJumbotron />
  </div>
</template>

<script>
// @ is an alias to /src
import TriangleJumbotron from '../components/TriangleJumbotron.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    TriangleJumbotron,
    NavBar
}
}
</script>

<style>
 
</style>