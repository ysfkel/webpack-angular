module.exports={
    context:__dirname+'/app',
    entry:'./index.js',
    output:{
        path:__dirname+'/app',
        filename:'bundle.js'
    },
    // module:{
    //     loaders:[
    //         {
    //            test: /\.jsx?$/,
    //             loader:'babel',
    //             exclude: /(node_modules|bower_components)/,
    //             query: {
    //                 presets: ['es2015']
    //             }
    //             //query:{compact:false}
    //         }//use the babel loader to load all files that end with ,js
    //     ]
    // }
} 