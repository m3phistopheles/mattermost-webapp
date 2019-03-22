// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// ***************************************************************
// - [number] indicates a test step (e.g. 1. Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// **************************************************************

describe('Main Menu > About Mattermost', () => {
    before(() => {
        // 1. Go to Account Settings with "user-1"
        cy.toMainChannelView('user-1');
    });

    it('should go to \'About Mattermost\' modal and check its content ', () => {
        // 2. Select the sidebar header dropdown hambuger
        cy.get('#sidebarHeaderDropdownButton').click();

        // 3. Select 'About Mattermost'
        cy.get('#about').click();

        // * Check header title
        cy.get('.modal-title').should('contain', 'About Mattermost');

        // * Check Mattermost icon is visible
        cy.get('.about-modal__logo').should('be.visible');

        // * Check that the body title is accurate depending on MM eidtion
        cy.get('.about-modal__title').contains('Mattermost');
        // eslint-disable-next-line max-nested-callbacks
        cy.get('.about-modal__title').then((title) => {
            if (title.text().includes('Enterprise Edition')) {
                cy.get('.about-modal__title').contains('Enterprise Edition');
            } else {
                cy.get('.about-modal__title').contains('Team Edition');
            }
        });

        // * Check that the body subtitle is accurate depending on MM edition
        // eslint-disable-next-line max-nested-callbacks
        cy.get('.about-modal__subtitle').then(($subtitle) => {
            if ($subtitle.text().includes('Modern communication from behind your firewall.')) {
                cy.get('.about-modal__subtitle').contains('Modern communication from behind your firewall.');
            } else {
                cy.get('.about-modal__subtitle').contains('All your team communication in one place, instantly searchable and accessible anywhere.');
            }
        });

        // * Check that MM Version, Schema, and Database are displayed
        cy.get('.form-group').eq(0).contains('Mattermost Version:');
        cy.get('#versionString').should('not.be.empty');

        cy.get('.form-group').eq(0).contains('Database Schema Version:');
        cy.get('#dbversionString').should('not.be.empty');

        cy.get('.form-group').eq(0).contains('Database:');
        cy.get('.form-group').eq(0).contains('mysql');

        // * Check 'Learn More' Text vs 'Mattermost Community' text display in modal footer
        // eslint-disable-next-line max-nested-callbacks
        cy.get('.about-modal__footer').then((footer) => {
            if (footer.text().includes('Learn more about Enterprise Edition at about.mattermost.com')) {
                cy.get('.about-modal__footer').contains('Learn more about Enterprise Edition at about.mattermost.com');
            } else {
                cy.get('.about-modal__footer').contains('Join the Mattermost community at mattermost.org');
            }
        });

        // * Check Copyright text display
        cy.get('.about-modal__copyright').contains('Copyright 2015 - 2019 Mattermost, Inc. All rights reserved');

        // * Check Termos of Service - Privacy Policy text display
        cy.get('.about-modal__links').contains('Terms of Service - Privacy Policy');

        // * Check notice form display
        cy.get('.about-modal__notice').contains('Mattermost is made possible by the open source software used in our server, desktop and mobile apps.');

        // * Check modal hash display
        cy.get('.about-modal__hash').contains('Build Hash:');
        cy.get('.about-modal__hash').contains('Build Date:');
        cy.get('.about-modal__hash').contains('EE Build Hash:');
        cy.get('.about-modal__hash').contains('Webapp Build Hash:');
        cy.get('.about-modal__hash#text').should('not.be.empty');
    });

    it('should check \'About Mattermost\' link and verify URL redirection', () => {
        // * Checks the 'about.mattermost.com' or the 'mattermost.org) link depending on which edition is being tested
        // eslint-disable-next-line max-nested-callbacks
        cy.get('.about-modal__footer').then((footerLink) => {
            if (footerLink.text().includes('Learn more about Enterprise Edition at about.mattermost.com')) {
                cy.get('.about-modal__footer > div > a').then(function (a) {
                    const href = a.prop('href');
                    cy.request(href).its('.logo').should('be.visible');
                });
            } else {
                cy.get('.about-modal__footer > div > a').then(function (a) {
                    const href = a.prop('href');
                    cy.request(href).its('body').should('include', 'Copyright 2015 Mattermost, Inc.');
                })
            }
        });
    });

        it('should check the \'About Mattermost\' URL', () => {
            // * Checking the About URL to make sure that it's the correct URL according to specific MM edition
            // eslint-disable-next-line max-nested-callbacks
            cy.get('.about-modal__title').then((title) => {
                if (title.text().includes('Enterprise Edition')) {
                    cy.get('.about-modal__footer > div > a').should('have.prop', 'href', 'http://about.mattermost.com/');
                } else {
                    cy.get('.about-modal__footer > div > a').should('have.prop', 'href', 'http://www.mattermost.org/');
                }
            });
        });

    it('should check the Terms of Service URL', () => {
        // * Checking the TOS URL to make sure that it's the correct URL according to specific MM edition
        // eslint-disable-next-line max-nested-callbacks
        cy.get('.about-modal__title').then((title) => {
            if (title.text().includes('Enterprise Edition')) {
                cy.get('.about-modal__links > a').eq(0).should('have.prop', 'href', 'https://about.mattermost.com/terms/');
            } else {
                cy.get('.about-modal__links > a').eq(0).should('have.prop', 'href', 'https://about.mattermost.com/default-terms/');
            }
        });
    });

    it('should check the Terms of Service link and verify URL redirection', () => {
        // 1. Specifying the TOS link and checking the URL redirection to make sure it opens to TOS page
        cy.get('.about-modal__links > a').eq(0).then(function (a) {
            const href = a.prop('href');
            cy.request(href).its('body').should('include', 'Terms of Service');
        });
    });

    it('should check the Privacy Policy URL', () => {
        // * Checking the PP URL to make sure that it's the correct URL according to specific MM edition
        // eslint-disable-next-line max-nested-callbacks
        cy.get('.about-modal__title').then((title) => {
            if (title.text().includes('Enterprise Edition')) {
                cy.get('.about-modal__links > a').eq(1).should('have.prop', 'href', 'https://about.mattermost.com/privacy/');
            } else {
                cy.get('.about-modal__links > a').eq(1).should('have.prop', 'href', 'https://about.mattermost.com/default-privacy-policy/');
            }
        });
    });

    it('should check the Privacy Policy link and verify URL redirection', () => {
        // 1. Specifying the PP link and checking the URL redirection to make sure it opens to the PP page
        cy.get('.about-modal__links > a').eq(1).then(function (a) {
            const href = a.prop('href');
            cy.request(href).its('body').should('include', 'Privacy Policy');
        });
    });
});
