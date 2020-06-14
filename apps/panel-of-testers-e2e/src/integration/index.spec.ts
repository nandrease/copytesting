import { getAvailableTests, getPreviousTests } from '../support/app.po';

describe('panel-of-testers', () => {
  beforeEach(() => cy.visit('/'));

  it('should display available test and previous tests', () => {
    cy.contains('Tests available:');
    getAvailableTests().should(t => {
      expect(t.length).equal(2);
    });

    cy.contains('Tests previously taken:');
    getPreviousTests().should(t => {
      expect(t.length).equal(1);
    });
  });
});
