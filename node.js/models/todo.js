const mongoose = require('mongoose');

// Your mongoose-related code here

const login = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const admins=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const logins = mongoose.model('logins', login);
const admin=mongoose.model('admin',admins)
module.exports = {
    logins:logins,
    admin:admin
};
