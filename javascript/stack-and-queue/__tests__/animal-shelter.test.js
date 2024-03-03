'use strict';

const { AnimalShelter } = require('../AnimalShelter');
const { Animal } = require('../AnimalShelter');

const animalShelter = new AnimalShelter();

const animal1 = new Animal('dog', 'dawg');
const animal2 = new Animal('dog', 'puppy');
const animal3 = new Animal('cat', 'kitty');
const animal4 = new Animal('goat', 'goat');

describe('animal shelter', () => {

  test('Calling dequeue on an empty queue raises exception', () => {

    expect(animalShelter.dequeue('dog')).toEqual('cannot dequeue when queue is empty');
    expect(animalShelter.dequeue('cat')).toEqual('cannot dequeue when queue is empty');
  });

  test('Can successfully enqueue into animal shelter', () => {
    animalShelter.enqueue(animal1);

    expect(animalShelter.dogQueue.front.value).toEqual(animal1);
  });

  test('Can successfully enqueue multiple values into animal shelter', () => {
    animalShelter.enqueue(animal2);
    animalShelter.enqueue(animal3);

    expect(animalShelter.dogQueue.front.next.value).toEqual(animal2);
    expect(animalShelter.catQueue.front.value).toEqual(animal3);
  });

  test('Can successfully dequeue first cat out of the animal shelter', () => {
    animalShelter.dequeue('cat');

    expect(animalShelter.catQueue.front).toBeNull;
  });

  test('Can successfully dequeue first dog out of the animal shelter', () => {
    animalShelter.dequeue('dog');

    expect(animalShelter.dogQueue.front.value).toEqual(animal2);
  });

  test('Throws exception if animal is not cat or dog', () => {

    expect(animalShelter.enqueue(animal4)).toEqual('Exception: animal must be cat or dog');
  });

  test('Returns null if pref is not a dog or cat', () => {
    expect(animalShelter.dequeue('goat')).toBeNull;
  });
});
