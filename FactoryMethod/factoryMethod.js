// Product
class Product {
  operation() {
    console.log('Operacao do Produto');
  }
}

// Creator
class Creator {
  factoryMethod() {
    return new Product(); // Metodo de fabrica que retorna uma instancia de Produto
  }

  someOperation() {
    const product = this.factoryMethod(); // Cria um produto usando o metodo de fabrica
    product.operation(); // Executa uma operacao no produto
  }
}

// Concrete Creator
class ConcreteCreator extends Creator {
  factoryMethod() {
    return new Product(); // Implementacao concreta do metodo de fabrica que retorna um produto especifico
  }
}

// Client
const creator = new ConcreteCreator();
creator.someOperation(); // Executa a operacao utilizando a fabrica
