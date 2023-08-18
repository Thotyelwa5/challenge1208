<template>
  <nav class="navbar navbar-expand-lg p-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://i.postimg.cc/C5BH2zF4/Screenshot-2023-07-05-112625.png" alt="logo" width="80" height="80">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto py-0">
          <li class="nav-item">
            <router-link to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users">USERS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
