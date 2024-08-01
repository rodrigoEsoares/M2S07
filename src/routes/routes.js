const { Router } = require('express')


const routes = new Router()

routes.get('/cursos', (request, response)=>{

    response.send("seja bem vindo")

})




module.exports = routes