var express = require('express')
var app = express()

app.use(express.static(__dirname + '/images'));
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/computer', function(req, res){
   res.render('computer', {computers: [{title:'Window',images:'1.jpg'}, 
                                 {title:'OSX',images:'2.jpg'},
                                 {title:'Android',images:'3.jpg'},
                                 {title:'IOS',images:'4.jpg'}] , com: 'Computer'})
})
app.listen(8000)