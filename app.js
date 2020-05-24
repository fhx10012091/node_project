let express = require('express')
let app = express()
let path = require('path')
let router = require('./router/router.js')
// 模板引擎
app.set('view engine', 'ejs')
// 静态页面
app.use(express.static(path.resolve(__dirname,'./public')))

app.get('/', router.showIndex)

app.listen(8080)