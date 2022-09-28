<template>

  <h1>My Projects</h1>
  <swiper :style="{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  }" :speed="600" :parallax="true" :pagination="{
        clickable: true,
      }" :navigation="true" :modules="modules" class="mySwiper">

    <div class="parallax-bg" data-swiper-parallax="-23%"></div>
    <swiper-slide class="project1">
      <div class="title" data-swiper-parallax="-300">Slide 1</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>



    </swiper-slide>


    <swiper-slide class="project2">
      <div class="title" data-swiper-parallax="-300">Slide 2</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>



    <swiper-slide class="project3">
      <div class="title" data-swiper-parallax="-300">Slide 3</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
    };
  },
};
</script>


<style scoped>

h1{
  color: var(--primary);
  font-weight: bold;
  text-transform:uppercase;
}
  
.swiper {
  width: 70%;
  height: 50%;
  background: #000;
  border-radius: 2%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
  width: 100% !important;

}

.project1{
  background-image: url('../assets/img/educourse-Screenshot.png');
  background-size: cover;
}
.project2{
  background-image: url('../assets/img/vuetify-resume-Screenshot.png');
  background-size: cover;
}
.project3{
  background-image: url('../assets/img/node-media-catalog-Screenshot.png');
  background-size: 100% 110%;
  
}



.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
  max-width: 400px;

}

.swiper-slide .subtitle {
  font-size: 21px;
  max-width: 400px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}
</style>