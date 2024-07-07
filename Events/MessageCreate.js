const { Prefix, SahipID } = require("../Config.js")

module.exports = (client) => {
    client.on("messageCreate", async (message) => {
        let client = message.client;
        if (message.author.bot) return;
        if (message.author.id === client.user.id) return;
        if (!message.guild) return;
        if (!SahipID.includes(message.author.id)) return;
        if (!message.content.startsWith(Prefix)) return;
        let command = message.content.split(" ")[0].slice(Prefix.length);
        let params = message.content.split(" ").slice(1);
        let cmd;
        if (client.commands.has(command)) {
            cmd = client.commands.get(command);
        } else if (client.aliases.has(command)) {
            cmd = client.commands.get(client.aliases.get(command));
        }
        if (cmd) {
            cmd.run(client, message, params);
        }
    })
};