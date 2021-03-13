const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const comidaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true, 
      requrie: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000
    },
    ingredients: { 
        type: Array, 
        items: { 
            type: Object, 
            properties: { 
                name: { type:String }
            }
        },
    price: {
      type: Number,
      trim: true,
      require: true,
      maxlength: 32,
    },
    quantity: {
      type: Number,
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
}
);

module.exports = mongoose.model("Comida", comidaSchema);