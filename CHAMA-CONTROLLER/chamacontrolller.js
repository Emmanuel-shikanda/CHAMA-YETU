const { render } = require("ejs")


module.exports=function(app){

app.get('/',function(req,res){
res.render('home');
})

//create-account

app.get('/register',function(req,res){

res.render('register');

});

//login
app.get('/login',function(req,res){

res.render('login');

})


//support-page

app.get('/support',function(req,res){
res.render('support')
})










}
















