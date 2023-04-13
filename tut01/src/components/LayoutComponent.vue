<template>
  <div class="main">
    <ul class="nav-bar">
      <li class="home" v-if="this.$store.state.pagina == 'Home'">
        <ejs-button class="under" @click="homeClick">Home</ejs-button>
      </li>
      <li class="home" v-else>
        <ejs-button @click="homeClick">Home</ejs-button>
      </li>


      <li class="chisiamo" v-if="this.$store.state.pagina == 'Chisiamo'">
        <ejs-button class="under" @click="chiSiamoClick">Chisiamo</ejs-button>
      </li>
      <li class="chisiamo" v-else>
        <ejs-button @click="chiSiamoClick">Chisiamo</ejs-button>
      </li>


      <li class="contatti" v-if="this.$store.state.pagina == 'Contattaci'">
        <ejs-button class="under" @click="contattaciClick">Contatti</ejs-button>
      </li>
      <li class="contatti" v-else>
        <ejs-button @click="contattaciClick">Contatti</ejs-button>
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