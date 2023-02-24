const MongoClient = require('mongodb').MongoClient;
const dburi = "mongodb+srv://adl-2:123456654321@cluster0.dcpowex.mongodb.net/test";
const client = new MongoClient(dburi)


module.exports =  async (req,res)=>{
    
    const {user,note} = req.body;   
    console.log('posting new note')

    // await client.connect()
    // const db =  client.db('Playground');
    // const notes = db.collection('Notes');
    // const data = {user:user,note:note}
    // await notes.insertOne(data)
    // client.close();
    
    res.send("ok")
}

