const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Komutlarımı DM Olarak Attım ! Özel Mesajlarını Kontrol Et :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setTitle("Botumuzun Komutları")
    .setAuthor("**EmirhanEksilmez#2298| Bütün hakları okunmuş ve gizlidir.**", "")
    .setColor("RANDOM")
    .addField("**Eğlence ve Kullanıcı Komutları:**", `o!banned • Dene ve Gör!  \no!avatarım • Avatarınınızı Gösterir. \no!söv • Etikletlediğinize Söver. \no!troll • Troll Gifi Atar \no!uç • Uçan Tekme Atar \no!atatürk • Şanlı Atatürk'ün Resmini Atar \no!yala • Dondurma Yalar \no!sigara • Sigara İçer. \no!herkesebendençay • Herkese Çay Alırsınız. \no!şanslısayım • Şans Sayınızı Gösterir. \no!hd • NSFW bir resim gösterir.(+18) \no!koş • Koşarsınız. \no!espri • BOT Espri Yapar. \no!çayiç • Çay İçersiniz. \no!çekiç • İstediğiniz Kişiye Çekiç Atarsınız. \no!çayaşekerat • Çaya Şeker Atarsınız. \no!yumruh-at • Yumruk Atarsınız. \no!say • Bota İstediğiniz Şeyi Yazdırırsınız. \no!sunucuresmi • BOT Sunucunun Resmini Atar. \no!sunucubilgi • BOT Sunucu Hakkında Bilgi Verir. \no!bulanık • Etiketlediğiniz Kişinin Avatarını  Bulanıklaştırır `)
    .addField("**Yetkili Komutlar**", `o!ban • İstediğiniz Kişiyi Sunucudan Banlar.\no!sil • Mesajları Temizler \no!kilit • chat kapatır!. \no!uyar • Isdedginiz Kisiyi Uyarir \no!kick • İstediğiniz Kişiyi Sunucudan Atar. \no!unban • İstediğiniz Kişinin Yasağını Açar. \no!sustur • İstediğiniz Kişiyi Susturur. \no!oylama • Oylama Açar. \no!duyuru • Güzel Bir Duyuru Görünümü Sağlar.`)
    .addField("**Ana ve Kullanıcı Komutları**", "o!yardım • BOT Komutlarını Atar. \no!bilgim • Bilgilerinizi Gösterir \no!tavsiye • BOTa tavsiye verirsiniz. \no!bilgi • BOT Kendisi Hakkında Bilgi Verir. \no!ping • BOT Gecikme Süresini Söyler. \no!davet • BOT Davet Linkini Atar. \no!istatistik • BOT İstatistiklerini Atar.")
    .addField("**Müzik Komutları**", `Yakında Eklenicek Takipte Kalın :ballot_box_with_check: `)
    .addField("**Yapımcı**", " **EmirhanEksilmez#2298**")
    .setFooter('**--------------------------**')
    .setFooter("")
    .setThumbnail("")
    .setTimestamp()
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını gösterir',
  usage: 'yardım'
};
