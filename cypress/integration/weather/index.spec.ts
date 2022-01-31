/// <reference types="cypress" />

describe('Weather', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to load Cards with weather information', () => {
    cy.get('[data-cy=card]').should('have.length', 3);
    cy.get('[data-cy=card]').first().contains('Nuuk, GL');
  });
});
