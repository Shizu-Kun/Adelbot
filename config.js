/*
 *Base By Siputzx
 *Pengembang PakoyOffC
 *YT : PakoyOffC / CubluxStore
 *TT : PakoyOffC
 *IG : CubluxStore
 *WA : 089512569449
 
 ─┉┈◈ * BIG THANKS TO *◈┈┉

 Srip Base Ori From Siputzx 
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Siputzx (Penyedia Base) 
» PakoyOffC (Pengembang)
» Penyedia Module & Api
» Dika (Partner)
» Adam (Partner)
» Kyu (Partner)
» FarisOfC (Partner)
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//—————「 Set Owner 」—————//
global.owner = '595972980943' // UBAH AJA NO OWNER
global.nomerowner = ["595976154279"] // UBAH AJA NO OWNER
global.namabot = '' // UBAH AJA NAMA BOT LU
global.namaowner = '' // UBAH AJA NAMA OWNER

//—————「 Set Watermak 」—————//
global.packname ='𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑' //NAMA STICKER
global.author = '' // UBAH AUA NAMA LU
global.foter1 = '𝚂𝚒𝚖𝚙𝚕𝚎 𝙱𝚘𝚝 𝙱𝚢 Lollipop' // BEBAS
global.foter2 = '𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 Lollipop' // BEBAS
global.foter3 = '𝙱𝙾𝚃 ʙʏ (パキョイ)' // BEBAS
global.foter4 = '𝙱𝙾𝚃 𝚅 𝟷. 𝟸' // BEBAS
global.idcennel = '120363294187887035@newsletter' // BEBAS
global.thumb = 'https://telegra.ph/file/2f5d093d7dcd338618809.jpg' // BEBAS
global.gc = ''// BEBAS

//—————「 DATABASE 」—————//
global.urldb = 'mongodb+srv://nawdev01:putu0@botwa.q6bwloy.mongodb.net/?retryWrites=true&w=majority'; // JANGAN DI UBAH ERROR NANTI

//—————「 Global Mess 」—————//
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '⏳ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐',
}

//—————「 Set Apikey 」—————//
global.APIs = {
    xyro: "https://api.xyroinee.xyz", // ISI SAMA API LU
    popcat : 'https://api.popcat.xyz' // ISI SAMA API LI
}
/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "5dRkJDWvIG", // ISI SAMA APIKEY LU
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})