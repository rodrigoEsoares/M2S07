const {Router} = require('express')
const LaboratorioController = require('../controllers/LaboratorioController')



const laboratoriosRoutes = new Router()


laboratoriosRoutes.get('/', LaboratorioController.listaTodos)
laboratoriosRoutes.get('/:id', LaboratorioController.listarUm)
laboratoriosRoutes.post('/', LaboratorioController.criar)
laboratoriosRoutes.delete('/:id', LaboratorioController.deletar)
laboratoriosRoutes.put('/:id', LaboratorioController.atualizar)



module.exports = laboratoriosRoutes