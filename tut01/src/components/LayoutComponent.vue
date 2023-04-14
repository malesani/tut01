<template>
  <div class="main">
    <ul class="nav-bar">
      <li class="home" v-if="this.$store.state.pagina == 'Home'">
        <button class="under" @click="homeClick">{{ $t("home") }}</button>
      </li>
      <li class="home" v-else>
        <button @click="homeClick">{{ $t("home") }}</button>
      </li>


      <li class="chisiamo" v-if="this.$store.state.pagina == 'Chisiamo'">
        <button class="under" @click="chiSiamoClick">{{ $t("chisiamo") }}</button>
      </li>
      <li class="chisiamo" v-else>
        <button @click="chiSiamoClick">{{ $t("chisiamo") }}</button>
      </li>


      <li class="contatti" v-if="this.$store.state.pagina == 'Contattaci'">
        <button class="under" @click="contattaciClick">{{ $t("contatti") }}</button>
      </li>
      <li class="contatti" v-else>
        <button @click="contattaciClick">{{ $t("contatti") }}</button>
      </li>
      
    </ul>
    <div class="layoutContent">
      <slot></slot>

    </div>
  </div>
</template>



<script>


export default {
  name: "LayoutComponent",
  
  props: {
    title: String,
  },


  methods:{
    homeClick(){
      this.$store.state.pagina = "Home"
      
    },
    
    chiSiamoClick(){
      this.$store.state.pagina = "Chisiamo" 
    },

    contattaciClick(){
      this.$store.state.pagina = "Contattaci" 
    }
  }
  
};

</script>
<style scoped>
  .main{
    width: 100%;
    display: flex;
  }
  .nav-bar{
    width: 30%;
    border: solid 1px black;
    padding: 5% 5%;
    margin: 0;
  }
  .layoutContent{
    width: 70% ;
    padding: 5% 5%;
    border: solid 1px black;
  }
  .under{
    text-decoration: underline;
  }
</style>