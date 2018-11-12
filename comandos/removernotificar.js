const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var member = message.member.removeRole("510619846623363088")
    return message.reply("você não será mais notificado <:Desnotificar:511191077319999489>");

}

module.exports.help = {
  name: "rnotificar"
}