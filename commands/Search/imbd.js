const discord = require("discord.js");
const imdb = require("imdb-api");
const { move } = require("snekfetch");

module.exports = {
commands: "imdb",
  description: "Get the information about series and movie",
  callback: async (message, arguments, client) => {

    if(!arguments.length) {
        return message.channel.send("Please give the name of movie or series")
      }

      const imob = new imdb.Client({apiKey: "d23f0480"}) //You need to paste you imdb api
      let movie = await imob.get({'name': arguments.join(" ")})

      let embed = new discord.MessageEmbed()
      .setTitle(movie.title)
      .setColor("#ff2050")
      .setThumbnail(movie.poster)
      .setURL(movie.imdburl)
      .setDescription(movie.plot)
      .setFooter(`Ratings: ${movie.rating}`)
      .addField(`Genres `,`${movie.genres}`, true)
      .addField("Languages", movie.languages, true)
      .addField(`Year Released`, `${movie.year}`, true)
      .addField("Studios", `${movie.production}`, true)
      .addField("Country", movie.country, true)

      .addField("Type", movie.type, true)
      .addField("Actors", `${movie.actors}`)
    
      
      
      message.channel.send(embed)
}
    }