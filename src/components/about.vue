<!-- eslint-disable vue/multi-word-component-names -->
<template>

   <section id='about' class="text-center py-5">
      <h5 class="text-light">Get To Know</h5>
      <h2 class="text-light mb-5">About Me</h2>
      <div class="container about-container">
        <div class="about-me">
             <div class="about-me-img">
               <img src="../assets/about-me.png" alt="about-me image" />
               </div>    
        </div>
        <div class="about-content">
              <div class="about-cards">
                <article class='about-card'>
                  <BootstrapIcon class="about-icon" icon="chevron-bar-expand" size="2x" />
                  <h5  class="text-white" >Exprience</h5>
                  <small class="text-light" >2+ Years Working Exprience</small>   
                </article>
                <article class='about-card'>
                  <BootstrapIcon  class="about-icon" icon="person-workspace" size="2x" />
                  <h5 class="text-white" >Clients</h5>
                  <small class="text-light" >2+ Happy Clients</small>   
                </article>
                <article class='about-card'>
                  <BootstrapIcon class="about-icon" icon="bounding-box" size="2x" />
                  <h5 class="text-white" >Projects</h5>
                  <small class="text-light">15+ Completed Projects</small>   
                </article>
              </div>
              <p class="text-light">
              Hello there, I have completed my undergraduation program
              B.Sc in CSE on State University of Bangladesh.
              During this time I have learned many and more 
              about web Technology, also life. Actually my
              interest of Web Development came from one of my
              University project.
              <br/>
              <small> <IoIosArrowRoundForward/> Web Development on laravel framwork on Latentsoft</small> <br/>
              <small> <IoIosArrowRoundForward/> Graphics Design and Web Design on PerpitualIt</small>
              </p>
              <a href="#contact" class='btn btn-primary about-btn'>Let's Talk</a>
        </div>
      </div>
    </section>

</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#about {
 background-color: #18183b;
}
.about-container {
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%
}
.about-me {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg,transparent, #2fa6fc);
    display: grid;
    place-items: center;
}
.about-me-img {
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: all 400ms ease;
}

img {
    display: block;
    width: 100%;
    object-fit: cover;
}

.about-me-img:hover {
    transform: rotate(0);
}
.about-cards {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1.5rem;
}
.about-card {
    background:  #202046;
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 400ms ease;
}
.about-card:hover {
    background: transparent;
    border-color:  rgba(77,181,255,0.4);
    cursor: default;
}
.about-icon {
    color: #2fa6fc;
    font-size: 3rem;
    margin-bottom: 2rem;
}
.about-card h5 {
    font-size: 1.1rem;   
}
.about-card small {
    font-size: 0.9rem; 
    color: rgba(255, 255, 255, 0.733);
}
.about-content p {
    margin: 2rem 0 2.6rem;
    color:rgba(255, 255, 255, 0.733);
    text-align: justify;
}
.about-content p small { 
    color: rgb(223, 219, 219);
    text-align: left;
    font-size: .9rem;
}

/*============= Medeia Query ==============*/
@media screen and (max-width: 1124px) {
    .about-container {
        grid-template-columns: 1fr;
        gap: 0;
    }
    
    .about-me {
        width: 50%;
        margin: 1rem auto 4rem;
    }

    .about-content {
        margin: 1rem 0 1.5rem;
    }
    .about-content a {
        font-size: .9rem;    
    }
}
@media screen and (max-width: 600px) {
    .about-me {
        width: 60%;
        margin: 1rem auto 4rem;
    }

    .about-cards {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;      
    }
    .about-content {
        text-align: center;
    }
    .about-content p {
        margin: 2rem 0;
    }
    .about-content a {
        font-size: .7rem;    
    }
}

</style>
