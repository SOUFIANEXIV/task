import mongoose from 'mongoose'



const photoSchema=new mongoose.Schema(

    {
        
        image:{type:String , required:true},


    },{
        timestamps:true,
    }
);
mongoose.set('strictQuery', true);

const Photo =mongoose.models.Photo || mongoose.model('Photo',photoSchema)
export default Photo;
