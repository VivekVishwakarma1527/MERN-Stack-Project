import mongoose from "mongoose";

const DBconnection = async()=>{

    const MANGO_URL = `mongodb://vivekvish1527:kuva32jd8HI49bjj@ac-ohqz92a-shard-00-00.rwyrnnf.mongodb.net:27017,ac-ohqz92a-shard-00-01.rwyrnnf.mongodb.net:27017,ac-ohqz92a-shard-00-02.rwyrnnf.mongodb.net:27017/?ssl=true&replicaSet=atlas-vozo93-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(MANGO_URL),{newUrl : true};
        console.log("Connected successfully")
    }
    catch (error){
        console.error("Error :", error.message);
    }
}



export default DBconnection;
