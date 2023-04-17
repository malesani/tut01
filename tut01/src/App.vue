<template>
  <div >
    <select @change="changeLanguage">
      <option v-for="(language,index) in languages" :key="index"> 
        {{ language }}
      </option>
    </select>


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
import Vue from 'vue';
import VueI18n from 'vue-i18n'

import LayoutComponent from './components/LayoutComponent.vue';
import ContattiComponent from './components/ContattiComponent.vue';
import ChisiamoComponent from './components/ChisiamoComponent.vue';
import HomeComponent from './components/HomeComponent.vue'


import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

Vue.use(ButtonPlugin, DialogPlugin, VueI18n);



export default {
  name: 'App',
  data(){
    return{
      languages: [
        "en",
        "fr",
        "it"
      ],
      userList:[]
    }
  },

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
  },

  methods:{
    changeLanguage(option){
      this.$i18n.locale = option.target.value
    }
  }
}
</script>

<style>

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

</style>
