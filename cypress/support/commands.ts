/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
declare namespace Cypress {
    interface Chainable<Subject = any> {
      mockGetPosts(responseData: any): Chainable<any>;
      mockAuthSession(responseData: any): Chainable<any>;

    }
  }
  
  Cypress.Commands.add('mockGetPosts', (responseData) => {
    cy.intercept('GET', '/api/posts', {
      statusCode: 200,
      body: responseData,
    }).as('getPosts');
  });

  Cypress.Commands.add('mockAuthSession', (responseData) => {
    cy.intercept('GET', '/api/auth/session', {
      statusCode: 200,
      body: responseData,
    }).as('authSession');
  });
// -- This is a child command --
 //Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }