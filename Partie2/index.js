//tuto by "TheShooter - [DEV]"
const Discord = require("discord.js");
const client = new Discord.Client();
const token = "Ton token";

var prefix = "^^";


 client.on("ready", () => {

var memberNumber = client.users.size;
var serverNumber = client.guilds.size;

 client.user.setGame(`prefix: ${prefix}` + " | I'm tutoBOT", "http://twitch.tv/bot");

 client.user.setStatus("idle");

	console.log("--------------------------------------");

  console.log("TutoBOT online\nNombre de serveurs: " + serverNumber + "\navec\n" + memberNumber + " utilisateurs");

});


 client.on('message', message => {


   if (message.content.startsWith(prefix + "logout")) {

     if(message.author.id == "240508683455299584"){

      message.reply("Arrêt en cour");

        console.log('/ Je suis désormais offline / ');

        client.destroy();

        process.exit()

    } else {

      message.channel.send("**Erreur** ! Tu n'es pas l'owner")

    }
  }


const fs = require("fs");
var msg = message;

let afk = JSON.parse(fs.readFileSync("./afks.json", "utf8"));
if (message.content.startsWith(prefix + "remafk")){
if (afk[msg.author.id]) {
delete afk[msg.author.id];
if (msg.member.nickname === null) {
msg.channel.send(" re, j'ai enlever votre afk ^^");
}else{
msg.channel.send(" re, j'ai enlever votre afk ^^");
}
fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
}else{
msg.channel.send("Erreur ! Tu es déjà afk");
}
}


if (msg.content.startsWith(prefix + "afk")||msg.content === prefix + "afk") {
if (afk[msg.author.id]) {
return message.channel.send("Erreur ! Tu es déjà afk -_-");
}else{
let args1 = msg.content.split(" ").slice(1);
if (args1.length === 0) {
afk[msg.author.id] = {"reason" : true};
msg.delete();
msg.channel.send(`tu es désormais afk, met **${prefix}remafk** pour enlever ton afk`).then(x => DeleteQueue.add(x, 10000));
}else{
afk[msg.author.id] = {"reason" : args1.join(" ")};
msg.delete();
msg.channel.send(`tu es désormais afk, met **${prefix}remafk** pour enlever ton afk`).then(x => DeleteQueue.add(x, 10000));
}
fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
}
}
    
    var mentionned = message.mentions.users.first();
if(msg.mentions.users.size > 0) {
if (afk[msg.mentions.users.first().id]) {
if (afk[msg.mentions.users.first().id].reason === true) {
message.channel.send(`@${mentionned.username} is AFK: pas de raison`);
}else{
message.channel.send(`@${mentionned.username} is AFK: ${afk[msg.mentions.users.first().id].reason}`);
}
}
}

});

client.login(token)
