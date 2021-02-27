const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const ytdlDiscord = require("ytdl-core-discord");
var ytpl = require("ytpl");
const fs = require("fs");

module.exports = {
    
        commands: "playlist",
    
    callback: async function ( message, arguments, client) {

        const embed = new MessageEmbed
        embed.setTitle(`You need to be in a voice channel to play a playlist`)
        embed.setColor(`#060103`)
      

        
        const embed1 = new MessageEmbed
        embed1.setTitle(`I don't have required permissions to connect to your voice channel`)
        embed1.setColor(`#060103`)
     

        const embed2 = new MessageEmbed
        embed2.setTitle(`I don't have the required permissions to speak in your channel`)
        embed2.setColor(`#060103`)
       

        const embed3 = new MessageEmbed
        embed3.setTitle(`Specify an URL for the playlist or give the name of it`)
        embed3.setColor(`#060103`)
      

        const embed4 = new MessageEmbed
        embed4.setTitle(`That playlist could not be found`)
        embed4.setColor(`#060103`)
        

        const embed8 = new MessageEmbed
    embed8.setTitle(`A error occured and something went wrong :(`)
    embed8.setColor(`#060103`)
   

        const channel = message.member.voice.channel;
        if (!channel) return message.channel.send(embed);
        const url = arguments[0] ? arguments[0].replace(/<(.+)>/g, "$1") : "";
        var searchString = arguments.join(" ");
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return message.channel.send(embed1);
        if (!permissions.has("SPEAK")) return message.channel.send(embed2);

        if (!searchString || !url) return message.channel.send(embed3);
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            try {
                const playlist = await ytpl(url.split("list=")[1]);
                if (!playlist) return message.channel.send(embed4);
                const videos = await playlist.items;
                for (const video of videos) {
                    // eslint-disable-line no-await-in-loop
                    await handleVideo(video, message, channel, true); // eslint-disable-line no-await-in-loop
                }
                const embed5 = new MessageEmbed
                embed5.setTitle(`Playlist - **\`${videos[0].title}\`** added successfully`)
                embed5.setColor(`#060103`)
               
                return message.channel.send(embed5);
            } catch (error) {

                const embed6 = new MessageEmbed
                embed6.setTitle(`Playlist could not be found`)
                embed6.setColor(`#060103`)
               

                return message.channel.send(embed6)
            }
        } else {
            try {
                var searched = await yts.search(searchString);

                const embed7 = new MessageEmbed
                embed7.setTitle(`Playlist could not be found on youtube`)
                embed7.setColor(`#060103`)
                

                if (searched.playlists.length === 0) return message.channel.send(embed7);
                var songInfo = searched.playlists[0];
                let listurl = songInfo.listId;
                const playlist = await ytpl(listurl);
                const videos = await playlist.items;
                for (const video of videos) {
                    // eslint-disable-line no-await-in-loop
                    await handleVideo(video, message, channel, true); // eslint-disable-line no-await-in-loop
                }
                let thing = new MessageEmbed()
                    .setAuthor(`Playlist - ${songInfo.title} has been added to the queue successfully`)
                    .setThumbnail(songInfo.thumbnail)
                    .setColor("#060103")
                    .setDescription(`Playlist -  **\`${songInfo.title}\`** with \`${songInfo.videoCount}\` videos has been added to the queue`);
                return message.channel.send(thing);
            } catch (error) {
                
                return message.channel.send(embed8);
            }
        }

        async function handleVideo(video, message, channel, playlist = false) {
            const serverQueue = message.client.queue.get(message.guild.id);
            const song = {
                id: video.id,
                title: Util.escapeMarkdown(video.title),
                views: video.views ? video.views : "-",
                ago: video.ago ? video.ago : "-",
                duration: video.duration,
                url: `https://www.youtube.com/watch?v=${video.id}`,
                img: video.thumbnail,
                req: message.author,
            };
            if (!serverQueue) {
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

                try {
                    var connection = await channel.join();
                    queueConstruct.connection = connection;
                    play(message.guild, queueConstruct.songs[0]);
                } catch (error) {
                    message.client.queue.delete(message.guild.id);

                    const embed9 = new MessageEmbed
    embed9.setTitle(`Was not avaible to join the voice channel`)
    embed9.setColor(`#060103`)
  
                    return message.channel.send(embed9);
                }
            } else {
                serverQueue.songs.push(song);
                if (playlist) return;
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
            return;
        }

        async function play(guild, song) {
            const serverQueue = message.client.queue.get(message.guild.id);
            if (!song) {

                const embed10 = new MessageEmbed
    embed10.setTitle(`Queue is empty so I left the channel`)
    embed10.setColor(`#060103`)


                message.channel.send(embed10)
                message.guild.me.voice.channel.leave(); //If you want your bot stay in vc 24/7 remove this line :D
                message.client.queue.delete(message.guild.id);
                return;
            }
            let stream = null;
            if (song.url.includes("youtube.com")) {
                stream = await ytdl(song.url);
                stream.on("error", function (er) {
                    if (er) {
                        if (serverQueue) {
                            serverQueue.songs.shift();
                            play(guild, serverQueue.songs[0]);
                            return message.channel.send(embed8);
                        }
                    }
                });
            }

            serverQueue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));
            const dispatcher = serverQueue.connection.play(ytdl(song.url, { quality: "highestaudio", highWaterMark: 1 << 25, type: "opus" })).on("finish", () => {
                const shiffed = serverQueue.songs.shift();
                if (serverQueue.loop === true) {
                    serverQueue.songs.push(shiffed);
                }
                play(guild, serverQueue.songs[0]);
            });

            dispatcher.setVolume(serverQueue.volume / 100);
            let thing = new MessageEmbed()
            .setAuthor(`Playing ${song.title}`)
            .setThumbnail(song.img)
            .setColor("#060103")
            .addField("Name", song.title, true)
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp()
            serverQueue.textChannel.send(thing);
        }
    },
};
