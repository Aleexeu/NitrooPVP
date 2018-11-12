const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var member = message.member.addRole("510619846623363088")
    return message.reply("agora você será notificado <a:Sininho:501028072850718720>");

}

module.exports.help = {
  name: "notificar"
}