// import { Request,Response } from "express";
// import * as multer from "multer";
// export default function UploadObjectImage (fieldName:string){
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const uploadFile = multer({ storage: storage })
//   return (req:Request,res:Response,nextFunction) => {
//     uploadFile.single("image")(req, res, function(err){
//         if (err) 
//         return res.status({err:"file upload failed"})
//     }
//     res.locals.fieldName = req.file.fielename;
//     next()
//   })
// }
  