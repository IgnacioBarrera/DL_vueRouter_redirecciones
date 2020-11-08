<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a>
        <button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <!-- MENU DE NAVEGACION -->
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <router-link :to="{name: 'Portada'}">Portada</router-link>|
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <router-link :to="{name: 'SobreMi'}">Sobre Mí</router-link>|
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
              <router-link to="/Contacto">Contacto</router-link>|
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
              <router-link to="/post/1">Último post</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <transition name='transicion'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
  .transicion-enter-active{
    animation: transicionIn ease 6s;
  }
  @keyframes transicionIn {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
</style>