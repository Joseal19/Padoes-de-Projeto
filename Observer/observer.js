// Subject (ou Observable)
class Subject {
    constructor() {
      this.state = 0; // Estado do Subject
      this.observers = []; // Lista de Observers
    }
  
    getState() {
      return this.state; // Retorna o estado atual
    }
  
    setState(state) {
      this.state = state; // Define o novo estado
      this.notifyObservers(); // Notifica os Observers sobre a mudanca
    }
  
    attach(observer) {
      this.observers.push(observer); // Adiciona um Observer a lista
    }
  
    detach(observer) {
      this.observers = this.observers.filter(obs => obs !== observer); // Remove um Observer da lista
    }
  
    notifyObservers() {
      this.observers.forEach(observer => observer.update()); // Notifica cada Observer sobre a mudanca
    }
  }
  
  // Observer
  class Observer {
    constructor(subject) {
      this.subject = subject;
      this.subject.attach(this); // Registra o Observer no Subject
    }
  
    update() {
      console.log(`Observer recebeu atualizacao. Novo estado: ${this.subject.getState()}`);
    }
  }
  
  // Client
  const subject = new Subject();
  const observer1 = new Observer(subject);
  const observer2 = new Observer(subject);
  
  subject.setState(10); // Notificara os observadores sobre a mudanca de estado para 10
  subject.setState(20); // Notificara os observadores sobre a mudanca de estado para 20
  