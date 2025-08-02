const { v4: uuidv4 } = require('uuid');

const casos = [
  {
    "id": "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
    "titulo": "Homicídio",
    "descricao": "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
    "status": "aberto",
    "agente_id": "401bccf5-cf9e-489d-8412-446cd169a0f1"
  },
  {
    "id": "8e2e9c7a-1b3d-4f5a-9e6b-0c7d8e9f0a1b",
    "titulo": "Roubo a Banco",
    "descricao": "Quatro indivíduos armados invadiram a agência bancária do centro às 14:15 do dia 05/03/2023, levando aproximadamente R$ 250.000,00.",
    "status": "investigação",
    "agente_id": "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e"
  },
  {
    "id": "3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d",
    "titulo": "Fraude Eletrônica",
    "descricao": "Transações bancárias não autorizadas totalizando R$ 78.500,00 foram detectadas em 12 contas diferentes entre os dias 01/01/2024 e 15/01/2024.",
    "status": "fechado",
    "agente_id": "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f"
  }

];

function findAll() {
  return casos;
}

function findById(id) {
  return casos.find(c => c.id === id);
}

function create(data) {
  const novoCaso = { id: uuidv4(), ...data };
  casos.push(novoCaso);
  return novoCaso;
}

function update(id, data) {
  const index = casos.findIndex(c => c.id === id);
  if (index === -1) return null;
  casos[index] = { id, ...data };
  return casos[index];
}

function patch(id, data) {
  const caso = findById(id);
  if (!caso) return null;
  Object.assign(caso, data);
  return caso;
}

function remove(id) {
    const index = casos.findIndex(a => String(a.id) === String(id));
    if (index === -1) {
        return false;
    }
    casos.splice(index, 1);
    return true;
}

module.exports = { findAll, findById, create, update, patch, remove };
