const Discord = require('discord.js');

const fetch = require('node-fetch').default

const client = new Discord.Client;

const modlogschannel = require('./Schemas/Mod-Logs')

const config = require('./config.json')

const ModLogsEnabled = require('./Schemas/Mod-Logs-Schema')

client.setMaxListeners(100);

const mongo = require('./Util/mongo');

client.queue = new Map()

const { getPokemon } = require('./Util/Pokemon');

const loadfeatures = require('./features/load-features')

const loadCommands = require('./commands/load-commands')

const commandBase = require('./commands/command-base');

const connectToMongoDB = async () => {
  await mongo().then(mongoose => {
    try {
      console.log('Connected to mongoose')

    } finally {

      console.log(`Disconnected`)
      
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()

client.on('ready', async () => {
  console.log(`${client.guilds.cache.size} guilds are gonne be amazed`)
 
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Servers | ?help`, { type: 'WATCHING' })
    }, 60000); 

  loadfeatures(client)

  loadCommands(client)

  commandBase.loadPrefixes(client)

})

client.on('message', async message => {

  if(message.author.bot) return;


  if(message.channel.id === '822053897451077633') {
    fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
    .then(response => response.json())
    .then(data => {
      message.channel.send(data.response)
    })
    .catch(() => {
      message.channel.send(`something went wrong :(`)
    })
  }
    if(message.content.toLowerCase().startsWith('?pokemon')) {
      const pokemon = message.content.toLowerCase().split(" ")[1];
      try {
          const pokeData = await getPokemon(pokemon);
          const { 
              sprites, 
              stats, 
              weight, 
              name, 
              id, 
              base_experience,
              abilities,
              height,
              types
          } = pokeData;
          const embed = new Discord.MessageEmbed();
          const newname = name.charAt(0).toUpperCase() + name.slice(1);
          embed.setTitle(` <:Pokom:803173396363214848>  ${newname} <:Pokom:803173396363214848> `)
          embed.setThumbnail(`${sprites.front_default}`);
          stats.forEach(stat => embed.addField(stat.stat.name, stat.base_stat, true));
          types.forEach(type => embed.addField('Type', type.type.name, true));
          embed.addFields(
            {name: "Weight", value: `${weight} Lbs`, inline:true},
            {name: "Height", value: `${height} Inches`, inline:true},
          )
          
          message.channel.send(embed);
      }
      catch(err) {
          console.log(err);
          message.channel.send(`That pokemon does not exist.. Mind trying again.`);
      }
  }

});

client.on('messageDelete', async (message) => {


  if(!message.guild) {
    return
  }

  const guildId = message.guild.id

  
  const hi1 = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await ModLogsEnabled.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh1 = JSON.stringify(hi1)

  const nice1 = JSON.parse(bruh1)

  const channel1 = nice1.enabled

  if(channel1 === 0) return

  const hi = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await modlogschannel.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh = JSON.stringify(hi)

  const nice = JSON.parse(bruh)

  const channel = nice.channelId

  if(channel === `none`) return

  const modchannel = client.channels.cache.get(channel)

  const embed = new Discord.MessageEmbed
  embed.setAuthor(`Message Deleted`)
  embed.setColor('#060103')
  embed.setTitle(`Message Send By ${message.author.tag}`)
  embed.setDescription(`Message Deleted in ${message.channel} \n \n ${message.content}`)
  embed.setTimestamp()

  modchannel.send(embed)

})

client.on("channelCreate", async function(channel){
  

  const guildId = channel.guild.id

  
  const hi1 = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await ModLogsEnabled.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh1 = JSON.stringify(hi1)

  const nice1 = JSON.parse(bruh1)

  const channel1 = nice1.enabled

  if(channel1 === 0) return

  const hi = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await modlogschannel.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh = JSON.stringify(hi)

  const nice = JSON.parse(bruh)

  const channel2222 = nice.channelId

  if(channel2222 === `none`) return

  const modchannel = client.channels.cache.get(channel2222)

  const channeltype = {
    text : `Text`,
    voice: `Voice`
  }

  const embed = new Discord.MessageEmbed
  embed.setTitle(`New Channel Created`)
  embed.addFields({name: `Channel Name`, value: `${channel.name}`, inline:false},
  {name: `Channel ID`, value : `${channel.id}`, inline:true},
  {name:`Channel Type`, value: channeltype[channel.type], inline:true})
  embed.setColor('#060103'),
  embed.setFooter(`Logged by Regard Bot`)
  embed.setTimestamp()

  modchannel.send(embed)

});

client.on("channelDelete", async function(channel){
  

  const guildId = channel.guild.id

  
  const hi1 = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await ModLogsEnabled.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh1 = JSON.stringify(hi1)

  const nice1 = JSON.parse(bruh1)

  const channel1 = nice1.enabled

  if(channel1 === 0) return

  const hi = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await modlogschannel.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh = JSON.stringify(hi)

  const nice = JSON.parse(bruh)

  const channel2222 = nice.channelId

  if(channel2222 === `none`) return

  const modchannel = client.channels.cache.get(channel2222)

  const channeltype = {
    text : `Text`,
    voice: `Voice`
  }

  const embed = new Discord.MessageEmbed
  embed.setTitle(`Channel Deleted`)
  embed.addFields({name: `Channel Name`, value: `${channel.name}`, inline:false},
  {name: `Channel ID`, value : `${channel.id}`, inline:true},
  {name:`Channel Type`, value: channeltype[channel.type], inline:true},
  {name: `Creation Date`, value: channel.createdAt})
  embed.setColor('#060103'),
  embed.setFooter(`Logged by Regard Bot`)
  embed.setTimestamp()

  modchannel.send(embed)

});

client.on("emojiCreate", async function(emoji){
  

  const guildId = emoji.guild.id

  
  const hi1 = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await ModLogsEnabled.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh1 = JSON.stringify(hi1)

  const nice1 = JSON.parse(bruh1)

  const channel1 = nice1.enabled

  if(channel1 === 0) return

  const hi = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await modlogschannel.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh = JSON.stringify(hi)

  const nice = JSON.parse(bruh)

  const channel2222 = nice.channelId

  if(channel2222 === `none`) return

  const modchannel = client.channels.cache.get(channel2222)

  const trueig = {
    true : `True`,
    false: `False`
  }

  
  const embed = new Discord.MessageEmbed
  embed.setTitle(`New Emoji Created`)
  embed.addFields(
    {name: `Emoji Added`, value: `${emoji} ${emoji.name}`},
    {name: `Emoji ID`, value: emoji.id},
    {name: `Is Animated`, value: trueig[emoji.animated]}
  )
  embed.setFooter(`Logged by Regard Bot`)
  embed.setTimestamp()

  modchannel.send(embed)

});
client.on("emojiDelete", async function(emoji){
  

  const guildId = emoji.guild.id

  
  const hi1 = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await ModLogsEnabled.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh1 = JSON.stringify(hi1)

  const nice1 = JSON.parse(bruh1)

  const channel1 = nice1.enabled

  if(channel1 === 0) return

  const hi = await mongo().then(async (mongoose) => {
    try {
      
       const hi = await modlogschannel.findOne({
        guildId,
      })
  
      return hi
  
    } finally {
      mongoose.connection.close()
    }
  })

  var bruh = JSON.stringify(hi)

  const nice = JSON.parse(bruh)

  const channel2222 = nice.channelId

  if(channel2222 === `none`) return

  const modchannel = client.channels.cache.get(channel2222)

  const trueig = {
    true : `True`,
    false: `False`
  }

  
  const embed = new Discord.MessageEmbed
  embed.setTitle(`Emoji Deleted`)
  embed.addFields(
    {name: `Emoji Deleted`, value: `${emoji.name}`, inline:true},
    {name: `Emoji ID`, value: emoji.id},
    {name: `Is Animated`, value: trueig[emoji.animated], inline:true},
    {name: `Creation Date`, value: emoji.createdAt}
  )
  embed.setFooter(`Logged by Regard Bot`)
  embed.setTimestamp()

  modchannel.send(embed)

});
client.login(config.token)
