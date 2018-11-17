const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Infelizmente você não tem permissão!");
    message.channel.send(`Temos ${bot.users.size} membros neste grupo.`)
};

exports.help = {
    "name": "online"
}
