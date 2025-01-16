import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/"
const dbName = "cd_backend1"
export default function mongoConnect(){

  try {
    mongoose.connect(`${uri}${dbName}`)
    console.log("Connected to mongo successfully!") 
  } catch (error) {
    console.log(error)
    console.log("Connection to mongo failed!")
  }
}
