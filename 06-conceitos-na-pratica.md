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
