const { Queue } = require('./index');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue;
    this.catQueue = new Queue;
  }

  enqueue(animal) {
    if (animal.species !== 'dog' && animal.species !== 'cat') return 'Exception: animal must be cat or dog';
    if (animal.species === 'cat') {
      this.catQueue.enqueue(animal);
    } else {
      this.dogQueue.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') return null;
    let animal;
    if (pref === 'dog') {
      if (this.dogQueue.isEmpty()) return 'cannot dequeue when queue is empty';
      animal = this.dogQueue.dequeue();
    } else {
      if (this.catQueue.isEmpty()) return 'cannot dequeue when queue is empty';
      animal = this.catQueue.dequeue();
    }
    return animal;
  }
}

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

module.exports = { AnimalShelter, Animal };
