Schema = {
    regSchema:{
        username:{type:String,minlength:6,unique:true,lowercase:true},
        fname:{type:String,minlength:2},
        lname:{type:String,minlength:2},
        mobile:{type:Number,minlength:10},
        date: { type: Date, default: Date.now },
        password:{ minlength:4,type:String }
    }
}




module.exports = Schema;