# poke-api

Uma API RESTful de Pokémons

## Pré requisitos

- Git (https://git-scm.com)
- Node (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

## Clonando o repositório

```
git clone https://github.com/gabriel-me/poke-api.git
```

## Instalando dependências

```
cd poke-api
```

```
npm install
```

## Iniciando MongoDB

```
mongod
```

## Iniciando aplicação

```
npm run start
```

## Endpoints

### Autenticação

```
- ENDPOINT
  http://localhost:8082/api/authenticate

- HEADERS
  Content-Type: application/json

- REQUEST
  POST

- BODY
{
	"email": "youremail@gmail.com",
	"password": "yourpassword"
}
```

### Adicionar usuário

```
- ENDPOINT
  http://localhost:8082/api/users

- HEADERS
  Content-Type: application/json

- REQUEST
  POST

- BODY
{
	"name": "Your name",
	"lastName": "Your last name",
	"email": "youremail@gmail.com",
	"password": "yourpassword"
}
```

### Editar usuário

```
- ENDPOINT
  http://localhost:8082/api/users/123456

- HEADERS
  Content-Type: application/json

- REQUEST
  PUT

- BODY
{
  "name": "New name",
  "lastName": "New last name",
  "email": "newemail@gmail.com",
  "password": "newpassword"
}
```

### Listar pokemons 

```
- ENDPOINT
  http://localhost:8082/api/pokemons

- HEADERS
  Content-Type: application/json

- REQUEST
  GET
```

### Adicionar pokemon

```
- ENDPOINT
  http://localhost:8082/api/pokemons

- HEADERS
  Content-Type: application/json
  Authorization: token

- REQUEST
  POST

- BODY
{
	"name": "Pikachu",
	"color": "Yellow",
	"height": "4",
	"weight": "321",
	"avatar_url": "url",
	"type": [
		{
			"name": "eletric"
		}
	],
	"abilities": [
		{
			"name": "static"
		}
	]
}
```

### Editar pokemon

```
- ENDPOINT
  http://localhost:8082/api/pokemons/123456

- HEADERS
  Content-Type: application/json
  Authorization: token

- REQUEST
  PUT

- BODY
{
	"name": "Pikachu",
	"color": "Yellow",
	"height": "4",
	"weight": "321",
	"type": [
		{
			"name": "eletric"
		}
	],
	"abilities": [
		{
			"name": "static"
		}
	]
}
```


### Excluir pokemon

```
- ENDPOINT
  http://localhost:8082/api/pokemons/123456

- HEADERS
  Content-Type: application/json
  Authorization: token

- REQUEST
  DELETE
```