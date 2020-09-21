## HI PLATFORM TEST

### Como executar o projeto

1. Baixe as dependências do projeto 
```
yarn ou npm -i
```

2. O projeto já pode ser iniciado na porta padrão 3000.
```
yarn start ou npm start
```

Porém os dados não serão exibidos, pois precisamos iniciar a API. 

### API
Usaremos a lib [json-server](https://github.com/typicode/json-server). Ela irá simular uma API a partir de um arquivo _json_, o qual está localizado na raiz do projeto com o nome **'data.json'**

Para instalar usaremos:
```
yarn add json-server ou npm install -g json-server
```

Por padrão, o _json-server_ é executado na porta 3000. Para evitar conflito com o projeto mudamos a porta para 3333 através do arquivo _json-server.json_. 

Para iniciar, abra o terminal e execute o comando:
```
yarn json-server data.json ou npm run json-server --watch data.json
```

A partir disso, basta dar um F5 na aba do projeto no navegador.