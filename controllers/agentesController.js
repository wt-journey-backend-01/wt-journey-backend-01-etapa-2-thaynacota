const agentesRepository = require('../repositories/agentesRepository');

function getAll(req, res) {
  res.json(agentesRepository.findAll());
}

function getById(req, res) {
  const agente = agentesRepository.findById(req.params.id);
  if (!agente) return res.status(404).json({ message: 'Agente não encontrado' });
  res.json(agente);
}

function create(req, res) {
  try {
    const { nome, cargo, email } = req.body;

    if (!nome || !cargo || !email) {
      return res.status(400).json({ message: 'Nome, cargo e email são obrigatórios' });
    }

    const novoAgente = agentesRepository.create({ nome, cargo, email });
    return res.status(201).json(novoAgente);

  } catch (error) {
    console.error("Erro no create:", error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
}

function update(req, res) {
  const agenteAtualizado = agentesRepository.update(req.params.id, req.body);
  if (!agenteAtualizado) return res.status(404).json({ message: 'Agente não encontrado' });
  res.json(agenteAtualizado);
}

function patch(req, res) {
  const agenteAtualizado = agentesRepository.patch(req.params.id, req.body);
  if (!agenteAtualizado) return res.status(404).json({ message: 'Agente não encontrado' });
  res.json(agenteAtualizado);
}

function remove(req, res) {
    try {
        const { id } = req.params;
        const removido = agentesRepository.remove(id);
        
        if (!removido) {
            return res.status(404).json({ message: "Agente não encontrado" });
        }

        return res.status(204).send();
    } catch (err) {
        console.error("Erro no DELETE de agente:", err);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
}


module.exports = { getAll, getById, create, update, patch, remove };
