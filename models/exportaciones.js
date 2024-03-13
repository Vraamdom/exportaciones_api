const {Schema, model, trusted} = require('mongoose')

const ProductoSchema = ({
    id_p:{
        type: Number,
        unique:true,
        required:[true, 'El id del producto es necesario']
    },
    producto:{
        type: String,
        unique:false,
        required:[true, 'El nombre del producto es necesario']
    },

    kilos:{
        type:Number,
        unique: false,
        required:[true, 'La kilos del producto son necesarios'],
    },

    precio_kilo: {
        type:Number,
        unique: false,
        required:[true, 'La hora inicial del evento es requeriada'],
    },

    precio_dolar_actual: {
        type:Number,
        required: [true, 'El encargado de la fundacion es requerido']
    }
})


module.exports = model('Producto', ProductoSchema)