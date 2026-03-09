const express = require('express')
const app = express()

app.use(express.json())

const alunos = [
    {
        id: 1,
        nome: "Gabriel Bento",
        email: "Gabriel@gamil.com"
    },
    {
        id: 2,
        nome: "Samuel Santos",
        email: "Samuel@gamil.com"
    },
    {
        id: 3,
        nome: "Breno Amaral",
        email: "Breno@gamil.com"
    }
]

app.get("/", function(req, res){
    res.send("Hello world!, você conseguiu!")
})

app.get("/alunos", function(req, res){
    const nome = req.query.nome

    if (!nome){
        return res.json(alunos)
    }

    const alunosFiltrados = alunos.filter(a => a.nome.toLowerCase().includes(nome.toLowerCase()))

    res.json(alunosFiltrados)
})


app.post("/alunos", function(req, res){
    const nomeQueVeioDoCliente = req.body.nome
    const emailQueVeioDoCliente = req.body.email

    if(!nomeQueVeioDoCliente || !emailQueVeioDoCliente){
        return res.status(400).json({erro: "Nome e e-mail são obrigatorios!"})
    }

    const novoAluno = {
        id: 4,
        nome: nomeQueVeioDoCliente,
        email: emailQueVeioDoCliente
    }
    alunos.push(novoAluno)

    res.status(201).send()
})

app.get("/alunos/:id", function(req, res){
    const id = parseInt(req.params.id)

    const aluno = alunos.find(a => a.id == id)
})


app.put("/alunos/:id", function(req, res){
    const id = parseInt(req.params.id)
    // const nome = req.body.nome
    // const email = req.body.email

    const {nome, email} = req.body


    

    if(!nome || !email){
        return res.status(400).json({erro: "Nome e e-mail são obrigatrios!"})
    }

    const indexDoAluno = alunos.findIndex(a => a.id == id)

    if (indexDoAluno === -1){
        return res.status(404).json("Aluno não encontrado")
    }

    alunos[indexDoAluno].nome = nome
    alunos[indexDoAluno].email = email


    return res.json(alunos[indexDoAluno])
})

app.delete("/alunos/:id", function(req, res){
    const id = parseInt(req.params.id)
    const index = alunos.findIndex(a => a.id == id)

    if (index === -1){
        return res.status(404).json("Aluno não encontrado")
    }

    const alunoRemovido = alunos.splice(index, 1)

    return res.status(204).json("Aluno removido com sucesso!")
    }
)
















const professores = [
    {
        id: 1,
        nome: "Carlos",
        disciplina: "Historia",
        anoContratado: 2025
    },
    {
        id: 2,
        nome: "Raul",
        disciplina: "Geografia",
        anoContratado: 2026
    },
    {
        id: 3,
        nome: "Leonardo",
        disciplina: "Quimica",
        anoContratado: 2019
    }
]



app.get("/professores", function(req, res){
    const anoContratado = req.query.anoContratado

    if (!anoContratado){
        return res.json(professores)
    }
    const professoresFiltrados = professores.filter(p => p.anoContratado == anoContratado)

    res.json(professoresFiltrados)
})

app.get("/professores/:id", function(req, res){
    const id = parseInt(req.params.id)

    const professor = professores.find(p => p.id == id)
    if (!professor){
        return res.status(404).json({erro: "Professor não encontrado"})
    }
    res.json(professor)
})


app.post("/professores", function(req, res){
    const nomeQueVeioDoCliente = req.body.nome
    const disciplinaQueVeioDoCliente = req.body.disciplina
    const anoContratadoQueVeioDoCliente = req.body.anoContratado

    if(!nomeQueVeioDoCliente || !disciplinaQueVeioDoCliente || !anoContratadoQueVeioDoCliente){
        return res.status(400).json({erro: "Nome, disciplina e ano de contratação são obrigatorios!"})
    }

    const novoProfessor = {
        id: 4,
        nome: nomeQueVeioDoCliente,
        disciplina: disciplinaQueVeioDoCliente,
        anoContratado: anoContratadoQueVeioDoCliente
    }
    professores.push(novoProfessor)

    res.status(201).send()
})

app.get("/professores/:id", function(req, res){
    const id = parseInt(req.params.id)

    const professor = professores.find(p => p.id == id)
    if (!professor){
        return res.status(404).json({erro: "Professor não encontrado"})
    }
    res.json(professor)
})


app.put("/professores/:id", function(req, res){
    const id = parseInt(req.params.id)
    // const nome = req.body.nome
    // const email = req.body.email

    const {nome, disciplina, anoContratado} = req.body

    

    if(!nome || !disciplina || !anoContratado){

        return res.status(400).json({erro: "Nome, disciplina e ano de contratação são obrigatórios!"})
    }

    const indexDoProfessor = professores.findIndex(p => p.id == id)

    if (indexDoProfessor === -1){
        return res.status(404).json("Professor não encontrado")
    }

    professores[indexDoProfessor].nome = nome
    professores[indexDoProfessor].disciplina = disciplina
    professores[indexDoProfessor].anoContratado = anoContratado


    return res.json(professores[indexDoProfessor])
})

app.delete("/professores/:id", function(req, res){
    const id = parseInt(req.params.id)
    const index = professores.findIndex(p => p.id == id)

    if (index === -1){
        return res.status(404).json("Professor não encontrado")
    }

    const professorRemovido = professores.splice(index, 1)

    return res.status(204).json("Professor removido com sucesso!")
    }
)
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000!")
})


