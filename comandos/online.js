const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    message.channel.send(`Temos ${bot.users.size} membros neste grupo.`)
};

exports.help = {
    "name": "teste"
}
