<template>
    <div>
        작성자 : <input v-model="writer" placeholder="작성자" type="text"><br>
        제목 : <input v-model="title" placeholder="제목" type="text"><br>
        내용 : <input v-model="content" placeholder="내용" type="text"><br>
                <button @click="index !== undefined ? update() : write()">{{index !== undefined ? '수정' : '작성'}}</button>

    </div>
</template>

<script>
import data from '/data'

export default {
    name:'Create',
    data(){
        const index = this.$route.params.contentId;
        return {
            data:data,
            index: index,
            writer: index !== undefined ? data[index].writer : "",
            title: index !== undefined ? data[index].title : "",
            content: index !== undefined ? data[index].content : "",
        }
    },
    methods:{
        write(){
            this.data.push({
                writer: this.writer,
                title: this.title,
                content: this.content,
            })
            this.$router.push({
                path:'/'
            })
        },
        update() {
            data[this.index].writer = this.writer
            data[this.index].title = this.title
            data[this.index].content = this.content
            this.$router.push({
                path:'/'
            })
        },
        
    }

}
</script>