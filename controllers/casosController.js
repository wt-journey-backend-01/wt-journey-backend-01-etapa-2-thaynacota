const casosRepository = require('../repositories/casosRepository');

function getAll(req, res) {
  res.json(casosRepository.findAll());
}

function getById(req, res) {
  const caso = casosRepository.findById(req.params.id);
  if (!caso) return res.status(404).json({ message: 'Caso não encontrado' });
  res.json(caso);
}

function create(req, res) {
  const { titulo, descricao, status, agente_id } = req.body;
  if (!titulo || !descricao || !status || !agente_id) {
    return res.status(400).json({ message: 'Campos obrigatórios não preenchidos' });
  }
  if (!['aberto', 'solucionado'].includes(status)) {
    return res.status(400).json({ message: "O campo 'status' deve ser 'aberto' ou 'solucionado'" });
  }
  const novoCaso = casosRepository.create({ titulo, descricao, status, agente_id });
  res.status(201).json(novoCaso);
}

function update(req, res) {
  const casoAtualizado = casosRepository.update(req.params.id, req.body);
  if (!casoAtualizado) return res.status(404).json({ message: 'Caso não encontrado' });
  res.json(casoAtualizado);
}

function patch(req, res) {
  const casoAtualizado = casosRepository.patch(req.params.id, req.body);
  if (!casoAtualizado) return res.status(404).json({ message: 'Caso não encontrado' });
  res.json(casoAtualizado);
}

function remove(req, res) {
    try {
        const { id } = req.params;
        const removido = casosRepository.remove(id);
        
        if (!removido) {
            return res.status(404).json({ message: "Caso não encontrado" });
        }

        return res.status(204).send();
    } catch (err) {
        console.error("Erro no DELETE do caso:", err);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
}

module.exports = { getAll, getById, create, update, patch, remove };
