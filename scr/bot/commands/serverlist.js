module.exports = {
    name: "seeverlist",
    cooldown: 5,
    aliases: ["listserver","servers"],

    run: async function(client, message, args) {
        const Guilds = client.guilds.cache.array().map((G, I) => `${I + 1}. **${G.name}** - **${G.id}**`).join("\n");
    if (!Guilds) return message.channel.send("No Guild");
    return message.channel.send(Guilds, { split: { char: "\n" } }); 
    }
}
