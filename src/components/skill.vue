<!-- eslint-disable vue/multi-word-component-names -->
<template>

<section id='exprience' class="py-5">
      <h5 class="text-center text-light">Skills I have</h5>
      <h2 class="text-center text-white mb-5">My Exprinence</h2>
      <div class="container exprience-container">
        
        <div class="exprience-frontend">
          <h3>Frontend Development</h3>
            <div class="exprience-content">
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="filetype-html" size="2x" />
                  <div>
                    <h4>HTML</h4>
                  <small class='text-light'>Exprienced</small>
                  </div>
              </article>
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="filetype-css" size="2x" />
                  <div>
                    <h4>CSS</h4>
                  <small class='text-light'>Exprienced</small>
                  </div>
              </article>
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="bootstrap" size="2x" />
                  <div>
                    <h4>Bootstarp</h4>
                  <small class='text-light'>Exprienced</small>
                  </div>
              </article>
              <article class='exprience-details'>
                 <BootstrapIcon class="icon" icon="filetype-js" size="2x" />
                  <div>
                  <h4>JavaScript</h4>
                  <small class='text-light'>Intermediate</small>
                  </div>
              </article>
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="asterisk" size="2x" />
                  <div>
                  <h4>React Js</h4>
                  <small class='text-light'>Intermediate</small>
                  </div>
              </article>
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="triangle" size="2x" />
                  <div>
                  <h4>Vue Js</h4>
                  <small class='text-light'>Intermediate</small>
                  </div>
              </article>
            </div>
        </div>
        <div class="exprinence-backend">
        <h3>Backend Development</h3>
            <div class="exprience-content">
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="filetype-php" size="2x" />
                  <div>
                  <h4>PHP</h4>
                  <small class='text-light'>Exprienced</small>
                  </div>
              </article>
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="filetype-java" size="2x" />
                  <div>
                  <h4>Java</h4>
                  <small class='text-light'>Intermediate</small>
                  </div>
              </article>
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="filetype-jsx" size="2x" />
                  <div>
                  <h4>JavaScript</h4>
                  <small class='text-light'>Intermediate</small>
                  </div>
              </article>
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="filetype-sql" size="2x" />
                 <div>
                 <h4>MySql</h4>
                  <small class='text-light'>Basic</small>
                 </div>
              </article>
              <article class='exprience-details'>
                  <BootstrapIcon class="icon" icon="filetype-py" size="2x" />
                 <div>
                 <h4>Python</h4>
                  <small class='text-light'>Bellow Basic</small>
                 </div>
              </article>
            </div>
        </div>
        
        </div>   
</section>

</template>

<script>
export default {
 
}
</script>



<style>

#exprience {
 background-color: #18183b;
}

.exprience-container {
    display: grid;
    grid-template-columns:  1fr 1fr;
    gap: 2rem;
    
}
.exprience-container > div {
    background: #202046;
    padding: 2.4rem 5rem;
    border: 1px solid transparent;
    border-radius: 2rem;
    transition: all 400ms ease;
}
.exprience-container > div:hover {
    background: transparent;
    border-color: rgba(77,181,255,0.4);
    cursor: default;
}
.exprience-container > div h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: #2fa6fc;
    font-size: 1.3rem;
}

.exprience-container > div h4 {
    text-align: left;
    color: #fff;
    font-size: 1.2rem;
}

.exprience-details .text-light {
    color: rgb(151, 146, 146) !important;
}
.exprience-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
}
.exprience-details { 
    display: flex;
    gap: 1rem;
}
.icon {
    margin-top: 1rem;
    color: #2fa6fc;
    font-size: 1.7rem;
}

/*============= Medeia Query ==============*/
@media screen and (max-width: 1124px) {
    .exprience-container {
        grid-template-columns:  1fr;
    }
    .exprience-container > div {
        padding: 1.7rem;
    }
    .exprience-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 2rem;
    }
    .exprience-details {
      
        justify-content: center; 
    }
}
@media screen and (max-width: 600px) {
    .exprience-container {
        gap: 1rem;
    }
    .exprience-container > div {
        width: 100%;
        padding: 2rem 1rem;
    }
    .exprience-content {
        
    }
}


</style>
