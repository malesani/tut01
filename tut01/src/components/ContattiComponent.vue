<template>
    
    <div>
        <ejs-button @click.native="callAPI">
            conttati
        </ejs-button>
        <div v-show="show == true">
            loading
        </div>
        <ul>
            <li v-for="(user, index) in userList" :key="index">
                {{ user.name }}
            </li>
        </ul>
        <div id="modalTarget" class="control-section; position:relative" style="height:350px;">

            <!-- Render Button to open the modal Dialog -->
            <ejs-button id='modalbtn' v-on:click.native="modalBtnClick">Open</ejs-button>

            <!-- Render modal Dialog -->
            <ejs-dialog ref="modalDialog"  
            :isModal='isModal' 
            :header='header' 
            :target='target' 
            :width='width' 
            :animationSettings='animationSettings'
            :content='content' 
            :open="modalDlgOpen" 
            :close="modalDlgClose" 
            :overlayClick="overlayClick"
            :visible="false">
            </ejs-dialog>
        </div>

    </div>

</template>


<script>
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import axios from "axios";
Vue.use( DialogPlugin);

    export default {
        name: "ContattiComponent",
        data(){
           return {
               show : false, 
               userList: [],
               target: "#modalTarget",
                width: '335px',
                header: 'Software Update',
                content: 'Your current software version is up to date.',
                isModal: true,
                animationSettings: { effect: 'None' },
                showModele : false, 
            }
        },
        props:{
            title: String
        },

        
        methods:{
            callAPI(){
                this.show = true
                this.userList = []
                
                axios.get("https://jsonplaceholder.typicode.com/users", {headers: {"BSS-AZIENDA": "*"}})
        
                .then(res => {
                    const stopLoad = () => {
                        this.show = false
                        this.userList = res.data;
                        console.log(this.userList)
                    }

                    setTimeout(stopLoad, 500)


                })
                .catch(error => {
                    console.log(error)
                })
            },

            modalBtnClick: function() {
                
                this.$refs.modalDialog.show();
            },
          
            overlayClick: function() {
                this.$refs.modalDialog.hide();
            }
        }
    };
    

</script>

<style scoped>

 
</style>

