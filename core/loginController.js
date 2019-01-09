//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;






loginAuth = {
    connect:function(){
        mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});
       
        var SomeModelSchema = new Schema({
            a_string: String,
            a_date: Date
          });
          
          
          var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
          
          var awesome_instance = new SomeModel({ name: 'awesome' });
          
          // Save the new model instance, passing a callback
          awesome_instance.save(function (err,res) {
          
              if (err) return handleError(err);
              console.log(res);
            
          });
       
        
    }
}
module.exports = loginAuth;