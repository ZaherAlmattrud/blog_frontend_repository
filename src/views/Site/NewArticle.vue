<template>
  <SiteLayout>
    <div class="NewArticlePage">
      <!-- <v-container class="group_1"> -->

          <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="newArticle.title"
      :counter="10"
      
      label="عنوان المقال"
      required
      :prepend-icon="mdiSubtitlesOutline"
    ></v-text-field>
     <v-file-input
   v-model="newArticle.image"  
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    label="الصورة"
  ></v-file-input>

      <v-textarea
         v-model="newArticle.content"
          outlined
          name="input-7-4"
          label="محتوى المقال"
          value=" "
        ></v-textarea>

    

  
 <v-btn
      color="success"
      
      @click="save()"
    >
      حفظ المقال
    </v-btn>
     

    <v-btn
      color="error"
      class="mr-4"
      @click="cancle()"
    >
      إلغاء الأمر
    </v-btn>

    
  </v-form>
      
    </div>
  </SiteLayout>
</template>

<script>
//import {mapState } from 'vuex';

import SiteLayout from "../../layouts/SiteLayout.vue";
import { mdiSubtitlesOutline } from '@mdi/js';

export default {
  name: "AllArticles",
  components: {
    SiteLayout,
  },
  data: () => ({
    mdiSubtitlesOutline:mdiSubtitlesOutline,
    alignments: ["start", "center", "end"],
    newArticle:{

      title:'',
      content:'',
      image:'',

    }
  }),

  methods: {
    
    save:function(){


    } ,

    cancle:function(){

       this.newArticle.title = '',
        this.newArticle.content = '',
         this.newArticle.image = ''

    }
  },

  computed: {},
};
</script>

<style>
.NewArticlePage {
  margin-top: 250px;
}
</style>