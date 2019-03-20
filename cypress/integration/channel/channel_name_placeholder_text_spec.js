// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// ***************************************************************
// - [number] indicates a test step (e.g. 1. Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// **************************************************************

var Chance = require('chance');
var chance = new Chance();

describe('Creating channels with different characters and text to verify textarea placeholder', () => {
    const textJSON = '{"numbers": "1234567890", "symbols": "!@#$%^&*()", "emoji": "💀👻👽", "currency": "¶¥£", "richText": "ᵯᵰ ᵴᵶ ᵹᵼᵽᵾᵿ", "hirigana": "かさたな はまや", "arabic": "ؤهيمبنتشسط ينتبطسمن ي تبنمش"}';
    const text = JSON.parse(textJSON);
    var randomString = chance.string({
        length: 8,
        pool: 'qwertyuiopasdfghjklzxcvbnm'});

    before(() => {
        // * Go to Main Channel view with "user-1"
        cy.toMainChannelView('user-1');
    });

    afterEach(() => {
        cy.archiveChannel(randomString);
    });

    it('should create a public channel with symbols as a name and verify textarea placeholder', () => {
        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(text.symbols);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.symbols).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');
    });
});
