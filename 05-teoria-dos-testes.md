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


