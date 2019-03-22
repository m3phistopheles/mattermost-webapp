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

    it('Go to About Mattermost modal and check contents', () => {
        // 2. Select the sidebar header dropdown hambuger
        cy.get('#sidebarHeaderDropdownButton').click();

        // 3. Select 'About Mattermost'
        cy.get('#about').click();

        // 4. 
    });
});