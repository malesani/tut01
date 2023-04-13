<template>
  <div class="main">
    <ul class="nav-bar">
      <li><button @click="homeClick">Home</button></li>
      <li><button @click="chiSiamoClick">Chisiamo</button></li>
      <li><button @click="contattaciClick">Contatti</button></li>
      
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

</style>