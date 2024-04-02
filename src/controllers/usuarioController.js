const { execute } = require("../database");
const tabela = 'usuario';

async function listarUsuarios(){
  return await execute(`SELECT * FROM ${tabela};`);
}

module.exports = {
  listarUsuarios
}