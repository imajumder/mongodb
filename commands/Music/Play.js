const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const ytdlDiscord = require("ytdl-core-discord");
const yts = require("yt-search");
const fs = require("fs");

module.exports = {

        commands: "play",

    callback: async  (message, arguments, client)  => {

        const embed = new MessageEmbed
        embed.setTitle(`You need to be in a voice channel to play music`)
        embed.setColor(`#060103`)
       

        const embed1 = new MessageEmbed
        embed1.setTitle(`I don't have required permissions to connect to your voice channel`)
        embed1.setColor(`#060103`)
       

    const embed2 = new MessageEmbed
    embed2.setTitle(`I don't have the required permissions to speak in your channel`)
    embed2.setColor(`#060103`)
 

    const embed3 = new MessageEmbed
    embed3.setTitle(`Nothing was provided to play try giving a name of a song or a url`)
    embed3.setColor(`#060103`)
    


    const embed4 = new MessageEmbed
    embed4.setTitle(`Specified song couldn't be found on youtube.. Check for typo's`)
    embed4.setColor(`#060103`)
 

    const embed5 = new MessageEmbed
    embed5.setTitle(`Queue is empty so I left the channel`)
    embed5.setColor(`#060103`)
  

    const embed6 = new MessageEmbed
    embed6.setTitle(`Something went wrong.. Try again`)
    embed6.setColor(`#060103`)
  

    const errorembed = new MessageEmbed
    errorembed.setTitle(`A error occured and something went wrong :(`)
    errorembed.setColor(`#060103`)
  

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send(embed);

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return message.channel.send(embed1)
        if (!permissions.has("SPEAK")) return message.channel.send(embed2)
        var searchString = arguments.join(" ");
        if (!searchString) return message.channel.send(embed3)
        const url = arguments[0] ? arguments[0].replace(/<(.+)>/g, "$1") : "";
        var serverQueue = message.client.queue.get(message.guild.id);

        let songInfo = null;
        let song = null;
        if (url.match(/^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi)) {
            try {
                songInfo = await ytdl.getInfo(url);
                if (!songInfo) return message.channel.send(embed4)
                song = {
                    id: songInfo.videoDetails.videoId,
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url,
                    img: songInfo.player_response.videoDetails.thumbnail.thumbnails[0].url,
                    duration: songInfo.videoDetails.lengthSeconds,
                    ago: songInfo.videoDetails.publishDate,
                    views: String(songInfo.videoDetails.viewCount).padStart(10, " "),
                    req: message.author,
                };
            } catch (error) {

                
                return message.channel.send(errorembed);
            }
        } else {
            try {
                var searched = await yts.search(searchString);
                if (searched.videos.length === 0) return message.channel.send(embed4)

                songInfo = searched.videos[0];
                song = {
                    id: songInfo.videoId,
                    title: Util.escapeMarkdown(songInfo.title),
                    views: String(songInfo.views).padStart(10, " "),
                    url: songInfo.url,
                    ago: songInfo.ago,
                    duration: songInfo.duration.toString(),
                    img: songInfo.image,
                    req: message.author,
                };
            } catch (error) {
                return message.channel.send(errorembed)
            }
        }

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
               message.channel.send(embed5)
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
                            return message.channel.send(embed6)
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
                .setTimestamp()
            queue.textChannel.send(thing);
        };

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            play(queueConstruct.songs[0]);
        } catch (error) {
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return message.channel.send(embed6);
        }
    },
};