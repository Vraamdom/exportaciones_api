const {response} = require('express')

Exportacion = require('../models/exportaciones')

const getExportacion = async(req, res) => {
    const exportaciones = await Exportacion.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: exportaciones
    })
}

const postExportacion = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const exportacion = new Exportacion(datos) //Instanciar el objeto
        await exportacion.save()//Guardar en la base de dato  
        console.log(exportacion) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putExportacion = async(req, res) =>{
    const {id_p} = req.query
    try {
        const exportacion = await Exportacion.findOneAndUpdate({id_p: id_p},
            {producto:producto, kilos:kilos, precio_kilo:precio_kilo, precio_dolar_actual:precio_dolar_actual,})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteExportacion = async(req, res) =>{
    const {id_p} = req.query //Desestructurar
    try {
        const exportacion = await Exportacion.findOneAndDelete({id_p: id_p})
            resJson(exportacion)
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
  getExportacion,
  postExportacion,
  putExportacion,
  deleteExportacion
  
}
