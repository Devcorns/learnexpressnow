//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;






register = {
    sv:function(){
        mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});
       
        var SignupModel = new Schema({
            username:{type:String,minlength:6},
            fname:{type:String,minlength:2},
            lname:{type:String,minlength:2},
            mobile:{type:Number,minlength:10},
            date: { type: Date, default: Date.now },
            password:{ minlength:4,type:String }
          });
          
          var regModel = mongoose.model('signuptbl',SignupModel );
          var regInstance = new regModel({ 
              username:"mafia",
              fname:"Prakhar", 
              lname:"Mathur",
              mobile:"9716273125",
              password:"1234"
            });
          
          // Save the new model instance, passing a callback
          regInstance.save(function (err,res) {
          
              if (err) return err;
            
              console.log(res);
            
          });
       
        
    },
    

    saveuser:function(){
        mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});
       
        var RegistrationModel = new Schema({
            fname: String,
            lname:String,
            date: Date
          });
          
          
          var RegModel = mongoose.model('sign', RegistrationModel );
          
          var reg_instance = new RegModel({ fname: 'Prakhar',lname:'Mathur' });
          
          // Save the new model instance, passing a callback
          reg_instance.save(function (err,res) {
          
              if (err) return handleError(err);
              console.log(res);
            
          });
       
        
    }


}

module.exports = register;