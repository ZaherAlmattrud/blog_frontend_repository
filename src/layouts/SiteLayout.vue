<template>
   <v-app>
   
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
       
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      

      <v-toolbar-title>مدونتي</v-toolbar-title>

      <v-spacer></v-spacer>

       <v-btn     left icon>
        <v-icon>{{mdiWebBox}}</v-icon>
      </v-btn>

       <v-btn   v-if="this.$store.state.auth.logged" @click="logout()" left icon>
        <v-icon>{{mdiLogout}}</v-icon>
      </v-btn>
      

      <!-- <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <template v-slot:extension>
        <v-tabs align-with-title>
          
      <v-tab> <router-link to="/" style="text-decoration: none; color: inherit;">الرئيسية</router-link> </v-tab>
      
      <v-tab> <router-link to="/MedicineArticles" style="text-decoration: none; color: inherit;">الطب</router-link> </v-tab>
             
           <v-tab> <router-link to="/EngineeringArticles" style="text-decoration: none; color: inherit;">الهندسة</router-link> </v-tab>
                <v-tab> <router-link to="/SciencesArticles" style="text-decoration: none; color: inherit;">العلوم</router-link> </v-tab>
                     <v-tab> <router-link to="/PolicyArticles" style="text-decoration: none; color: inherit;">السياسة</router-link> </v-tab>
                          <v-tab> <router-link to="/EconomieArticles" style="text-decoration: none; color: inherit;">الأقتصاد</router-link> </v-tab>
                               <v-tab> <router-link to="/SportsArticles" style="text-decoration: none; color: inherit;">الرياضة</router-link> </v-tab>
                              
 <v-tab> <router-link to="/NewArticlePage" style="text-decoration: none; color: inherit;">مقال جديد</router-link> </v-tab>
                              
      </v-tabs>

    
      </template>
    </v-app-bar> 
  
 

    <v-main>

      <v-container  >
  
   

   <slot></slot>
   
      </v-container>

    </v-main>


    <v-footer dark padless color="#546E7A"  >
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>تطوير المهندس : زاهر محي الدين المطرود</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <!------------------------->
  </v-app>
</template>

<script>
import { mdiLogout } from '@mdi/js';
import { mdiWebBox } from '@mdi/js';
export default {

  data() {
    return {

      mdiLogout:mdiLogout,
      mdiWebBox:mdiWebBox,

      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
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