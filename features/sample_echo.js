/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.hears(['hi','bonjour'],'message,direct_message', async(bot, message) => {
        console.log('message is');
        console.log(message);
        await bot.reply(message, 'Hello, How Can I help you?');
    });

    //controller.hears(['greet'],'message,direct_message', function(bot, message) {
       // bot.reply(message, 'Hello!!!, How may I help you');    
    //});

    //controller.hears('hello','message,direct_message', async(bot, message) => {
        //await bot.reply(message, 'Welcome, What are you looking fory?');
    //});

    controller.on('message', async(bot, message) => { 

        await bot.reply(message, {
            text: 'Here is a menu!',
            quick_replies: [
                {
                    title: "Main",
                    payload: "main-menu",
                },
                {
                    title: "Help",
                    payload: "help"
                }
            ]
        });
    });

}
