# TaskFlow
## Introdução
Este software foi elaborado pelo professor da disciplina de progweb onde consiste em uma agenda de tarefas básica
para o cotidiano. O qual este tera tarefas e agendas que é um agrupamento de varias tarefas de modo
que cada uma tenha o seu status de não iniciado, em andamento e finalizado, pelas cores verde, amarelo e vermelho
respectivamente. A bolinha determina se é uma agenda.

## Frontend
A implementação do frontend foi desenvolvida em cima de um framework javascript no qual foi escolhido o vuejs
pela sua grande capacidade e facilidade para criação de components reutilizaveis, totalmente otimizado e compacto.
Foi utilizado o AXIOS para a integração via HTTP com o backend, onde o axios é uma lib requisições HTTP.

### Execução do projeto em desenvolvimento
```
  npm run serve 
```



## Backend
A implementação do backend foi desenvolvida em nodeJS. Apesar do nodejs não ser considerado um framework e sim um motor, ele ainda é muito
potente para criação do backend pelo fato da grande comunidade gerar libs prontas para o desenvolvimento o qual facilita
muito o desenvolvimento de grandes aplicações.

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
__OBS: Tem que estar dentro do pasta!__
```
  docker-compose up -d 
```
__OBS: Tera que mudar o host do arquivo!!__
```
  mongoose.connect(`mongodb://root:passwordRoot@173.40.0.4:27017`, { useUnifiedTopology: true, useNewUrlParser: true })
```

### Este comando sobe três containers o mongo-express-interface, o mongodb e o portainer e para acessar os containers.
__MONGO-EXPRESS-INTERFACE__
```
  http://localhost:8082
```
__MONGODB__
```
  docker container exec -ti {NOME DO CONTAINER OU ID} bin/bash
```
__PORTAINER__
```
  http://localhost:9000
```

### Caso tenha o mongodb instalado dentro da sua maquina utilize ele, porem tera que mudar a conexão com o banco de dados.
Para mudar a conexão com o banco de dados voce ira mudar o login e a senha junto com o host e a port no arquivo
```
  mongoose.connect(`mongodb://LOGIN:SENHA@HOST:PORT`, { useUnifiedTopology: true, useNewUrlParser: true })
```

## Acompanhamento

### Frontend
- [X] Implementação das 3 telas superficiais (Login, Criar conta, Esqueci minha senha )
- [X] Implementação de uma navBar
- [X] Implementação de um navDrag/sideBar
- [X] Implementação da das telas do navDrag (Todos, Não inciado, Em andamento, Finalizado, Listas)
- [X] Implementação das services de comunicação com a api

### Backend
- [X] Implementação de uma busca por Agenda
- [X] Construção de uma api com crud
- [X] Construção de uma authenticação ( Sessão )
- [X] Implementação de um serviço para o esqueci minha senha
- [X] Construção dos modelos do banco de dados
