import mongoose,{Schema,Document} from "mongoose";


export interface user extends Document{
    name:string
    password:string
    email:string
    location:mongoose.Types.ObjectId    
    pending:number
    complete:number
}









