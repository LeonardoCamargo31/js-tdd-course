## Mocha
Responsavel por rodar os testes, o Mocha é uma estrutura de teste js rica em recursos, executada no Node.js e no navegador, tornando o teste assíncrono simples e divertido

## Chai

Para nossas assertions, o Chai é uma biblioteca de assertion BDD/TDD para node e navegador que pode ser deliciosamente combinada com qualquer estrutura de teste de javascript, como por exemplo o Mocha

## Istanbul
Para trabalhar com coverage, O Istanbul instrumenta seu código JavaScript com contadores de linhas, para que você possa acompanhar o desempenho de seus testes de unidade em sua base de código.


## Funcionamento do Mocha
```
// describe descreve um teste, e separamos classe e metodos
describe('Main', () => {
  describe('Método A', () => {
    // no context separamos os casos que vamos testar
    context('Caso 1', () => {
      // para de fato rodar nosso teste
      it('deve acontecer tal coisa', () => {
        // espera que aconteça
        // entra dados sum(2,2)
        // espera retornar algo (4) = > true | false => broken test
      });
    });
    context('Caso 2', () => {
      //outro teste
    });
  });
  describe('Método B', () => {
    //outro teste
  });
});
```


## Reporters
Reporters é como nós informamos como estes testes estão passando, por padrão usamos o spec

--reporters, -R <name>

```
npm run test -- --reporters, -R nyan

Result:

1   -__,------,
0   -__|  /\_/\
0   -_~|_( ^ .^)
    -_ ""  ""

1 passing (5ms)
```

## Bail
Caso ocorra um erro todo o resto não quero saber, quero ver onde deu erro para isso temos o comando bail, assim que ele encontrar um erro ele para o fluxo de teste
```
it('deve acontecer tal coisa', () => {
  throw new Error('apenas um erro');
});

npm test -- --bail
```
## Only
E caso eu queira rodar, somente um bloco em especifico, temos o only
```
context.only('Caso 1', () => {
  it('deve acontecer tal coisa', () => {
    throw new Error('apenas um erro');
  });
});
```
## Skip
E ao contrario do only, temos o skip para pular um bloco em especifico
```
it.skip('deve acontecer tal coisa', () => {
  throw new Error('apenas um erro');
});

E esse que fizemos o skip vai ficar com status pendente
0 passing (4ms)
1 pending
```


## Hooks

São aqueles códigos que são rodados apartir de algum momento, apartir de alguma ação, como por exemplo gravar uns dados, e depois apagar esses dados, ou criar metodos que são executados antes que outros, assim eliminando duplicatas no nosso código

Se temos um array, onde vai ser executado em todos os testes, assim iriamos criara varios arrays, com hooks podemos criar um array antes, e antes de cada teste cria esse array com hooks

```
describe('Main', () => {
  // roda uma vez antes do bloco
  before(() => {
    console.log('before');
  });
  // roda uma vez depois do bloco
  after(() => {
    console.log('after');
  });

  // ele roda todas as vezes antes de CADA bloco
  beforeEach(() => {
    console.log('beforeEach');
  });

  // ele roda todas as vezes depois de CADA bloco
  afterEach(() => {
    console.log('afterEach');
  });

  it('teste 1 ', () => {
    console.log('teste 1 ');
  });

  it('teste 2', () => {
    console.log('teste 2');
  });
});

Result

  Main
before //antes do bloco
beforeEach //antes de cada bloco
teste 1
    ✓ teste 1
afterEach //depois de cada bloco
beforeEach //antes de cada bloco
teste 2
    ✓ teste 2
afterEach //depois de cada bloco
after //depois do bloco

2 passing (5ms)
```

Hooks na prática

```
describe('Main', () => {
  let arr;

  // ele roda todas as vezes antes de CADA bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it('deve ter o tamanho de 4 quando adionar um valor no array', () => {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('quando utilizar o método pop, nosso array deve diminuir', () => {
    arr.pop();
    console.log(arr.length); // 2
  });

  it('deve remover o valor 3 quando quando usar o pop no array', () => {
    // ultimo valor do array é 3
    console.log(arr.pop() === 3); // true
  });
});
```



## Chai, diferenças entre should, expect e assert
```
it('deve ser um array', () => {
    expect(arr).to.be.a('array');
});

it('deve ter o tamanho de 4 quando adionar um valor no array', () => {
  arr.push(4);
  expect(arr).to.have.lengthOf(4);
});

it('quando utilizar o método pop, nosso array deve diminuir', () => {
  arr.pop();
  expect(arr).to.have.lengthOf(2);
});

it('deve remover o valor 3 quando quando usar o pop no array', () => {
  arr.pop();
  // espero que não tenha o valor 3
  expect(arr).to.not.have.include(3);
});
```

## Testando calculadora simples

Para usar ES6
```
npm i babel-preset-env babel-register

e no arquivo package.json, só para especificar que é requerido o babel
"test": "./node...ha tests/**/*.spec.js --require babel-register"
```

```
import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Main', () => {
  // smoke tests = > verifica o funcionamento básico do método
  describe('smoke tests', () => {
    it('deve existir o metodo `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('deve existir o metodo `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('deve existir o metodo `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('deve existir o metodo `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });


  describe('Sum', () => {
    it('deve retornar 4 quando `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('deve retornar 4 quando `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('deve retornar -4 quando `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('deve retornar 12 quando `mult(6,2)`', () => {
      expect(mult(6, 2)).to.be.equal(12);
    });
  });

  describe('Div', () => {
    it('deve retornar 3 quando `div(6,2)`', () => {
      expect(div(6, 2)).to.be.equal(3);
    });
    it('deve retornar `Não é possível divisão por zero!` quando divir por 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });
});
```


## Desafio FizzBuzz

- Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
- Se o número for divisível por 5, no lugar do número escreva 'Buzz' -  - Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
- Se não for múltiplo de nada, retorna o número

main.js
```
const FizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};
export default FizzBuzz;
```
main.spec.js
```
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('deve retornar `Fizz` quando for multiplo de 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });
  it('deve retornar `Buzz` quando for multiplo de 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('deve retornar `FizzBuzz` quando for multiplo de 3 e 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('deve retornar um numero quando não ser multiplo de nada', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
});
```

## Code coverage/Cobertura de código

Serve para analisar todos os pedaços do seu código, que seu teste analisou, consegue analisar se alguma parte do seu código não foi testada, na realidade nem todo seu código precisa estar 100% testado, tem partes que são desnecessárias


Vamos istalar o nyc para fazer o code coverage, nyc nada mais é que um handler do **Istambul**, todo code covarage praticamente é pelo  **Istambul**, e o nyc só ajuda a dar uns detalhes a mais
```
npm i -D nyc

E no arquivo package.json, criamos o script

"test:coverage":"nyc npm test"
```
E tera uma tabela, como essa:
- statements/afirmações: que são as linhas que estamos testando
- branches: se você tem um if/else, se ele esta pegando o if
- funcs: que são as funções
- lines: se esta cobrindo todas as linhas

<img src="https://user-images.githubusercontent.com/15708284/58654406-a8e48a80-82cc-11e9-8ec1-d519172f4187.png"/>

E ele cria uma pasta coverage, mas vamos configurar, lá no package.json para mostrar mais informações
```
"nyc":{
  "reporter":["text","html"],
  "exclude":["tests/**"]
},
```
Agora lá no coverage, temos muitas informações, até quantas vezes cada linha foi executada
```
1x  const FizzBuzz = (num) => {
6x    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
5x    if (num % 3 === 0) return 'Fizz';
3x    if (num % 5 === 0) return 'Buzz';
1x    return num;
    };
    export default FizzBuzz;
```
## Check covarege antes de cada push

Podemos determinar um valor minimo de conbertura de testes, não vai deixar dar push caso não esteja com 80% de linhas e funções testadas
```
"nyc":{
  ...
  "check-coverage":true,
  "funcions": 80,
  "lines":80
},

e no script
"test:coverage":"nyc npm test"
"prepush": "npm run lint && npm run test:coverage",
```
## Sinon, uso de spy, stubs e mocks

É responsavel justamente por essa parte, ele que vai ser responsavel por espionar (spy), e avisar que o metodo foi chamado, avisar quais parâmetros foram passados


### Spy

Vai espionar se a função **original** foi chamada


### Stubs

Ele é como o spy, porem ele tem um comportamento pré-programado, por exemplo se for chamado o fech retorna tal coisa, não executando a função original

* **sinon-chai**: como estou trabalhando com o chai
* **node-fetch**: como estamos em ambiente de test sem usar um navegador, não temos o fetch no node, então usamos o node-fetch, que é um polyfill

```
npm i -D sinon sinon-chai node-fetch
```
