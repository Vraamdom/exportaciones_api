const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getExportacion, postExportacion, putExportacion, deleteExportacion } = require('../controllers/exportanciones')

route.get('/', getExportacion)

route.post('/', postExportacion)

route.put('/id_p', putExportacion)

route.delete('/id_p', deleteExportacion)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 
