'use strict';

const shelter = require('../fifo-animal-shelter.js');
let newShelter = new shelter.AnimalShelter;

describe('Test animal shelter', () => {

  it('Should successfully create a shelter', () => {
    expect(newShelter).toBeDefined();
  });
}); 