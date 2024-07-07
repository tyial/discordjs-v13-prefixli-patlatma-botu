const Discord = require("discord.js")
const fs = require("fs")

const komutlar = []

module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();

    fs.readdir(`./Commands/`, (err, files) => {
        files.forEach(f => {
            if (!f) return;
            if (!f.endsWith(".js")) return;
            let props = require(`../Commands/${f}`);
            komutlar.push(props.conf.komut)
            client.commands.set(props.conf.komut, props);
            props.conf.aliases.forEach(alias => {
                client.aliases.set(alias, props.conf.komut);
            });
        })
    })
}