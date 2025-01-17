# pdsw App SensorSus Front End Ionic
Projeto para disciplina desenvolvimento de sistema web - frontend

Aplicativo para avaliar estabelecimentos de saúde.

App no Heroku

[https://sensorsus.herokuapp.com/](https://sensorsus.herokuapp.com/)

Rotas backend no heroku (banco de dados mysql)

[https://sensorsus-api.herokuapp.com/swagger-ui.html](https://sensorsus-api.herokuapp.com/swagger-ui.html)


Rotas backend no heroku (banco de dados postgresql)

[https://sensorsus-api-posgres.herokuapp.com/swagger-ui.html](https://sensorsus-api-posgres.herokuapp.com/swagger-ui.html)

github backend

[https://github.com/leandromelolm/pdsw_sensorsus_spring_backend](https://github.com/leandromelolm/pdsw_sensorsus_spring_backend)

## • Checar versões instaladas ( versões recomendadas para executar o projeto)
```
npm -v
  6.13.4

node -v
  v10.19.0

cordova -v
  7.1.0

ionic -v
  3.19.0
```
## • Instalar o Ionic CLI e Cordova (https://ionicframework.com/docs/intro/installation):
```
  npm install -g ionic@3.19.0 cordova@7.1.0
```

## • Instalando o Node usando o gerenciador de versões do Node (https://nodejs.org)

Instalar o nvm ( gerenciador de versões do node)
```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh
``` 
``` 
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
Instalar o script nvm na conta de usuário. Para usá-lo, você deve antes gerar o arquivo .bashrc:
``` 
  source ~/.bashrc
``` 
Lista de versões disponíveis remotamente
``` 
  nvm list-remote
``` 
Instalar a versão node 10.19.0
``` 
  nvm install 10.19.0
```
Lista de versões instaladas localmente
```
  nvm list
```
Selecionar versão especifica (caso a versão não esteja configurada como padrão)
```
  nvm use 10.19.0
```

## • Rodar Projeto

* Executar no terminal dentro da raiz do projeto `ionic serve` ou `npm start` para iniciá-lo.
