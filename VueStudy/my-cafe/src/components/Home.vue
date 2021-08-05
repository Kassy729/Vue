<template>
    <div id="app">
        <h1>Welcome{{ $store.state.user.userId }}</h1>
        <input v-model="newId" type="text"><button @click="saveUserId">Save</button><br>
        <button @click="updateReviews">Update</button>
        <h1>{{ $store.getters.reviewCount }}</h1>
        <ul>
            <li v-for="r in $store.state.reviews.reviews" :key="r.id">
                <p>{{ r.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return {newId:''}
    },
    methods:{
        updateUserId(){
            this.$store.commit('updateUserId', this.newId)
        },
        updateReviews(){
            this.$store.dispatch('getReviews')
        }
    }
}
</script>

<style>

</style>