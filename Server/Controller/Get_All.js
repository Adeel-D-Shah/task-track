const MongoClient = require('mongodb').MongoClient;
const dburi = "mongodb+srv://adl-2:123456654321@cluster0.dcpowex.mongodb.net/test";
const client = new MongoClient(dburi)


module.exports =  async (req,res)=>{
    const user = req.params.user
    console.log("Geting all tasks for User  "+user)

    const Tasks = await My_Notes(user)
    console.log(Tasks);
   // res.send(console.log(Tasks))
    res.json(Tasks)
}


async function My_Notes(user){

    await client.connect();
    const DB = client.db('Playground');
    const collection = DB.collection('Notes');

    const list = await collection.find({user:user},).toArray();
    client.close();
   
    return list

}

