const { Client } = require("discord.js")
const client = new Client({ intents: 32767 });
const Config = require("./Config.js")
require("advanced-logs")
require("./Events/Ready.js")(client)
require("./Events/MessageCreate.js")(client)
require("./Events/CommandHandler.js")(client)


// ErrorHandler --------------------------------------------------------------
process.on('unhandledRejection', (reason, p) => {
    console.error(reason);
});
process.on("uncaughtException", (err, origin) => {
    console.error(' [AntiCrash] :: Uncaught Exception/Catch');
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.error(' [AntiCrash] :: Uncaught Exception/Catch (MONITOR)');
});
process.on('multipleResolves', (type, promise, reason) => {
    console.error(' [AntiCrash] :: Multiple Resolves');
});
// ErrorHandler --------------------------------------------------------------


client.login(Config.Token)