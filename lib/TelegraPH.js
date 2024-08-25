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

const axios = require("axios");
const BodyForm = require("form-data");
const fs = require("fs");
const { fromBuffer } = require("file-type");

const TelegraPH = async (Path) => 
	new Promise(async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path));
			const data = await axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders(),
				},
				data: form,
			});
			return resolve("https://telegra.ph" + data.data[0].src);
		} catch (err) {
			return reject(new Error(String(err)));
		}
	});
    
module.exports = { TelegraPH }