  import axios from 'axios'
  import router from '../router'

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

// axios.defaults.headers.common['content-type'] = 'application/json'

// axios.defaults.headers.common['Accept'] = 'application/json'

export default {

    namespaced: true,

    state:{

        isAdmin:false,

        logged: false,

        token:'',

        user:{}
    },
    getters:{
        isAdmin(state){

            return state.isAdmin
        },
        token(state){
            return state.token
        },
        logged(state){
            return state.logged
        },
        user(state){
            return state.user
        }
    },
    mutations:{

        SET_ISADMIN(state,value){

            state.isAdmin = value
        },

        SET_TOKEN(state,value){

             state.token = value
        },
        SET_LOGGED (state, value) {

            state.logged = value
        },
        SET_USER (state, value) {

            state.user = value
        }
    },
    actions:{

        login( {commit , state},authInformation ){

         // console.log(authInformation) ;

         let formData = new FormData();

         formData.append('email',authInformation.email);

         formData.append('password',authInformation.password);

         axios.post('login', formData ).then(function( response){
            // Handle success
            console.log(response);

            let token = response.data.data.token ;

            let user = response.data.data.user;

            let isAdmin = response.data.data.isAdmin;


            if(user){

                commit('SET_LOGGED',true);
                
                commit('SET_TOKEN', token);

                commit('SET_USER',user);

                if(isAdmin==1){

                    commit('SET_ISADMIN', true);

                } else{

                    commit('SET_ISADMIN', false);


                }

            }
            

            // Redirect the user to the appropriate page based on the role

            if(state.isAdmin){


                console.log( state.isAdmin )

                router.push({name:"Admin"});

            } else{

                router.push({name:"Home"});

            }

            //


        }).catch(function (error){

            console.log(error)

            router.push({name:"login"})

        }).finally(function(){


        })



               
        },

        register({commit},user){

          //  console.log(user);

          let formData = new FormData();

          formData.append('name', user.name);

          formData.append('email',user.email);

          formData.append('password',user.password);

          formData.append('c_password',user.password_confirmation);

          axios.post('register', formData ).then(function( response){
            // Handle success
            console.log(response);

            commit('SET_TOKEN', '');

            router.push({name:"Login"})

            

        }).catch(function (error){

            console.log(error)

            router.push({name:"Register"})

        }).finally(function(){


        })



        },


        logout({commit,state}){

            let yourConfig = {

                headers: {
                   "Authorization": "Bearer " + state.token ,
                   "content-type": "application/json",
                   "Accept": "application/json"
                }
             }
          
         
            axios.get('logout', yourConfig ).then(function( response){

               // Handle success
                
               console.log(response);

               commit('SET_LOGGED',false);
                
               commit('SET_TOKEN', '');

               commit('SET_USER','');

               commit('SET_ISADMIN', false);

               router.push({name:"Login"})
                
    
            }).catch(function (error){
    
                console.log(error)
    
    
            }).finally(function(){
    
                 
            })

          
        }
    }
}