## Travis CI
Ele é um CI, então vai trabalhar na integração continua, ele é responsavel por executar os nossos testes, builds, etc. Ele é o nosso robo que vai avisar, se algum build esta falhando e cosias do genêro. E também os usuários conseguem ver se os builds estão passando, qual a cobertura de testes.

Ele tem alguns hooks como before_script, after_script, after_success, e muitos outros triggers


Cria um arquivo `.travis.yml`
```
language: node_js
node_js:
  - "10"
cache:
  directories:
    "node_modules"
before_script:
  - npm run build:all
after_success:
  - npm run test:coverage

  edit para usar o coveralls
  - npm run coveralls
```

E depois de dar um push e tudo mais, no site do travis, vai mostrar o status desse projeto, podemos pegar as badges, e colocar no nosso readme.md

## Coveralls

E para adicionar o coverage, vamos usar o https://coveralls.io/, é uma plataforma que vai receber as informações do nosso coverage, e vai mostrar online todos os nossos arquivos e toda a parte de cobertura, alem de uma badge

Apos criar a conta, clicamos em add repo, seciona o repo, clica em ligar e clica em detalhes, e ele nos da uma configurações que precisamos fazer, copio o token `repo_token: abcLhooTOzzPnvzjKHR85iP3JHooabc`.

Vou no travis, clico em settings, em variavies de ambiente, coloco o token


Feito isso vamos usar o https://github.com/nickmerwin/node-coveralls

```
npm install coveralls --save-dev
```
E no script, então ele executa o nosso test:coverage e depois vai criar um report com lcov que é que o coverage precisa, e depois joga pro coveralls
```
"coveralls":"npm run test:coverage && nyc report --reporter=text-lcov | coveralls"
```

Feito isso vai aparecer o resultado, https://coveralls.io/github/LeonardoCamargo31/spotify-wrapper, e podemos pegar nossa badge

## Publicar a lib no NPM


```
git add .
git commit -m "bump version 1.0.0"

criar uma tag
git tag 1.0.0
```

Para criar o pacote, que é basicamente o pacote qua vou jogar no npm
```
npm pack
```
Mas neste pacote é basicamnte uma cópia do nosso projeto, e não precisamos de todo esse código, só do nosso código final, então vamos fazer uma configuração no package.json
```
"files":[
  "dist",
  "lib"
]

e executa npm pack
```

E agora só temos dist e lib, agora precisamos logar

```
npm adduser
```

E depois

```
npm publish
```
