
let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let name = conn.getName(m.sender)
  let taguser = '@' + m.sender.split('@s.whatsapp.net')[0]
  let av = `./Assets/mp3/${pickRandom(['tiger', 'classic'])}.mp3`

  m.reply(`Hello ${taguser} 𝐀𝐦 𝐇𝐲𝐝𝐫𝐚, 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩𝐛𝐨𝐭 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐇.𝐀𝐫𝐥𝐨𝐝𝐫𝐚𝐠𝐨𝐧  .menu `)
  conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}

handler.customPrefix = new RegExp(
  '^[' +
    (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(
      /[|\\{}()[\]^$+*?.\-\^]/g,
      '\\$&'
    )
handler.command = /^(bot|Hydra)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
    }
