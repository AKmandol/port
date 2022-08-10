<!-- eslint-disable vue/multi-word-component-names -->
<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-color sticky-top">
  <a class="navbar-brand" href="#">
    <img src="../assets/akm.png" alt="logo">
  </a>
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/" >Home</router-link>
        </li>

        <li class="nav-item">
         <router-link class="nav-link" to="/about" >About me</router-link>
        </li>

        <li class="nav-item">
         <router-link class="nav-link" to="/skill" >My Skill</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/contact" >Contact</router-link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

<router-view> </router-view>

<section>

      <div class="container-fluid bgwhite py-4">
        <div class="row justify-content-between">
          <div class="col-lg-3 col-sm-12 text-left">
            <a href="#"><img class="img-fluid mt-5 mb-1 p-2 imgage" src="../assets/akm.png" alt="" /></a>
            <p class="w-lg-75 text-gray text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quibusdam hic debitis nam similique placeat ipsum dolor sit amet consectetur vero.</p>
          </div>

          <div class="col-lg-3 col-sm-4 text-left">
            <h3 class="fw-bold fs-1 mt-5 mb-4 text-light">Landings</h3>
            <ul class="list-unstyled">
              <li class="my-3"><a href="#">Home</a></li>
              <li class="my-3"><a href="#">Contact</a></li>
              <li class="my-3"><a href="#">About</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-sm-4 text-left">
            <h3 class="fw-bold fs-1 mt-5 mb-4 text-light">Company</h3>
            <ul class="list-unstyled">
              <li class="my-3"><a href="#">Home</a></li>
              <li class="my-3"><a href="#">Careers</a><span class="py-1 px-2 rounded-2 bg-success fw-bold text-dark ms-2">Hiring!</span></li>
              <li class="my-3"><a href="#">Services</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-sm-4 text-left">
            <h3 class="fw-bold fs-1 mt-5 mb-4 text-light">Resources</h3>
            <ul class="list-unstyled">
              <li class="mb-3"><a href="#">Home</a></li>
              <li class="mb-3"><a href="#">Contact</a></li>
              <li class="mb-3"><a href="#">About</a></li>
            </ul>
          </div>

        </div>
      </div>
      <p class="text-dark text-center ts-1 py-2 m-0 bg-light">&copy; Amlan Kumar Mandool all rights reserved.</p>


</section>

</template>

<script>

</script>

<style>
nav {
  border-bottom: .2px solid rgba(255, 255, 255, 0.171);
}

section {
  border-bottom: .2px solid rgba(255, 255, 255, 0.171);
}
.router-link-active {
    color: #fff;
    background-color: #25255c;
    border: 2px solid #06060ede;
    border-radius: 5px;
    padding: 5px;
}

.bg-color {
  background-color: #121224 !important;
}

.bgwhite {
  background-color: #121224;
}

ul  {
  text-align: center;
  width: 100%;
  justify-content: center;
}

.navbar-brand img {
  width: 60px;
}

.imgage {
  height: 120px;
  width: 120px;
}
ul {
  list-style-type: none;
  text-align: left;
} 

li a {
  text-decoration: none;
  color : rgba(255, 255, 255, 0.788)!important;
  margin-right: 15px;
}

@media screen and (max-width: 992px) {
   .navbar-brand {
    display: none;
   }
}

</style>
