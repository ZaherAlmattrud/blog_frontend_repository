<template>
  <admin-layout>
    <div class="dashboard-page">
      <v-container class="group_1">
        <v-row class="text-center">
          <!-- Articles info -->
          <v-col cols="3">
            <v-row>
              <v-col>
                <v-avatar color="white" size="62">
                  <v-icon>{{ allArticlesIcon }}</v-icon>
                </v-avatar>
              </v-col></v-row
            >
            <v-row
              ><v-col>{{ information.Articles }}</v-col></v-row
            >

            <v-row><v-col>المقالات</v-col></v-row>
          </v-col>

          <!-- New Article info -->

          <v-col cols="3">
            <v-row>
              <v-col>
                <v-avatar color="white" size="62">
                  <v-icon>{{ newArticlesIcon }}</v-icon>
                </v-avatar>
              </v-col></v-row
            >
            <v-row
              ><v-col>{{ information.newArticles }}</v-col></v-row
            >

            <v-row><v-col>المقالات الجديدة</v-col></v-row>
          </v-col>

          <!-- AllComments -->

          <v-col cols="3">
            <v-row>
              <v-col>
                <v-avatar color="white" size="62">
                  <v-icon>{{ commentsIcon }}</v-icon>
                </v-avatar>
              </v-col></v-row
            >
            <v-row
              ><v-col>{{ information.comments }}</v-col></v-row
            >

            <v-row><v-col> التعليقات</v-col></v-row>
          </v-col>

          <!-- users -->

          <v-col cols="3">
            <v-row>
              <v-col>
                <v-avatar color="white" size="62">
                  <v-icon>{{ usersIcon }}</v-icon>
                </v-avatar>
              </v-col></v-row
            >
            <v-row
              ><v-col>{{ information.users }}</v-col></v-row
            >

            <v-row><v-col> المستخدمين</v-col></v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="group_2">
        <v-row class="text-center">
          <v-col>
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="orange"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="black"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row class="text-center"> <v-col>نشاطات الكتابة خلال هذا العام</v-col></v-row>
      </v-container>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from "../../layouts/AdminLayout.vue";
import { mdiNoteMultipleOutline } from "@mdi/js";
import { mdiNoteCheckOutline } from "@mdi/js";
import { mdiCommentTextMultipleOutline } from "@mdi/js";
import { mdiAccountGroupOutline } from "@mdi/js";

export default {
  data() {
    return {
      allArticlesIcon: mdiNoteMultipleOutline,
      newArticlesIcon: mdiNoteCheckOutline,
      commentsIcon: mdiCommentTextMultipleOutline,
      usersIcon: mdiAccountGroupOutline,

      information: {
        Articles: 200,
        newArticles: 300,
        comments: 900,
        users: 1300,
      },

      labels: [ "1","2","3" , "4" ,"5" ,"6" ,"7" ,"8" ,  "9" ,"10" ,"11" ,"12"  ],
      value: [1,2,3,0,5,6,7,8,0,10,11,12],
    };
  },

  components: {
    AdminLayout,
  },
};
</script>

<style >
.dashboard-page {
  margin-right: 255px;
   
}

.group_1 {
  margin:10px;
  background-color: rgb(206, 232, 236);
  border-radius: 30px;
}

.group_2 {
   margin:10px;
  background-color: rgb(154, 182, 235);
  border-radius: 30px;
}
</style>