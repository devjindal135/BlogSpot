import mongoose from "mongoose"


const Connection= async (username,password) => {
    const URL=`mongodb+srv://${username}:${password}@cluster0.rsyu4fv.mongodb.net/?retryWrites=true&w=majority`;
    // const URL=`mongodb+srv://${username}:${password}@cluster0.rsyu4fv.mongodb.net/?retryWrites=true&w=majority`;     chirag
    try{
       await mongoose.connect(URL,{useNewUrlParser: true});
       console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting with the database', error);

    }
}
export default Connection;