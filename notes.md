## Inicalizado o NPM

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

Então veio o ESLint, que é o mais usado atualmente.





