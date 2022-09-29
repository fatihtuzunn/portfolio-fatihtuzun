<template>

  <div class="nameapp">
    <div id="hello">Hello!</div>
    <div class="fullname">
      <div>I'm&nbsp;</div>
      <div class="name" data-text="Fatih Tüzün">Fatih Tüzün</div>
    </div>

    <div>Frontend Developer</div>
  </div>
</template>

<style  scoped>
/* Colors */
.nameapp {
  font-size: 6rem;
  font-weight: 600;
  color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#hello{
  color: var(--primary);
}
.fullname {
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0;

}

.name {
  font-family: arial;
  position: relative;
  text-align: left;

  max-width: 1200px;
  user-select: none;
}

.name::before,
.name::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.name::before {
  left: 2px;
  clip: rect(79px, 1200px, 86px, 0);
  text-shadow: -2px 0 var(--tertiary);

  animation: name-anim-2 1s infinite linear alternate-reverse;
}

.name::after {
  /* variation */
  left: -2px;
  clip: rect(79px, 1200px, 86px, 0);
  text-shadow: -1px 0 var(--tertiary);

  animation: name-anim-1 1s infinite linear alternate-reverse;
  animation-delay: -1s;
}

@media screen and (max-width: 1200px) {
  .nameapp {
    
    font-size: 3.5rem;
    max-width: 400px;
  }

  .fullname{
    flex-direction: column;
  }
}

@media screen and (max-width: 375px) {
  .nameapp {
    font-size: 2.5rem;
    max-width: 400px;
  }
}

@keyframes name-anim-1 {
  0% {
    clip: rect(20px, 1200px, 76px, 0);
  }

  20% {
    clip: rect(19px, 1200px, 16px, 0);
  }

  40% {
    clip: rect(16px, 1200px, 3px, 0);
  }

  60% {
    clip: rect(62px, 1200px, 78px, 0);
  }

  80% {
    clip: rect(25px, 1200px, 13px, 0);
  }

  100% {
    clip: rect(53px, 1200px, 86px, 0);
  }
}

@keyframes name-anim-2 {
  0% {
    clip: rect(79px, 1200px, 86px, 0);
  }

  20% {
    clip: rect(20px, 1200px, 30px, 0);
  }

  40% {
    clip: rect(25px, 1200px, 5px, 0);
  }

  60% {
    clip: rect(65px, 1200px, 85px, 0);
  }

  80% {
    clip: rect(120px, 1200px, 145px, 0);
  }

  100% {
    clip: rect(95px, 1200px, 75px, 0);
  }
}
</style>
