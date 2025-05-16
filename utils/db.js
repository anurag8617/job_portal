const mongoose = require('mongoose');
//connect to the database
const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/job');
        console.log('Database connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports=connectDB;