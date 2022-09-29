
<template>
    <div class="jumbotron ">


        <div class="container text-center">

            <h1>
                <AnimatedName />
            </h1>



        </div>
        <div class="scrollMouse" @click="scroll">
            <MouseIcon />
        </div>




        <div class="rectangle-1"></div>
        <div class="rectangle-2"></div>
        <div class="rectangle-transparent-1"></div>
        <div class="rectangle-transparent-2"></div>
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="triangle triangle-1">
            <img src="../assets/img/obj_triangle.png" alt="">
        </div>
        <div class="triangle triangle-2">
            <img src="../assets/img/obj_triangle.png" alt="">
        </div>
        <div class="triangle triangle-3">
            <img src="../assets/img/obj_triangle.png" alt="">
        </div>
        <div class="triangle triangle-4">
            <img src="../assets/img/obj_triangle.png" alt="">
        </div>



    </div>


</template>

<script>
import AnimatedName from "./AnimatedName.vue";
import MouseIcon from "./MouseIcon.vue";

export default {
    components: {
        AnimatedName,
        MouseIcon
    },
    methods:{
        scroll(){
            const element = document.getElementById('about');
      element.scrollIntoView({ behavior: 'smooth' });
        }

    }
}

</script>


<style>
/* ANIMATIONS */


@keyframes fade-in-right {
    from {
        opacity: 0;
        transform: translateX(-100vw) rotate(-15deg);
    }

    to {
        opacity: 1;
        transform: translateX(0) rotate(-15deg);
    }
}

@keyframes grow1 {
    from {
        opacity: 0;
        transform: scale(2) rotate(-10deg);
    }

    to {
        opacity: 1;
        transform: scale(1) rotate(-10deg);
    }
}

@keyframes grow2 {
    from {
        opacity: 0;
        transform: scale(2) rotate(40deg);
    }

    to {
        opacity: 1;
        transform: scale(1) rotate(40deg);
    }
}

@keyframes fadeInFromTop {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ANIMATIONS END */

:root {
    --primary: #e85151;
    --secondary: #ced9e0;
    --backg: #22272a;
    --tertiary: #4A00E0
}

.jumbotron {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding-top: 80px;
    padding-bottom: 80px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
    border-radius: 0;
    margin-bottom: 0;
    overflow: hidden;
    min-height: 100vh;
}

@media (max-width: 767px) and (orientation: landscape) {
    .jumbotron {
        min-height: 500px;
    }
}

.jumbotron .container {
    position: relative;
    z-index: 1;
}

.jumbotron:before {
    position: absolute;
    display: block;
    content: "";
    opacity: 0.8;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--backg);
    /* fallback for old browsers */
    
    /* Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(to right, #333399, #ff00cc); */
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.jumbotron h1 {
    margin-top: 8rem;
    line-height: .9;
    font-weight: bold;
    display: block;
    border: 15px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, var(--tertiary), var(--primary));
    padding: 20px;
    font-size: 9rem;
    opacity: 0;
    animation: 1s fadeInFromTop cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;
    animation-delay: .8s;



}

.scrollMouse {
    position: absolute;
    right: 50%;
    top: 100%;
    cursor: pointer;
}

.rectangle-1 {
    width: 1500px;
    height: 400px;
    background: var(--primary);
    background: -webkit-linear-gradient(to right, var(--tertiary), var(--primary));
    background: linear-gradient(to right, var(--tertiary), var(--primary));
    transform-origin: 50% 50% 0;
    position: absolute;
    left: 0;
    z-index: 0;
}

.rectangle-2 {
    width: 1500px;
    height: 400px;
    background: var(--primary);
    background: -webkit-linear-gradient(to right, var(--tertiary), var(--primary));
    background: linear-gradient(to right, var(--tertiary), var(--primary));
    transform-origin: 65% 100% 0;
    position: absolute;
    right: 0;
    z-index: 0;
    transform: scale(1) rotate(60deg);
}





.rectangle-1 {
    opacity: 0;
    animation: grow1 ease 1s forwards;
    box-shadow: 0px 20px 30px 0px rgba(9, 21, 54, 0.25) !important;
}

.rectangle-2 {
    opacity: 0;
    animation: grow2 ease 1s forwards;
    box-shadow: 0px 20px 30px 0px rgba(9, 21, 54, 0.25) !important;
}

.rectangle-transparent-1 {
    width: 500px;
    height: 500px;
    border: 15px solid rgba(255, 255, 255, 0.08);
    position: absolute;
    left: -10%;
    bottom: 12%;
    display: block;
    animation: floating-slow ease-in-out 12s infinite;
}

.rectangle-transparent-2 {
    width: 600px;
    height: 600px;
    border: 15px solid rgba(255, 255, 255, 0.08);
    position: absolute;
    right: -10%;
    top: 5%;
    display: block;
    animation: floating-slow ease-in-out 12s infinite;
}

.circle-1 {
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    position: absolute;
    display: block;
    border-radius: 50%;
    transform-origin: 50% 50%;
    left: 5%;
    top: 50%;
    animation: fadeInFromTop .5s linear forwards, floating ease 4s infinite;
}

.circle-2 {
    width: 70px;
    height: 70px;
    top: 20%;
    left: 83%;
    border: 2px solid #fff;
    position: absolute;
    display: block;
    border-radius: 50%;
    transform-origin: 50% 50%;
    animation: fadeInFromTop .5s linear forwards, floating ease-in-out 4s infinite;
}

.circle-3 {
    top: 80%;
    right: 25%;
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    position: absolute;
    display: block;
    border-radius: 50%;
    animation: fadeInFromTop .5s linear forwards, floating ease-in-out 4s infinite;
}

@keyframes floating {
    0% {
        transform: translate(0%, 0%) rotate(25deg);
    }

    25% {
        transform: translate(5%, 15%) rotate(25deg);
    }

    50% {
        transform: translate(10%, 5%) rotate(25deg);
    }

    75% {
        transform: translate(0%, 15%) rotate(25deg);
    }

    100% {
        transform: translate(0%, 0%) rotate(25deg);
    }
}

@keyframes floating-slow {
    0% {
        transform: translate(0%, 0%) rotate(25deg);
    }

    25% {
        transform: translate(1%, 3%) rotate(25deg);
    }

    50% {
        transform: translate(2%, 1%) rotate(25deg);
    }

    75% {
        transform: translate(0%, 3%) rotate(25deg);
    }

    100% {
        transform: translate(0%, 0%) rotate(25deg);
    }
}

.triangle {
    position: absolute;
}

.triangle-1 {
    right: 0;
    animation: fadeInFromTop .5s linear forwards, floating ease-in-out 6s infinite;
}

.triangle-1 img {
    height: 50px;
    width: 50px;
    transform: rotate(30deg);
}

.triangle-2 {
    top: 30%;
    left: 20%;
    animation: fadeInFromTop .5s linear forwards, floating ease-in-out 8s infinite;
}

.triangle-2 img {
    width: 75px;
    height: 75px;
    transform: rotate(15deg);
}

.triangle-3 {
    top: 80%;
    left: 15%;
    animation: fadeInFromTop .5s linear forwards, floating ease-in-out 10s infinite;
}

.triangle-3 img {
    width: 45px;
    height: 45px;
    transform: rotate(40deg);
}

.triangle-4 {
    top: 60%;
    right: 15%;
    animation: fadeInFromTop .5s linear forwards, floating ease-in-out 5s infinite;
}

.triangle-4 img {
    width: 45px;
    height: 45px;
    transform: rotate(-40deg);
}


/* Responsive */

@media (max-width: 992px) {

    .jumbotron h1 {
    font-size: 4rem !important; 
}

}
</style>