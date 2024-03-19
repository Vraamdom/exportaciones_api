const {Schema, model, trusted} = require('mongoose')

const ProductoSchema = ({
    id:{
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
        required:[true, 'eL precio del kilo es necesario'],
    },

    precio_dolar_actual: {
        type:Number,
        required: [true, 'El precio del dolar es necesario']
    }
})


module.exports = model('Producto', ProductoSchema)
