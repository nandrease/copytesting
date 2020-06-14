export const getAvailableTests = () => cy.get('li.new-test');
export const getPreviousTests = () => cy.get('li.my-test');

export const getLogo = () => cy.get('.navbar-brand');
export const getHeaderLinks = () => cy.get('.navbar-nav .nav-link');
export const getNav = () => cy.get('.navbar-nav');
export const getBreadcrumbs = () => cy.get('.breadcrumbs')
