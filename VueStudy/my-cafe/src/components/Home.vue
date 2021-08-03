<template>
    <div id="app">
        <h1>Welcome {{ userId }}</h1>
        <v-text-field v-model="newId" type="text"></v-text-field><v-btn rounded
            color="primary"
            dark @click="saveUserId">Save</v-btn><br>

        <button @click="updateReviews">Update</button>
        <h1>{{ reviewCount }}</h1>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in reviews" :key="item">
                        <td>{{ item.name }}</td>
                        <td>{{ item.body }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

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

<style>

</style>