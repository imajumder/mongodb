const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const {YouTube} = require("youtube-sr");

module.exports = {
    
        commands: "search",
      
    callback: async function (message, arguments)  {

        const embed = new MessageEmbed
        embed.setTitle(`You need to be in a voice channel to search music`)
        embed.setColor(`#060103`)

        const embed1 = new MessageEmbed
        embed1.setTitle(`I don't have required permissions to connect to your voice channel`)
        embed1.setColor(`#060103`)
       

    const embed2 = new MessageEmbed
    embed2.setTitle(`I don't have the required permissions to speak in your channel`)
    embed2.setColor(`#060103`)

    const embed3 = new MessageEmbed
    embed3.setTitle(`You need to provide what music you want to search`)
    embed3.setColor(`#060103`)

    const embed4 = new MessageEmbed
    embed4.setTitle(`I couldn't find anything with that name / url on youtube`)
    embed4.setColor(`#060103`)

    const embed5 = new MessageEmbed
    embed5.setTitle(`You need to be in a voice channel to play music`)
    embed5.setColor(`#060103`)

    const embed6 = new MessageEmbed
    embed6.setTitle(`Something went wrong.. Try again`)
    embed6.setColor(`#060103`)

    const embed7 = new MessageEmbed
    embed7.setTitle(`Queue is empty so I left the channel`)
    embed7.setColor(`#060103`)
  

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send(embed)

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return message.channel.send(embed1)
        if (!permissions.has("SPEAK")) return message.channel.send(embed2)

        var searchString = arguments.join(" ");
        if (!searchString) return message.channel.send(embed3)

        var serverQueue = message.client.queue.get(message.guild.id);
        try {
            var searched = await YouTube.search(searchString, { limit: 10 });
            if (searched[0] == undefined) return message.channel.send(embed4)
            let index = 0;
            let embedPlay = new MessageEmbed()
                .setColor("#060103")
                .setTitle(`Results for \"${arguments.join(" ")}\"`)
                .setDescription(`${searched.map((video2) => `**\`${++index}\`  |** [\`${video2.title}\`](${video2.url}) - \`${video2.durationFormatted}\``).join("\n")}  \n\n Type the number of next to your preffered song to play it Eg: 1, 3`)
                .setFooter(`Generated for ${message.author.username}`)
                .setTimestamp();
            // eslint-disable-next-line max-depth
            message.channel.send(embedPlay).then((m) =>
                m.delete({
                    timeout: 15000,
                })
            );
            try {
                var response = await message.channel.awaitMessages((message2) => message2.content > 0 && message2.content < 11, {
                    max: 1,
                    time: 20000,
                    errors: ["time"],
                });
            } catch (err) {
                return message.channel.send({
                    embed: {
                        color: "#060103",
                        description: "No input has been given within 20 seconds, Command has been aborted",
                    },
                });
            }
            const videoIndex = parseInt(response.first().content);
            var video = await searched[videoIndex - 1];
        } catch (err) {
            return message.channel.send({
                embed: {
                    color: "#060103",
                    description:"I could not obtain any search results",
                },
            });
            
        }

        response.delete();
        var songInfo = video;

        const song = {
            id: songInfo.id,
            title: Util.escapeMarkdown(songInfo.title),
            views: String(songInfo.views).padStart(10, " "),
            ago: songInfo.uploadedAt,
            duration: songInfo.durationFormatted,
            url: `https://www.youtube.com/watch?v=${songInfo.id}`,
            img: songInfo.thumbnail.url,
            req: message.author,
        };

        if (serverQueue) {
            serverQueue.songs.push(song);
            let thing = new MessageEmbed()
            .setAuthor("Song has been found and added to queue")
            .setThumbnail(song.img)
            .setURL(`${song.url}`)
            .setColor("#060103")
            .addField("Name", song.title, true)
            .addField("Duration", song.duration, true)
            .addField(`Views`, `${song.views}`, true)
            .addField(`Posted`, `${song.ago}`, true)
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp();
            return message.channel.send(thing);
        }

        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: channel,
            connection: null,
            songs: [],
            volume: 80,
            playing: true,
            loop: false,
        };
        message.client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        const play = async (song) => {
            const queue = message.client.queue.get(message.guild.id);
            if (!song) {
                 message.channel.send(embed7)
                message.guild.me.voice.channel.leave(); //If you want your bot stay in vc 24/7 remove this line :D
                message.client.queue.delete(message.guild.id);
                return;
            }
            let stream = null;
            if (song.url.includes("youtube.com")) {
                stream = await ytdl(song.url);
                stream.on("error", function (er) {
                    if (er) {
                        if (queue) {
                            queue.songs.shift();
                            play(queue.songs[0]);
                            return  message.channel.send(embed6)
                        }
                    }
                });
            }

            queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));
            const dispatcher = queue.connection.play(ytdl(song.url, { quality: "highestaudio", highWaterMark: 1 << 25, type: "opus" })).on("finish", () => {
                const shiffed = queue.songs.shift();
                if (queue.loop === true) {
                    queue.songs.push(shiffed);
                }
                play(queue.songs[0]);
            });

            dispatcher.setVolumeLogarithmic(queue.volume / 100);
            let thing = new MessageEmbed()
            .setAuthor(`Playing ${song.title}`)
            .setThumbnail(song.img)
            .setColor("#060103")
            .addField("Name", song.title, true)
            .addField("Duration", song.duration, true)
            .addField(`Posted`, `${song.ago}`, true)
            .addField(`Views`, `${song.views}`, true)
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp();
            queue.textChannel.send(thing);
        };

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            channel.guild.voice.setSelfDeaf(true);
            play(queueConstruct.songs[0]);
        } catch (error) {
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return  message.channel.send(embed6);
        }
    },
};
