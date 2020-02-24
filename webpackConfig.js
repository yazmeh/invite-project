const path = require('path');
const process = require('process');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function processOptions(options){

    const currentlocation=process.cwd();
    const appName=options.appName||path.basename(currentlocation);
    const buildPath=path.resolve(currentlocation,`../../../public/build/${appName}`);
    const commonsPath=path.resolve(currentlocation,`../commons/app`);
    const entry=[...(options.entry||[]),path.resolve(currentlocation,`app/app.js`)];

    return {
        entry,
        appName,
        buildPath,
        commonsPath,
    }
}
function baseConfig(options={}){
    const {appName,buildPath,entry,commonsPath}=processOptions(options);
    const mode = process.env.NODE_ENV||'development';
    const config ={
        mode,
        entry,
        output:{
            path:buildPath,
            filename:'[name].js',
            publicPath:`/build/${appName}/`
        },
        resolve:{
            modules: ['app', 'node_modules'],
            alias:{
                commons:commonsPath,
            }
        }
    }
    if(mode==='development'){
        config['devtool']='inline-source-map'
    }
    const styleLoader=mode==='development'?'style-loader':{
        loader:MiniCssExtractPlugin.loader,
        options:{
            esModule: true,
        }
    }
    config['module']={
        rules:[
            {
                test:/\.s[ca]ss$/,
                use:[styleLoader,'css-loader','sass-loader'],
            },
            {
                test:/\.css$/,
                use:[styleLoader,'css-loader'],
            },
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                options: {
                    rootMode: "upward",
                },
                exclude:'/node_modules/'
            },
            {
                test:/\.vue?$/,
                loader:['vue-loader'],
                exclude:'/node_modules/'
            },

            // {
            //     test: /\.(eot|woff|woff2|svg|ttf|png)([\?]?.*)$/,
            //     use: [{
            //         loader:'file-loader',
            //         options:{
            //             publicPath:'build',
            //             postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`
            //         }
            //     }]
            // },
            // {
            //     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            //     use: ['url-loader?limit=10000']
            // }
        ]
    };
    if(mode!=='development'){
        config['module']['rules'].push({
            test: /\.(eot|woff|woff2|svg|ttf|png|jpe?g)([\?]?.*)$/,
            use: [{
                loader:'file-loader',
                options:{
                    //publicPath:`build/${appName}`,
                }
            }]
        })
    }
    else{
        config.module.rules.push(
            {
                test: /\.(png|jpe?g|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader']
            }
        )
    }
    config['plugins']=[
        //new HelloPlugin(),
        new VueLoaderPlugin(),
    ];
    if(mode!=='development'){
        config['plugins'].push(new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[id].css',
            allChunks:true,
          }),)
    }
    return config;
}
module.exports=baseConfig;
