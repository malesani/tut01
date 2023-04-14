<template>
    <div>
        <button @click="callAPI">
            conttati
        </button>
        <div v-show="show == true">
            loading
        </div>
        <ul>
            <li v-for="(user, index) in userList" :key="index">
                {{ user.name }}
            </li>
        </ul>
    </div>

</template>


<script>
import axios from "axios";
    export default {
        name: "ContattiComponent",
        data(){
           return {
               show : false, 
               userList: []
            }
        },
        props:{
            title: String
        },

        
        methods:{
            callAPI(){
                this.show = true
                this.userList = []
                
                axios.get("https://jsonplaceholder.typicode.com/users")
        
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
            }
        }

   

    };
    

</script>