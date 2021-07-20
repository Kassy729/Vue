const app = new Vue({
    el:'#app',
    data:{
        product:'Socks',
        brand:'CDG',
        selectedVariant:0,
        inStock:true,
        details:[
            '80% cotton', '20% polyester', 'Gender-neutral'
        ],
        variants:[
            {
                variantId:2234,
                variantColor:'green',
                variantImage:'/excercise/assets/images/socks_green.jpg'
            },
            {
                variantId:2235,
                variantColor:'blue',
                variantImage:'/excercise/assets/images/socks_blue.jpg'
            }
        ],
        cart:0
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        }
    }
});