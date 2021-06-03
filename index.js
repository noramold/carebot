// const inlinereply = require('discord-reply'); 
const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const prefix     = require('./prefix.js')
require('./ExtendedMessage');
const pagination = require('discord.js-pagination');


const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);
    client.user.setActivity(`${prefix}` + "hotlines" + "|| here for you <3");
})

client.on("message", async message => {


    if (message.author.bot) return;
    if (!message.guild) return;
    
    for (var i = 0; i < words.length; i++) 
    {   

        if (message.content.toLocaleLowerCase().includes(words[i])) {


            pagination(message, pages, emojis, page_timeout);

        //   // message.content contains a forbidden word;
        //     var embed = new Discord.MessageEmbed()
        //       .setTitle("Hotlines: ")
        //       .setDescription(phone)
        //       .setThumbnail("https://i1.wp.com/novocom.top/image/aS5wabWcuYW5pbWcuY29t/originals/d7/45/af/d745afd7b48228b45e9707274a154d81.jpg")
        //       .setImage("https://cdn130.picsart.com/303998098297201.jpg")
        //       .setFooter("Please do not hesitate to call")
        //       .setColor("#000000")
        //       message.inlineReply(embed);
            break;
        }
        // else
        //     return;
      }

      
      
      if (!message.content.toLocaleLowerCase().startsWith(prefix)) return;
      // if(message.content.slice(0, prefix.length).toLowerCase() !== prefix) return; 


    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    let mention = message.mentions.users.first();
    

    // Get the command
    let command = client.commands.get(cmd);

    if (!command)
    {
        command = client.commands.get(client.aliases.get(cmd));
        var embed = new Discord.MessageEmbed()
            .setTitle("Wrong command!")
            .setDescription("To see all the commands:  " + `*${prefix}`  + "help*")
            .setColor("#000000")
        message.channel.send(embed)
    }

    if (command) 
    {
        command.run(client, message, args,mention);
    }

});


client.login(process.env.TOKEN);



var words = 
[
    "depressed", 
    "i wanna die", 
    "i want to die", 
    "suicidal", 
    "self-harm", 
    "self harm",
    "kill myself", 
    "kms", 
]

const phone1 = 
    `
        Algeria:  *0021 3983 2000 58* 
        Argentina: *(54-11) 4758-2554*
        Armenia:  *(2) 538194* or *(2) 538197*
        Australia:  *13 11 14*
        Austria: *142* *147* (youth)
        Azerbaijan: *510-66-36*
        Bahamas:  *(2) 322-2763*
        Barbados:  *(246) 4299999*
        Belgium:  *1813*
        Bolivia:  *3911270*
        Bosnia & Herzegovina: *080 05 03 05*
        Botswana: *3911270*
        Brunei: *145*
        Bulgaria: *0035 9249 17 223*
    `
const phone2 = 
    `
        Canada: *1 (833) 456 4566*
        China:  *800-810-1117*
        Colombia: *1(00 57 5) 372 27 27* (Baranquilla) *(57-1) 323 24 25* (Bogota)
        Cyprus: *8000 7773*
        Denmark: *4570201201*
        Estonia:  *3726558088* , *3726555688* (in Russia)
        Fiji: *132454* or *01 45 39 40 00* 
        Finland: *010 195 202*
        France: *0145394000*
        Germany:  *08001810771*
        Ghana: *2332 444 71279*  
        Guyana: *223-0001*
        Hong Kong:  *852 2382 0000*
        Hungary: *116123*
    `
const phone3 = 
    `
        India: *8888817666*
        Indonesia: *1-800-273-8255*
        Iran: *1480*
        Ireland: *+4408457909090*
        Israel: *1201*
        Italy:  *800860022*
        Jamaica:  *1-888-429-KARE (5273)*
        Japan:  *810352869090*
        Jordan: *110*
        Latvia: *371 67222922*
        Lebanon: *1564*
        Liberia:  *6534308*
        Luxembourg: *352 45 45 45*
        Malaysia:  *(06) 2842500*
        Malta:  *179*
    `
const phone4 = 
`
        Mauritius: *+230 800 93 93*
        Mexico: *5255102550*
        Netherlands:  *0800 0113*
        New Zealand: *1737*
        Nigeria: *234 8092106493*
        Norway: *+4781533300*
        Philippines: *028969191*
        Poland: *5270000*
        Portugal:  *21 854 07 40*  and  *8 96 898 21 50*
        Romania:  *0800 801200*
        Russia: *0078202577577*
        Saint Vincent and the Grenadines: *9784) 456 1044*
`
const phone5 = 
`
        Serbia: *(+381) 21-6623-393*
        Singapore:  *1 800 2214444*
        Spain:  *914590050*
        South Africa: *0514445691*
        South-Korea: *(02) 7158600* or *http://www.suicide.org/hotlines/international/south-korea-suicide-hotlines.html*
        Sri Lanka: *011 057 2222662*
        Sudan: *(249) 11-555-253*
        Sweden:  *46317112400*
        Switzerland: *143*
        Thailand:  *(02) 713-6793*
        Tonga:  *23000*
        Trinidad and Tobago: *(868) 645 2800*
        United Arab Emirates: *800 46342*
        United Kingdom: *08457909090*
        United States: *(800) 273-8255*
`


const page1 = new Discord.MessageEmbed()
.setTitle('Hotlines pt1.')
.setDescription(phone1)
.setThumbnail("https://i1.wp.com/novocom.top/image/aS5wabWcuYW5pbWcuY29t/originals/d7/45/af/d745afd7b48228b45e9707274a154d81.jpg")
// .setImage("https://cdn130.picsart.com/303998098297201.jpg")

const page2 = new Discord.MessageEmbed()
.setTitle('Hotlines pt2.')
.setDescription(phone2)
.setThumbnail("https://cdn130.picsart.com/303998098297201.jpg")

const page3 = new Discord.MessageEmbed()
.setTitle('Hotlines pt3.')
.setDescription(phone3)
.setThumbnail("https://i1.wp.com/novocom.top/image/aS5wabWcuYW5pbWcuY29t/originals/d7/45/af/d745afd7b48228b45e9707274a154d81.jpg")

const page4 = new Discord.MessageEmbed()
.setTitle('Hotlines pt4.')
.setDescription(phone4)
.setThumbnail("https://cdn130.picsart.com/303998098297201.jpg")

const page5 = new Discord.MessageEmbed()
.setTitle('Hotlines pt5.')
.setDescription(phone5)
.setThumbnail("https://i1.wp.com/novocom.top/image/aS5wabWcuYW5pbWcuY29t/originals/d7/45/af/d745afd7b48228b45e9707274a154d81.jpg")


const pages = [
    page1, 
    page2, 
    page3, 
    page4, 
    page5
]

const emojis = 
[
    "◀",
    "▶"
]

const page_timeout = '10000'