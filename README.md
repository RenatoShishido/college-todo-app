# progweb-taskflow
## Introdução
Este software foi elaborado pelo professor da disciplina de progweb onde consiste em uma agenda de tarefas básica
para o cotidiano. O qual este tera tarefas e agendas que é um agrupamento de varias tarefas de modo
que cada uma tenha o seu status de não iniciado, em andamento e finalizado, pelas cores verde, amarelo e vermelho
respectivamente. A bolinha determina se é uma agenda.

## Frontend
A implementação da comunicação com o backend foi usado o axios para requisições http. Ela foi divida em modulos,
o qual existe uma pasta de serivces para a o facil entendimento de gerenciamento de todos os endpoints da api.

### Execução do projeto em desenvolvimento ( lite-server )
__OBS: Caso a sua porta 8080 ja esteja sendo usada apenas mudar no arquivo bs-config.json a PORT__
```
  npm run dev 
```



## Backend
A implementação foi feita em nodejs.

### Execução do projeto em desenvolvimento ( __Nodemon__ )
```
  npm run dev 
```

### Execução do projeto
```
  npm start 
  
      ou
 
  npm run start
```

### Execução de um docker com todos os containers essenciais para o modo em desenvolvimento.
#### Este comando sobe três containers o mongo-express-interface, o portainer e o portainer.
Os três estão rodando nas portas 8081 e 9000 respectivamente
__OBS: Tem que estar dentro do pasta!__
```
  docker-compose up -d 
```
__OBS: Tera que mudar o host do arquivo!!__
```
  mongoose.connect(`mongodb://root:passwordRoot@173.40.0.4:27017`, { useUnifiedTopology: true, useNewUrlParser: true })
```

### Caso tenha o mongodb instalado dentro da sua maquina utilize ele, porem tera que mudar a conexão com o banco de dados.
Para mudar a conexão com o banco de dados voce ira mudar o login e a senha junto com o host e a port no arquivo
```
  mongoose.connect(`mongodb://LOGIN:SENHA@HOST:PORT`, { useUnifiedTopology: true, useNewUrlParser: true })
```

## Acompanhamento

### Frontend
- [X] Implementação das 3 telas superficiais (Login, Criar conta, Esqueci minha senha )
- [ ] Implementação de uma navBar
- [ ] Implementação de um navDrag/sideBar
- [ ] Implementação da das telas do navDrag (Todos, Não inciado, Em andamento, Finalizado, Listas)
- [X] Implementação das services de comunicação com a api

### Backend
- [ ] Implementação de uma busca por Agenda
- [X] Construção de uma api com crud
- [X] Construção de uma authenticação ( Sessão )
- [ ] Implementação de um serviço para o esqueci minha senha
- [X] Construção dos modelos do banco de dados
