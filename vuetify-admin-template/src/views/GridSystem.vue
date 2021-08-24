<template>
  <v-container fluid>
    <v-card class="mt-5 pa-3">
      <v-row>
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row :style="{height: '120px'}" class="red" align="start">
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row :style="{height: '120px'}" class="red" align="start">
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>
