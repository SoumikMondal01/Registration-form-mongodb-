const mongoose=require('mongoose');

const newschema=mongoose.Schema({

    name:String,
    email:String,
    password:String
});

const User = mongoose.model('studentinformation', newschema)
// module.exports=new mongoose.model('studentinformations', newschema);
module.exports = User;