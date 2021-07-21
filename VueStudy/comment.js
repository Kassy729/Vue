Vue.component('comments', {
    template:`<div>
    <input type="text" v-model="user">
    <input type="text" v-model="comment">
    <button @click="save">Save</button><br>
        <ul>
            <li v-for = "msg in messages">
                <p>작성자 : {{ msg.user }} : {{ msg.comment }}</p>
            </li>
        </ul>
    </div>`,
    data(){
        return{
            user:null,
            comment:null,
            messages:[] 
        }
    },
    methods:{
        save(){
            const message = {
                user:this.user,
                comment:this.comment
            };

            this.messages.unshift(message)  //제일 앞에꺼를 사용
            this.user=null
            this.comment=null
        }
    }
});



let app = new Vue({
    el: '#app',
    // data:{
    //     user:null,
    //     comment:null,
    //     messages:[]
    // },
    // methods:{
    //     save(){
    //         const message = {
    //             user:this.user,
    //             comment:this.comment
    //         };

    //         this.messages.unshift(message)  //제일 앞에꺼를 사용
    //         this.user=null
    //         this.comment=null
    //     }
    // }
});