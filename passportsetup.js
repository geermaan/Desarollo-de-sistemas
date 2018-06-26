var passport = require("passport");
var Zombie = require(".models/zombie");

var LocalStrategy = require("passport-local").Strategy;

module.exports = () => {
    passport.serializeUser((zombie,done)=>{
        done(null,zombie_id);
    });
    passport.deserializeUser((id,done)=>{
        Zombie.findByld(id,(err,zombie)=>{
        done(err,zombie);
        });
    });
};

passport.use("login", new LocalStrategy(function(username,password,done){
Zombie.findOne({username:username}, function(err, zombie){
    if(err){
return done(err);
    }
    if(!zombie){
        return done(null,false,{message:"no existe ningun combie con ese nombre"});
    }
 zombie.checkPassword(password,(err,isMatch)=>{
     if(err){
         return done(err);
     }
     if(isMatch){
         return done(null,false,{message:"la cotraseña no es valida"})
     }
    })
})
}
))