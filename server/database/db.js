import mongoose from "mongoose";


const Connection= async(username,password)=>{

    const URL=`mongodb+srv://${username}:${password}@cluster0.xki5wr4.mongodb.net/blog?retryWrites=true&w=majority`;

    
      await mongoose.connect(URL)
         .then((ans)=>{
             console.log("db connected")
          })
          .catch((err)=>{
             console.log("Error in connection",error)
          });
      
}

export default Connection;