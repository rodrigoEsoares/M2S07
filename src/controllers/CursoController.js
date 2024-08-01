const Curso = require("../models/Curso");

class CursoController {

  async criar(request, response) {
    try {
    
      const dados = request.body;

      if(!dados.nome || !dados.duracao){
      return response.status(400).json({mensagem: " O nome do curso e a duração são obrigatórios"});

      }
     
      const curso = await Curso.create(dados);
      return response.status(201).json(curso);
    } catch {
      response.status(500).json({
        mensagem: "Houve um erro ao cadastrar o curso",
      });
    }
  }


}

module.exports = new CursoController();
