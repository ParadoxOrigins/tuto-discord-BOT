const Discord = require("discord.js");
const client = new Discord.Client();
const token = "Le token du ";
var prefix = "!";
var mention = "la mention du bot"

client.on("ready", () => {
var servers = client.guilds.array().map(g => g.game).join(',');
console.log('I m ready');
});
var messages = [];
client.on('message', message => {
if (message.content.startsWith(prefix + "test")) {
message.channel.send('5/5');}});


client.on('message', message => {
if (message.content.startsWith(prefix + "ping")) {
var now = require('performance-now');
var startTime = now();
message.channel.send("pong = wait...")
.then(message => {
var endTime = now();
return message.edit("**pong :ping_pong: = " + Math.round(endTime - startTime) + " ms.**");
}).catch(console.error);
}});

client.login(token)
