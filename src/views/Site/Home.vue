<template>


<SiteLayout>
  <div class="HomePage">
  
  </div>

</SiteLayout>
</template>

<script>

//import {mapState } from 'vuex';

import SiteLayout from '../../layouts/SiteLayout.vue'

export default {

     
    components:{
SiteLayout

    },
    data: () => ({
      
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),

    computed:{


    },

}
</script>

<style>

.HomePage{

   margin-top: 250px;


}

</style>