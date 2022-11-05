setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60); 



//error fixer
process.on("unhandledRejection", error => {
  return //console.log(error)
});
process.on("unhandledRejection", error => {
  return
});
process.on("unhandledRejection", error => {
  return
});
////////

const express = require('express');
const app = express();
const keepAlive = require('./server');
app.get('/', (req, res) => {
  res.send('YAHYA')
});
const { Player, QueryType, QueueRepeatMode } = require("discord-player");
app.listen(3000, () => {
  console.log('server started');
});
const { Client, Intents, Message, home, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js');


////////////////



const Discord = require("discord.js")
require('dotenv').config()
var discordjsdb = require("discordjs-db")
 db = require('pro.db')
const client = new Discord.Client({
  intents: 32767
});
client.setMaxListeners(0);


//////////////////

const prefix = "-"
var netflixrole = "<@&985707143728619550>"
var instarole = "<@&985707266386837605>"
var nitrorole = "<@&985705194987847711> <@&985705517739544606>"
var visarole = "<@&985706335578513429>"
var botrole = "<@&985706768292253756>"
var ucrole = "<@&985706512091602974>"
var voterole = "<@&1029208530886074469>"
var boostrole = "<@&986029936290705438>"
var spotifyrole = "<@&985705399925743696>"
var shahidrole = "<@&985707041303707669>"
var creditrole = "<@&1020687337878978560>"
var tiktokrole = "<@&1014589961669980201>"
let applyteamcategory = "997637252509335572"
let ordercategory = "1025188189645852722"
const line = "https://media.discordapp.net/attachments/1033349535990300762/1038546771388923934/line.jpg"///url line link

let color = "#620A8A"

/////


let صح = "<a:84906:997869493047005294>"
let غلط = "<a:16130:997869494515007579>"

const i = require('discord-ms')


client.on("ready", async () => {
    console.log(`"${client.user.username}" is ready`)//runing bot username

})



////////////////////////////////////// 


client.on("ready", () =>{
  console.log(`"${client.user.username}" is ready`)
console.log(`${client.user.tag} Is Available`);


    client.user.setPresence({
        status: 'online',//dnd, online, offline
        activities: [{ name: `Dev Fawry Team`, type: "PLAYING", }]//COMPETING, PLAYING, STREAMING, LISTENING
    });
})

///////////////////////
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("ايدي الفويس") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
});  

/////////////////////ررول تلقائي
const rom = ["1029221117367418900"]
client.on("messageCreate", async message => {
  let args = message.content.split(",");
  if (message.author.bot) return;
  if(rom.includes(message.channel.id)) {
 let role = message.guild.roles.cache.get('1029194337227116574')
    message.member.roles.add(role)
  }
  }); 


////////////////////////
 



////// منشن وترحيب في اتشنل 1
client.on("guildMemberAdd", (scooby) => {
  const channelid = "1029170897908670494"
  const channel = client.channels.cache.get(channelid)
  channel.send(`**تعاله جمع رولاتك يحب <a:zgrmilky:1006358365682802699>** <@!${scooby.id}>`).then((message) => {
    setTimeout(() => {
      message.delete();
    },7000)
  })
})

//////2

client.on("guildMemberAdd", (scooby) => {
  const channelid = "1030005870949584908"
  const channel = client.channels.cache.get(channelid)
  channel.send(`**تعاله يحب شارك في الجيفاوي <a:zgrmilky:1006358365682802699>** <@!${scooby.id}>`).then((message) => {
    setTimeout(() => {
      message.delete();
    },7000)
  })
})


//////////////
client.on("messageCreate", (yahya) => {
  if (yahya.content.startsWith("السلام عليكم")) {
    let YAHYA = ["** <a:12147:1038428649268981810>وعليكم السلام يحب**"]
    yahya.reply(YAHYA[Math.floor(Math.random() * YAHYA.length)])
  }
})
client.on("messageCreate", (yahya) => {
  if (yahya.content.startsWith("سلام عليكم")) {
    let YAHYA = ["** <a:12147:1038428649268981810>وعليكم السلام يحب**"]
    yahya.reply(YAHYA[Math.floor(Math.random() * YAHYA.length)])
  }
})
//


  
//
let dark = ['1038001638201376838','',''];





client.on("messageCreate", function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(dark.includes(message.channel.id)) {
    message.delete()
message.channel.send({ content: `**${args}** \n\n > **By :** ${message.author}  \n> Mention : <@&999921590026371084>\n > **Order :** <#999200590485794866> \n ` })

}
})
////////////


client.on(`messageCreate`, message => {
  if (message.content.startsWith(prefix + "avatar-server")) {
    var embed = new MessageEmbed()
      .setColor(color)
      .setImage(message.guild.iconURL({ dynamic: true, size: 512, format: 'png' }))
      .setFooter(`Request By ${message.author.username}`)
  message.reply({ embeds: [embed] })
  }    
})
///
  

///

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "add-emoji")) {

    let args = message.content.split(" ").slice(1)
    const emojis = args
    if (!emojis.length) {
      message.channel.send(`**من فضلك إختر ايموجيات لإضافتها**`)
      return;
    }
    let names = []
    for (const emoji of emojis) {
      let info = Discord.Util.parseEmoji(emoji)
      if (!info.id) {
        continue;
      }
      let type = info.animated ? ".gif" : ".png"
      let url = `https://cdn.discordapp.com/emojis/${info.id + type}`
      var emj = await message.guild.emojis.create(url, info.name, {
        reason: `emoji created by ${client.user.tag}`
      })
      names.push(emj)
    }
    if (!names.length) {
      message.channel.send("**لم أجد أي ايموجي صالح لإضافته**");
      return;
    } else {
      message.channel.send(`**تم اضافه الايموجي بنجاح ${names.join("/")}**`)
    }
  }
})
///
//auto//line
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037026578892324974") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

})  
///
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037026087236026429") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

})  
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037026665294991451") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

})  
///
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037026744781246626") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

})  
///


client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037026788452347934") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

})  

///
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037026894874419282") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

}) 
 ///
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037026953716310096") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

}) 
///
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037027084956074055") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

}) 
///
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037027152673112195") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

}) 
///
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037027244784222318") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

}) 
///
client.on("messageCreate", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1037027372060389426") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send({ embeds: [embed] });
  }

}) 
    
//==================
 
///
client.on("messageCreate", yahya => {
if (yahya.content.startsWith(prefix + "معاك")){
  if (yahya.author.bot) return
  var args = yahya.content.split(" ")[1];
  if (!args) return yahya.channel.send(`**
> Plz Type Your Name
> برجاء كتابه اسمك **`);
  yahya.channel.send({ content:`**
> اهلا بك في "${yahya.guild.name}" <a:983154473667035207:1038428647197003839>
 
> معاك ( __${args}__ ) من طاقم عمل السيرفر ازاي اقدر اساعد حضرتك .؟ 
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
> welcome in "${yahya.guild.name}" <a:983154473667035207:1038428647197003839>
> With You ( __${args}__ ) from the server staff, how can I help you ? <a:vssparkly1:1030854566146744451> **`})
  yahya.delete();
}})

//
  client.on("messageCreate", bot => {
    if (bot.content.startsWith(prefix + "bot")) {
      let say = bot.content.split(" ").slice(1).join(" ");
      const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTimestamp()
        .setThumbnail(bot.guild.iconURL({ dynamic: true }))
        .setFooter(client.user.username, client.user.avatarURL())
        .setImage(line)

        .setDescription(`> **<a:ss_4:1016805809449087037> **My name : \`${client.user.tag}\`<a:ass_:1016813895064760361>

> <a:ss_4:1016805809449087037> **My Id:**\`${client.user.id}\`<a:ass_:1016813895064760361>

> <a:ss_4:1016805809449087037>**My Prefix :** \`${prefix}\`<a:ass_:1016813895064760361>

> <a:ss_4:1016805809449087037>**My Dev : Fares**<a:ass_:1016813895064760361> 

> <a:ss_4:1016805809449087037> **Ping:** \`${client.ws.ping}ms\`<a:ass_:1016813895064760361>
`);
      new MessageButton()
      .setLabel(`Server Support`)
       .setStyle('LINK')
.setURL('https://discord.gg/4z32bPEx')
      bot.channel.send({ embeds: [embed] })
    }
  });


///say
client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix + "say")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(2).join(" ")
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(message.content.split(' ')[1])
    if (!channel) return message.reply("**يسطا اعمل منشن للاتشانل او id حتي**")
    if (!args) return message.reply(`Please Provide Speech`);
    await channel.send(args)
    await message.reply(`**{<a:aArabShare_a:1016801916119953569> تم الارسال في ${channel} <a:ss_1:1016798969520734318>}**`)
  }
})
///show
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'show')) {
                const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: "**لـيس لـديك صـلاحـيات** <a:1M_48:1016825013850079292>", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `**لـم أتمـكن مـن تـعديل أذونـات القـناة ، يرجـى التـحقق مـن أذونـاتي .**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        VIEW_CHANNEL: true
                }).then(() => {
                        message.reply({ content: `**تـم اظـهار الـروم بـنجاح** <a:aArabShare_a:1016801916119953569>`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                })
        }
}); 





///hide 
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'hide')) {

    const permission = message.member.permissions.has("MANAGE_CHANNELS");
          
    const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

         if (!permission)
   return message.reply({ content: "**لـيس لـديك صـلاحـيات** <a:1M_48:1016825013850079292>", ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
     
     })

        if (!guilds) return message.reply({ content: `**لـم أتمـكن مـن تـعديل أذونـات القـناة ، يرجـى التـحقق مـن أذونـاتي .**`, ephemeral: true }).catch((err) => {
                           console.log(`i couldn't reply to the message: ` + err.message)
    
    })
          
          let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        VIEW_CHANNEL: false
                }).then(() => {
                        message.reply({ content: ` **تـم اخـفاء الـروم بـنجاح** <a:aArabShare_a:1016801916119953569>`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                          
                        })
                })
        }
}); 


///lock
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'lock')) {
                    const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: "**لـيس لـديك صـلاحـيات** <a:1M_48:1016825013850079292>", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `**لـم أتمـكن مـن تـعديل أذونـات القـناة ، يرجـى التـحقق مـن أذونـاتي .**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: false
                }).then(() => {
                        message.reply({ content: `**تـم قـفل الـروم بـنجاح** <a:aArabShare_a:1016801916119953569>`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                })
        }
}); 


///unlock
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'unlock')) {
                const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: "**لـيس لـديك صـلاحـيات** <a:1M_48:1016825013850079292>", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `**لـم أتمـكن مـن تـعديل أذونـات القـناة ، يرجـى التـحقق مـن أذونـاتي .**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: true
                }).then(() => {
                        message.reply({ content: `**تـم فـتح الـروم بـنجاح** <a:aArabShare_a:1016801916119953569>`, ephemeral: true })
                })
    }
}); 


///
var { inviteTracker } = require("discord-inviter") // npm i discord-inviter


client.on("messageCreate", async (message) => {
  // get member invites count
  if (message.content == prefix + "invites") {
    var invite = await inviteTracker.getMemberInvites(message.member);
    message.channel.send(
      `**You has ${invite.count} invite(s) <a:aArabShare_a:1016801916119953569>**`
    );
    // get server top invites
  } else if (message.content == prefix + "top-invites") {
    var top = await inviteTracker.getTopInvites(message.guild);
    message.channel.send(
      top
        .map((i, n) => `\`#${n + 1}\`- **${i.user.tag}** has __${i.count}__`)
        .join("\n")
    );
  }
});


/////bot shop

//////delet link

client.on("messageCreate", Russi => {
  if (Russi.content.includes("https://") || Russi.content.includes("Https://")) {
    if (Russi.member.permissions.has('ADMINISTRATOR')) return;
    console.log("Share links" + Russi.content + " from " + `${Russi.author.tag}` + "successful deleted")
    Russi.delete();
    Russi.channel.send({ content: "**```لا تنشر روابط ``` " + `<@${Russi.author.id}>**` })
  }
  if (Russi.content.includes("http://") || Russi.content.includes("Http://")) {
    if (Russi.member.permissions.has('ADMINISTRATOR')) return;
    console.log("Share links" + Russi.content + " from " + `${Russi.author.tag}` + "successful deleted")
    Russi.delete();
    Russi.channel.send({ content: "**```لا تنشر روابط ``` " + `<@${Russi.author.id}>**` })
  }
  if (Russi.content.includes("www.") || Russi.content.includes("Www.")) {
    if (Russi.member.permissions.has('ADMINISTRATOR')) return;
    console.log("share links" + Russi.content + " from " + `${Russi.author.tag} + "successful deleted"`)
    Russi.delete();
    Russi.channel.send({ content: "**```لا تنشر روابط هنا ``` " + `<@${Russi.author.id}>**` })
  }
});
///////ban
client.on("messageCreate", async message => {

  if (message.content.startsWith(prefix + "ban")) {
    if (message.member.permissions.has("BAN_MEMBERS")) {
      let member = message.mentions.members.first() || message.content.split(' ')[1]
      if (member === message.author) return
      const user = await client.users.cache.get(member);
      if (!member) return message.reply("**منشن الشخص!**")
      member
        .ban()
        .then(() =>
          message.reply(
            { content: `**تـم تبـنيد الشـخص مـن السـيرفر** <aaArabShare_a1016801916119953569>` }
          )
        );
    } else {
      message.reply("لـم أسـتطع حـظر هـذا المسـتخدم ، يـرجى التـحقق مـن أذونـاتي ومـنصب الـدور . ");
    }
  }
});
//////unban
client.on("messageCreate", async message => {

  if (message.content.startsWith(prefix + 'unban')) {
    let userId = message.content.split(' ')[1];
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send({ content: 'لـم أسـتطع حـظر هـذا المسـتخدم ، يـرجى التـحقق مـن أذونـاتي ومـنصب الـدور . ' });
    if (!userId) return message.reply({ content: `منشن الشخص!` });
    const user = await message.guild.bans.remove(userId);
    (await message.guild.fetchOwner()).send(`لقد تم فك الباند عن الشخص \n ${user.username} \n By : <@${message.author.id}>`)
    var embed = new MessageEmbed()
      .setColor(color)
      .setDescription(`**✅ ${user.username} unbanned!**`)
    message.channel.send({ embeds: [embed] })
  }

});
///////kick
client.on("messageCreate", async message => {

  if (message.content.startsWith(prefix + "kick")) {
    if (message.member.permissions.has("KICK_MEMBERS")) {
      let member = message.mentions.members.first() || message.content.split(' ')[1]
      if (member === message.author) return
      const user = await client.users.cache.get(member);
      if (!member) return message.reply("**منشن الشخص!**")
      member
        .kick()
        .then(() =>
          message.reply(
            { content: `**تـم طـرد العـضو بـنجاح** <a:aArabShare_a:1016801916119953569>` }
          )
        );
    } else {
      message.reply("لـم أسـتطع طـرد هـذا المسـتخدم ، يـرجى التـحقق مـن أذونـاتي ومـنصب الـدور . ");
    }
  }
});
//////tax
const probot = require("probot-tax");
const { MessageActionRow } = require('discord.js');
const { request } = require('express');
client.on("messageCreate", async message => {
    if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); 
    if(!args) return message.reply("**:rolling_eyes: Please enter a number**").catch((err) => {
   console.log(err.message)
   });
    
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    
    let embed = new MessageEmbed()
      

          
     .setImage(line)
      .setColor(color)  .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
   
.setDescription(`> **Tax is** : ${tax}`)
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
    
   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
});  


/////////server info
client.on("messageCreate", re => {
  if (re.content === prefix + "server") {
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`**Server Info**`)
      .addField('Server Name :', `**${re.guild.name}**`, true)
      .addField('Owner Server 👑 :', `<@${re.guild.ownerId}>`, true)
      .addField('Server Id 🆔 :', `**${re.guild.id}**`, true)
      .addField('Created On 📆 :', `**${re.guild.createdAt.toLocaleDateString()}**`, true)
      .addField('Channels 💬 :', `**${re.guild.channels.cache.size}**`, true)
      .addField('Members👥 :', `**${re.guild.memberCount}**`, true)
      .setFooter(`${re.guild.name}`, re.guild.iconURL())
      .setThumbnail(re.guild.iconURL())
    re.channel.send({ embeds: [embed] });
  }
});

///////////waren
client.on("messageCreate", message => {
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == `${prefix}warn` || command == `${prefix}war` || command == `warn`) {
    if (!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send({ content: `>>>You Don't have the permission ` });
    let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
      .setColor('DA1212')
      .setTimestamp();

    if (!user) {
      return message.channel.send('منشن الشخص !');
    } if (!reason) {
      embed.addField("**لماذا تريد اعطاء الشخص أنذار** ? ", ` ${user.tag}?`)
      return message.channel.send({ embeds: [embed] });
    }
    embed.addField("**تم ارسال الانذار** ", ` ${user.tag}!`)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
    const embed1 = new Discord.MessageEmbed()
      .setColor('DA1212')
      .setTimestamp()
      .addField("لقد اخذت انذار", `
   
            السبب : **${reason}**`)
      .setFooter(`
          انذار بواسطة ${message.author.tag}.`);
    user.send({ embeds: [embed1] });
    message.delete();
  }
});
////////
client.on("messageCreate", (yahya) => {
  if (yahya.content.startsWith(prefix + "come")) {
var user = yahya.mentions.users.first();
    if (!user) return yahya.reply(`**برجاء عمل منشن للشخص**`)
    let embed = new MessageEmbed()
      .setDescription(`> **A Person Has Been Called** <:2524152521451252:1025388588998852748>

> **__Please Do Not Spam !__** <:_Fix:1038430600291426344> `)
      .setImage(line)
      .setColor(color)
      .setThumbnail(yahya.guild.iconURL({ dynamic: true }))
      .setTimestamp()
yahya.channel.send({ embeds: [embed], content: `> <@!${yahya.author.id}> <a:emoji_157:1016798780697354340>` })
    user.send(`**
> <:COULDCOMMUNITY:1025388699741061151> HEY ${user} <a:vssparkly1:1030854566146744451>

> تم طلبك هنا <#${yahya.channel.id}> ❤**`).then(m => {
      m.react("")
    })
    yahya.react(صح)
  }
})

//////////////back



///feed / back
client.on("messageCreate", (yahya) => {
  if (yahya.content.startsWith(prefix + `fb`)) {

    if (!yahya.member.roles.cache.has('1022589079503773696'))return yahya.reply(`**<a:1M_48:1016825013850079292> انت لست من التيم <a:678454765784662080:1016825278812651651>**`)
    let user = yahya.mentions.users.first();
    if (!user) return yahya.reply(`** منشن للشخص** `)
    yahya.delete()
    yahya.channel.send(`**
> <a:ss_3:1016809145032265840>・برجاء عمل فيد باك للسيلر ${user}   <a:aHINDdance:1016828299244228729> 

> ・شكرا لاستخدام السيرفر الخاص بنا <a:emoji_157:1016798780697354340>
**`).then(y => {
      y.react("<a:emoji_211:1016830031214936134>")
    })
    yahya.delete()
  }
})



/////tran
let channelid = '1036274481028661371'  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== channelid) return;
  message.channel.send({ embeds: [line] })
  
  }
})  

///////////////////////
process.on("unhandledRejection", error => {
  return;
});
///////////avatar
client.on(`messageCreate`, async message => {
  if (!message.guild) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'avatar') {

    let user = await message.mentions.members.first() || await message.guild.members.cache.get(args[0])

    let userAvatar = message.author.displayAvatarURL({ dynamic: true, size: 512, format: 'png' });

    let embed = new Discord.MessageEmbed()
      .setTitle(`Your Avatar`)
      .setImage(`${userAvatar}`)
      .setColor(color)

    if (!user) return await message.reply({ embeds: [embed] })
    let userAvatar2 = user.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png' });

    let embed2 = new Discord.MessageEmbed()
      .setImage(`${userAvatar2}`)
      .setColor(`DA1212`)
    message.reply({ embeds: [embed2] });



  }
})
//////rename
client.on("messageCreate", message => {
  if (message.content.startsWith("Re") || message.content.startsWith("re")) {
    if (!message.member.roles.cache.has('1022589079503773696')) return message.reply(`**انت لست من التيم **`)
    args = message.content.split(" ")[1]
    if (!args) args = message.author.username
    message.channel.setName(`by ${message.author.username}`)
    message.delete();
  }
})
///////welcome
client.on('guildMemberAdd', async (member) => {
  let embed = new MessageEmbed()
    .setColor(color)
    .setDescription(`**
> <a:aHINDdance:1016828299244228729>・𝗛𝗲𝘆 <@!${member.user.id}> <a:aYred:1006358030570508288> 

> <a:ss_3:1016809145032265840> ・𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗧𝗼 ~~${member.guild.name}~~  <a:ass_:1016813895064760361> 

> <a:ss_3:1016809145032265840> ・𝗬𝗼𝘂 𝗔𝗿𝗲 𝗠𝗲𝗺𝗯𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 ${member.guild.memberCount} <a:emoji_157:1016798780697354340>

> <a:wdaira:1016837362074005575> ・𝗬𝗼𝘂𝗿 𝗜𝗱 \`${member.id}\` <a:zgrmilky:1006358365682802699>

> <:Sb_shout:1016826906806587493> ・Order 𝗛𝗲𝗿𝗲 <#985692404608802836>** <a:emoji_211:1016830031214936134>`)
    .setAuthor(member.user.username, member.user.avatarURL())
    .setFooter(client.user.tag, client.user.avatarURL())
    .setImage(line)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .setTimestamp()
  let channel = client.channels.cache.get("1029622630149521438");
if (!channel) return;
  channel.send({ content: `> ||<@!${member.user.id}>||`, embeds: [embed] }).then(y => {
    y.react("<:68612:1016839104576618496>")
    y.react("<a:power815:997869484192833556>")
    y.react("<:emoji_39:997896829834383420>")
  })


  member.send(`**
> <a:aHINDdance:1016828299244228729>・𝗛𝗲𝘆 <@!${member.user.id}> <a:zgrmilky:1006358365682802699>


> <a:ss_3:1016805756697321533>・𝗧𝗵𝗮𝗻𝗸𝘀 𝗙𝗼𝗿 𝗝𝗼𝗶𝗻 \`${member.guild.name}\` <a:emoji_211:1016830031214936134> 



`)
})
//////////////embd say
 
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'embed')) {
      
if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`****لـيس لـديك صـلاحـيات** <a:1M_48:1016825013850079292>**`)

      
let args = message.content.split(' ').slice(1).join(' ')
  
  if (!args) return message.reply('**الرجاء تحديد رسالة**')
      
    message.delete();
      
    let embed = new MessageEmbed()
      
    


    .setDescription(`**${args}**`) 
    
          
     .setImage(line)
      .setColor(color)  .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))

   .setTimestamp()

let attach = message.attachments.first();

if (attach) {
   embed.setImage(attach.proxyURL)     
       }
   message.channel.send({embeds: [embed]});
    }
}) 



/////////////clear

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "clear")) {
    let arg = message.content.split(" ")
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      let clear = arg[1];
      if (!clear) return message.channel.send(`**برجاء كتابه رقم**`)
      if (isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
      if (clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
      if (clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

      message.channel.bulkDelete(clear)
      message.channel.send(`\`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
        .then(message =>
          message.delete({ timeout: 1000000 })
        )
    } else {
      message.reply("You dont have perms!")
    }
  }
})
//npm i discord-reply
client.on(`messageCreate`, async message => {
  if (!message.guild) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'user') {
    try {
      let user = await message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
      let member = message.member;
      if (!member) return;
      let embed1 = new Discord.MessageEmbed()
        .addField("**Joined Discord :**", `** <t:${parseInt(message.author.createdAt / 1000)}:R> **`, true)
        .addField("**Joined Server :**", `** <t:${parseInt(member.joinedAt / 1000)}:R> **`, true)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setColor(color)
      if (!user) return await message.reply({ embeds: [embed1] })

      let embed2 = new MessageEmbed()
        .addField("**Joined Discord :**", `** <t:${parseInt(user.user.createdAt / 1000)}:R> **`, true)
        .addField("**Joined Server :**", `** <t:${parseInt(user.joinedAt / 1000)}:R> **`, true)
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setColor(color)
      if (user) return message.reply({ embeds: [embed2] })
    } catch {
    }
  }
})
//////ping
client.on(`messageCreate`, message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.reply(`My Ping : ${client.ws.ping}`)
  }
})
///minshion bots
client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "bb")) {
    let u = message.guild.members.cache.filter(m => m.user.bot).map(m => `<@${m.id}>`).join(`\n`)
    message.reply(`**
> <a:ss_3:1016805756697321533> BOTS <a:aHINDdance:1016828299244228729> 

${u}**`);

  }
})




///
const TAX_CHANNEL_ID = '1036274952355184641' // اي دي الروم


client.on('ready', () => {
  console.log(`Connected as ${client.user.tag}`)
})

function getRole(message, args) {
  const arg = args[1]?.toLowerCase()
  return message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id === arg || r.name.toLowerCase() === arg)
}

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.guild) return

  if (message.channel.id === TAX_CHANNEL_ID && /^\d(K|M)?/i.test(message.content)) {
    let amount = parseInt(message.content)

    if (/k/i.test(message.content)) amount = amount * 1000
    else if (/m/i.test(message.content)) amount = amount * 1_000_000

    amount = Math.floor(amount / 0.95) + 1

    message.reply(`<a:wdaira:1016837362074005575> __**${amount}**__ `)

    return
  }

  if (!message.content.startsWith(prefix)) return

  const [command, ...args] = message.content.slice(prefix.length).trim().split(/ /)



/////////


  if (command === 'add') {
    const member2 = message.member || await message.guild.members.fetch(message.author.id)

    if (!member2.permissions.has('ADMINISTRATOR')) return

    const user = message.mentions.users.first()

    if (!user) return message.reply('Please mention a user first')

    const role = getRole(message, args)

    if (!role) return message.reply("I can't find this role")

    const member = await message.guild.members.fetch(user)

    await member.roles.add(role)

    message.reply(`**@${role.name}** has been added for ${member}`)
  }

  if (command === 'remove') {
    const member2 = message.member || await message.guild.members.fetch(message.author.id)

    if (!member2.permissions.has('ADMINISTRATOR')) return

    const user = message.mentions.users.first()

    if (!user) return message.reply('Please mention a user first')

    const role = getRole(message, args)

    if (!role) return message.reply("I can't find this role")

    const member = await message.guild.members.fetch(user)

    await member.roles.remove(role)

    message.reply(`**@${role.name}** has been removed for ${member}`)
  }
})
//all emoji
client.on(`messageCreate`, message => {
  if (message.content == (prefix + "allemoji")) {
    const emoji = message.guild.emojis.cache.map(emoji => emoji.toString()).join(" ");
    let embed = new Discord.MessageEmbed()
      .setTitle(`Emojis :`)
      .setDescription(`${emoji}`)
      .setColor(`DA1212`)
    message.channel.send({ embeds: [embed] })
  }
})
/////ads

//line
client.on(`messageCreate`, message => {
  if (message.content.startsWith("لاين") || message.content.startsWith("خط")) {
    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle(``)
      .setDescription(``)
      .setThumbnail('')
      .setImage(line)
    message.channel.send({ embeds: [embed] })
    message.delete();
  }
})
//
//dm
client.on("messageCreate", async message => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  if (args[0] !== prefix + "dm") return;
  args = args.slice(1);
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({ content: `**You don't have enough permission to use this command**` });
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!user) return message.reply({ content: `❌ - **من فضلك منشن شخص.**` });
  if (!args[1]) return message.channel.send({ content: `❌ من فضلك اكتب رسالة.` });

  let embed = new Discord.MessageEmbed()
    .setThumbnail(user.user.avatarURL({ dynamic: true }))
    .setFooter(client.user.username, client.user.avatarURL())
    .setColor("#d12121")
    .setTimestamp()
    .setAuthor(`NEW MESSAGE SENT `, user.user.avatarURL({ dynamic: true }))
    .addFields([
      {
        name: `الرسالة:
        `,
        value: `${args}`
      },

      {
        name: `ارسلها:`,
        value: `${user.user}`
      }
    ])
  user.send({ embeds: [embed], content: `> <@!${user.id}>` }).then(() => message.react("<a:84906:997869493047005294>")).catch(() => message.react("❌"));
});



///rules



client.on("messageCreate", saleh => {
  if (saleh.content.startsWith(prefix + "roles")) {
    if (saleh.member.permissions.has("ADMINISTRATOR")) {
      let member = saleh.mentions.members.first()
      if (!member) return saleh.reply(`**Please Mention The User ! ❌**`)
      let roles1 = member.roles.cache.filter((roles) => roles.id !== saleh.guild.id).map((role) => role.toString()).join(`\n`);

      let embed = new Discord.MessageEmbed()
        .setTitle(`This is all roles for this user :`)
        .setDescription(`${roles1}`)
        .setColor("DA1212")

      saleh.reply({ embeds: [embed] })
    }
  }
});
///anti bots
client.on("messageCreate", async message => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  if (args[0] === prefix + "anti-bots") {
    if (message.author.id != message.guild.ownerId) return message.channel.send({ content: `❌ You must be server owner to use this command.` });
    if (!args[1]) return message.channel.send({ content: `Usage: ${prefix}anti-bots [on/off]` });
    if (args[1] === "on") {
      await db.set(`bots_${message.guild.id}`, true);
      message.channel.send({ content: `✅ Done enable anti bots protection.` });
    } else if (args[1] === "off") {
      await db.set(`bots_${message.guild.id}`, false);
      message.channel.send({ content: `✅ Done disable anti bots protection.` });
    }
  }
});
///



///music
player = new Player(client)
client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix + 'play') || message.content.startsWith(prefix + 'p')) {
    let query = message.content.split(' ').slice(1).join(" ")
    console.log(query)
    const queue = player.createQueue(message.guild, {
      metadata: {
        channel: message.channel
      }
    });
    try {
      if (!queue.connection) await queue.connect(message.member.voice.channel);
    } catch {
      queue.destroy();
    }
    const track = await player.search(query, {
      requestedBy: message.user
    }).then(x => x.tracks[0]);
    if (!track) return await message.reply({ content: `not found!` });

    queue.play(track);
    console.log(track)
    return await message.reply({ content: `<a:aArabShare_a:1016801916119953569> Loading  **${track.title}**!` });

  }
})


client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix + 'stop') || message.content.startsWith(prefix + 'st')) {
    const queue = player.getQueue(message.guild.id);
    if (!queue || !queue.playing) return message.reply({ content: 'No music is being played!' });
    queue.destroy();
    message.reply('**__DONE__**')
  }
})

///



////

client.on("messageCreate", (yahya) => {
  if (yahya.channel.id != "1038493224874037349") return;
  if (yahya.author.bot) return; {
    var embed = new MessageEmbed()
      .setDescription(`> <:emoji_heart:1030886664442220594> 𝗧𝗵𝗮𝗻𝗸𝘀 𝗙𝗼𝗿 𝗬𝗼𝘂𝗿 𝗙𝗲𝗲𝗱𝗕𝗮𝗰𝗸 <a:2_:1038428627135627344>
> <:COULDCOMMUNITY:1027886220157669396> 𝗔𝗻𝗱 𝗨𝘀𝗶𝗻𝗴 "${yahya.guild.name}"  <a:vssparkly1:1030854566146744451> `)

      .setColor(color)
      .setImage(line)
      .setThumbnail(yahya.author.avatarURL({ dynamic: true }))
      .setTimestamp() 
    .setFooter(yahya.guild.name, yahya.guild.iconURL({ dynamic: true })) 
    .setAuthor(yahya.author.username, yahya.author.avatarURL({ dynamic: true })) 
      
      

    var row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(`${yahya.author.username}`)
          .setEmoji("<a:emoji_212:998983690715676804>")
          .setStyle("LINK").setURL(`https://discord.com/users/${yahya.author.id}`)


      )

    yahya.react("<a:emoji_211:1016559585626169434>")
    yahya.react("<a:zgrmilky:1006358365682802699>")
    yahya.react("<a:power949:997869482854850570>")
    yahya.react("<:emoji_39:997896829834383420>")
    yahya.channel.send({ embeds: [embed], components: [row] })
  }
})



client.on("guildMemberAdd", async (member) => {
const gid = "1006748646689222756" 
const rid = "1006747871493759026" 
const guild = client.guilds.cache.get(gid)
const role = await guild.roles.cache.get(rid)
await member.roles.add(role)
})

///help




///





//


////
client.on('channelCreate', async Channel => {
    if(Channel.parentId === '') {
      try {
        let MsgEmbed = new MessageEmbed()
           .setColor('#2f3136')
           .setImage(line)
           .setDescription(`
> \`1-\` **اسمك؟** 


> \`2-\` **سنك؟**


 > \`3-\` **شغال حاليآ في كام سيرفر؟ ، وابعت لينكاتهم :**


 > \`4-\` **بتبيع اي ، وبتعملها ولا بتشتريها من تاجر رخيص :**

> \`5-\` **ابعت 20 فيدباك من سيرفرات مختلفة** 

> \`#\` **للمعلومة في حالة عدم وجود فيدباكات سيتم عما اختبار لجميع الرولات + ضمان 50k الف اجباري .**   **في حاله عدم وجود ستصبح 200k الف** 

 `) 
Channel.send({ content: `||<@&1000044903432196166>||`, embeds: [MsgEmbed] })
    }catch(err) {
        console.log(err)
    }}
})
//////////
client.on('channelCreate', message => {

  if (message.parentId !== ordercategory) return;
  const pricelistembed = new MessageEmbed()
    .setImage(line)
    .setColor("CYAN")
    .setTimestamp()
    .setDescription(`\`#\` <a:emoji_30:1016805946233737276> **Hello User Pls Select Your Order** <a:ass_:1016813895064760361>

\`#\`  <a:emoji_30:1016805946233737276>**مرحبا.. رجاء اختيار الطلب الخاص بك**

==================

>  \`-\` <a:1_:1017991196787884162> **netflix** <:emoji_114:1020829113243676673>



>  \`-\` <a:1_:1017991196787884162> **insta** <a:ss_7:1020832300067455027>



>  \`-\` <a:1_:1017991196787884162> **nitro** <a:eagle_nitro:1017993264516841555>



>  \`-\` <a:1_:1017991196787884162> **visa** <:emoji_50:1020834355985256538>



>  \`-\` <a:1_:1017991196787884162> **bot** <:SG_bot:1017994365836218398>



>  \`-\` <a:1_:1017991196787884162> **vote** <a:13943:1020837626661580890>



>  \`-\` <a:1_:1017991196787884162> **uc** <:UC:1020837352404418630>



>  \`-\` <a:1_:1017991196787884162> **boost** <a:Flou_Gif_27:1020837130500583534>



>  \`-\` <a:1_:1017991196787884162> **spotify** <:mega_spotfay:1017996209778073620>



>  \`-\` <a:1_:1017991196787884162> **shahid** <:ss_7:1020836770209874001>



>  \`-\` <a:1_:1017991196787884162> **credit** <a:11Credit:1017992979543244920>



>  \`-\` <a:1_:1017991196787884162> **tiktok** <a:tiktok:1020836269040881734>
`)
const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Select prices here')
        .addOptions([
          {
            label: 'netflix',
            description: 'netflix prices',

            emoji: '<:63890:1006747703566417971>',

            value: 'netflix',
          },
{
            label: 'insta',

            description: 'insta prices',
            emoji: '<:insta:1006732620450762882>',
            value: 'insta',
          }, {
            label: 'nitro',
            description: 'nitro prices',
            emoji: '<a:Nitrog:1008059317364199454>',
            value: 'nitro',
          }, {
            label: 'visa',
            emoji: "<:81603:1006747700143865958>",
            description: 'visa prices',

            value: 'visa',
          }, {
            label: 'bot',

            emoji: "<:BOTS:1008059550877896705>",
            description: 'bot prices',
            value: 'bot',
          }, {
            label: 'vote',
            description: 'votes prices',
            emoji: "<a:aeagle_vote:1008059713151316079>",
            value: 'vote',
          }, {
label: 'uc',
            description: 'uc prices',
            emoji: "<:ss_6:1006732541904036012>",
            value: 'uc',
          }, {
            label: 'boost',
            description: 'boost prices',
            emoji: "<:BOOST:1007272868322742322>",
            value: 'boost',
          }, {
        label: 'spotify',
            description: 'spotify prices',
            emoji: "<:mega_spotfay:1006732596467736628>",
            value: 'spotify',
          }, {
            label: 'shahid',
            description: 'shahid prices',
            emoji: "<:dragon_shahd:1006747695056171029>",
            value: 'shahid',
          }, {
            label: 'credit',
            description: 'credit prices',
            emoji: "<a:Money:1006732597818294382>",
            value: 'credit',
          }, {
            label: 'tiktok',
            description: 'tiktok prices',
            emoji: "<:TikTok3265:1008060910511861860>",
            value: 'tiktok',
          }

        ]),
    );
setTimeout(() => {
    message.send({ embeds: [pricelistembed], components: [row] })
  }, 2000);
})

client.on("interactionCreate", (interaction) => {
  if (!interaction.isSelectMenu()) return;

  if (interaction.values == "netflix") {
    const netflixembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setTitle(`\`\#\`\ Netflix Prices In ${interaction.guild.name}`)
      .setDescription(` ** <a:emoji_30:1016805946233737276> Here Is All Netflix Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>

**<a:emoji_30:1016805946233737276> - Netflix User 1 month : 80K <a:11Credit:1017997085158686811> **

**<a:emoji_30:1016805946233737276> - Netflix Acc 1 week : 40K <a:11Credit:1017997085158686811> **

**<a:emoji_30:1016805946233737276> - Netflix Acc 1 month : 150K <a:11Credit:1017997085158686811>**

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>

- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**
`)
      .setImage(`https://aramobi.com/wp-content/uploads/2021/08/Netflix-768x432.jpg`)
      .setColor(color)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`netbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:gold:1020927924041416784>")
          .setStyle("SUCCESS")
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [netflixembed], components: [row] })
  }
if (interaction.values == "insta") {
    const instaembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ InstaGram Prices In ${interaction.guild.id}`)
      .setDescription(` <a:emoji_30:1016805946233737276>**Here Is All Insta Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


<a:ss_3:1016805756697321533> **__Followers__** <a:ss_7:1020832300067455027>

<a:emoji_30:1016805946233737276> **- 100 Follower : 10K <a:Flou_Gif_50:1020832207167828006> **

<a:emoji_30:1016805946233737276> **- 500 Follower : 50K <a:Flou_Gif_50:1020832207167828006> **

<a:emoji_30:1016805946233737276> **- 1k Follower : 100K <a:Flou_Gif_50:1020832207167828006> **


<a:ss_3:1016805756697321533> **__Likes__** <a:ss_7:1020832300067455027>


<a:emoji_30:1016805946233737276> **- 100 Like : 10K <a:Flou_Gif_50:1020832207167828006> **

<a:emoji_30:1016805946233737276> **-500 Like : 50K  <a:Flou_Gif_50:1020832207167828006> **

<a:emoji_30:1016805946233737276> **- 1k Like : 100K <a:Flou_Gif_50:1020832207167828006> **


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>

- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**
`)
      .setImage("https://img.freepik.com/free-vector/social-media-instagram-banner_228198-596.jpg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`insbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [instaembedembed], components: [row] })
  }
if (interaction.values == "visa") {
    const visaembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Visa Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276>**Here Is All Visa Prices** <a:11Credit:1017997085158686811>



<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


**<a:emoji_30:1016805946233737276> Visa (__Only Nitro Activation__) : 10k <a:11Credit:1017997085158686811>**


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>

- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968612061846310972/images.png")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`visbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [visaembedembed], components: [row] })
}
if (interaction.values == "nitro") {
    const nitroembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Nitro Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276>**Here Is All Nitro Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>

**<a:emoji_30:1016805946233737276> Ntiro Gaming 1 Month : 1M <a:11Credit:1017997085158686811>  **


**<a:emoji_30:1016805946233737276> Nitro Gaming 3 Month : 30K <a:11Credit:1017997085158686811>  **


**<a:emoji_30:1016805946233737276> Nitro Classic 1 Month : 650K <a:11Credit:1017997085158686811>  **



<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>

- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**

`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968537296498483210/EGS_Discord_Nitro_2560x1440_withlogo_2560x1440-944994658df3b04d0c4940be832da19e.png")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`nitbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [nitroembedembed], components: [row] })
}
if (interaction.values == "bot") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Bot Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276> **Here Is All Bot Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>

- <a:emoji_30:1016805946233737276> Full System Vip Shop Bot : 800K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> Full System Bot : 500K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> System Bot : 200K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> Brodcast Bot : 150K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> Avatar Bot : 100K <a:11Credit:1017997085158686811>


- <a:emoji_30:1016805946233737276> Auto Line & React : 80K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> Tax (In Specific Room) : 60K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> Tax : 40K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> Auto Line With Embed Bot : 40K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> Auto Line Withot embed : 20K <a:11Credit:1017997085158686811> 


- <a:emoji_30:1016805946233737276> Auto React Bot : 15K <a:11Credit:1017997085158686811>


- <a:emoji_30:1016805946233737276> Roubux Bot : 400K <a:11Credit:1017997085158686811> 


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>

- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968613515873099806/images_4.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`botbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
}
if (interaction.values == "vote") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Vote Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276> **Here Is All Vote Prices** <a:11Credit:1017997085158686811>



<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


**<a:emoji_30:1016805946233737276> 1 vote : 2k <a:11Credit:1017997085158686811> **


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968613946653302926/download.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`votbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
}
  if (interaction.values == "uc") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Uc Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276> **Here Is All Uc Prices** <a:11Credit:1017997085158686811>


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


<a:ss_3:1016805756697321533> **__Global__** <:UC:1020837352404418630>



> <a:emoji_30:1016805946233737276>  60uc : 20 LE <:drs__vodafone:1020939389771198474> 


> <a:emoji_30:1016805946233737276>  180uc : 55 LE <:drs__vodafone:1020939389771198474> 


> <a:emoji_30:1016805946233737276>  325uc : 80 LE <:drs__vodafone:1020939389771198474>


> <a:emoji_30:1016805946233737276>  660uc : 150 LE <:drs__vodafone:1020939389771198474>


> <a:emoji_30:1016805946233737276>  985uc : 225 LE <:drs__vodafone:1020939389771198474>


> <a:emoji_30:1016805946233737276>  1800uc : 375 LE <:drs__vodafone:1020939389771198474>


> <a:emoji_30:1016805946233737276>  3850uc : 725 LE <:drs__vodafone:1020939389771198474>   


<a:emoji_30:1016805946233737276> Here Is All Netflix Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


<a:ss_3:1016805756697321533> **__Korean__** <:UC:1020837352404418630>


> <a:emoji_30:1016805946233737276>  190uc : 60 LE <a:11Credit:1017997085158686811> 


> <a:emoji_30:1016805946233737276>  660uc : 160 LE <a:11Credit:1017997085158686811>


> <a:emoji_30:1016805946233737276>  1800uc : 430 LE <a:11Credit:1017997085158686811>


> <a:emoji_30:1016805946233737276>  3850uc : 840 LE <a:11Credit:1017997085158686811>


> <a:emoji_30:1016805946233737276>  8000uc : 1660 LE <a:11Credit:1017997085158686811>  


<a:emoji_30:1016805946233737276> Here Is All Netflix Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968620259592515664/images_5.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`ucbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
  }
if (interaction.values == "boost") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Boost Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276> **Here Is All Boost Prices** <a:11Credit:1017997085158686811>


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


- <a:emoji_30:1016805946233737276> 1 Boost 1 Week : 10K <a:11Credit:1017997085158686811>  


- <a:emoji_30:1016805946233737276> 1 Boost 1 Month : 25K <a:11Credit:1017997085158686811>  


- <a:emoji_30:1016805946233737276> 1 Boost 3 Month : 35K <a:11Credit:1017997085158686811>  




<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968816001149984778/images_6.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`bosbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
}
if (interaction.values == "spotify") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Spotify Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276> Here Is All Spotify Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


> <a:emoji_30:1016805946233737276> Solo 1 Month : 30K <a:11Credit:1017997085158686811>

> <a:emoji_30:1016805946233737276> Duo 1 Month : 40K  <a:11Credit:1017997085158686811>

> <a:emoji_30:1016805946233737276> Family 1 Month : 45K <a:11Credit:1017997085158686811>

> <a:emoji_30:1016805946233737276> Solo 3 Month : 60K <a:11Credit:1017997085158686811>


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968819184979025930/images_1.png")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`spotbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
}
if (interaction.values == "shahid") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Shahid Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276> Here Is All Shahid Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


- <a:emoji_30:1016805946233737276>  Shahid User 1 Month : 80K <a:11Credit:1017997085158686811>


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__** 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968820015392514078/images_2.png")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`shabutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
}
if (interaction.values == "tiktok") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(color)
      .setTitle(`\`\#\`\ Tiktok Prices In ${interaction.guild.name}`)
      .setDescription(`<a:emoji_30:1016805946233737276> Here Is All Tiktok Prices** <a:11Credit:1017997085158686811>

<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


<a:ss_3:1016805756697321533> **__Followers__** <a:tiktok:1020836269040881734>

- <a:emoji_30:1016805946233737276> 1K(بدون ضمان) = 600k <a:11Credit:1017997085158686811>

- <a:emoji_30:1016805946233737276> 1k(ضمان شهر) = 900k <a:11Credit:1017997085158686811>


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


<a:ss_3:1016805756697321533> **__Likes__** <a:tiktok:1020836269040881734>

- <a:emoji_30:1016805946233737276> 1k(ضمان شهر) = 300k <a:11Credit:1017997085158686811>


<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


<a:ss_3:1016805756697321533> **__Views__** <a:tiktok:1020836269040881734>

-<a:emoji_30:1016805946233737276> 1k(ضمان وصول) = 5k <a:11Credit:1017997085158686811>



<a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357><a:aline:1017991488363319357>


- <a:ss_3:1016805756697321533> **__اضغط علي الزر لعمل منشن علي الرول الخاصه بالمنتج .__ 


- <a:ss_3:1016805756697321533> **__You Can Mention The Seller Click The Button__**`)
      .setImage(`https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2021/07/TikTok_Banner-1.jpg`)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`tikbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:ss_4:1016805809449087037>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
})
///
client.on("interactionCreate", interaction => {
  if (!interaction.isButton()) return;
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)
  if (blacklistdb) return interaction.reply({ content: `انت من قائمه البلاكلست لا يمكنك استخدام البوت` })

  if (interaction.customId == "netbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${netflixrole} ||`
    })
    interaction.deferUpdate()
}
if (interaction.customId == "insbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${instarole} ||`
    })
    interaction.deferUpdate()
}
if (interaction.customId == "visbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${visarole} ||`
    })
    interaction.deferUpdate()
  }
if (interaction.customId == "nitbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${nitrorole} ||`
    })
    interaction.deferUpdate()
}
  if (interaction.customId == "botbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${botrole} ||`
    })
    interaction.deferUpdate()
  }
  if (interaction.customId == "votbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${voterole} ||`
    })
    interaction.deferUpdate()
  }
 if (interaction.customId == "ucbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${ucrole} ||`
    })
    interaction.deferUpdate()
  }
  if (interaction.customId == "bosbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${boostrole} ||`
    })
    interaction.deferUpdate()
  }
  if (interaction.customId == "spotbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${spotifyrole} ||`
    })
    interaction.deferUpdate()
  }
  if (interaction.customId == "shabutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${shahidrole} ||`
    })
    interaction.deferUpdate()
      }
  
if (interaction.customId == "crebutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${creditrole} ||`
    })
    interaction.deferUpdate()
  }
  if (interaction.customId == "tikbutton") {
    interaction.channel.send({
      content: `
<a:ss_3:1016805756697321533> **__انتظر حتي يأتي البائع الخاص بالمنتج المطلوب__** <a:aYred:1006358030570508288>
>  <a:ss_4:1019470584301748284>**__منشن : __** || ${tiktokrole} ||`
    })
    interaction.deferUpdate()
  }
}) 

////////////////////////////

client.on('channelCreate', message => {
  if (message.parentId !== applyteamcategory) return;
  const pricelistembed = new MessageEmbed()
    .setImage(line)
    .setColor("CYAN")

    .setTimestamp()

    .setDescription(` 
<a:ss_3:1016805756697321533> > **__English__** <a:wdaira:1016837362074005575>


        > \`1\` <a:emoji_30:1016805946233737276> ** Please write your Name ** **:**

        > \`2\` <a:emoji_30:1016805946233737276> **Please Write your Age** **:**

        > \`3\` <a:emoji_30:1016805946233737276> **Please Write The Number Of Servers You Are Working in**

        > \`4\` <a:emoji_30:1016805946233737276> **Please Sends , Number : __20__**

        > \`5\` <a:emoji_30:1016805946233737276> **Please Write The Names Of Servers You Are Working in**

        > \`6\` <a:emoji_30:1016805946233737276> **Write down the names of the roles you are applying for**




<a:ss_3:1016805756697321533> > **__arabic__** <a:wdaira:1016837362074005575>


> \`1\` <a:emoji_30:1016805946233737276> **اسمك**

> \`2\` <a:emoji_30:1016805946233737276> **سنك**

> \`3\` <a:emoji_30:1016805946233737276> **عدد سرفرات الشغال فيها**

> \`4\` <a:emoji_30:1016805946233737276> **قم بارسال 20 فيد باك من سرفرات مختلفه**

> \`5\` <a:emoji_30:1016805946233737276> **اسماء السرفرات** 

> \`6\` <a:emoji_30:1016805946233737276> **اسماء الرولات الهتقدم عليها**

> \`#\` <a:emoji_30:1016805946233737276>**__ان لم يتوفر فيدباك سيتم دفع ضمان اجباري 200k__** 
           `)
  setTimeout(() => {
    message.send({ embeds: [pricelistembed] })
  }, 2000);
})

client.on("messageCreate", message => {
  if(message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  if(args[0] === prefix+"help") {
    let menu = new MessageSelectMenu()
      .setCustomId(`help_${message.author.id}`)
      .setPlaceholder("Choose a category")
      .addOptions([{
							label: 'Admin',
							description: 'لـعرض اوامـر الادمـن',
							value: '1',
              emoji: '<a:mazen:1016805868421009470>',
						},
          {
							label: 'General',
							description: 'لـعرض اوامـر العـام',
							value: '2',
              emoji: '<:violet9:1019469918871232562>',
						},
						{
							label: 'Store',
							description: 'لعـرض اوامـر الشـوب',
							value: '3',
              emoji: '<a:aDiscordLoad:998755041542426756>',
						},
							
						{
							label: 'Music ',
							description:  'لعـرض اوامـر الاغـانـي',
							value: '4',
              emoji: '<:mu:1016909609379840091>',
            },

                   						      
							
						{
							label: 'Delete',
							description: 'لـمسح الـرساله',
							value: '6',
              emoji: '<a:678454765784662080:1016825278812651651>',
            }])
    
    let row = new MessageActionRow()
      .addComponents([menu]);

    let button = new MessageActionRow()

        .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Invite Bot')
  .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`))
    
       .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Server Support')
  .setURL(`https://discord.gg/WxGZK8SsxM`))


    let embed = new MessageEmbed()
    .setDescription(`> \`\#\` **Hey  ,**<@${message.author.id}> <a:emoji_157:1016798780697354340>

> \`\-\`\ **Please Click Category To Show A Help** . 


> \`\#\`\ **__This Bot Programming And Development By__** : \`\Fawry Team \`\ <:dev_8:1016810098024263780> `) 
.setImage(line)
       .setThumbnail(message.guild.iconURL({ dynamic: true }))   

    .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
      
.setColor(color)
    
      .setTimestamp()
    message.reply({ embeds:[embed], components:[row, button] }).then( msg => {
      let filter = b => b.user.id === message.author.id && b.customId === `help_${message.author.id}`;
      let collector = msg.createMessageComponentCollector({ filter:filter, componentType: 'SELECT_MENU', time:120000 });
      collector.on("collect", (b) => {
        if(b.values[0] === "1") {
              
      const { version: djsversion } = require("discord.js");
    const { version } = require("./package.json");
            let days = Math.floor(client.uptime / 86400000);
          let hours = Math.floor(client.uptime / 3600000) % 24;
          let minutes = Math.floor(client.uptime / 60000) % 60;
          let seconds = Math.floor(client.uptime / 1000) % 60;    
    let embed_1 = new MessageEmbed()

  .setAuthor(`Admin Commands:`, client.user.displayAvatarURL({dynamic : true})) 
      .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        .setDescription(`
>  \`\-1\` **hide**   **__اخفاء الروم__**

>  \`\-2\` **show**   **__اظهار الروم__**

>  \`\-3\` **ban**   **__لتبنيد شخص__**

>  \`\-4\` **unban**   **__لفك البان عن الشخص__**

>  \`\-5\` **kick**   **__لطرد الشخص__**
 
>  \`\-6\` **lock**   **__لقفل الشات__**
 
>  \`\-7\` **unlock**   **__لفتح الشات__**

>  \`\-8\` **say**   **__البوت يكرر كلامك__**
 
>  \`\-9\` **embad**   **__علشان البوت يكرر كلامك في ايمبد__**

>  \`\-10\` **clear**   **__مسح الرسائل__**
 
>  \`\-11\` **warn**   **__تدي لشخص انذار__**

>  \`\-12\` **add**   **__تدي رتبة لشخص__** 

>  \`\-13\` **remove**   **__تسحب رتبة من شخص__**
 
>  \`\-14\` **add-emoji**   **__تضيف ايموجي للسيرفر__**

>  \`\-15\` **dm**   **__تبعت رسالة لشخص في الخاص__**

>  \`\-16\` **anti-bots on**   **__لحماية السيرفر من البوتات__**

>  \`\-17\` **anti-bots off**   **__للسماح بدخول اي بوت السيرفر__** `) 

   .setImage(line)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))

          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});
        } else if(b.values[0] === "2") {
      let embed_1 = new MessageEmbed()
        
  .setAuthor(`General Commands:`, client.user.displayAvatarURL({dynamic : true}))
      .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        .setDescription(`>  \`\-1\` **${prefix}avatar server**   **__الافتار بتاع السيرفر__**

>  \`\-2\` **${prefix}avatar**   **__الافتار بتاعك__**

>  \`\-3\` **${prefix}server**   **__معلومات السيرفر__**
 
>  \`\-4\` **${prefix}user**   **__لمعرفة معلومات الحساب__**
 
>  \`\-5\` **${prefix}ping**   **__لمعرفة بنج البوت__**

>  \`\-6\` **${prefix}bot**   **__معلومات البوت__**  `) 
          
     .setImage(line)
      .setColor(color)  .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
          
          
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});
  } else if(b.values[0] === "3") {
let embed_1 = new MessageEmbed()
            
   .setAuthor(`Store Commands:`, client.user.displayAvatarURL({dynamic : true}))
      .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        .setDescription(`
>  \`\-1\` **${prefix}come**   **__لطلب شخص في التكت__**

>  \`\-2\` **${prefix}form**   **__فورم الاستور__**

>  \`\-3\` **${prefix}fb**   **__لطلب فيدباك من المشتري__**
 
>  \`\-4\` **${prefix}tax**   **__لمعرفه الضريبه__** `)
     .setImage(line)
      .setColor(color)  .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
          
          
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});
  } else if(b.values[0] === "4") {
let embed_1 = new MessageEmbed()
            

  .setAuthor(`Music Commands:`, client.user.displayAvatarURL({dynamic : true}))
      .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        .setDescription(` >  \`\-1\` **${prefix}play**   **__لتشغيل اغنيه__**

>  \`\-2\` **${prefix}stop**   **__لايقاف الاغنيه__**
 `)
                    
     .setImage(line)
      .setColor(color)  .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {})
  } else if(b.values[0] === "5") {
          msg.delete().catch(err => {});
          message.delete().catch(err => {});
        }
      });
    });
  }
});    





client.login(process.env.TOKEN)
