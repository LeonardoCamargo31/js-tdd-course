## Introdução a módulos

São trechos de códigos tem tem um determinada funcionalidade. Podemos ter diferentes módulos e cada um com sua responsabilidade.

### Por que usar módulos?

- Manutenção : Consegue ter uma manutenção muito melhor, pois não tem risco de alterar algo, e afetar outras funcionalidades.
- Namespacing: No js temos muitas variaveis globais, variaveis fora do escopo de uma função de nivel superior,por isso, é comum haver "poluição no espaço de nomes". E dentro dos modulos podemos ter namespacing, fazendo com que essas variaveis fiquem apenas dentro do modulo, criando um espaço privado para nossas variáveis
- Reusabilidade: Poder usar esse mesmo código em diversos outros lugares


### CommonJS
```
function myModule() {
  this.hello = function() {
    return 'hello!';
  }

  this.goodbye = function() {
    return 'goodbye!';
  }
}

module.exports = myModule;

//em outro aquivo
var myModule = require('myModule');
```

### JS nativo
E com o es6 veio a possibilidade de importar e exportar módulos nativamente. Nenhum dos módulos acima era nativo para JavaScript. Em vez disso, criamos maneiras de emular um sistema de módulos usando o padrão de módulo

```
//exportar uma variável
export let counter = 1;

//exportar um método
export function increment() {
  counter++;
}

export function decrement() {
  counter--;
}

// importando tudo de counter
import * as counter from '../../counter';

console.log(counter.counter); // 1
counter.increment();
console.log(counter.counter); // 2
```

## Import no ES6

```
//* => carrega tudo da lib
//as => da um apelido, ou seja, um alias
import * as R from 'ramda'

//se tivesse só um metodo exportado como default conseguiria importar assim:
import union from 'ramda'

//como o ramda tem varios métodos, só ira funcionar assim
import { union } from 'ramda'

//posso dar um alias
import { union as junta } from 'ramda'
```

## Export no ES6


Export do método principal
```
function sum(a,b){
    return a+b
}

//exporte do método principal
//só pode ter um default por arquivo
//pode importar com qualquer nome e não precisa de chaves {}
export default sum

import sum from './utils'
```

Named export
```
function sum(a,b){
    return a+b
}

//ter vários exports em um arquivo
//só pode chamar com o mesmo nome, e precisa das chaves
export function sub(a,b){
    return a - b
}

import sum, {sub} from './utils'
```
Outra forma
```
function mult(a,b){
    return a * b
}

export {mult}

import sum, {sub,mult} from './utils'
```
Ou ainda
```
function mult(a,b){
    return a * b
}

function div(a,b){
    return a / b
}

export {mult,div}

import sum, {sub,mult,div} from './utils'
```
Ou ainda com alias, lembrando que no import o nome deve ser igual
```
function mult(a,b){
    return a * b
}

function div(a,b){
    return a / b
}

export {mult as multiplicacao,div}

import sum, {sub,multiplicacao,div} from './utils'
```

E também posso exportar variáveis

```
const PI = 3.14;
export {mult as multiplicacao,div,PI}
import sum, {sub,multiplicacao,div,PI} from './utils'
```

## Variável de ambiente no webpack


Há uma alteração que você precisará fazer na sua configuração do webpack. Normalmente, module.exportsaponta para o objeto de configuração. Para usar a envvariável, você deve converter module.exportsem uma função: https://webpack.js.org/guides/environment-variables/

```

webpack --env.NODE_ENV=local --env.production --progress


const path = require('path');

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};
```


## Sourcemaps
Quando se trabalha com molodulos quando ocorre algum erro, fica complicado saber onde ocorreu, como esta tudo minificado e muda o nome das variaveis e métodos, assim ficando impossivel achar o erro.

