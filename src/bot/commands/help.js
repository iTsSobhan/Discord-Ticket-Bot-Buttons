module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands","h"],
    run: async function(client, message, args) {
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
    const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()

   .setTitle(`Ticket Help Commands`)
   .setAuthor(`Ticket Help ${message.client.user.username }`,`${message.client.user.displayAvatarURL({ format: "png" })}`)
   .setThumbnail('https://cdn.discordapp.com/attachments/902034619791196221/905043997280567346/e4b59a9ad0fafa675c7760e7f6671d0e.gif')
   .setColor(`RANDOM`)
   .addField(`**> ${prefix}setup <Tag Channele Morede Nazar> <Tag Role Staff> <Payame Delkhah Dar Title Ticket>**`, '**Description:**`Az In Command Baraye Set Kardan Payam Ticket Sakhte Shode Estefade Konid`', true)
   .addField(`**> ${prefix}open**`, '**Description:**`Az Command Baraye Sakhtane Ticket Estefade Konid`', true)
   .addField(`**> ${prefix}close**`, '**Description:**`Az In Command Baraye Delete Kardan Ya Bastane Har Ticket Anjam Bedid`', true)
   .addField(`**> ${prefix}invite**`, '**Description:**`Ba In Command Mitavand Link Invite Bot Ro Begirid`', true)
   .addField(`**> ${prefix}serverlist**`, '**Description:**`Ba In Command Mitavand Liste TaMamie Server Hayi Ke Bot Adde Ro Begirid`', true)
     .addField(`**> ${prefix}rename**`, '**Description:**`Ba In Command Mitavand Esme Ticketi Ke Sakhtid Ra Avaz Konid`', true)
     .addField(`**> ${prefix}add**`, '**Description:**`Ba In Command Mitavand Memeber Digari Ra Be Ticketi Ke Sakhtid Add Konid`', true)
     .addField(`**> ${prefix}ping**`, '**Description:**`Ba In Command Mitavand Ping Bot Ra Moshahede Konid`', true)
     .addField(`**> ${prefix}about**`, '**Description:**`Ba In Command Mitavand Darbare Bot Etteleaty Kasb Konid`', true)
     .addField(`**> ${prefix}remove**`, '**Description:**`Ba In Command Mitavand Dastresi Haie Ticket Ra Hazf Konid`', true)
     .addField(`**> ${prefix}prefix**`, '**Description:**`Ba In Command Mitavand Prefix Bot Ra Dar Server Khod Moshahede Konid | Hamchenin Mitavanid Prefix Ra Avaz Konid`', true)
.setFooter(`Requested by ${message.author.username} | Created By Mr.SIN RE#1528 :)`, `${message.author.displayAvatarURL()}`)
  embed.addField(`**Links**`, `**[Support Server](${"https://discord.gg/5GYNec4urW"}) • [Invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=137775017040&scope=bot)**`)

   return message.channel.send(embed);
    message.react('🙏🏻')
    }
}
