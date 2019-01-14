
var Schemas = require('./schemas');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

register = {

    save:function(signupInstance){
        mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});
       
        var SignupModel = new Schema(Schemas.regSchema);
          
        var RegModel = mongoose.model('regusers',SignupModel );

        /**
        * Checks table is present or not in database
        */

        if(RegModel.find({}, function(err, data) {     
            
            if(data.length) {
                
                RegModel.insertMany(signupInstance,function(err,data){

                    if (err) return err;
                    console.log(data);
                    
                })

            } else {
              
                console.log("you have to create a collection");
                var regInstance = new RegModel(signupInstance);
              
                regInstance.save(function (err,res) {
                          
                    if (err) return err;    
                    console.log(res);
                
              });
            }

           }))
        
           saveData = function(){ }
    }


}

module.exports = register;