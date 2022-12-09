import Photo from '../../models/Photo'

import initDB from '../../utils/initDB'


initDB()

export default async (req,res)=>{
  switch (req.method)
    {
       case "GET":
         await getallPhoto(req,res)
         break
       case "POST":
         await savePhoto(req,res)   
         break
    }  
}


const getallPhoto = async (req,res)=>{
  try{
    const photos =  await Photo.find()
    
    res.status(200).json(photos)
  }catch(err){
    console.log(err)
  }
  
}


const savePhoto = async (req,res)=>{
 
  const {image} =  req.body
  try{
      if(!image){
    return res.status(422).json({error:"Please add Photo"})
  }
   const photo = await new Photo({
   
     image
   }).save()
   res.status(201).json(photo)
  }catch(err){
    res.status(500).json({error:"internal server error"})
    console.log(err)
  }


}