const Discord = require("discord.js");

odule.exports.run = (client, message, args) => {
    var member = message.member.addRole("510619846623363088")
    return message.channel.send("Tag setada com sucesso!");

}

module.exports.help = {
  name: "notificar"
}
