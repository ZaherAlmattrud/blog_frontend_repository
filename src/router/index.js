import Vue from 'vue'

import VueRouter from 'vue-router'

import store from '../store/index'

// imports auth pages
import Login from '../views/Authentication/Login.vue'

import Register from '../views/Authentication/Register.vue'

// imports admin pages 

import Dashboard from '../views/Admin/Dashboard.vue'

import NewArticlesRequests from '../views/Admin/NewArticlesRequests.vue'

 


// imports site pages

import HomePage from '../views/Site/Home.vue'

import NewArticlePage from '../views/Site/NewArticle.vue'


Vue.use(VueRouter)

const AuthRoutes = [

  // login page route

  {
    path: '/login',
    name: 'Login',
    component: Login ,

    meta:{
      middleware:"guest",

   }

  } ,
  

    {

    path: '/Register',

    name: 'Register'
    ,
    component: Register,

    meta:{

      middleware:"guest",

   }

  } ,


] 


const AdminRoutes = [

  // index admin page
  {
    path: '/Admin',
    name: 'Admin',
    component: Dashboard ,

    meta:{

      middleware:"admin",
      

  },},


   // New articles request
   {
    path: '/NewArticlesRequests',
    name: 'NewArticlesRequests',
    component: NewArticlesRequests ,

    meta:{

      middleware:"admin",
      

  }},

]

const SiteRoutes = [

  {
    path: '/',
    name: 'Home',
    component: HomePage ,

    meta:{

      middleware:"guest",
      

  },
 

  } 

]

const LogedinRoutes =[

  

  {
    path: '/NewArticlePage',
    name: 'NewArticlePage',
    component: NewArticlePage ,

    meta:{

      middleware:"Logedin",
      
  },
 

  } 
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
 // routes

 routes:[

  ...AuthRoutes ,
  ...AdminRoutes,
  ...SiteRoutes,
  ...LogedinRoutes,

 ]


//  LogedinRoutes,


})

router.beforeEach((to, from, next) => {
 
  // access to admin pages
   if( to.meta.middleware=="admin"){

      
       if( store.getters['auth/isAdmin'] ){

           next();

       }else{

         
           next({name:'Login'})
          
       }
   }

   // access to pages require Logedin

   if( to.meta.middleware=="Logedin"){


    if( store.getters['auth/logged'] ){


      console.log( store.getters['auth/logged']);
      next();

    } else{

      console.log( store.getters['auth/logged']);
      next({name:'Login'})
     
    }

   }

 // access to other pages

  next()
 
})



export default router
