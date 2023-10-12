import { NextFunction, Request,Response } from "express";
import * as multer from "multer";
import 'dotenv/config';

export const  UploadImage  = (fieldName:string)=>{
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/') // create folder for save image , folder name must same in destiantion func 
    },
    filename: function (req, file, cb) {
      const Suffix = Date.now() //for uniq name uploader user, when same file name execution be replacement in same name so use date now for alt name file it upload
      cb(null, file.fieldname + "-" + Suffix + ".png")
    }
  })
  
  const uploadFile = multer({ storage: storage }) //for save to storage which provide multer
  
  return (req:Request,res:Response,next:NextFunction) => {
          uploadFile.single(fieldName)(req, res, function(err){
    
          if(err){
            return res.status(400).json({error:"upload file error"})
          }
          res.locals.filename = req.file.filename;
          next()
    })
  }
}
  