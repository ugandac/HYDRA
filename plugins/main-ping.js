import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  let thumbnail = ''
  let fgg = {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
    message: {
      Message: {
        displayName: `⫷⫸𝐩𝐫𝐞𝐝𝐢𝐜𝐭𝐨𝐫⫷⫸`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'HYDRA'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let pingMsg = await conn.sendMessage(m.chat, { text: '[speed...' }, { quoted: fgg })
 
  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {
    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(
      m.chat,
      {
        protocolMessage: {
          key: pingMsg.key,
          type: 14,
          editedMessage: {
            conversation: `aviator predictor🚀
            Next aviator limit⇢${latency} 
            you need superior assistance to complete this information 💯`,
          },
        },
      },
      {}
    )
  })
}

handler.help = ['predict']
handler.tags = ['main']
handler.command = ['predict', 'speed']

export default handler
