# API Escola - Node.Js + Express
API REST simples para gerenciar alunos e professores
 
## Pré-requisitos
- Node.js instalado
 
##   Como rodar
 
### Instalar dependências
```bash
npm i
```
 
### Iniciar  servidor
```bash
node index.js
```
 
### Acessar
Abra o nevegador em: `http://localhost:3000`
 
### Endpoints

### Alunos

| Método | Endpoint | Descrição |
| ------ | -------- | --------- |
| GET | `/alunos` | Lista todos os alunos |
| GET | `/alunos/:id` | Buscar um aluno especifico |
| POST | `/alunos` | Cria um novo aluno |
| PUT | `/alunos/id` | Atualiza um aluno |
| DELETE | `/alunos/id` | Remove um alunos |

### Professores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/professores` | Lista todos os professores |
| POST | `/professores` | Cria um novo professores |
| PUT | `/professores/id` | Atualiza um professores |
| DELETE | `/professores/id` | Remove um professores |


### Teclogias
-Node.js
-Express

### Notas
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo) 
