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
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(ButtonPlugin);

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

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

</style>
