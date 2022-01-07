const moment = require("moment");
const Discord = require("discord.js")
module.exports = {
    name: "about",
    cooldown: 5,
    aliases: ["info","bot"],

    run: async function(client, message, args) {
    let infoEmbed = new Discord.MessageEmbed()
      infoEmbed.setColor("RANDOM");
      infoEmbed.setTitle(`About \`${client.user.username}\``);
      infoEmbed.addField(":ping_pong: Ping",`┕\`${Math.round(client.ws.ping)}ms\``,true);
      infoEmbed.addField(":clock1: Uptime", `┕\`${moment.duration(message.client.uptime)}\``,true);
      infoEmbed.addField(":file_cabinet: Memory",`┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
            2
          )}mb\``,true);
      infoEmbed.addField(":homes: Servers",`┕\`${client.guilds.cache.size}\``, true);
      infoEmbed.addField(":busts_in_silhouette: Users",`┕\`${client.users.cache.size}\``,true);
      infoEmbed.addField(":control_knobs: API Latency",`┕\`${message.client.ws.ping}ms\``,true);
      infoEmbed.addField(":robot: Version",`┕\`Ultra 10.1.0\``,true);
      infoEmbed.addField(":blue_book: Discord.js",`┕\`12.5.1\``,true);
      infoEmbed.addField(":green_book: Node",`┕\`16.2.1\``,true);
      infoEmbed.addField("👨🏻‍🎨 Create",`┕\`By ™️Sizar Team **Mr.SIN RE#1528**\``,true);
      infoEmbed.setTimestamp();
      infoEmbed.setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(infoEmbed)
    }
}
