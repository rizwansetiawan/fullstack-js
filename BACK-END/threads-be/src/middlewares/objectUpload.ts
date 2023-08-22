import { NextFunction, Request,Response } from "express";
import * as multer from "multer";
import {v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name:"dkndf2exn",
  api_key:"647259742127437",
  api_secret:"KcklzjNf1x4BVYem5jK6M9YKCFE",
})

export const  UploadImage  = (fieldName:string)=>{
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, file.fieldname + '-' + uniqueSuffix + ".png")
    }
  })
  
  const uploadFile = multer({ storage: storage })
  
  return (req:Request,res:Response,next:NextFunction) => {
    uploadFile.single(fieldName)(req, res, function(err:any){
        const file = req.file
        if (!file) 
        return res.status(400).json({error:"file does not exixt"})
      try{
        cloudinary.uploader.upload(file.path,(error,result)=>{
          if(error){
            return res.status(500).json({error:"upload file error"})
          }
          console.log("hasil",result)
          res.locals.filename = result.secure_url;
          next()
        })
      }catch(err){
        return res.status(400).json({error:err})
      }
    })
  }
}
  