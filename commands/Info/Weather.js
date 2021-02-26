const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');

module.exports = {
   
        commands: "weather",
       
  
    callback: async (message, arguments) => {
        const embed = new MessageEmbed()
            .setTitle(`❌ Error Generated`)
            .setDescription(`Please enter the name of a city`)
            .setColor(`#060103`)
            .setFooter(`Generated for ${message.author.username}`)
        if(!arguments[0]) return message.channel.send(embed)
      
        weather.find({search: arguments.join(" "), degreeType: 'C'}, function(err, result){
        
        if(err) message.channel.send(err.message);

        if(result.length === 0) {
            message.channel.send('**Please Enter A Valid Location.**')
            return undefined;
        }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor("#060103")
                .addField('**Timezone**', `UTC ${location.timezone}`, true)
                .addField('**Temperature**', `${current.temperature} Degrees`, true)
                .addField('**Feels Like**', `${current.feelslike} Degrees`, true)
                .addField('**Winds**', `${current.winddisplay}`, true)
                
                .addField('**Humidity**', `${current.humidity}%`, true)
                .addField('**Degree Type**', `${location.degreetype}`, true)

                .addField('**Date**', `${current.date}`, true)
                .addField('**Day**', `${current.day}`, true)
                .setFooter(`Generated for ${message.author.username}`)
                .setTimestamp()

            message.channel.send({embed})

        });
    }
}