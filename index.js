const Discord = require('discord.js');

const client = new Discord.Client;

const modlogschannel = require('./Schemas/Mod-Logs')

const config = require('./config.json')

client.setMaxListeners(100);

const mongo = require('./Util/mongo');

client.queue = new Map()

const { getPokemon } = require('./Util/Pokemon');

const prof = 
["alcoholic", "amateur", "analphabet", "anarchist", "ape", "arse", "arselicker", "ass", "ass-master", "ass-kisser", "ass-nugget", "ass-wipe", "asshole", "assmaster", "asskisser", "assnugget", "asswipe", "ass hole", "fuck", "fuck you", "fuckyou", "shit", "pissoff", "pussy", "piss off", "dick", "cock", "dickhead", "dick head", "cock head", "cockhead", "sonofabitch", "soab", "bitch", "bastard",  "cunt", "bollocks", "bugger", "bloody", "hell", "choad", "crikey", "rubbish", "shag", "wanker", "piss", "twat", "thot", "suck"]

const loadfeatures = require('./features/load-features')

const loadCommands = require('./commands/load-commands')


const connectToMongoDB = async () => {
  await mongo().then(mongoose => {
    try {
      console.log('Connected to mongoose')
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()

client.on('ready', async () => {
  console.log('The client is ready!')
 
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Servers | ?help`, { type: 'WATCHING' })
    }, 60000); 


  loadfeatures(client)

  loadCommands(client)

  
})

client.on('messageDelete', async (message) => {

  if(!message.guild) {
    return
  }

  const guildId = message.guild.id

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

  const modchannel = client.channels.cache.get(`${channel}`)

  if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	const deletionLog = fetchedLogs.entries.first();

  const { executor, target } = deletionLog;

  const embed = new Discord.MessageEmbed
  embed.setTitle(`Message Deleted`)
  embed.setColor("#060103")
  embed.setThumbnail(executor.avatarURL)
  embed.addFields({
    name: `Message sent by`, value: `${message.author.tag}`, inline: true,
  },
  {
    name: `Message deleted by`, value: `${executor.tag}`, inline: true,
  },
)
embed.setFooter(`ID : ${executor.id}`)
embed.setTimestamp()

  modchannel.send(embed)

})


client.on('message', async message => {

  if (message.content) {
    const profane = !!prof.find((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'i'); // if the phrase is not alphanumerical,
      return regex.test(message.content);             // you may need to escape tokens
    });

    if (profane) {
      return message.delete()
        .catch(console.error);
    }
  }
  
})

client.on('message', async message => {
  if(message.author.bot) return;
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

client.login(config.token)
