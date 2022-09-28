<template>
  <div class="home">
    <NavBar />


    <section class="section" id="home">
      <TriangleJumbotron />
    </section>

    <section class="section" id="about">
      <SkillBars />
    </section>

    <section class="section" id="projects">
<PortfolioSection />
    </section>
    
    <section class="section" id="contact">
      s

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TriangleJumbotron from '../components/TriangleJumbotron.vue';
import NavBar from '@/components/NavBar.vue';
import SkillBars from '../components/SkillBars.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';

export default {
  name: 'HomeView',
  components: {
    TriangleJumbotron,
    NavBar,
    SkillBars,
    PortfolioSection
}
}
</script>

<style>
.section{
  
  height: 100vh;
}


</style>