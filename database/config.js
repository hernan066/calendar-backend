const mongoose = require('mongoose');

const dbConecction = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
        });
        console.log('DB is connected');
    
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
    }
    };

    module.exports = {
        dbConecction
    };
