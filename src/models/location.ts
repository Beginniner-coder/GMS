import mongoose,{Schema,Document} from "mongoose";

export interface location extends Document{
    area:string
    branch:string
    pincode:number
    activeuser:string
    brachcode:number
    state:string

}


