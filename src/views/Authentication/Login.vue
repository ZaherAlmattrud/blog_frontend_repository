<template>


 

  <authentication-layout>

  <v-form   >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
           align="center"
        >
          <v-text-field
            v-model="authInformation.email"
            label="E-mail"
            required
              type="email"
            autocomplete="new-password"
             
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
            label="Password"
             type="password"
            required
            autocomplete="new-password"
          
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
      color="primary"

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

 
export default {
    name:"login",
    data(){
        return {
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