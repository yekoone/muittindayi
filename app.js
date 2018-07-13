// PAKET ÇAĞIRMA
var Discord = require('discord.js');
var bot = new Discord.Client();

//KOMUTLAR
bot.on('message',message =>
{
  var sender = message.author; // Kullanıcıdan gönderilen mesajlar
  var msg = message.content.toUpperCase(); //
  var prefix = '#' //Komut çağırıcı

  //Botlar
  if(msg===prefix + 'BOT'){
    message.channel.send({embed:{
      title:"Toshinou-Revamped",
      description:"https://github.com/Gagong/Toshinou-Revamped",
      color: 0xE625E6
    }})
    message.channel.send({embed:{
      title:"Toshiba-Pendramon",
      description:"https://github.com/Pendramon/Toshinou-Community",
      color: 0xE63925
    }})

  }

  //Ping / Pong Komutları
  if(msg===prefix + 'PING'){
    message.channel.send(':ping_pong:')
  }

  //MÜZİK
  
  //MÜZİK



});
//KOMUTLAR


bot.on('ready',() =>
{
  console.log('Bot çalışıyor') // Bot Çalışıyor

  bot.user.setGame('İnsanın Gururuyla') // Oynadığı oyun
});

//Sunucuya yeni giriş yapanlara yetki verme
bot.on('guildMemberAdd', member => {
    console.log( member.username+ ' sunucuya katıldı')
    var role= member.guild.roles.find('name','Kimliği Belirsiz Cisim!');
    member.addRole(role) //Kayıtsız rolü verme
    member.guild.channels.get('464486903354228776').sendMessage(member.toString() + " , Hazretleri Hoşgeldiniz! Bizde Tam Sizi Bekliyorduk"); //Sunucuya katılan kişiye hoşgeldin mesajı
});

//Sunucudan ayrılan kişiler
bot.on('guildMemberRemove', member => {
  member.guild.channels.get('464486903354228776').sendMessage(member.toString() + " , Sunucudan Ayrıldı. Yürü Git Lağnnn"); //Sunucudan ayrılan kişiye mesaj
});
//GİRİŞ
bot.login(process.env.BOT_TOKEN);
