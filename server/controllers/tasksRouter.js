import mongoose from "mongoose";
import  taskModel from '../model/TaskModel.js'

export const postTask =async(req,res)=>{
    // console.log(req.body.params)
    try{
        console.log(req.body)
        return res.status(201).json({hi:3})
    }catch(e){
        return res.status(404).json({massage:'error',data:null})
    }
}

export const getTask =async(req,res)=>{
    try{
        console.log(res.body.params)
        return res.status(201).json({})
    }catch(e){
        return res.status(404).json({massage:'error',data:null})
    }
}