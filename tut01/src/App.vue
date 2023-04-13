<template>
  <div >
   <LayoutComponent v-if="pagina === 'Home'">
    <HomeComponent />
  </LayoutComponent>

  <LayoutComponent v-if="pagina === 'Chisiamo'">
    <ChisiamoComponent />
  </LayoutComponent>

  <LayoutComponent v-if="pagina === 'Contattaci'">
    <ContattiComponent />
  </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from './components/LayoutComponent.vue';
import ContattiComponent from './components/ContattiComponent.vue';
import ChisiamoComponent from './components/ChisiamoComponent.vue';
import HomeComponent from './components/HomeComponent.vue'


export default {
  name: 'App',
  components: {
    LayoutComponent,
    ContattiComponent,
    ChisiamoComponent,
    HomeComponent
  },
  computed:{
    pagina(){
      return this.$store.state.pagina;
    }
  }
}
</script>

<style>


</style>
