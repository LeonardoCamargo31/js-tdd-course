## O que é qualidade?

Para um cliente:
- Bonito
- Tudo funcionando
- Barato

Visão do chefe:
- Que não demore muito
- Algo que gere lucros
- Cliente feliz

Visão do programador
- Um código bom é aquele código que você consegue olhar e entender rapidamente o que esta acontecendo, quais são os valores atribuidos, qual a responsabilidade do metodo, algo que você consegue entender bem rapido.

<img width="400" src="https://miro.medium.com/max/550/1*-nhSONLZxx0wcOsr20KULw.png"/>

## Qualidade de software MCCALL

Algumas caracteristicas importantes para a qualidade de software

### Operação
- Corretitude - Ele faz o que é pedido?
- Confiabilidade - Ele é confivavel? É preciso?
- Eficiência - Ele tem boa performance?
- Integridade - Oferece segurança ao usuário?
- Usabilidade - Fácil do usuário usar?
- Adaptabilidade - Ele se adapta as necessidades do usuário?

### Transição

- Portabilidade - Consigo mover facilmente? Mudar de servidor?
- Reusabilidade - Posso reultilizar partes dele?
- Interoperabilidade - Ele trabalha com outros softwares? Se ele precisar trabalhar com outro software em conjunto, vai ser dificil unir os dois softwares?

### Revisão
- Manutenibilidade - Fácil de dar manutenção, corrigir problemas facil?
- Flexibilidade - Fácil de mudar, exemplo mudar uma feature, é facil?
- Testabilidade - Posso testar seu funcionamento, testar todos os fluxos?


## Fatores para ter qualidade

### 1 - Tenha bom senso!

Pensar antes de criar as coisas, e antes de criar, verificar se faz sentido, se faz sentido o nome das variaveis, se depois vão conseguir entender.


### 2 - Escrita de variáveis
```
var data <- errado
var userList <- certo
```
Use substantivos para variáveis(user, product) e verbos para métodos (getUser, deleteProduct)

### 3 - Escrita de métodos
- Devem ser pequenos
- Possuir uma única responsabilidade
- Permita o reuso
- Fácilmente testaveis
- Um código bom não precisa de comentario, se pensar em comentar, sera que esta bom esse código?

### 4 - Sempre deixe mais limpo do que quando chegou

Se achou um código, onde possa melhorar, melhore

### 5 - Tenha carinho no inicio

Desde o começo tenha carinho, pois caso contrario, vai conviver com varios problemas, estude bastante o escopo do que deve fazer

### 6 - Faça testes

Testes são fundamentais para que você possua qualidade em seu projeto

## Fatores para ter qualidade

- Reduz o tempo gasto em análise e correção de bugs
- Facilita na refatorção, a gente sempre vai se preucupar em escrever o código da maneira mais simples possivel, da forma mais rápida para que passe no teste, e depois só vamos adaptando para melhorar o código, e essa parte da adaptação já é a refatoração, e se mudarmos algo e quebrar, vamos saber facilmente com os testes
- Gera documentação, quando temos os testes bem escritos você tem que descrever o que deve acontecer, assim o teste já vai dizer o que o método faz, e acaba gerando uma especie de documentação
- Melhora o design do código, o design do código acaba sendo mais organizado, vai acabar sendo menor, e mais simples de entender
- Garanta que o trabalho tenha qualidade

## Como funciona o fluxo do TDD

- Você escreve o teste que vai falhar
- Faz o código que faz o teste funcionar
- Escreve um novo teste, que vai falhar o código
- Corrigi o código para que passe
- Depois de passar nos testes, refatorar o código

https://willianjusten.com.br/entendendo-testes-de-software/#tdd

<img width="600" src="https://i2.wp.com/165.227.206.32/wp-content/uploads/2017/04/09-1.png"/>

## Pensando como testar

- O que o código deve fazer? Precisamos entender o que esse método tem que fazer, como por exemplo, ele precisa converter de euro ara dolar
- Que dados esse método recebe?
- O que ele deve retornar?
- Que ações precisam acontecer para o código rodar? Por exemplo, quando eu clicar no botão executa o código, vou chamar de que forma? Assim alem de testar unitariamente, precisamos testar ele como um todo, 2e2 ou seja de ponta a ponta

### Padrão de teste

"Ele deve fazer isso quando aquilo"
"It should do that when this"

```
it('Deve retornar 4 quando receber 2,2') {
  expect(sum(2,2)).to.equal(4)
});
```

## Tipos de testes


<img width="600" src="https://image.slidesharecdn.com/testes-ui-nao-aceite-mais-falso-negativos-150722175432-lva1-app6892/95/testes-ui-no-aceite-mais-falso-negativos-44-638.jpg?cb=1438032081"/>

- Unit : São testes de responsabilidade unica, onde você testa como um método funciona de forma isolada

- Service : São testes de serviço, ou testes de integração, teremos um componente onde fizemos os testes units, e esse componente faz uma chamada ao banco ou api, no teste unitario, essa parte de serviço nos fazemos um mock, que basicamente é uma chamada a um valor que ja sabemos, um serviço falso, isso no teste unit. Já no teste de integração testamso realmente, precisamos saber se vai funcionar a integração, não podemos criar mocks

- UI : são os teste e2e, ou seja de ponta a ponta (end to end), se o fluxo de um aplicativo está sendo executado conforme o projeto do início ao fim. E outro famoso teste é o teste de regração, que também fica nessa camada, que é quando faz uma mudança ou outra de css ou js por exemplo e assim acaba quebrando algum comportamento.

Se nota na piramide, temos varios testes de unit e memos de UI



## Algumas dicas para os tipos de testes

### Teste unitário

É um simples e pequeno teste automatizado que prova o comportamento de um único método

- Todos os testes devem ser isolados e independentes
- Escolha os melhores asserts para cada momento, se eu espero que o método retorne um numero, poderia usar um `toBe.equal(10)`, se fosse uma string `toBe('teste')`
- Procure usar mocks para chamadas externas
- Utilize dele para organizar o design do seu código, sabendo o que recebemos, o que retornamos, se preucupamos em passa no teste, não pensar no futuro, o código acaba ficando bem mais simples


### Teste de integração

É um teste para validar se os componentes estão funcionando em conjunto, depois de fazer os testes unitarios, agora precisamos saber se vai funcionar um com o outro
- Cuidado para não fazer teste inútil, saber se eles funcionam entre si
- Isole o máximo possivel os testes

### Teste E2E

O teste e2e é realizado com o propósito de avaliar a qualidade externa do produto e, na medida do possível, também a qualidade em uso. É um teste final, para saber se esta tudo funcionando
- Valide apenas o fluxo de funcionamento do projeto

## Spies/Spy

Como o nome sugere, spies são usados para vigiar informações sobre chamadas de funções. Um spy vai nos dizer se o metodo foi chamado, quantas vezes, quais argumentos forarm passados, etc

### Quando usar?

São uteis para testar como métodos são chamados dentro do sistema, assim consigo verificar se um outro metodo foi chamado dentro do metodo que você esta testando
```
sinon.spy(jQuery,"ajax")

jQuery.getJSON('alguma/requisicao')
assert(jQuery.ajax.calledOnce)//verificando se meu metodo ajax, foi chamado uma vez
```
## Stubs

São como spies, exceto por eles substituirem a função alvo. Podendo inclusive mudar o comportamento, assim como valore e execeções levantadas

### Quando usar?
Quando quiser fazer o controle de um comportamento de um teste, por exemplo:
- Forçar uma execeção,
- Pular uma parte, como salvar dado, mas quero pular de salvar na banco pois não faz sentido para min
- Simplificar teste de código assincrono

## Mocks

São métodos falsos (similar aos Spies), com comportamento pré-programado (similar ao Stubs) e respostas/exceções pré-programadas.

### Quando usar?

Deve ser utilizado qiando você precisa de um stub, mas precisa verificar múltiplos comportamentos num especifo ponto

- Digamos temos um db, e não queremos ficar manipulando ele, assim precisamos recriar esse banco para realizar os testes, assim usamos os mocks para ter o resultado que desejamos
