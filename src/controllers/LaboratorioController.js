const Laboratorio = require("../models/Laboratorio");

class LaboratorioController {

  async criar(request, response) {
    try {
    
      const dados = request.body;

      if(!dados.nome || !dados.capacidade){
      return response.status(400).json({mensagem: " O nome do laboratório e a capacidade são obrigatórios"});

      }
     
      const laboratorio = await Laboratorio.create(dados);
      return response.status(201).json(laboratorio);
    } catch {
      response.status(500).json({
        mensagem: "Houve um erro ao cadastrar o laboratório.",
      });
    }
  }

  async listaTodos(request, response) {
    try {
      const laboratorios = await Laboratorio.findAll();
      response.json(laboratorios);
    } catch (error) {
      response.status(500).json({
        mensagem: "Houve um erro ao listar os laboratórios",
      });
    }
  }

  async listarUm(request, response) {
    try {
        const id = request.params.id

        const laboratorio = await Laboratorio.findByPk(id)

        if (!laboratorio) {
          return response
                .status(404)
                .json({ mensagem: 'Laboratório não encontrado.' })
        }

        response.json(laboratorio)

    } catch (error) {
        response.status(500).json({
            mensagem: 'Houve um erro ao listar o laboratório.'
        })
    }
}

  async atualizar(request, response) {
    try {
      const id = request.params.id;
      const dados = request.body;

      const laboratorio = await Laboratorio.findByPk(id);

      if (!laboratorio) {
        return response.status(404).json({ mensagem: "Laboratório não encontrado" });
      }

      laboratorio.nome = dados.nome ?? laboratorio.nome;
      laboratorio.capacidade = dados.capacidade ??  laboratorio.capacidade;
     
      
      await laboratorio.save();

      response.json(laboratorio);
    } catch (error) {
      response.status(500).json({
        mensagem: "Houve um erro ao atualizar o laboratório.",
      });
    }
  }

  async deletar(request, response) {
    try {
        const id = request.params.id
        const laboratorio = await Laboratorio.findByPk(id)

        if (!laboratorio) {
          return response
                .status(404)
                .json({ mensagem: 'Laboratório não encontrado.' })
        }

        await laboratorio.destroy()

        response.status(204).json()

    } catch (error) {
        response.status(500).json({
            mensagem: 'Houve um erro ao deletar o laboratório.'
        })
    }
}





}

module.exports = new LaboratorioController();
