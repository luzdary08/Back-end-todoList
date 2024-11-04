import mongoose from "mongoose";

export const conection = async() =>{
    try {
        const db = await mongoose.connect('mongodb+srv://canalesloyolamariana:12345@prueba.w8n14.mongodb.net/todolist');
        console.log( 'Conexion realizada en el puerto:', db.connection.port);
        
    } catch (error) {
        console.log(error)
    }
}

