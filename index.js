const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.on('guildMemberAdd', member => 
    member.addRole("476927204845027348")
);

bot.on('guildMemberAdd', member => {
    if (member.guild.id !== "476923523617783808") return;
    let avatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(avatar)
        .setTitle("** <a:Partness:506963369157197824> bem-vindo**")
        .addField('Bem vindo(a)!', `Bem vindo(a) ${member} Ao servidor biscoitinho lindo!`)
        .setTimestamp()
    bot.channels.get('512626706138267648').send({embed})

});

bot.on("guildMemberRemove", async member => {
    if (member.guild.id !== "476923523617783808") return;
    let avatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(avatar)
        .addField('Saida!', `Um biscoitinho saiu, o nick dele é ${member}, espero que ele volte.`)
        .setTimestamp()
    bot.channels.get('512626706138267648').send({embed})

});

fs.readdir("./comandos", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f,i) => {
        let props = require(`./comandos/${f}`);
        console.log(`comando ${f} carregado com sucesso.`)
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", async message => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return; {
  if (message.content.startsWith('https://discord.gg/')) {
        message.delete();
        return message.channel.send(`
<a:Alerta:501028184641241108> Alerta, o ${message.author} está tentando divulgar outro grupo discord! 
<a:Alerta:501028184641241108>`);
        
    }
  } 

});

bot.on('ready', () =>{
    let status = [
        {name: '🍪 Ajuda?│ b!help', type: 'STREAMING', url: 'https://twitch.tv/biscoito'},
        {name: `biscoito para ${bot.users.size} pessoas 🍪`, type: 'LISTENING'},
        {name: '🍪 biscoitinhos', type: 'PLAYING'},
        {name: 'os videos do SrBiscoito 🍪', type: 'WATCHING'},
        {name: `Estou em um servidor com ${bot.users.size} biscoitos`, type: 'WATCHING'},
      ];
      
      //STREAMING = Transmitindo
      //LISTENING = Ouvindo
      //PLAYING = Jogando
      //WATCHING = Assistindo
      
        function setStatus() {
            let randomStatus = status[Math.floor(Math.random() * status.length)];
            bot.user.setPresence({game: randomStatus});
        }
      
        setStatus();
        setInterval(() => setStatus(), 10000);  //10000 = 10Ms = 10 segundos
});

bot.on("message", message => {

if (message.channel.id === "512737646137573378") {
message.react(":Sucoo:512949871846883329");
message.react(":Pipocaa:512953511160315915");
message.react(":MeChamou:512953748834746369");
message.react(":Incrvel:512949791244681236");
message.react(":Cookie:501028229415567376");
message.react("a:Maluco:503910925523484702");
message.react("a:PorcoRainbow:500451363730358282");
message.react("a:Pulinho:502828735649808385");
message.react("a:Yay:501026262534324224");
message.react("a:Mencao:501028003296313354");
message.react("a:PandaRainbow:501027861633826836");
message.react("a:Espada:501026772989509643");
message.react("a:Gatenho:512954139614117908");
message.react("a:Ue:512954046987108362");

}

});

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefixes = JSON.parse(fs.readFileSync("./config.prefix", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: botconfig.prefix
      };
    }
  
    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0
      };
    }
  
    let coinAmt = Math.floor(Math.random() * 15) + 1;
    let baseAmt = Math.floor(Math.random() * 15) + 1;
    console.log(`${coinAmt} ; ${baseAmt}`);
  
    if(coinAmt === baseAmt){
      coins[message.author.id] = {
        coins: coins[message.author.id].coins + coinAmt
      };
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
      if (err) console.log(err)
    });
    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#0000FF")
    .addField("💸", `${coinAmt} coins added!`);
  
    message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
    }
  
    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log(xpAdd);
  
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
  
  
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp =  curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
      xp[message.author.id].level = curlvl + 1;
      let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setColor(purple)
      .addField("New Level", curlvl + 1);
  
      message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
    });
  
    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
  
  });

bot.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);
});

bot.login(process.env.BOT_TOKEN);
