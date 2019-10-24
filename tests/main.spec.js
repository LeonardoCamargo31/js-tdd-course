describe('Main', () => {
  let arr;
  // roda uma vez antes do bloco
  before(() => {

  });
  // roda uma vez depois do bloco
  after(() => {

  });

  // ele roda todas as vezes antes de CADA bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // ele roda todas as vezes depois de CADA bloco
  afterEach(() => {

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
