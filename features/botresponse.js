
module.exports = function(controller) {

    controller.hears(async (message) => { return (message.intent.name === 'restaurant_search') }, 'message,direct_message', async(bot, message) => {
        await bot.reply(message,'Are you looking for a restaurant? I can definitely help you in that!!!');
    });


    controller.hears(async (message) => { return (message.intent.name === 'greet') }, 'message,direct_message', async(bot, message) => {
        await bot.reply(message,'Hi!!!, How may I help you');
    });

    controller.hears(async (message) => { return (message.intent.name === 'ask_weather') }, 'message,direct_message', async(bot, message) => {
        await bot.reply(message,'Are you looking for weather news????');
    });
}