const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema(
    {
        type: Object,
        properties: {
            nombre: { type:String },
            apellidoPaterno: { type:String }, 
            apellidoMaterno: { type:String },
            correo: { type:String }, 
            contrasena: { type:String }
        }
    }
    

);

module.exports = mongoose.model("Cliente", clienteSchema)