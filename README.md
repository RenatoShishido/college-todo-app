# progweb-taskflow
Desenvolvimento de um TODO-LIST basico com um backend em nodejs e um frontend em javascript, css e html.

## Frontend
A implementacao com a comunicacao com o backend foi usado o axios para requisicoes http. Foi divido em modulos tambem,
com um pasta de services para o front que ira gerar todos os servicos para comunicacao com o backend.


## Backend

### Executar em modo desenvolvimento com o nodemon
```
  npm run dev 
```

### Executar em modo server com o node
```
  npm start 
  
      ou
 
  npm run start
```

### Subindo o mongodb com docker (Este comando ira fazer com que suba um docker com o portainer, mongo-express-interface, mongodb)
#### Para acessar o mongo-express-interface ele estara rodando na porta 8081 e o portainer na porta 9000.
OBS: Tem que estar dentro do pasta!
```
  docker-compose up -d 
```

### Caso tenha o mongodb instalado na maquina utilize ele, porem tera que mudar a conexao com o banco de dados.
Para mudar a conexao com o banco de dados voce ira mudar o login e a senha junto com o host e a port no arquivo
backend/api/db/db.js
```
  mongoose.connect(`mongodb://LOGIN:SENHA@HOST:PORT`, { useUnifiedTopology: true, useNewUrlParser: true })
```
