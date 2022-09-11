<template>
  <div class="home">
    <NavBar />


    <section class="section">
      <TriangleJumbotron />
    </section>

    <section class="section">

    </section>

    <section class="section">

    </section>
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
.section{
  
  height: 100vh;
}
</style>