## Inicializando o NPM

Init permite deicar salvo por default algumas informações importantes, como por exemplo, nome do autor, email do autor, licença usada, por exemplo:
```
npm set init-author-name "Leonardo Camargo"
npm set init-author-email "leonardo_camargo31@hotmail.com"
npm set init-license "MIT"
```
E depois precisamos logar o usuário do npm:
```
npm adduser
```
E por fim inicializamos
```
npm init
```

## Gitignore

Responsavel por ignorar certas pastas e arquivos, que não queremos subir no git, como por exemplo a pasta node_modules

```
npm i gitignore -g
```

Mostra uma lista de todos os tipos, com todoas as coisas que podemos ter
```
gitignore -types
```
Como vamos criar um projeto javascript, usamos o node
```
gitignore Node
```

## Documentação

Uma das principais é o uso do readme, é o arquivo principal do github, onde você tem uma apresentação da biblioteca.

https://github.com/lyef/lyef-react-component
https://gist.github.com/PurpleBooth/109311bb0361f32d87a2

Para pegar as licenças:
https://opensource.org/licenses



## Styleguides / Guia de estilos

Nada mais é do que uma documentação que dita quais vão ser os padrões de código que vai escrever, por exemplo se vai usar aspas duplas ou simples, se vai ultilizar ponto e virgula E isso ajuda demais a ter uma organização de código, ainda mais quando se trabalha em equipe.

Existem varios Styleguides, um dos mais famosos é o do Airbnb: https://github.com/airbnb/javascript

Outro é o Standard, e ele não precisa usar EsLint: https://github.com/standard/standard

E como usar essas regras?

Há um tempo atrás era muito usado o JsHint, que recebia essas regras, passava por todos os arquivos, e verificava se estava dentro do padrão.

Depois veio o JsLint, e depois JSCS e que começou a dar uma boa mudanças, mostrando erros de uma forma bem bacana.

Então veio o ESLint, que é o mais usado atualmente. Então vamos instalar ele com o seguinte comando:

```
npm install eslint -D
```

Para inicializar o EsLint
```
./node_modules/.bin/eslint --init
```
Feito isso ele vai criar esse arquivo .eslintrc na raiz do nosso projeto. Agora se escrevermos nosso código fora do padrão ele ira exibir os erros. E se executarmos o comando abaixo, ele mostra todos os erros.

```
./node_modules/.bin/eslint src/*.js
```
Para garantir que nosso editor tenha a configuração exata do projeto, seja em qualquer editor, usamos o EditorConfig. Para isso instalamos a extensão EditorConfig, e na raiz do projeto clico com o botão direito, generate .editorconfig.

```
root = true // para funcionar em todos os editores

[*] //todos os arquivos, poderia ser todos [*.js]
indent_style = space //space ou tabs
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true //apague todos os espaços vazios
insert_final_newline = true //inserir uma linha no final do arquivo
```

## Npm scripts

Nada mais é do que um script executado diretamente pelo npm, lá no arquivo package.json:
```
"scripts": {
  "teste":"echo 'heyyyy'"
}
```
Ao executar `npm run teste` teremos no terminal a saida `heyyyy`

Vamos criar um script pro EsLint:
```
"scripts": {
  "lint":"./node_modules/.bin/eslint src/*.js"
}
```

## Configurando o Hooks no git

O husky nada mais é um script que permite criar hooks do git de forma mais simples.

Hooks que na tradução seria ganchos, são scripts que rodam antes de alguma tarefa, por exemplo antes de um commit faz algo, antes de dar um push faz aquilo. E também podem ter tarefas pós.

Primeira coisa precisamos instalar o husky
```
npm install husky --save-dev
```
Por exemplo antes do push, quero executar o lint, para nosso código estar no padrão. Caso tenha algum erro ele não deixa subir.
```
"scripts": {
  "lint": "./node_modules/.bin/eslint src/*.js",
  "prepush": "npm run lint",
}
```

https://github.com/typicode/husky
