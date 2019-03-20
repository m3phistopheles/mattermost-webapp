// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// ***************************************************************
// - [number] indicates a test step (e.g. 1. Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// **************************************************************

// * Load Chance
var Chance = require('chance');

// * Instantiate Chance so it can be used
var chance = new Chance();

describe('Creating channels with different characters and text to verify textarea placeholder', () => {
    // * creating json variable
    const textJSON = '{"emoji": "💀👻👽", "currency": "¶¥£", "hirigana": "かさたなはまや", "arabic": "ينتبطستبنمش"}';

    // * parsing textJSON variable so that each string in the JSON is chnged to an object
    const text = JSON.parse(textJSON);

    // * a variable that randomizes a string based on a pool of letters
    var randomString = chance.string({
        length: 8,
        pool: 'qwertyuiopasdfghjklzxcvbnm'});

    // * a variable that randomizes an integer using min/max
    var randomInt = chance.integer({
        min: 1,
        // eslint-disable-next-line no-magic-numbers
        max: 800000000});

    // * a variable that randomizes a string from a pool of symbols
    var randomSymbol = chance.string({
        length: 8,
        pool: '!@#$%^&*()[]'});

    before(() => {
        // * Go to Main Channel view with "user-1"
        cy.toMainChannelView('user-1');
    });

    it('should create a public channel with plain text as a name and verify textarea placeholder', () => {
        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(randomString);

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomString).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });

    it('should create a public channel with numbers as a name and verify textarea placeholder', () => {
        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(randomInt);

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomInt);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomInt).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomInt);
    });

    it('should create a public channel with symbols as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString vaariable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(randomSymbol);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomSymbol).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });

    it('should create a public channel with emojis as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString vaariable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(text.emoji);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.emoji).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });

    it('should create a public channel with currency as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString vaariable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(text.currency);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.currency).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });

    it('should create a public channel with hirigana as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString vaariable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(text.hirigana);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.hirigana).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });
});

describe('Creating channels with different characters and text to verify textarea placeholder', () => {
    // * creating json variable
    const textJSON = '{"emoji": "💀👻👽", "currency": "¶¥£", "hirigana": "かさたなはまや", "arabic": "ينتبطستبنمش"}';

    // * parsing textJSON variable so that each string in the JSON is chnged to an object
    const text = JSON.parse(textJSON);

    // * a variable that randomizes a string based on a pool of letters
    var randomString = chance.string({
        length: 8,
        pool: 'qwertyuiopasdfghjklzxcvbnm'});

    // * a variable that randomizes an integer using min/max
    var randomInt = chance.integer({
        min: 1,
        // eslint-disable-next-line no-magic-numbers
        max: 800000000});

    // * a variable that randomizes a string from a pool of symbols
    var randomSymbol = chance.string({
        length: 8,
        pool: '!@#$%^&*()[]'});

    before(() => {
        // * Go to Main Channel view with "user-1"
        cy.toMainChannelView('user-1');
    });

    it('should create a private channel with plain text as a name and verify textarea placeholder', () => {
        // 1. Select createPrivatecChannel button and type channel name
        cy.createPrivateChannel(randomString);

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomString).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });

    it('should create a private channel with numbers as a name and verify textarea placeholder', () => {
        // 1. Select createPrivateChannel button and type channel name
        cy.createPrivateChannel(randomInt);

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomInt);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomInt).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomInt);
    });

    it('should create a private channel with symbols as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString vaariable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPrivateChannel button and type channel name
        cy.createPrivateChannel(randomSymbol);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomSymbol).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });

    it('should create a private channel with emojis as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString vaariable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPrivateChannel button and type channel name
        cy.createPrivateChannel(text.emoji);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.emoji).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });

    it('should create a private channel with currency as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString vaariable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPrivateChannel button and type channel name
        cy.createPrivateChannel(text.currency);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.currency).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });

    it('should create a private channel with hirigana as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString vaariable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPrivateChannel button and type channel name
        cy.createPrivateChannel(text.hirigana);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // 5. Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.hirigana).and('be.visible');

        // 6. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // 7. Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        cy.archiveChannel(randomString);
    });
});