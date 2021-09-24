<template>


 

  <authentication-layout>

  <v-form  >
    <v-container  class="  mt-15 loginForm">

      <v-row align="center" justify="center" class="text-center" >
        <v-col
          
          md="4"
            
        >

        <label class="brown--text">تســـــــــــــــــــــــــــــــــــجيل الدخول</label>
        </v-col>
      </v-row>
      
      <v-row align="center" justify="center"  >
        <v-col
          
          md="4"
            
        >
       
    <v-text-field

             v-model="authInformation.email"
            label="البريد الألكتروني"
             type="email"
            required
         autocomplete="new-password"
             
            outlined
             
         :prepend-inner-icon="mdiEmailOutline"
          ></v-text-field>
        </v-col>
      </v-row>

       <v-row align="center" justify="center">
        <v-col
        
          md="4"
        >
           

           <v-text-field

             v-model="authInformation.password"
            label="كلمة المرور"
             type="password"
            required
        
            autocomplete="new-password"
            outlined
             
         :prepend-inner-icon="mdiLockOutline"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">

           <v-col
         
          md="4"
        >

        <v-btn
      depressed
      color="success"

      @click="login"
    >
      تســـــــــــــــــــــــــــــــــــجيل الدخول
    </v-btn>
     <v-btn
     
      color="error"
      @click="clear"
     class=" mr-5"
      min-width="5"
    >
      الغاء الأمر
    </v-btn>
           </v-col>
         
   
               
      </v-row>
       
    </v-container>
   
  </v-form>

  </authentication-layout>
 
</template>

<script>

import AuthenticationLayout  from '../../layouts/AuthenticationLayout.vue'

 import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';
import { mdiLockOutline } from '@mdi/js';
export default {
    name:"login",
    data(){
        return {
          mdiEmailOutline:mdiEmailOutline,
          mdiAccountCircleOutline:mdiAccountCircleOutline,
          mdiLockOutline:mdiLockOutline,
            authInformation:{
                email:"",
                password:""
            },
          
        }
    },

    components:{

           AuthenticationLayout,
     
    },

    methods:{
      
        login(){

            this.$store.dispatch('auth/login', this.authInformation) ;

        } ,

          clear: function (){

           this.authInformation.email = '' ;

           this.authInformation.password = '' ;

        },


}

}
</script>
<style scoped>
.loginForm{
 
    
}
</style>