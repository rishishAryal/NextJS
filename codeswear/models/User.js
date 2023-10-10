const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name:{
        type: string,
        required: true,
        
    },
    password:{
        type:string,
        required: true,
    },
    email:{
        type:string,
        required: true,
        unique: true,
    
    
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
