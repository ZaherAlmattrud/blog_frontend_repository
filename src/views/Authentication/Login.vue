<template>


 

  <authentication-layout>

  <v-form    >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
           align="center"
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

       <v-row>
        <v-col
          cols="12"
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
      <v-row>

           <v-col
          cols="12"
          md="4"
        >

        <v-btn
      depressed
      color="success"

      @click="login"
    >
      Login
    </v-btn>
           </v-col>
               <v-col
          cols="12"
          md="4"
        >
    <v-btn
      depressed
      color="error"
      @click="clear"
    >
      Cancel
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