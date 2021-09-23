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
            v-model="user.name"
            label="Name"
            required
            autocomplete="new-password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
           align="center"
        >
          <v-text-field
            v-model="user.email"
            type="email"
            label="E-mail"
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
          <v-text-field
            v-model="user.password"
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
          <v-text-field

            v-model="user.password_confirmation"
            label="password confirmation"
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

      @click="register"
    >
      Register
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

     <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
       
       <label> Your account has been successfully created. Welcome!</label>
    </v-dialog>
  </v-row>
  </v-form>

    </authentication-layout>
</template>

<script>

import AuthenticationLayout  from '../../layouts/AuthenticationLayout.vue'
 

export default {

    name:'register',

    data(){
        return {

            dialog: false,
            user:{
                name:"",
                email:"",
                password:"",
                password_confirmation:""
            },
           
        }
    },

       components:{

           AuthenticationLayout,
     
    },
    methods: {

        register: function(){

                 this.$store.dispatch('auth/register', this.user) ;
                 
                 this.dialog = true;
        } ,

        clear: function (){

           this.user.name = '' ;

           this.user.email = '' ;

           this.user.password = '' ;

           this.user.password_confirmation = '' ;
        },

      
    }
}
</script>