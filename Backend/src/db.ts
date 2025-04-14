import mongoose, {model,Schema} from "mongoose"

mongoose.connect("mongodb+srv://vanshraj50:NBCBhJ299wIwSE2O@cluster0.tolc9.mongodb.net/brainly");

const UserSchema = new Schema({
    username:{type:String , unique:true},
    password:String
})
mongoose.set('strictPopulate', false);
const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    type:String,
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}
})
const LinkSchema = new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true,unique:true}
    

})

export const UserModel = model("User",UserSchema);
export const ContentModel = model("Content",ContentSchema);
export const LinkModel = model("links",LinkSchema)