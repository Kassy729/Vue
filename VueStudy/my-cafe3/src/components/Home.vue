<template>
    <div id="app">
        <h1>Welcome{{userId}}</h1>
        <v-text-field  v-model="newId" type="text"/><button @click="saveUserId">Save</button>
        <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
      @click="saveUserId"
    >
      Save
    </v-btn>
  </div>
        <!-- <v-text-field :rules="rules"></v-text-field> -->
        <div @click="updateReviews">Update</div>
        <h1>{{reviewCount}}</h1>

        <template>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="r in reviews" :key="r.id">
                            <td>{{r.name}}</td>
                            <td>{{r.body}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </template>
        <ul>
            <li v-for="r in reviews" :key="r.id">
                <p>{{r.body}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import{ mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    data(){
        return { newId:''}
    },
    computed:{
        ...mapState({
            userId:state=>state.user.userId
        }),
        ...mapState('reviews', {
            reviews:state=>state.reviews
        }),
        ...mapGetters('reviews', ['reviewCount'])
    },
    methods:{
        // updateUserId(){
        //     this.$store.commit('updateUserId', this.newId)
        // },
        // updateReviews(){
        //     // this.$store.dispatch('getReviews')
        //     this.$store.dispatch('reviews/getReviews')
        // }
        ...mapMutations(['updateUserId']),
        ...mapActions('reviews', ['getReviews']),
        saveUserId(){
            this.updateUserId(this.newId)
        },
        updateReviews(){
            this.getReviews()
        }
    }
};
</script>





