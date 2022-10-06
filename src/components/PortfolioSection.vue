<template>


    <!-- PORTFOLIO -->

    <h1>My Projects</h1>
    <div id="portfolio">


        <div class="container">
            <section >
                <!-- OVERLAY -->
                <div class="overlay" @click="project1">
                    <!-- DESCRIPTION -->
                    <div class="description">
                        <p >
                            Designed using Sketch, The project was designed as a video platform for
                            education.
                            I used dotNET for the back-end, Vue for the frontend, and finally MongoDB as a database.

                        </p>

                        <h6>Tools</h6>
                        <ul class="tools vertical-list">
                            <li>Vue</li>
                            <li>Video.js</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>.Net 5</li>
                            <li>MongoDB</li>
                            <li>Sketch</li>
                        </ul>
                    </div>
                    <!-- END OF DESCRIPTION -->

                    <img src="../assets/img/educourse-Screenshot.png"
                        alt="Educourse Education Project">
                    <h4 class="heading">Educourse Education Project</h4>
                </div>
                <!-- END OF OVERLAY -->
            </section>
            <!-- END OF SECTION -->

            <section>
                <!-- OVERLAY -->
                <div class="overlay" @click="project2">
                    <!-- DESCRIPTION -->
                    <div class="description">
                        <p>
                            Designed using the Vuetify library - a simple page can be used as a personal portfolio website.
                        </p>

                        <h6>Tools</h6>
                        <ul class="tools vertical-list">
                            <li>Vue</li>
                            <li>Vuetify</li>
                            <li>COM (Component Object Model)</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <!-- END OF DESCRIPTION -->

                    <img src="../assets/img/vuetify-resume-Screenshot.png"
                        alt="Vuetify Resume">
                    <h4 class="heading"> Vuetify Personal Resume Website</h4>
                </div>
                <!-- END OF OVERLAY -->
            </section>
            <!-- END OF SECTION -->

            <!-- SECTION -->
            <section>
                <!-- OVERLAY -->
                <div class="overlay" @click="project3">
                    <!-- DESCRIPTION -->
                    <div class="description">
                        <p>
                            Written using pure JavaScript, EJS and Node.js, users can do a general
                            search for medias,  can search for media from particular title,
                            can upload a media(video or photograph).
                        </p>

                        <h6>Tools</h6>
                        <ul class="tools vertical-list">
                            <li>Node.js</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>EJS</li>
                        </ul>
                    </div>
                    <!-- END OF DESCRIPTION -->

                    <img src="../assets/img/node-media-catalog-Screenshot.png" alt="Media Catalog Project">
                    <h4 class="heading">Media Catalog Project</h4>
                </div>
                <!-- END OF OVERLAY -->
            </section>
            <!-- END OF SECTION -->

            <!-- COLUMN 3 -->
            <!-- SECTION -->
            <section>
                <!-- OVERLAY -->
                <div class="overlay" @click="project4">
                    <!-- DESCRIPTION -->
                    <div class="description">
                        <p>
                            Made with a combination of pure JavaScript &amp; Bootstrap.
                            It was designed with the aesthetic concern of any model agency in mind.
                        </p>

                        <h6>Tools</h6>
                        <ul class="tools vertical-list">
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>HTML &amp; CSS</li>
                        </ul>
                    </div>
                    <!-- END OF DESCRIPTION -->

                    <img src="../assets/img/ft-model-Screensho.png" alt="Ft model agency">
                    <h4 class="heading">FT Model Agency</h4>
                </div>
                <!-- END OF OVERLAY -->
            </section>
            <!-- END OF SECTION -->

            <!-- SECTION -->
            <section>
                <!-- OVERLAY -->
                <div class="overlay" @click="project5">
                    <!-- DESCRIPTION -->
                    <div class="description">
                        <p>



                            
                            Made using Vue.
                        </p>

                        <h6>Tools</h6>
                        <ul class="tools vertical-list">
                            <li>Vue</li>
                            <li>HTML &amp; CSS</li>
                        </ul>
                    </div>
                    <!-- END OF DESCRIPTION -->

                    <img src="../assets/img/personal-resume.png"
                        alt="Twitchtv API screenshot">
                    <h4 class="heading">Personal Resume Website</h4>
                </div>
                <!-- END OF OVERLAY -->
            </section>
            <!-- END OF SECTION -->

            <!-- SECTION -->
            <section>
                <!-- OVERLAY -->
                <div class="overlay" @click="project6">
                    <!-- DESCRIPTION -->
                    <div class="description">
                        <p>
                            Instagram clone made with Bootstrap.
                        </p>

                        <h6>Tools</h6>
                        <ul class="tools vertical-list">
                            <li>Bootstrap</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <!-- END OF DESCRIPTION -->

                    <img src="../assets/img/instagram-clone.png"
                        alt="Simon Says Game">
                    <h4 class="heading">Instagram Clone</h4>
                </div>
                <!-- END OF OVERLAY -->
            </section>
            <!-- END OF SECTION -->

           
            <section>
                <!-- OVERLAY -->
                <div class="overlay" @click="project7">
                    <!-- DESCRIPTION -->
                    <div class="description">
                        <p>
                            A basic memory-matching game 
                            created using React.
                        </p>

                        <h6>Tools</h6>
                        <ul class="tools vertical-list">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <!-- END OF DESCRIPTION -->

                    <img src="../assets/img/memory-game.png"
                        alt="Chatterbox ">
                    <h4 class="heading">React Memory Game</h4>
                </div>
                <!-- END OF OVERLAY -->
            </section>
            <!-- END OF SECTION -->
        </div>


    </div>
    <!-- END OF PORTFOLIO -->

</template>

<script>
export default {
    name:"PortfolioSection",
    methods:{
        project1(){
            window.open("https://github.com/fatihtuzunn/educoursePROJECT")
        },
        project2(){
            window.open("https://github.com/fatihtuzunn/vuetify-resume")
        },
        project3(){
            window.open("https://github.com/fatihtuzunn/media_catalog_project")
        },
        project4(){
            window.open("https://github.com/fatihtuzunn/ft-model-agency")
        },
        project5(){
            window.open("https://github.com/fatihtuzunn/portfolio-fatihtuzun")
        },
        project6(){
            window.open("https://github.com/fatihtuzunn/Instagram-Clone_Bootstrap_Patika.dev")
        },
        project7(){
            window.open("https://github.com/fatihtuzunn/react-matching_game")
        }
    }

}
</script>

<style>
body {
    font-size: 20px;
}

li {
    list-style: none;
}

a {
    color: white;
}

a:hover,
a:focus {
    color: white;
    text-decoration: none;
}


h1 {
    color: var(--primary);
    font-weight: bold;
    text-transform: uppercase;
    padding: 400px 0 50px 0;
}


h4 {
    font-size: 92%;
}

h6 {
    color: #F0F0F0;
}



/* ELEMENTS */


.vertical-list li {
    float: left;
}





/* END OF ELEMENTS */



.overlay {
    background-color: rgba(4, 14, 22, .83);

}



#portfolio {
    
    padding-bottom: 80px;
}



#portfolio .row {
    margin: 0px;
    box-sizing: border-box;
    padding: 0 60px;
}

#portfolio .heading {
    color: #F0F0F0;
    padding: 0;
    text-align: center;
    position: absolute;
    font-size: 18px;
    letter-spacing: 2px;
    position: relative;
    margin: 100px auto 0 auto;
    
}


#portfolio .description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}

#portfolio .description>* {
    display: none;
    font-size: 72%;
}

#portfolio p {
    color: #F0F0F0;
    /*display: none;*/
    margin-bottom: 30px;
    line-height: 230%;
}

#portfolio p,
.tools {
    width: 100%;
}



.description .tools {
    margin-top: 20px;
    overflow: hidden;
}

.description .tools li {
    margin-top: 5px;
    background-color: #e85151c7;

    margin-right: 10px;
    padding: 10px;
    color: var(--secondary);
}



#portfolio img {
    width: 100%;
}

#portfolio section {
    width: 44%;
    float: left;
    height: 100%;
    margin: 10px 3%;
    cursor: pointer;
}

#portfolio .overlay {
    position: relative;
    padding-bottom: 0px;
    min-height: 550px;
    overflow: hidden;
}

#portfolio .description h4 {
    color: white;
}





#portfolio section:hover .overlay img {
    opacity: 0;
    transition: opacity .32s;
}

#portfolio section:hover .description {
    top: 140px;
    transition: top .5s;
}




#portfolio section:hover .overlay .description>* {
    display: block;
}

#portfolio section:hover .overlay .heading {
    position: absolute;
    top: -10%;
    left: 10%;
    transition: top .9s;
}



/* Media Queries */



@media screen and (max-width: 790px) {



    #portfolio section img {
        display: none;
    }

    #portfolio section {
        width: 100%;
        margin: 10px 0;
    }

    #portfolio .description>* {
        display: block;
    }

    #portfolio .description {
        display: table-footer-group;
    }

    #portfolio .heading {
        display: table-header-group;
        font-size: 120%;
       
    }

    #portfolio .overlay {
        min-height: auto;
        padding: 20px;
        
    }

    #portfolio .description {
        
        position:relative;
        
    }

    #portfolio section {
        min-height: auto;
    }

    #portfolio section:hover .overlay .heading, 
    #portfolio section:hover .description,
    #portfolio section:hover .overlay img
     {
        position: relative;
        transition: none;
        color: white;
        -webkit-transition: none;
    }

    
}

@media screen and (max-width: 480px) {



    #skill-set #web-development-skills::before {
        display: none;
    }

    #skill-set .skills {
        width: 100%;
        display: block;
    }

    #portfolio .overlay {
        height: 70%;
    }

}
</style>