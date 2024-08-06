const Curso = require("../models/Curso");
const { Op } = require('sequelize')
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

  async listaTodos(request, response) {
    try {
      const cursos = await Curso.findAll();
      response.json(cursos);
    } catch (error) {
      response.status(500).json({
        mensagem: "Houve um erro ao listar os curso",
      });
    }
  }

  async listarUm(request, response) {
    try {
        const id = request.params.id

        const curso = await Curso.findByPk(id)

        if (!curso) {
          return response
                .status(404)
                .json({ mensagem: 'Curso não encontrado' })
        }

        response.json(curso)

    } catch (error) {
        response.status(500).json({
            mensagem: 'Houve um erro ao listar o curso'
        })
    }
}

  async atualizar(request, response) {
    try {
      const id = request.params.id;
      const dados = request.body;

      const curso = await Curso.findByPk(id);

      if (!curso) {
        return response.status(404).json({ mensagem: "Curso não encontrado" });
      }

      curso.nome = dados.nome ?? curso.nome;
      curso.duracao = dados.duracao ??  curso.duracao;
     
      
      await curso.save();

      response.json(curso);
    } catch (error) {
      response.status(500).json({
        mensagem: "Houve um erro ao atualizar o curso",
      });
    }
  }

  async deletar(request, response) {
    try {
        const id = request.params.id
        const curso = await Curso.findByPk(id)

        if (!curso) {
          return response
                .status(404)
                .json({ mensagem: 'Curso não encontrado.' })
        }

        await curso.destroy()

        response.status(204).json()

    } catch (error) {
        response.status(500).json({
            mensagem: 'Houve um erro ao deletar o curso.'
        })
    }
}





}

module.exports = new CursoController();
