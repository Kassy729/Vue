<template>
  <v-container>
    <v-row>
      <v-col v-for="count in 8" :key="count" cols="3" sm="6" md="4"> 
        <v-card class="pa-3" outlined>
          col
        </v-card> 
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>
