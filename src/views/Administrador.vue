<template>
    <div>
        <header class="container">
            <div class="row">
                <h1 class="col-12 text-center" v-text="ingreso()"></h1>
            </div>
        </header>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <ul class="list-inline text-center">
                        <li class="list-inline-item">
                            <span class="fa-lg"><font-awesome-icon :icon="['fab','twitter']"/></span>
                        </li>
                        <li class="list-inline-item">
                            <span class="fa-lg"><font-awesome-icon :icon="['fab','facebook']"/></span>
                        </li>
                        <li class="list-inline-item">
                            <span class="fa-lg"><font-awesome-icon :icon="['fab','github']"/></span>
                        </li>
                        </ul>
                        <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Administrador',
    methods: {
        ingreso(){
            if (this.$route.params.dato == 'simple') {
                return 'Bienvenido a la página de Administración.'
            } else if (this.$route.params.dato == 'avanzado') {
                return 'Esta página de administración está en construcción. Intente como administrador simple.'
            } else {
                return 'Dirección ingresada no es correcta. Intente como administrador simple.'
            }
        }
    },  
}
</script>

<style scoped>
  header {
      margin-top: 50px;
      padding-top: 100px;
      margin-bottom: 30px;
  }
  footer {
    text-align: center;
  }
</style>