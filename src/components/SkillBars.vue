<template>


  <div class="content">
    <h1>ABOUT ME</h1>
    <div class="row">

      <div class="col">

        <p class="intro">Hi, I'm Fatih Tuzun! I'm a self taught web developer from Turkey. A highly motivated developer,
          interested in all things related to Frontend development.
          I like the possibility of rapid growth and working with technologies in the IT field. My main stack is Vue,
          Node.js, JavaScript, jQuery, SASS / SCSS, BEM, HTML, CSS, and different CSS frameworks, and ready to work with
          other technologies too.

        </p>

        <div class=" container-skillbar">
          <div class="skillbar clearfix ">
            <div class="skillbar-title"><span>HTML5</span></div>
            <div class="skillbar-bar bar1" data-animate="fill100 2s forwards"></div>
            <div class="skill-bar-percent">100%</div>
          </div> <!-- End Skill Bar -->

          <div class="skillbar clearfix ">
            <div class="skillbar-title"><span>CSS3</span></div>
            <div class="skillbar-bar bar3" data-animate="fill70 2s forwards"></div>
            <div class="skill-bar-percent">70%</div>
          </div> <!-- End Skill Bar -->

          <div class="skillbar clearfix ">
            <div class="skillbar-title"><span>JavaScript</span></div>
            <div class="skillbar-bar bar2" data-animate="fill80 2s forwards"></div>
            <div class="skill-bar-percent">80%</div>
          </div> <!-- End Skill Bar -->

          <div class="skillbar clearfix ">
            <div class="skillbar-title"><span>Vue</span></div>
            <div class="skillbar-bar bar3" data-animate="fill70 2s forwards"></div>
            <div class="skill-bar-percent">70%</div>
          </div> <!-- End Skill Bar -->

          <div class="skillbar clearfix ">
            <div class="skillbar-title"><span>Node.js</span></div>
            <div class="skillbar-bar bar4" data-animate="fill50 2s forwards"></div>
            <div class="skill-bar-percent">50%</div>
          </div> <!-- End Skill Bar -->
          <div class="skillbar clearfix ">
            <div class="skillbar-title"><span>Python</span></div>
            <div class="skillbar-bar bar4" data-animate="fill50 2s forwards"></div>
            <div class="skill-bar-percent">50%</div>
          </div> <!-- End Skill Bar -->
          <div class="skillbar clearfix ">
            <div class="skillbar-title"><span>React</span></div>
            <div class="skillbar-bar bar4" data-animate="fill40 2s forwards"></div>
            <div class="skill-bar-percent">40%</div>
          </div> <!-- End Skill Bar -->
          <div class="skillbar clearfix ">
            <div class="skillbar-title"><span>.NET</span></div>
            <div class="skillbar-bar bar4" data-animate="fill40 2s forwards"></div>
            <div class="skill-bar-percent">40%</div>
          </div> <!-- End Skill Bar -->

        </div>
      </div>

      <div class="col">

        <img class="avatar" src="../assets/avatar.jpg" alt="Avatar">

        <div class="icon-row">
          
          <a href="https://www.linkedin.com/in/fatih-t"><font-awesome-icon id="i" contain :icon="['fab', 'linkedin']" width="50" /></a>
          <a href="mailto:fatihtuzun11@gmail.com"><font-awesome-icon id="i" contain :icon="['fa', 'envelope']" width="50" /></a>
          <a href="https://www.github.com/fatihtuzunn"><font-awesome-icon id="i" contain :icon="['fab', 'github']" width="50" /></a>

        </div>

      </div>

    </div>


  </div>


</template>

<script>
export default {
  mounted() {


    const callback = (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          console.log("The element is intersecting >");
          //If intersecting then attach keyframe animation.
          //We do this by assigning the data attribute 
          //we coded in the markup to the style.animation 
          //of the element
          entry.target.style.animation = entry.target.dataset.animate;
        } else {
          entry.target.style.animation = "none";
        }
      });
    }

    const animationItems = document.querySelectorAll(".skillbar-bar");
    console.log(animationItems)

    let observer = new IntersectionObserver(callback);

    animationItems.forEach(item => {
      observer.observe(item)
    })
  }

}
</script>

<style scoped>
/* general styles */



.row {
  display: grid;
  column-gap: 20px;
  grid-template-columns: auto auto;
  padding: 10px;

}

.col {
  max-width: 50vw;
  margin: auto;
  max-width: 50vw;
}

.intro {
  max-width: 80%;
  margin: auto;
  padding: 50px 0;
}

.avatar {
  padding-top: 100px;
  border-radius: 50%;
  height: 35rem;
  width: 30rem;
}


.icon-row {
  margin: 45px auto;
  width: 100%;
}

.icon-row #i {
  border-radius: 4px;
  cursor: pointer;
  font-size: 44px;
  margin: 0px 20px;
  padding: 20px 30px;
  transition: all 400ms ease-in-out;
  color: var(--tertiary);
}

.icon-row #i:hover {
  background: var(--secondary);
  color: var(--primary);
}




.content h1 {
  color: var(--primary);
  font-weight: bold;
  padding-top: 150px;
  padding-bottom: 20px !important;
}

.content p {
  font-size: 20px;
  color: var(--secondary);
}




/* Skill bars */

.container-skillbar {
  /*   width: 70%; */
  padding-top: 30px;
  padding-right: 2%;
  padding-left: 2%;
  height: auto;
  overflow: none;
}

.skillbar {
  position: relative;
  display: block;
  margin-bottom: 15px;
  width: 100%;
  background: #efefef;
  height: 30px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  -webkit-transition: 0.4s linear;
  -moz-transition: 0.4s linear;
  -ms-transition: 0.4s linear;
  -o-transition: 0.4s linear;
  transition: 0.4s linear;
  -webkit-transition-property: width, background-color;
  -moz-transition-property: width, background-color;
  -ms-transition-property: width, background-color;
  -o-transition-property: width, background-color;
  transition-property: width, background-color;
  cursor: pointer;
}

.skillbar-bar {

  background: linear-gradient(to right, var(--tertiary), var(--primary));


}

.skillbar-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  font-weight: bold;
  font-size: 13px;
  color: #fff;
  background-color: var(--tertiary);
  -webkit-border-top-left-radius: 3px;
  -webkit-border-bottom-left-radius: 4px;
  -moz-border-radius-topleft: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.skillbar-title span {
  display: block;
  background: rgba(0, 0, 0, 0.15);
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  -webkit-border-top-left-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
  -moz-border-radius-topleft: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.skillbar-bar {
  height: 30px;
  width: 0px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  animation: html-fill 2s forwards;
}

.skill-bar-percent {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 11px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  color: rgba(0, 0, 0, 0.5);
}


/* bar percentss */

/* 
.bar1 {
  animation: fill90 2s forwards;
}

.bar2 {
  animation: fill80 2s forwards;
}

.bar3 {
  animation: fill70 2s forwards;
}

.bar4 {
  animation: fill60 2s forwards;
}
 */





/* mobile styles */

@media screen and (max-width: 1200px) {
  .row {
    display: block;
    font-size: 3.5rem;
    width: 100%;
    padding:0;
    margin: 0;
    
  }
  .intro{
    padding: 0;
  }

  .col{
    padding: 0;
    max-width: 100%;
  }

  .fullname{
    flex-direction: column;
  }

  .avatar{
    height: 20rem;
    width: 20rem;
    padding: 0;
  }

}

@media screen and (max-width: 375px) {
  .nameapp {
    font-size: 2.5rem;
    max-width: 400px;
  }
}
</style>

<style>
@keyframes fill100 {
  100% {
    width: 100%;
  }
}

@keyframes fill90 {
  100% {
    width: 90%;
  }
}

@keyframes fill80 {
  100% {
    width: 80%;
  }
}

@keyframes fill70 {
  100% {
    width: 70%;
  }
}

@keyframes fill60 {
  100% {
    width: 60%;
  }
}

@keyframes fill50 {
  100% {
    width: 50%;
  }
}

@keyframes fill40 {
  100% {
    width: 40%;
  }
}
</style>