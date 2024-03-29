import mongoose from "mongoose";


const fileSchema = mongoose.Schema({
    path:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    downloadCount:{
        type : Number,
        default: 0 ,
        required : true
    }
})

const File = mongoose.model('file', fileSchema)

export default File;

