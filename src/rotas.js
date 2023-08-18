const express = require("express")
const rotas = express()
const instrutores = require("./controladores/instrutores")
const aulas = require("./controladores/aulas")


rotas.get("/instrutores", instrutores.listarInstrutores)
rotas.get("/instrutores/:id", instrutores.obterInstrutor)
rotas.post("/instrutores", instrutores.cadastrarInstrutor)
rotas.put("/instrutores/:id", instrutores.atulizarInstrutor)
rotas.patch("/instrutores/:id/status", instrutores.alterarStatus)
rotas.delete("/instrutores/:id", instrutores.excluirInstrutor)
rotas.post("/instrutores/:idInstrutor/aulas", aulas.cadastrarAula)

rotas.get("/aulas/", aulas.listarAulas)
rotas.get("/aulas/:id", aulas.obterAula)
rotas.get("/aulas/:idInstrutor/aulas", aulas.aulaInstrutor)

module.exports = rotas 