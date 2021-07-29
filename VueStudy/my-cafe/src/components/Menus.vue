<template>
    <div id="app">
        <h1>{{ menu_name }}</h1>
    </div>
</template>

<script>
export default {
    name:'Menus',
    computed:{
        menu_name(){
            const id = this.$route.params.menu_id
            if(id=='1')
                return '아이스 아메리카노'
            else if(id=='2')
                return '카페라떼'
            else
                return 'Menus'
        },
        searched_menu(){
            const id = this.$route.query.menu_id
            if(id=='1')
                return '아이스 아메리카노'
            else if(id=='2')
                return '카페라떼'
            else
                return ''
        }
    }
};
</script>