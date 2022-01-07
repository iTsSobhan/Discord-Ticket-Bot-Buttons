module.exports = {
    name: "prefix",
    cooldown: 5,
    aliases: ["set-prefix"],

    run: async function(client, message, args) {
        try {
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Error**`,
                        description: `you need same permissions to use this command`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
                return
            }
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            var newPrefix = args.join(' ')
            if (!newPrefix) {
                require('quick.db').set(`prefix_${message.guild.id}`, require('../../config/bot').prefix);
                message.channel.send({
                    embed: {
                        description: `Prefix Bot Be **${require('../../config/bot').prefix}** Taghir Yaft`,
                        color: 0x00D700
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
            } else if (newPrefix) {
                if (newPrefix.length > 7) {
                    message.channel.send({
                        embed: {
                            color: 0xFF0000,
                            title: `**❌ | Error**`,
                            description: `Shotor Prefixet Kheili Tolanoe😶‍🌫️`
                        }
                    }).then(async function(msg) {
                        setTimeout(() => {
                            msg.delete().catch(err => { return })
                        }, 1000 * 7);
                    })
                    return
                }
                require('quick.db').set(`prefix_${message.guild.id}`, newPrefix);
                message.channel.send({
                    embed: {
                        description: `Prefix Bot Dar In Server Be **${newPrefix}** Taghir Yaft😁`,
                        color: 0x00D700
                    }
                })
            }
        } catch (err) {
            return;
        }
    }
}
