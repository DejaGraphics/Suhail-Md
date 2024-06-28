const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "08037256221";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_42_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTczLFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVSMVZLZVZtWlhtZDB3ZklkK01GeVlxSWF2V1RoWVNFR0lwbVBkbVhTTTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBvWlhLZVJYUTZLM3p1aFNZOGUtQVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGNkNzI1MTQtZjMyMy00NWQ2LTk2MzgtZDI1OWVmODUxMjgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDEzMCxcbiAgICAgIDEzMSxcbiAgICAgIDIwNCxcbiAgICAgIDk1LFxuICAgICAgMTQ5LFxuICAgICAgMTIwLFxuICAgICAgMTM1LFxuICAgICAgMTM1LFxuICAgICAgNDEsXG4gICAgICA5NCxcbiAgICAgIDgzLFxuICAgICAgMjI0LFxuICAgICAgMjUsXG4gICAgICAyMjEsXG4gICAgICAyNTMsXG4gICAgICAxOSxcbiAgICAgIDE2MixcbiAgICAgIDcxLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDIwMixcbiAgICAgIDE5NyxcbiAgICAgIDIwNixcbiAgICAgIDE1OCxcbiAgICAgIDExNyxcbiAgICAgIDI0OSxcbiAgICAgIDIyOSxcbiAgICAgIDI0MSxcbiAgICAgIDEwMCxcbiAgICAgIDExMCxcbiAgICAgIDE1MixcbiAgICAgIDE1NixcbiAgICAgIDIxOCxcbiAgICAgIDIxNSxcbiAgICAgIDYxLFxuICAgICAgMTMzLFxuICAgICAgMTg1LFxuICAgICAgMTYyLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZDMjdWUVBYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM3MjU2MjIxOjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MTU1OTc0NjM2Mzk6NThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjJmdGNNR0VPanIrN01HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyRXFjRkh2TzBpZ0gyVGc5Y2JNMUNlMWNPaDJMZmpPeEtRYWdjVzRlemxjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlla0VYT0Vmc0pGVmhmTUtxeExaUERzWGltY2doeHNYQS9ndk9qRm9Ebm1DV1lYK1B0dnZOZ0VxZEYyZXZvOXUzcUd1UmVlLzVHZzNsUU9TZFI5TkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhhVzVZdXo1ZDBqRXJyOU1YYm5pRlE4Rnd4UkZHQmtaak03aUM4WkhYZzJOdjJNZk54UzFCS2labUlvUlJoOU5DKzRUUHRFdnVaT0FVbWlOVzZRMmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzcyNTYyMjE6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU5NjUyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZvcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm9xLmpzb24iOiAie1wia2V5RGF0YVwiOlwic3ppbFFoV2FsMUFza1VCWjl4VmViMkRHUE0ybnNBUXc3Q1g4T0N4MUp5QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUxOTk0MjY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
