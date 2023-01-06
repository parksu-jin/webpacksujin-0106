// 불러들이기 혹은 설정 
const path = require('path')
const Htmlplugin =require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  // 파일이 읽어지는 시작점(main.js가될거임)
  entry:'./js/main.js',

  // 결과물을 보내는 장소
  output:
  // resolve()에서는 위치랑 홀더이름을 만들어놓으면 됨
 {  
    // 디폴트 값이다
    // path:path.resolve(__dirname,'dist'),
    // filename:'main.js',
    clean:true
},
  module:{
    rules:[
      {
        // 어떤 파일을 검색해야 하는지 
        test:/\.s?css$/,
        // 사용할 loader를 넣어준다 순서가 중요함
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:[
             'babel-loader'
        ]
      }
    ]
  },

  plugins:[
   new Htmlplugin({
    template : './index.html'
   }),
   new CopyPlugin({
    patterns: [{
     from: 'static' 
    }]
    })
  ]
}