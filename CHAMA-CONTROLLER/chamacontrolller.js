const { render } = require("ejs")


module.exports=function(app){

app.get('/',function(req,res){
res.render('home');
})



//support-page

app.get('/support',function(req,res){
res.render('support')
})


app.get('/dashboard',function(req,res){
res.render('dashboard')
})


app.get('/member',function(req,res){
res.render('member')

})





}
















