<template>

<v-app>

     <v-navigation-drawer
      absolute
      permanent
      right
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> {{ user.userName }} </v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list  >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          
       
        >
          <v-list-item-icon>
            <v-icon color="black"  >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
       <template v-slot:append>
         <v-divider></v-divider>
        <div class="pa-2">
          <v-btn block @click="logout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

   

      <v-main>
       <slot></slot>
    </v-main>



</v-app>
  
</template>

<script>

import { mdiViewDashboardOutline } from "@mdi/js";
import { mdiNoteCheckOutline } from '@mdi/js';

export default {

     data () {
      return {

        

        user :{

            userName:   this.$store.state.auth.user.name  , 

            email: this.$store.state.auth.user.email ,
        },

        items: [

          { title: 'معلومات', icon:  mdiViewDashboardOutline , route:'/Admin' },
          { title: 'المقالات الجديدة', icon:  mdiNoteCheckOutline , route:'/NewArticlesRequests' },

         
          

        ],

         
      }
    },

    methods: {
        logout:function(){

            this.$store.dispatch('auth/logout') ;


        }
    },

}
</script>

<style>

</style>