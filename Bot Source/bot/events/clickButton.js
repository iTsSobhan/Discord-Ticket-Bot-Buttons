const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = async function(client, button) {
        try {
            await button.reply.defer();
            if (button.id == 'createTicket') {
                var nameer = `ticket-${button.clicker.user.username}`
                var checkTickets = button.guild.channels.cache.find(c => c.name == nameer.split(' ').join('-').toLocaleLowerCase());
                if (checkTickets) {
                    button.channel.send({
                        embed: {
                            color: 0xFF0000,
                            title: `**❌ | Error**`,
                            description: `Haji Aval Ye Ticket Besaz Badesh Maro Servis Kon😕`
                        }
                    }).then(async function(m) {
                        setTimeout(() => {
                            m.delete();
                        }, 1000 * 20);
                    });
                    return
                }
                button.guild.channels.create(`ticket-${button.clicker.user.username}`, {
                    permissionOverwrites: [{
                            id: button.clicker.user.id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        },
                        {
                            id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        }, {
                            id: button.guild.roles.everyone,
                            deny: ["VIEW_CHANNEL"]
                        }
                    ],
                    type: 'text'
                }).then(async function(channel) {
                    require('quick.db').set(`TicketControl_${channel.id}`, button.clicker.user.id);
                    let btn = new MessageButton()
                        .setStyle("grey")
                        .setLabel("Bastan Ticket")
                        .setEmoji("🔒")
                        .setID("configTicket");
    
                    let row = new MessageActionRow()
                        .addComponent(btn);
                    channel.send(`<@${button.clicker.user.id}>`, {
                        embed: {
                            description: `Lotfan Montazer **Staff** Bashid Ta Be Shoma Pashokh Bedahand!!
                    Bareie Baz Kardan Ticket Roie **"🔒"** Click Konid`,
                            color:'RANDOM'
                        },
                        component: row
                    });
                });
            } else if (button.id == 'configTicket') {
                if (!button.channel.name.includes("ticket-")) {
                    return;
                }
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        deny: ['SEND_MESSAGES'],
                        allow: ['VIEW_CHANNEL']
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
                button.channel.send({
                    embed: {
                        description: `Ticket Tavasote <@!${button.clicker.user.id}> Baste Shod🙃`,
                        color: 'RANDOM'
                    }
                }).then(async function(m) {
                    setTimeout(() => {
                        m.delete();
                    }, 1000 * 10);
                });
                let btn = new MessageButton()
                    .setStyle("grey")
                    .setEmoji("🔒")
                    .setLabel("Bastan Ticket")
                    .setID("reopenTicket");
                let btn2 = new MessageButton()
                    .setStyle("grey")
                    .setEmoji("⛔")
                    .setLabel("Pak Kardan Ticket")
                    .setID("deleteTicket");
                let row = new MessageActionRow()
                    .addComponent(btn2)
                    .addComponent(btn);
                button.channel.send({
                    embed: {
                        description: 'Roie **"⛔"** Feshar Dahid Ta Ticket Pak Shavad Va Baraie Bstan Ticket Roie **"🔒"** Click Konid',
                        color: 'RANDOM'
                    },
                    component: row
                }).then(async function(m) {
                    setTimeout(() => {
                        m.delete();
                    }, 1000 * 25);
                });
            } else if (button.id == "deleteTicket") {
                require('quick.db').delete(`TicketControl_${button.channel.id}`);
                button.channel.send({
                    embed: {
                        description: 'Ticket Ro Bade Chand Sanie Mipakam Sabr Kon😁',
                        color: 'RANDOM'
                    }
                });
                setTimeout(() => {
                    button.channel.delete();
                }, 1000 * 5);
            } else if (button.id == "reopenTicket") {
                button.channel.send({
                    embed: {
                        description: `Ticket Tavasote <@!${button.clicker.user.id}> Baste Shod🙃`,
                        color: 'RANDOM'
                    }
                }).then(async function(m) {
                    setTimeout(() => {
                        m.delete();
                    }, 1000 * 15);
                })
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
            } else if (button.id == 'closeTicketTrue') {
                require('quick.db').delete(`TicketControl_${button.channel.id}`);
                button.channel.send({
                    embed: {
                        description: 'Ticket Ro Bade Chand Sanie Mipakam Sabr Kon😁',
                        color: 'RANDOM'
                    }
                });
                setTimeout(() => {
                    button.channel.delete();
                }, 1000 * 5);
            } else if (button.id == 'closeTicketFalse') {
                var msg = require('quick.db').fetch(`DeleteMessage_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteMessage_${button.channel.id}`);
            } else if (button.id == 'createTicketFalse') {
                var msg = require('quick.db').fetch(`DeleteOpen_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteOpen_${button.channel.id}`);
            } else if (button.id == 'createTicketTrue') {
                var msg = require('quick.db').fetch(`DeleteOpen_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteOpen_${button.channel.id}`);
                button.guild.channels.create(`ticket-${button.clicker.user.username}`, {
                    permissionOverwrites: [{
                            id: button.clicker.user.id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        },
                        {
                            id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        }, {
                            id: button.guild.roles.everyone,
                            deny: ["VIEW_CHANNEL"]
                        }
                    ],
                    type: 'text'
                }).then(async function(channel) {
                    require('quick.db').set(`TicketControl_${channel.id}`, button.clicker.user.id);
                    let btn = new MessageButton()
                        .setStyle("grey")
                        .setEmoji("🔒")
                        .setLabel("Bastan Ticket")
                        .setID("configTicket");
                    let row = new MessageActionRow()
                        .addComponent(btn);
                    channel.send(`<@${button.clicker.user.id}>`, {
                        embed: {
                            description: `Lotfan Montazer **Staff** Bashid Ta Be Shoma Pashokh Bedahand!!
                    Bareie Baz Kardan Ticket Roie **"🔒"** Click Konid`,
                        color: 'RANDOM'
                        },
                        component: row
                    });
                });
            } else if (button.id == 'renameTicketFalse') {
                var msg = require('quick.db').fetch(`DeleteRenameMessage_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteRenameMessage_${button.channel.id}`);
            } else if (button.id == 'renameTicketTrue') {
                var msg = require('quick.db').fetch(`DeleteRenameMessage_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                button.channel.setName('ticket-' + require('quick.db').fetch(`RenameTicket_${button.channel.id}`));
                button.channel.send({
                            embed: {
                                title: '🎫',
                                description: `Esm Ticket Shoma Taghir Yaft😄 Esme Ticke Hast 👉🏻 \`${require('quick.db').fetch(`RenameTicket_${button.channel.id}`)}\``,
                        color: 'RANDOM'
                }
            })
            require('quick.db').delete(`DeleteRenameMessage_${button.channel.id}`);
        }
    } catch (err) {
        console.log(err)
    }
}