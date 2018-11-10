const Discord = require("discord.js");

module.exports.run = async(client, message, args) =>{
    let roleid = '510619846623363088'
    let membro = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!membro) return;
    let cargo = message.guild.roles.find(c => c.id == `${roleid}`)
    
    if(membro.roles.has(roleid)) return message.reply("Esse membro ja possui esse cargo")
    membro.addRole(roleid).then(() => {message.reply(`Sucesso :minidisc:`)})
}

module.exports.help = {
  name: "notificar"
}
