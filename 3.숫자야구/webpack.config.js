const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path=require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions:['.js', '.vue'],
    },
    entry:{
        app: path.join(__dirname, './main.js'),
    },
    module:{
        rules:[{  //어떻게 합칠지 정해줌
            test:/\.vue$/,  
            loader:'vue-loader', 
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename: 'app.js',
        path:path.join(__dirname, './dist'),
    },    
};
