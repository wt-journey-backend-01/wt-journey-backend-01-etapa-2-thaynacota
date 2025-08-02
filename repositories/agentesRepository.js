const { v4: uuidv4 } = require('uuid');

const agentes = [
    {
        "id": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
        "nome": "João Silva",
        "cargo": "Agente de Segurança",
        "email": "joao.silva@empresa.com"
    },
    {
        "id": "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
        "nome": "Maria Souza",
        "cargo": "Supervisora de Operações",
        "email": "maria.souza@empresa.com"
    },
    {
        "id": "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
        "nome": "Carlos Oliveira",
        "cargo": "Analista de Inteligência",
        "email": "carlos.oliveira@empresa.com"
    }
];

function findAll() {
    return agentes;
}

function findById(id) {
    return agentes.find(agente => agente.id === id);
}

function create(data) {
  const novoAgente = {
    id: uuidv4(),
    nome: data.nome,
    cargo: data.cargo,
    email: data.email
  };
  agentes.push(novoAgente);
  return novoAgente;
}

function update(id, data) {
    const index = agentes.findIndex(a => a.id === id);
    if (index === -1) return null;
    agentes[index] = { id, ...data };
    return agentes[index];
}

function patch(id, data) {
    const agente = findById(id);
    if (!agente) return null;
    Object.assign(agente, data);
    return agente;
}

function remove(id) {
    const index = agentes.findIndex(a => String(a.id) === String(id));
    if (index === -1) {
        return false;
    }
    agentes.splice(index, 1);
    return true;
}

module.exports = { findAll, findById, create, update, patch, remove };
