import {
  getLogo,
  getHeaderLinks,
  getNav,
  getBreadcrumbs
} from '../support/app.po';

describe('panel-of-testers header', () => {
  describe('navigation and logo', () => {
    beforeEach(() => cy.visit('/'));

    it('should display logo that links to homepage', () => {
      getLogo().should('be.visible').click();

      cy.location().should(loc => {
        expect(loc.pathname).to.eq('/');
      });
    });

    it('should display two links - Notifications and Account', () => {
      getHeaderLinks().should(t => {
        expect(t.length).equal(2);
      });

      getNav().contains('Notifications');
      getNav().contains('Account');
    });
  });

  describe('breadcrumbs', () => {
    beforeEach(() => cy.visit('/dashboard/account/your-data'));

    it('should display breadcrumbs with three items that link to corresponding pages', () => {
      getBreadcrumbs().children().should(b => {
        expect(b.length).equal(3);
      });
      getBreadcrumbs().contains('Your-data');
      getBreadcrumbs().contains('Account').click();
      cy.location().should(loc => {
        expect(loc.pathname).to.eq('/dashboard/account');
      });
      getBreadcrumbs().contains('Dashboard').click();
      cy.location().should(loc => {
        expect(loc.pathname).to.eq('/dashboard');
      });
    });
  });
});
