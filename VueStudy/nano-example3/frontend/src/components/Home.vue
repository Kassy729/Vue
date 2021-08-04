<template>
    <div>
        <p>{{err_msg}}</p>
        <v-container fluid>
            <v-data-iterator :items="books">
                <template v-slot:default="books">
                    <v-row>
                        <v-col v-for="book in books.items" :key="book.bookId" cols="4">
                            <v-card>
                                <v-img max-height="150" contain :src="book.cover"></v-img>
                                <v-divider></v-divider>
                                <v-card-title>
                                    <router-link :to="'/books/'+book.bookId">{{ book.title }}</router-link>
                                </v-card-title>
                                <v-card-subtitle>{{book.author}}</v-card-subtitle>
                            </v-card>
                        </v-col>
                    </v-row>
                </template>
            </v-data-iterator>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Home",
    data(){
        return {
            books:[],
            err_msg:''
        }
    },
    mounted() {
        axios.get('/api/books')
        .then(response=>{
            console.log(response.data)
            this.books = response.data
        })
        .catch(err=>{
            this.err_msg = err.err_msg
        })
    },
}
</script>