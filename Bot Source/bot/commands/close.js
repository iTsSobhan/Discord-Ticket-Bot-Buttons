const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "close",
    cooldown: 5,
    aliases: ["end"],

    run: async function(client, message, args) {
        try {
            if (!message.channel.name.includes("ticket-")) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Error**`,
                        description: `Inja Mage Channel Tickete Shotor?`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
                return
            }
            let btn = new MessageButton()
                .setStyle("blurple")
                .setEmoji("🎫")
                .setLabel("Bastan Va Pakcardan Ticket")
                .setID("closeTicketTrue");
            let btn2 = new MessageButton()
                .setStyle("grey")
                .setEmoji("⛔")
                .setLabel("Cancel Kardan Amaliat")
                .setID("closeTicketFalse");
            let row = new MessageActionRow()
                .addComponent(btn)
                .addComponent(btn2);
            message.channel.send({
                embed: {
                    title: `**⚠️ | Hoshdar**`,
                    description: `Motmaen Hastid Ke Mikhahid Ticket Ro Bebandid?`,
                    color: 0xFFF200
                },
                component: row
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
                require('quick.db').set(`DeleteMessage_${message.channel.id}`, msg.id)
            })
        } catch (err) {
            return;
        }
    }
}
