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

describe('Creating public channels with different characters and text to verify textarea placeholder', () => {
    // * creating json variable
    const textJSON = '{"emoji": "💀👻👽", "currency": "¶¥£", "hiragana": "かさたなはまや", "arabic": "ينتبطستبنمش"}';

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

        // 2. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomString).and('be.visible');

        // 3. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 4. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a public channel with numbers as a name and verify textarea placeholder', () => {
        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(randomInt);

        // 2. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomInt);

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomInt).and('be.visible');

        // 3. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 4. Archive channel to prevent clutter
        cy.archiveChannel(randomInt);
    });

    it('should create a public channel with symbols as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
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

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomSymbol).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a public channel with emojis as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
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

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.emoji).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 7. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a public channel with currency as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
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

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.currency).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a public channel with hiragana as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(text.hiragana);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.hiragana).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a public channel with arabic as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(text.arabic);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.arabic).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });
});

describe('Creating private channels with different characters and text to verify textarea placeholder', () => {
    // * creating json variable
    const textJSON = '{"emoji": "💀👻👽", "currency": "¶¥£", "hiragana": "かさたなはまや", "arabic": "ينتبطستبنمش"}';

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

        // 2. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomString).and('be.visible');

        // 3. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 4. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a private channel with numbers as a name and verify textarea placeholder', () => {
        // 1. Select createPrivateChannel button and type channel name
        cy.createPrivateChannel(randomInt);

        // 2. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomInt);

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomInt).and('be.visible');

        // 3. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 4. Archive channel to prevent clutter
        cy.archiveChannel(randomInt);
    });

    it('should create a private channel with symbols as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
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

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + randomSymbol).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a private channel with emojis as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
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

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.emoji).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a private channel with currency as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
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

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.currency).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a private channel with hiragana as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPrivateChannel button and type channel name
        cy.createPrivateChannel(text.hiragana);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.hiragana).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });

    it('should create a public channel with arabic as a name and verify textarea placeholder', () => {
        // * re-randomizing randomString variable
        // eslint-disable-next-line no-shadow
        var randomString = chance.string({
            length: 8,
            pool: 'qwertyuiopasdfghjklzxcvbnm'});

        // 1. Select createPublicChannel button and type channel name
        cy.createPublicChannel(text.arabic);

        // 2. Set name in URL
        cy.get('#setURL').focus().type(randomString);

        // 3. Select the Create Channel button
        cy.get('#createChannelSetURL').click();

        // 4. Visit newly created channel
        cy.visit('/ad-1/channels/' + randomString);

        // * Check that placeholder is accurately named and visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + text.arabic).and('be.visible');

        // 5. Type "test" into the textbox
        cy.get('#post_textbox').focus().type('test');

        // * Check that textbox contains only "test"
        cy.get('#post_textbox').should('have.text', 'test').and('be.visible');

        // 6. Archive channel to prevent clutter
        cy.archiveChannel(randomString);
    });
});

describe('Creating direct messages with different users to check users name in textarea placeholder', () => {
    before(() => {
        // * Go to Main Channel view with "user-1"
        cy.toMainChannelView('user-1');
    });

    it('should select a user for direct messaging', () => {
        var username = 'samuel.tucker';

        // 1. Create direct message with user-2
        cy.createDirectMessage('user-2');

        // * Check to make sure new users chat is the main view
        cy.get('.channel-intro-profile').contains(username);
        cy.get('#channelHeaderTitle').contains(username);

        // * Check that the placeholder is accurately named after the user and is visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + username).and('be.visible');

        // 2. Type "hello!" into the textbox
        cy.get('#post_textbox').focus().type('hello!');

        // * Check that textbox contains only "hello!"
        cy.get('#post_textbox').should('have.text', 'hello!').and('be.visible');

        // 3. Clear "hello!" from texbox
        cy.focused().clear();

        // 4. Remove users channel from Direct Messages list
        cy.deleteActiveDm();
    });

    it('should select two users for direct messaging', () => {
        var username = 'samuel.tucker';
        var username2 = 'sysadmin';

        // 1. Create direct message and add user-2
        cy.get('#createDirectMessage').click();
        cy.get('input[type=text]').click({force: true}).type('user-2', {force: true});
        cy.get('#saveItems').click();
        cy.get('.more-modal__row').eq(0).click();

        // 2. Add sysadmin, press enter
        cy.get('input[type=text]').click({force: true}).type('sysadmin{enter}');

        // 3. Save 2 user chat
        cy.get('#saveItems').click();

        // * Check that username is displayed in the main channel and channel header dropdown
        cy.get('.channel-intro-text').contains(username);
        cy.get('#channelHeaderTitle').contains(username);

        // 4. Check that username2 is displayed in the main channel and channel header dropdown
        cy.get('.channel-intro-text').contains(username2);
        cy.get('#channelHeaderTitle').contains(username2);

        // * Check that the placeholder is accurately named after the username and username2 and is visible within the textbox
        cy.get('#post_textbox').should('have.attr', 'placeholder', 'Write to ' + username + ', ' + username2).and('be.visible');

        // 5. Type "hiya!" into the textbox
        cy.get('#post_textbox').focus().type('hiya!');

        // * Check that textbox contains only "hiya!"
        cy.get('#post_textbox').should('have.text', 'hiya!').and('be.visible');

        // 6. Clear "hiya!" from texbox
        cy.focused().clear();

        // 7. Remove the 2 user channel from the Direct Messages list
        cy.deleteActiveDm();
    });
});