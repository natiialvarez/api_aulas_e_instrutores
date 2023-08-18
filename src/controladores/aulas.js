let { instrutores, identificadorAula, aulas } = require("../bancodedados")

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params
    const { titulo, descricao } = req.body

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor)
    })
    if (!instrutor) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }
    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo: titulo,
        descricao: descricao
    }
    aulas.push(aula)
    return res.status(201).json({ aula })
}

const listarAulas = (req, res) => {
    return res.status(200).json(aulas)
}

const obterAula = (req, res) => {
    const { id } = req.params
    const aula = aulas.find((aula) => aula.id === Number(id))
    if (!aula) {
        return res.status(404).json({ mensagem: "Aula não encontrada" })
    }
    return res.status(200).json(aula)

}

const aulaInstrutor = (req, res) => {
    const { idInstrutor } = req.params
    const instrutor = instrutores.find((instrutor) => instrutor.id === Number(idInstrutor))
    if (!instrutor) {
        return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }
    const aulaInstrutor = aulas.filter((aula) => {
        return aula.instrutor_id === Number(idInstrutor)
    })

    return res.status(200).json(aulaInstrutor)
}

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    aulaInstrutor
}