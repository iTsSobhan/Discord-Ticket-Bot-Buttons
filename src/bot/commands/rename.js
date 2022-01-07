const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "close",
    cooldown: 5,
    aliases: ["end"],

    run: async function(client, message, args) {
        try {
            var renameMessage = args.join(' ');
            if (!message.channel.name.includes("ticket-")) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Error**`,
                        description: `Shotor Inja Mage Channel Tickte?`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 30);
                })
                return
            }
            if (!message.member.hasPermission('MANAGE_CHANNELS')) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Error**`,
                        description: `Shoma Dastresi Morede Nazar Ra Nadarid🤕`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
                return
            }
            if (!renameMessage) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Error**`,
                        description: `Shoma Dastresi Morede Nazar Ra Nadarid🤕`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                   setTimeout(() => {
                      msg.delete().catch(err => { return })
                 }, 1000 * 20);
               })
                return
            }
            let btn = new MessageButton()
                .setStyle("green")
                .setEmoji("✅")
                .setLabel("Taghir Name Ticket")
                .setID("renameTicketTrue");
            let btn2 = new MessageButton()
                .setStyle("grey")
                .setEmoji("⛔")
                .setLabel("Cancel Kardan Amaliat")
                .setID("renameTicketFalse");
            let row = new MessageActionRow()
                .addComponent(btn)
                .addComponent(btn2);
            message.channel.send({
                embed: {
                    title: `**⚠️ | Hosdar**`,
                    description: `Aya Motmaen Hastid Ke Esm Ticket Ra Taghir Dahid?`,
                    color: 0xFFF200
                },
                component: row
            }).then(async function(msg) {
                setTimeout(() => {
                  msg.delete().catch(err => { return })
               }, 1000 * 20);
                require('quick.db').set(`RenameTicket_${message.channel.id}`, renameMessage)
                require('quick.db').set(`DeleteRenameMessage_${message.channel.id}`, msg.id)
            })
        } catch (err) {
           return;
        }
    }
}
