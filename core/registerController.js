
var Schemas = require('./schemas');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});    
var SignupModel = new Schema(Schemas.regSchema);
var RegModel = mongoose.model('regusers',SignupModel );

register = {

    save:function(signupInstance, callback){
        

        /**
        * Checks table is present or not in database
        */

        if( RegModel.find( {} , function(err, data) {     
            
            /**this condition is used to find usearname exist or not */
            if(RegModel.find( {"username":signupInstance.username} ,function(err,val) {
                if(err) console.log(err); 
                if(val.length) {
                    
                    callback("User already reg");
                    // console.log(val.length); 
                }
            }))
            
            if(data.length) {
                 
                RegModel.insertMany(signupInstance,function(err,data) {

                    if (err) return err;
                    console.log(data);
                    callback("User inserted");
                    
                } )

            } else {
              
                console.log("you have to create a collection");
                var regInstance = new RegModel(signupInstance);
              
                regInstance.save(function (err,res) {
                          
                    if (err) return err;    
                    console.log(res);
                    callback("New collection created with new user");
                
              });
            }
        

           } ) ){}
           
          
               
          
          
    }


}

module.exports = register;


