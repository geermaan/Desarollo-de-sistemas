var bcrypt=require("bcrypt-nodejs");
var mongoose = require("mongoose");

var SALT_FACTOR = 10;

var armaSchema = mongoose.Schema({
    nombre:{type:String,required:true},
    descripcion:{type:String,required:true},
    fuerza:{type:Number,require:true},
    categoria:{type:String,required:true},
    municion:{type:Boolean,require:true}    
});
armaSchema.methods.name = function(){
    return this.displayName || this.nombre;
}
var Arma = mongoose.model("Arma",armaSchema);
module.exports = Arma;