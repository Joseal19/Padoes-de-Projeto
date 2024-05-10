// Target
class Target {
  request() {
    console.log('Pedido do Alvo');
  }
}

// Adaptee
class Adaptee {
  specificRequest() {
    console.log('Pedido Especifico do Adaptador');
  }
}

// Adapter
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    this.adaptee.specificRequest(); // Chama o metodo especifico do Adaptee
  }
}

// Client
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request(); // Chama o metodo do Target, que por sua vez chama o metodo especifico do Adaptee
