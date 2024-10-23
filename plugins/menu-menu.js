import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen6
let vn = './Assets/mp3/Classic.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭══〘✯✯✯✯✯✯✯✯✯〙══╮
║    ◉— *𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝐁𝐎𝐓* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║𒁂⃝𝗛𝗘𝗟𝗟𝗢 ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║𝗢𝘄𝗻𝗲𝗿:𒁂⃝ᰲ𝐀𝖗𝖑𝖔𝖉𝖗𝖆𝖌𝖔𝖓 ͟͞
║❦︎𝗡𝘂𝗺𝗯𝗲𝗿: wa.me/254702713600
║❦︎𝗕𝗼𝘁 𝗢𝗙𝗖: wa.me/254746764468
║❦︎𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺: https://t.co/3frSXMbUH2
║❦︎𝗗𝗮𝘁𝗲: ${date}
║❦︎𝗨𝗽𝘁𝗶𝗺𝗲: ${uptime}
║❦︎𝗨𝘀𝗲𝗿𝘀: ${rtotalreg}

𝐓𝐘𝐑𝐀𝐗𝐄𝐒
0:35 ━❍──────── -5:32
↻     ⊲  Ⅱ  ⊳     ↺
𝐋𝐎𝐀𝐃𝐄𝐃: ▁▂▃▄▅▆▇ 100%

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗧𝗘𝗦𝗧-𝗕𝗢𝗧🪀/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🤖 .𝗮𝗹𝗶𝘃𝗲
┣ ⃟ 🤖 .𝗯𝗼𝘁
┣ ⃟ 🤖 .𝗿𝘂𝗻𝘁𝗶𝗺𝗲
┣ ⃟ 🤖 .𝗽𝗶𝗻𝗴
┣ ⃟ 🤖 .𝗶𝗻𝗳𝗼𝗯𝗼𝘁
┣ ⃟ 🤖 .𝘀𝗰/𝘀𝗰𝗿𝗶𝗽𝘁
┣ ⃟ 🤖 .𝘀𝗽𝗲𝗲𝗱𝘁𝗲𝘀𝘁
┣ ⃟ 🤖 .𝘁𝘆𝗰/𝘁𝗲𝗿𝗺𝘀
┣ ⃟ 🤖 .𝘀𝘁𝗮𝘁𝘀𝗲𝗿𝘃𝗲𝗿
┗━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥-�𝗘𝗡𝗨𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 .𝘁𝗼𝗮𝗻𝗶𝗺𝗲
┣ ඬ⃟ 🧧 .𝘁𝘁𝘀2
┣ ඬ⃟ 🧧 .𝘁𝘁𝘀
┣ ඬ⃟ 🧧 .𝘁𝗼𝘃𝗶𝗱𝗲𝗼/𝘁𝗼𝘃𝗶𝗱
┣ ඬ⃟ 🧧 .𝘁𝗼𝘂𝗿𝗹
┣ ඬ⃟ 🧧 .𝘁𝗼𝗽𝘁𝘁
┣ ඬ⃟ 🧧 .𝘁𝗼𝗺𝗽3
┣ ඬ⃟ 🧧 .𝘁𝗼𝗶𝗺𝗴
┣ ඬ⃟ 🧧 .𝘁𝗼𝗴𝗶𝗳
┗━━━━━━━━━━━━━
┣ ඬ⃟ 📥 .𝗮𝗽𝗸 (𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱 (𝘆𝘁 𝗹𝗶𝗻𝗸)(𝗳𝗼𝗿 𝗵𝗲𝗮𝘃𝘆 𝗺𝗶𝘅 𝗳𝗶𝗹𝗲𝘀)
┣ ඬ⃟ 📥 .𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 (𝗹𝗶𝗻𝗸)
┣ ඬ⃟ 📥 .𝗴𝗱𝗿𝗶𝘃𝗲 (𝗹𝗶𝗻𝗸)
┣ ඬ⃟ 📥 .𝗴𝗶𝘁𝗰𝗹𝗼𝗻𝗲 (𝗹𝗶𝗻𝗸)
┣ ඬ⃟ 📥 .𝗶𝗴/𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 (𝗹𝗶𝗻𝗸)
┣ ඬ⃟ 📥 .𝗶𝗴𝘀𝘁𝗮𝗹𝗸 (𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝗶𝗴𝘀𝘁𝗼𝗿𝘆 (𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝗴𝗶𝗺𝗮𝗴𝗲 (𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝗺𝗲𝗱𝗶𝗮𝗳𝗶𝗿𝗲 (𝗹𝗶𝗻𝗸)
┣ ඬ⃟ 📥 .𝗽𝗶𝗻𝘁𝗿𝗲𝘀𝘁 (𝗹𝗶𝗻𝗸/𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝗽𝗹𝗮𝘆 (𝗻𝗮𝗺𝗲 𝗼𝗳 𝘀𝗼𝗻𝗴)
┣ ඬ⃟ 📥 .𝗣𝗹𝗮𝘆𝗱𝗼𝗰 (𝗻𝗮𝗺𝗲 𝗼𝗳 𝘀𝗼𝗻𝗴)
┣ ඬ⃟ 📥 .𝗽𝗽𝘁𝗶𝗸𝘁𝗼𝗸 (𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝗿𝗶𝗻𝗴𝘁𝗼𝗻𝗲 (𝗲𝗻𝘁𝗲𝗿 𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝗽𝗮𝗰𝗸 (𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝘁𝗶𝗸𝘁𝗼𝗸 (𝘁𝗶𝗸𝘁𝗼𝗸 𝗹𝗶𝗻𝗸)
┣ ඬ⃟ 📥 .𝘁𝗶𝗸𝘁𝗼𝗸𝘀𝘁𝗮𝗹𝗸 (𝘁𝗶𝗸𝘁𝗼𝗸 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲)
┣ ඬ⃟ 📥 .𝘁𝘄𝗶𝘁𝘁𝗲𝗿 (𝗹𝗶𝗻𝗸)
┣ ඬ⃟ 📥 .𝘆𝘁𝗺𝗲𝘁𝗮/𝘆𝘁𝗲𝘀𝘁 (𝘆𝘁 𝗹𝗶𝗻𝗸)
┣ ඬ⃟ 📥 .𝘆𝘁𝘃 (𝗹𝗶𝗻𝗸/𝗻𝗮𝗺𝗲 𝗼𝗳 𝘀𝗼𝗻𝗴)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *<🪀𝗧𝗬𝗥𝗔𝗫𝗘𝗦 𝗙𝗨𝗡-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️.𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿
┣ ඬ⃟ 🖍️.𝗗𝗮𝗿𝗲
┣ ඬ⃟ 🖍️.𝗗𝗶𝘃𝗼𝗿𝗰𝗲
┣ ඬ⃟ 🖍️.𝗗𝗼𝘅
┣ ඬ⃟ 🖍️.𝗚𝗮𝘆
┣ ඬ⃟ 🖍️.𝗛𝗮𝘁𝗲
┣ ඬ⃟ 🖍️.𝗟𝗼𝘃𝗲
┣ ඬ⃟ 🖍️.𝗠𝗮𝗿𝗿𝘆
┣ ඬ⃟ 🖍️.𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝘁𝘆
┣ ඬ⃟ 🖍️.𝗽𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲
┣ ඬ⃟ 🖍️.𝗽𝗿𝗼𝗽𝗼𝘀𝗲
┣ ඬ⃟ 🖍️.𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻
┣ ඬ⃟ 🖍️.𝗥𝗲𝘁𝗼
┣ ඬ⃟ 🖍️.𝘀𝗶𝗺𝗶
┣ ඬ⃟ 🖍️.𝗧𝗼𝗽
┣ ඬ⃟ 🖍️.𝗧𝗼𝗽𝘀
┣ ඬ⃟ 🖍️.𝗧𝗿𝘂𝘁𝗵
┣ ඬ⃟ 🖍️.𝘄𝗮𝘀𝘁𝗲
┣ ඬ⃟ 🖍️.𝘇𝗼𝗱𝗶𝗮𝗰
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗚𝗔𝗠𝗘-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎮 .𝗧𝗧𝗧
┣ ඬ⃟ 🎮 .𝗯𝗶𝗯𝗹𝗲
┣ ඬ⃟ 🎮 .𝗴𝘂𝗲𝘀𝘀𝗳𝗹𝗮𝗴
┣ ඬ⃟ 🎮 .𝗴𝘂𝗲𝘀𝘀𝘀𝗼𝗻𝗴
┣ ඬ⃟ 🎮 .𝗺𝗮𝘁𝗵𝘀
┣ ඬ⃟ 🎮 .𝗽𝗶𝘀𝘁𝗮
┣ ඬ⃟ 🎮 .𝗽𝗽𝘁
┣ ඬ⃟ 🎮 .𝗿𝗶𝗱𝗱𝗹𝗲
┣ ඬ⃟ 🎮 .𝘀𝗹𝗼𝘁
┣ ඬ⃟ 🎮 .𝘀𝘂𝗶𝘁𝗽𝘃𝗽
┣ ඬ⃟ 🎮 .𝘄𝗼𝗿𝗱𝗳𝗶𝗻𝗱
┣ ඬ⃟ 🎮 .𝗧𝗿𝘆𝗹𝘂𝗰𝗸
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗚𝗥𝗢𝗨𝗣-𝗠𝗘𝗡𝗨🪀 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 .𝗮𝗰𝘁𝗶𝘃𝗲
┣ ඬ⃟ 💎 .𝗮𝗱𝗱
┣ ඬ⃟ 💎 .𝗮𝗱𝗺𝗶𝗻𝘀/𝘀𝘁𝗮𝗳𝗳
┣ ඬ⃟ 💎 .𝗮𝘃𝗮𝘁𝗮𝗿/𝗱𝗽
┣ ඬ⃟ 💎 .𝗰𝗹𝗮𝘀𝗶𝗳𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻
┣ ඬ⃟ 💎 .𝗰𝗹𝗲𝗮𝗿
┣ ඬ⃟ 💎 .𝗰𝗼𝗻𝗳𝗶𝗴
┣ ඬ⃟ 💎 .𝗰𝗼𝗻𝗳𝗶𝗴𝘁𝗶𝗺𝗲
┣ ඬ⃟ 💎 .𝗱𝗮𝘀𝗵𝗯𝗼𝗮𝗿𝗱 
┣ ඬ⃟ 💎 .𝗱𝗲𝗹𝗲𝘁𝗲
┣ ඬ⃟ 💎 .𝗲𝗱𝗶𝘁
┣ ඬ⃟ 💎 .𝗶𝗻𝗮𝗰𝘁𝗶𝘃𝗲
┣ ඬ⃟ 💎 .𝗶𝗻𝗳𝗼
┣ ඬ⃟ 💎 .𝗶𝗻𝗳𝗼𝗴𝗿𝗼𝘂𝗽
┣ ඬ⃟ 💎 .𝗸𝗶𝗰𝗸
┣ ඬ⃟ 💎 .𝗹𝗶𝗻𝗸
┣ ඬ⃟ 💎 .𝗹𝗶𝘀𝘁𝗻𝘂𝗺/𝗸𝗶𝗰𝗸𝗻𝘂𝗺
┣ ඬ⃟ 💎 .𝘄𝗮𝗿𝗻
┣ ඬ⃟ 💎 .𝗹𝗶𝘀𝘁𝗼𝗻𝗹𝗶𝗻𝗲
┣ ඬ⃟ 💎 .𝗽𝗼𝗹𝗹
┣ ඬ⃟ 💎 .𝗽𝗿𝗼𝗺𝗼𝘁𝗲
┣ ඬ⃟ 💎 .𝗿𝗲𝘃𝗼𝗸𝗲
┣ ඬ⃟ 💎 .𝘀𝗲𝘁𝗯𝘆𝗲
┣ ඬ⃟ 💎 .𝘀𝗲𝘁𝗻𝗮𝗺𝗲
┣ ඬ⃟ 💎 .𝗦𝗲𝘁𝗽𝗽𝗴𝗿𝗼𝘂𝗽
┣ ඬ⃟ 💎 .𝘀𝗲𝘁𝘄𝗲𝗹𝗰𝗼𝗺𝗲
┣ ඬ⃟ 💎 .𝘁𝗮𝗴𝗮𝗹𝗹
┣ ඬ⃟ 💎 .𝘂𝗻𝘄𝗮𝗿𝗻
┣ ඬ⃟ 💎 .𝘄𝗮𝗿𝗻
┣ ඬ⃟ 💎 .𝗶𝗻𝘃𝗶𝘁𝗲
┣ ඬ⃟ 💎 .𝘁𝗼𝘁𝗮𝗴
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃*<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗜𝗡𝗙𝗢-𝗠𝗘𝗡𝗨🪀/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 💟 .𝗰𝗹𝗲𝗮𝗿 
┣ ⃟ 💟 .𝗰𝗼𝘃𝗶𝗱
┣ ⃟ 💟 .𝗰𝗿𝗲𝗮𝘁𝗼𝗿
┣ ⃟ 💟 .𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲
┣ ⃟ 💟 .𝗴𝗿𝗼𝘂𝗽𝗹𝗶𝘀𝘁
┣ ⃬⃟ 💟 .𝗴𝗿𝗼𝘂𝗽𝘀𝗼𝗳𝗰
┣┣⃟ 💟 .𝗹𝗶𝘀𝘁𝗽𝗿𝗲𝗺
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🔍 .𝗮𝗻𝗶𝗺𝗲𝗶𝗻𝗳𝗼
┣ ⃟ 🔍 .𝗴𝗶𝗺𝗮𝗴𝗲
┣ ⃟ 🔍 .𝗴𝗶𝘁𝗵𝘂𝗯𝘀𝗲𝗮𝗿𝗰𝗵
┣ ⃟ 🔍 .𝗴𝗼𝗼𝗴𝗹𝗲
┣ ⃟ 🔍 .𝗶𝘁𝘂𝗻𝗲𝘀
┣ ⃟ 🔍 .𝗹𝘆𝗿𝗶𝗰𝘀
┣ ⃟ 🔍 .𝗺𝗼𝘃𝗶𝗲𝘀
┣ ⃟ 🔍 .𝗽𝗹𝗮𝘆𝘀𝘁𝗼𝗿𝗲
┣ ⃟ 🔍 .𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀𝗲𝗮𝗿𝗰𝗵
┣ ⃟ 🔍 .𝘄𝗶𝗸𝗶𝗽𝗲𝗱𝗶𝗮
┣ ⃟ 🔍 .𝘆𝘁𝘀
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗠𝗔𝗞𝗘𝗥-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟✒️ .𝗯𝗹𝘂𝗿
┣ ⃟✒️ .𝗰𝗮𝗿𝘁𝗼𝗼𝗻/𝘁𝗼𝗰𝗮𝗿𝘁𝗼𝗼𝗻
┣ ⃟✒️ .𝗴𝗮𝘆
┣ ⃟✒️ .𝗵𝗼𝗿𝗻𝗰𝗮𝗿𝗱
┣ ⃟✒️ .𝗶𝘁𝘀𝘀𝗼𝘀𝘁𝘂𝗽𝗶𝗱
┣ ⃟✒️ .𝗹𝗼𝗴𝗼
┣ ⃟✒️ .𝗽𝗵𝗺𝗮𝗸𝗲𝗿
┣ ⃟✒️ .𝗽𝗶𝘅𝗲𝗹
┣ ⃟✒️ .𝘀𝗶𝗺𝗽𝗰𝗰𝗮𝗿𝗱
┣ ⃟✒️ .𝘁𝗼𝗮𝗻𝗶𝗺𝗲
┣ ⃟✒️ .𝘆𝘁𝗰𝗼𝗺𝗺𝗮𝗻𝗱
┣ ⃟✒️ .𝗮𝗻𝗶𝗺𝗲𝘀
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗢𝗪𝗡𝗘𝗥-𝗠𝗘𝗡𝗨🪀/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 👑 .𝗮𝗱𝗱𝗼𝘄𝗻𝗲𝗿 @𝘂𝘀𝗲𝗿 
┣ ⃟ 👑 .𝗱𝗲𝗹𝗼𝘄𝗻𝗲𝗿 @𝘂𝘀𝗲𝗿
┣ ⃟ 👑 .𝗮𝗱𝗱𝗺𝘀𝗴
┣ ⃟ 👑 .𝗮𝗱𝗱𝗽𝗿𝗲𝗺
┣ ⃟ 👑 .𝗮𝘂𝘁𝗼𝗮𝗱𝗺𝗶𝗻
┣ ⃟ 👑 .𝗯𝗮𝗰𝗸𝘂𝗽
┣ ⃟ 👑 .𝗯𝗮𝗻𝗰𝗵𝗮𝘁
┣ ⃟ 👑 .𝗯𝗮𝗻𝗹𝗶𝘀𝘁
┣ ⃟ 👑 .𝗯𝗮𝗻𝘂𝘀𝗲𝗿 @𝘂𝘀𝗲𝗿
┣ ⃟ 👑 .𝗯𝗰𝗴𝗰
┣ ⃟ 👑 .𝗯𝗹𝗼𝗰𝗸
┣ ⃟ 👑 .𝘂𝗻𝗯𝗹𝗼𝗰𝗸
┣ ⃟ 👑 .𝗯𝗹𝗼𝗰𝗸𝗹𝗶𝘀𝘁
┣ ⃟ 👑 .𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁𝗰𝗵𝗮𝘁𝘀
┣ ⃟ 👑 .𝗯𝗰/𝘁𝘅
┣ ⃟ 👑 .𝗯𝗰𝗴𝗰2
┣ ⃟ 👑 .𝗰𝗹𝗲𝗮𝗿𝘁𝗺𝗽
┣ ⃟ 👑 .𝗱𝗲𝗹𝗺𝘀𝗴
┣ ⃟ 👑 .𝗸𝗶𝗹𝗹𝗴𝗰
┣ ⃟ 👑 .𝗱𝗲𝗺𝗼𝘁𝗲𝗮𝗹𝗹
┣ ⃟ 👑 .𝗽𝗿𝗼𝗺𝗼𝘁𝗲𝗮𝗹𝗹
┣ ⃟ 👑 .𝗱𝗲𝗹𝗽𝗿𝗲𝗺
┣ ⃟ 👑 .𝗱𝗳
┣ ⃟ 👑 .𝗲𝘅𝗲𝗰 2
┣ ⃟ 👑 .𝗳𝗲𝘁𝗰𝗵
┣ ⃟ 👑 .𝗴𝗲𝘁𝗱𝗯
┣ ⃟ 👑 .𝗴𝗲𝘁𝗺𝘀𝗴
┣ ⃟ 👑 .𝗴𝗲𝘁𝗽𝗹𝘂𝗴𝗶𝗻
┣ ⃟ 👑 .𝗴𝗲𝘁𝘀𝗲𝘀𝘀𝗶𝗼𝗻
┣ ⃟ 👑 .𝗶𝗻𝗳𝗶𝗻𝗶𝘁𝘆
┣ ⃟ 👑 .𝗶𝗻𝘀𝗽𝗲𝗰𝘁 (𝗹𝗶𝗻𝗸)
┣ ⃟ 👑 .𝗷𝗼𝗶𝗻
┣ ⃟ 👑 .𝗹𝗲𝗮𝘃𝗲
┣ ⃟ 👑 .𝗹𝗶𝘀𝘁𝗺𝘀𝗴
┣ ⃟ 👑 .𝗹𝗼𝗴𝗼𝘂𝘁
┣ ⃟ 👑 .𝗺𝗼𝗻𝗶𝘁𝗼𝗿
┣ ⃟ 👑 .𝗺𝘀𝗴 
┣ ⃟ 👑 .𝗿𝗲𝗽𝗼𝗿𝘁
┣ ⃟ 👑 .𝗿𝗲𝘀𝗲𝘁𝗽𝗿𝗲𝗳𝗶𝘅
┣ ⃟ 👑 .𝗿𝗲𝘀𝗲𝘁𝘂𝘀𝗲𝗿
┣ ⃟ 👑 .𝗿𝗲𝘀𝘁𝗮𝗿𝘁
┣ ⃟ 👑 .𝘀𝗮𝘃𝗲𝗶𝗺𝗮𝗴𝗲
┣ ⃟ 👑 .𝘀𝗲𝘁𝗽𝗽𝗯𝗼𝘁
┣ ⃟ 👑 .𝘀𝗲𝘁𝗽𝗿𝗲𝗳𝗶𝘅 
┣ ⃟ 👑 .𝘀𝗳
┣ ⃟ 👑 .𝘀𝘂𝗽𝗽𝗼𝗿𝘁𝘄𝗮
┣ ⃟ 👑 .𝘂𝗻𝗯𝗮𝗻𝗰𝗵𝗮𝘁
┣ ⃟ 👑 .𝘂𝗻𝗯𝗹𝗼𝗰𝗸
┣ ⃟ 👑 .𝘂𝗽𝗱𝗮𝘁𝗲
┣ ⃟ 👑 .𝘃𝗶𝗲𝘄𝗶𝗺𝗮𝗴𝗲
┣ ⃟ 👑 .𝘃𝗶𝗿𝘂𝘀/𝗰2/𝘁𝗿𝗮𝗯𝗮5/𝘁𝗿𝗮𝗯𝗮
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗥𝗔𝗡𝗗𝗢𝗠-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 .𝗮𝗻𝗶𝗺𝗲
┣ ඬ⃟ 👾 .𝗯𝗹𝗮𝗰𝗸𝗽𝗶𝗻𝗸
┣ ඬ⃟ 👾 .𝗰𝗿7
┣ ඬ⃟ 👾 .𝗰𝗮𝘁
┣ ඬ⃟ 👾 .𝗱𝗼𝗴
┣ ඬ⃟ 👾 .𝗶𝘁𝘇𝘆
┣ ඬ⃟ 👾 .𝗸𝗽𝗼𝗽
┣ ඬ⃟ 👾 .𝗹𝗼𝗹𝗶
┣ ඬ⃟ 👾 .𝗹𝗼𝗹𝗶𝘃𝗶𝗱
┣ ඬ⃟ 👾 .𝗺𝗲𝘀𝘀𝗶
┣ ඬ⃟ 👾 .𝗻𝗮𝘃𝗶𝗱𝗮𝗱
┣ ඬ⃟ 👾 .𝗻𝗲𝗸𝗼
┣ ඬ⃟ 👾 .𝗽𝗽𝗰𝗽
┣ ඬ⃟ 👾 .𝘄𝗮𝗶𝗳𝘂
┣ ඬ⃟ 👾 .𝗰𝗼𝘂𝗿𝘀𝗲𝘀
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗥𝗣𝗚-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 💵 .𝗮𝗱𝗱𝘅𝗽 @𝘁𝗮𝗴
┣ ⃟ 💵 .𝗮𝗱𝘃𝗲𝗻𝘁𝘂𝗿𝗲
┣ ⃟ 💵 .𝗯𝗮𝗹𝗮𝗻𝗰𝗲
┣ ⃟ 💵 .𝗱𝗮𝗶𝗹𝘆
┣ ⃟ 💵 .𝗱𝗮𝗶𝗹𝘆2
┣ ⃟ 💵 .𝗵𝗲𝗮𝗹
┣ ⃟ 💵 .𝗵𝘂𝗻𝘁
┣ ⃟ 💵 .𝗹𝗲𝗮𝗱𝗲𝗿𝗯𝗼𝗮𝗿𝗱
┣ ⃟ 💵 .𝗹𝗲𝘃𝗲𝗹𝘂𝗽
┣ ⃟ 💵 .𝗺𝗶𝗻𝗲
┣ ⃟ 💵 .𝗺𝘆𝗻𝘀
┣ ⃟ 💵 .𝗽𝗿𝗼𝗳𝗶𝗹𝗲
┣ ⃟ 💵 .𝗿𝗼𝗯
┣ ⃟ 💵 .𝗯𝘂𝘆
┣ ⃟ 💵 .𝗺𝗶𝗻𝗲2
┣ ⃟ 💵 .𝘁𝗿𝗮𝗻𝘀𝗳𝗲𝗿
┣ ⃟ 💵 .𝘂𝗻𝗿𝗲𝗴
┣ ⃟ 💵 .𝘃𝗲𝗿𝗶𝗳𝘆
┣ ⃟ 💵 .𝘄𝗼𝗿𝗸
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗦𝗧𝗜𝗖𝗞𝗘𝗥-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 .𝘀𝗰𝗶𝗿𝗰𝗹𝗲/𝗰𝗶𝗿𝗰𝗹𝗲 (𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿)
┣ ඬ⃟ 👽 .𝗱𝗮𝗱𝗼
┣ ඬ⃟ 👽 .𝗴𝗲𝘁𝘀𝘁𝗶𝗰𝗸𝗲𝗿
┣ ඬ⃟ 👽 .𝗸𝗶𝘀𝘀
┣ ඬ⃟ 👽 .𝗽𝗮𝘁
┣ ඬ⃟ 👽 .𝗾𝗰
┣ ඬ⃟ 👽 .𝘀𝗲𝗺𝗼𝗷𝗶
┣ ඬ⃟ 👽 .𝘀𝗹𝗮𝗽
┣ ඬ⃟ 👽 .𝘀𝗺𝗲𝗺𝗲
┣ ඬ⃟ 👽 .𝘀𝗿𝗲𝗺𝗼𝘃𝗲𝗯𝗴
┣ ඬ⃟ 👽 .𝘀𝘁𝗶𝗰𝗸𝗲𝗿
┣ ඬ⃟ 👽 .𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝗳𝗶𝗹𝘁𝗲𝗿
┣ ඬ⃟ 👽 .𝘀𝗺𝗮𝗸𝗲𝗿
┣ ඬ⃟ 👽 .𝗮𝘁𝘁𝗽
┣ ඬ⃟ 👽 .𝗮𝘁𝘁𝗽2
┣ ඬ⃟ 👽 .𝗮𝘁𝘁𝗽3
┣ ඬ⃟ 👽 .𝘁𝘁𝗽5
┣ ඬ⃟ 👽 .𝘁𝘁𝗽4
┣ ඬ⃟ 👽 .𝘁𝘁𝗽3
┣ ඬ⃟ 👽 .𝘁𝘁𝗽2
┣ ඬ⃟ 👽 .𝘁𝘁𝗽
┣ ඬ⃟ 👽 .𝘁𝗮𝗸𝗲/𝘀𝘁𝗲𝗮𝗹
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗧𝗢𝗢𝗟𝗦-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🛠️ .𝗰𝗮𝗹𝗰
┣ ⃟ 🛠️ .𝗰𝗮𝗿𝗯𝗼𝗻
┣ ⃟ 🛠️ .𝗰𝗹𝗶𝗺𝗮𝘁𝗲
┣ ⃟ 🛠️ .𝗱𝗮𝗹𝗹𝗲
┣ ⃟ 🛠️ .𝗱𝗲𝗳𝗶𝗻𝗲
┣ ⃟ 🛠️ .𝗱𝗿𝗼𝗽𝗺𝗮𝗮𝗶𝗹
┣ ⃟ 🛠️ .𝗲𝗹𝗲𝗺𝗲𝗻𝘁
┣ ⃟ 🛠️ .𝗳𝗮𝗸𝗲𝗿𝗲𝗽𝗹𝘆
┣ ⃟ 🛠️ .𝗴𝗲𝘁𝗯𝗶𝗼
┣ ⃟ 🛠️ .𝗵𝗱
┣ ⃟ 🛠️ .𝗶𝗻𝘀𝗽𝗲𝗰𝘁
┣ ⃟ 🛠️ .𝗺𝘂𝘁𝗲
┣ ⃟ 🛠️ .𝗻𝗼𝘄𝗮
┣ ⃟ 🛠️ .𝗼𝗰𝗿
┣ ⃟ 🛠️ .𝗾𝗿𝗰𝗼𝗱𝗲
┣ ⃟ 🛠️ .𝗿𝗲𝗮𝗱𝗺𝗼𝗿𝗲
┣ ⃟ 🛠️ .𝗿𝗲𝗮𝗱𝗾𝗿
┣ ⃟ 🛠️ .𝗿𝗲𝗮𝗱𝘃𝗶𝗲𝘄𝗼𝗻𝗰𝗲/𝗿𝗲𝗮𝗱𝘃𝗼/𝘃𝘃
┣ ⃟ 🛠️ .𝗿𝗲𝘀𝗶𝘇𝗲
┣ ⃟ 🛠️ .𝘀𝘀𝘄𝗲𝗯
┣ ⃟ 🛠️ .𝘀𝘁𝘆𝗹𝗲𝘁𝗲𝘅𝘁
┣ ⃟ 🛠️ .𝘀𝘆𝗺𝗯𝗼𝗹𝘀
┣ ⃟ 🛠️ .𝘁𝗲𝗰𝗵𝗻𝗲𝘄𝘀
┣ ⃟ 🛠️ .𝘁𝗲𝗺𝗽𝗺𝗮𝗶𝗹
┣ ⃟ 🛠️ .𝘁𝗶𝗻𝘆𝘂𝗿𝗹
┣ ⃟ 🛠️ .𝘁𝗼𝗽𝗱𝗳
┣ ⃟ 🛠️ .𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗲
┣ ⃟ 🛠️ .𝘄𝗮𝘀𝘁𝗲
┣ ⃟ 🛠️ .𝘄𝗵𝗮𝘁𝗺𝘂𝘀𝗶𝗰/𝘀𝗵𝗮𝘇𝗮𝗺
┣ ⃟ 🛠️ .𝘄𝗼𝗿𝗹𝗱𝗰𝗹𝗼𝗰𝗸
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗡𝗦𝗙𝗪-𝗠𝗘𝗡𝗨🪀/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🔞 _${usedPrefix}𝗽𝗮𝗰𝗸_
┣ ⃟ 🔞 _${usedPrefix}𝗽𝗮𝗰𝗸2_
┣ ⃟ 🔞 _${usedPrefix}𝗽𝗮𝗰𝗸3_/
┣ ⃟ 🔞 _${usedPrefix}𝘃𝗶𝗱𝗲𝗼𝘅𝘅𝘅_
┣ ⃟ 🔞 _${usedPrefix}𝘃𝗶𝗱𝗲𝗼𝗹𝗲𝘀𝗯𝗶𝘅𝘅𝘅_
┣ ⃟ 🔞 _${usedPrefix}𝗯𝗼𝗼𝗯𝘀_
┣ ⃟ 🔞 _${usedPrefix}𝗯𝗼𝗼𝘁𝘆_
┣ ⃟ 🔞 _${usedPrefix}𝗲𝗰𝗰𝗵𝗶_
┣ ⃟ 🔞 _${usedPrefix}𝗳𝘂𝗿𝗿𝗼_
┣ ⃟ 🔞 _${usedPrefix}𝗶𝗺𝗮𝗴𝗲𝗹𝗲𝘀𝗯𝗶𝗮𝗻𝘀_
┣ ⃟ 🔞 _${usedPrefix}𝗽𝗮𝗻𝘁𝗶𝗲𝘀_
┣ ⃟ 🔞 _${usedPrefix}𝗽𝗲𝗻𝗲_
┣ ⃟ 🔞 _${usedPrefix}𝗽𝗼𝗿𝗻_
┣ ⃟ 🔞 _${usedPrefix}𝗿𝗮𝗻𝗱𝗼𝗺𝘅𝘅𝘅_
┣ ⃟ 🔞 _${usedPrefix}𝗯𝗿𝗲𝗮𝘀𝘁𝘀_
┣ ⃟ 🔞 _${usedPrefix}𝘆𝗮𝗼𝗶_
┣ ⃟ 🔞 _${usedPrefix}𝘆𝗮𝗼𝗶2_
┣ ⃟ 🔞 _${usedPrefix}𝘆𝘂𝗿𝗶_
┣ ⃟ 🔞 _${usedPrefix}𝘆𝘂𝗿𝗶2_
┣ ⃟ 🔞 _${usedPrefix}𝘁𝗿𝗮𝗽𝗶𝘁𝗼_
┣ ⃟ 🔞 _${usedPrefix}𝗵𝗲𝗻𝘁𝗮𝗶_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗹𝗼𝗹𝗶_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗼𝗿𝗴𝘆_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗳𝗼𝗼𝘁_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗮𝘀𝘀_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗯𝗱𝘀𝗺_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗰𝘂𝗺_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗲𝗿𝗼_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗳𝗲𝗺𝗱𝗼𝗺_
┣ ⃟ 🔞 _${usedPrefix}𝗻𝘀𝗳𝘄𝗴𝗹𝗮𝘀𝘀_
┣ ⃟ 🔞 _${usedPrefix}𝗵𝗲𝗻𝘁𝗮𝗶𝗽𝗱𝗳 *<text>*_
┣ ⃟ 🔞 _${usedPrefix}𝗵𝗲𝗻𝘁𝗮𝗶𝘀𝗲𝗮𝗿𝗰𝗵 *<text>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗔𝗨𝗗𝗜𝗢𝗦-𝗠𝗘𝗡𝗨🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- Happy Birthday to you*
┣ ⃟ 🎤 _${usedPrefix}𝗯𝗮𝘀𝘀_
┣ ⃟ 🎤 _${usedPrefix}𝗯𝗹𝗼𝘄𝗻_
┣ ⃟ 🎤 _${usedPrefix}𝗱𝗲𝗲𝗽_
┣ ⃟ 🎤 _${usedPrefix}𝗲𝗮𝗿𝗿𝗮𝗽𝗲_
┣ ⃟ 🎤 _${usedPrefix}𝗳𝗮𝘀𝘁_
┣ ⃟ 🎤 _${usedPrefix}𝗳𝗮𝘁_
┣ ⃟ 🎤 _${usedPrefix}𝗻𝗶𝗴𝗵𝘁𝗰𝗼𝗿𝗲_
┣ ⃟ 🎤 _${usedPrefix}𝗿𝗲𝘃𝗲𝗿𝘀𝗲_
┣ ⃟ 🎤 _${usedPrefix}𝗿𝗼𝗯𝗼𝘁_
┣ S⃟ 🎤 _${usedPrefix}𝘀𝗹𝗼𝘄_
┣ ⃟ 🎤 _${usedPrefix}𝘀𝗺𝗼𝗼𝘁𝗵_
┣ ⃟ 🎤 _${usedPrefix}𝘄𝗵𝗼𝗲𝘃𝗲𝗿_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *<🪀𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝗔𝗨𝗧𝗢-𝗔𝗨𝗗𝗜𝗢𝗦🪀 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃ *- WRITE THE FOLLOWING WORDS OR PHRASES WITHOUT ANY PREFIX (#, /, *, .)*
┃ _- (USE WITHOUT PREFIX)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 _𝗮𝗱𝗺𝗶𝗻
┣ ඬ⃟ 🔊 _𝘀𝗶𝗺𝗽
┣ ඬ⃟ 🔊 _𝘀𝗮𝗻𝗮
┣ ඬ⃟ 🔊 _𝗕𝗮𝗻𝗻𝗻𝗲𝗱_
┣ ඬ⃟ 🔊 _𝗯𝗲𝗲_
┣ ඬ⃟ 🔊 _𝗯𝘂𝗺𝗯𝗹𝗲𝗯𝗲𝗲_
┣ ඬ⃟ 🔊 _𝗯𝗼𝘁_
┣ ඬ⃟ 🔊 _𝗮𝗮𝗵_
┣ ඬ⃟ 🔊 _𝘀𝗶𝘂𝘂𝘂_
┣ ඬ⃟ 🔊 _𝘀𝗲𝘅_
┣ ඬ⃟ 🔊 _𝗳𝘂𝗰𝗸_
┣ ඬ⃟ 🔊 _𝗵𝗲𝘆_
┣ ඬ⃟ 🔊 _𝗰𝗮𝗹𝗹_
┣ ඬ⃟ 🔊 _𝗸𝗵𝗮𝗹𝗶-𝗱_
┣ ඬ⃟ 🔊 _𝗴𝗮𝘆_
┗━━━━━━━━━━━━━━━━┛`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[🚫]THE MENU HAS AN ERROR AND IT IS NOT POSSIBLE TO SEND IT REPORT IT TO THE OWNER OF THE BOT*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

/*let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '🪀𝗧𝗬𝗥𝗔𝗫𝗘𝗦🪀',
body: null,
thumbnail: img,
sourceUrl: `𝗪𝗲 𝗱𝗼𝗻'𝘁 𝗯𝗲𝗴`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
