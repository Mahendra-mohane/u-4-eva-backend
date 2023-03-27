const mongoose=require('mongoose')

const noteSchema=mongoose.Schema({ //kaunsa user wo  note 
    title:String,
    body:String,
    device:String,
    no_of_comments:Number,
    userID:String
},{
    versionKey:false
})

const NoteModel=mongoose.model("note",noteSchema);
module.exports=NoteModel;