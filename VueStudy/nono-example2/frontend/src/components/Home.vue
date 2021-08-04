<template>
    <div>
        <p>{{ err_msg }}</p>
        <v-container fluid>
            <v-data-iterator :items="books" hide-default-footer hide-default-header>                  
                <template v-slot:default="books">
             <!--props에 item이라는 속성이 books 이다-->
                    <v-row>
                        <v-col v-for="book in books.items" :key="book.bookId" cols="4">  <!-- props -->
                            <v-card>
                                <v-img max-height="150" contain :src="book.cover"></v-img>
                                <v-divider></v-divider> <!--divider의 의미는??-->
                                <v-card-title>
                                    <router-link :to="'/books/' + book.bookId">{{ book.title }}</router-link>
                                </v-card-title>
                                <v-card-subtitle>{{ book.author }}</v-card-subtitle>
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
        .catch(err => {
            this.err_msg = err.err_msg
        })
    },
}
</script>