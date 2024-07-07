const Config = require("../Config.js")

module.exports = (client) => {
    client.on("ready", () => {
        client.user.setActivity(`${Config.SahipAdı} tarafından yapıldım.`, { type: "PLAYING" })
        client.user.setStatus("Dnd")
        console.success(`Bot başarıyla Discord'a bağlandı!`)
    })
}