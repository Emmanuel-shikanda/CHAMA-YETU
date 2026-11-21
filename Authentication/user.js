let Routes = require('express');

let auth = Routes();

let authController = require('../CHAMA-CONTROLLER/user');




auth.get('/register',authController.register_get);

auth.post('/register',authController.register_post);

auth.get('/login',authController.login_get);

auth.post('login',authController.login_post);








module.exports=auth;



































