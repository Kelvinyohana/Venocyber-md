//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NKc1E2K0NQTDVrYThjdVU3VnJnd2pNY25obllKZGVOQXhRY1pjMHNrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVVOTzN4ZkEvS0NhektWR2xWUitzZ1RHUTVZSm14eTNTU3dELzFqL3UwRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSzR3V1gzeXFtcVBLOUlzam9LMWVPbTFlcnk3SVVzRDFxaUNDb2JLZ25BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYRmZyMmQwL3dodHIzaU5ZQjJUWTFTb3hnNnJsRHNaTytqWWpFbDBNSmtzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLa3VpeGIyRTJWWW5DMXBpVmRoeHBJSHFtTnB1RkNNblN3OVVBWW9hbU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcrUktDWnBrUkgxTVVXcmpYRFRrSzFFTFlTaCtSdGRIbnJIcDRxQmM3RGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1PblJHd3FIdFhJeE1Ra09zTXNPYUdVSDAyMEZQOFZWaGIra0ZYSFJrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQk1GK1N1ZE1kaWFVbjBLUUtTWDZZUjZFdGJ0WXNOeHhWVEpPZ3BjQkN6az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE1bkpsa1ZJRS9DU1RMeGFQMzRuNXo3TmNBU04xQzVDQnhhVlhFeGF5MW9UbDZvcDJtZHVzdTlBWlFsV3NmYUwxc3djenJRbkt3c3lrSWdScWhKOWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJCdnRXMTU2ZGc3K2dMZmEyM3RiWEE0WHBuNytKczVsOVI3ZmZ1d2ZHOVBVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3N1dWMjY4VlJKdU5qTGZ0SWFCaGJBIiwicGhvbmVJZCI6IjZkMTkxOGQ2LTkwZDctNGZiNS04NmRmLTk2ZTI0NTM2ZDRmOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTFVVZGJqRm9ScjBtNUhPT1RzN2Z5bDN0TlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczBRSGswazJvVzh2ckVrUmliWldjTXV4b2RzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJEUEgxQjNMIiwibWUiOnsiaWQiOiIyNTU3MTM2MjU2MDg6NzZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BmRTk0SUhFUDZDOExRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldHSHljbDZzdmszVlVlQnFyZngwanhFTFd2bURkaFJHYnlxRGZ1UEJ6VzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik8weG1PK09MSzNXSFRSemw4MHAxKzdrSExYRWNpODBKZnd0QkZZMXhObnpWSW5qSTdPc0tOdS9GeTI1b2lXTFgvaVBwdDIxSW1IRlIveXBmKy95dEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTcU5tQUJINHFLUFR5b2RSak8rcWN2bFZJZWFWMUtHZlBYRXo2dFdScXZWUSszSms2YXdxMXlzRjc0ZzhqeStzdzNFQkJBeFpYanUxd1ZpM1JxeGJpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTcxMzYyNTYwODo3NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWaGg4bkplckw1TjFWSGdhcTM4ZEk4UkMxcjVnM1lVUm04cWczN2p3YzF1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNTAwMDQ0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURidyJ9|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xyN0RLSy84dFVHcW0rVnh2NjRGK0doUDFVajgrV005NUNnK2paVWsxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3RjS0NMQlVOMVdMRXdJa0NwRWlNVW02d2NBWnlhQkZyOEtEN3VHNnpRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RzNJWWtRT21FcmFQSUF3bnIzNHFuM3BYKzF2bzRhSmpUNjQrOUNHNzBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3aTVvOUdiZHVpQ0RXMDVmQnJjSGEzY01ibTJ6K0tDaVZCK2lJOGdLVDJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IaTFOWk0vekpYeU1YajhCb00xdzU5algzaFA4ZmdmWHJ3QlMwRWVZRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp2cGxBMlZOdnF1RmtPUmRZYXNqQk9UZTVIQThCN0lzbit4NnFuSFQ1MFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FhNURrR2R6TEVSVHdGZXRRK01yRlVueGN3YXJUL3JCdzk1VDhjKzEwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT255STRvR09KS3ZJeGpjSjl2ZFpuWm5sZy9RR08wK0hDeDlLdlFWelB4ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ1NkdKZGxtL2FhbE94VTZEelE4YTg2SkdGMFFiUHRkeXJIcHJ1ZWZWWk8xajRPU05GYTFaWUg3T1FIaXRPeTdtN1ZGc1hCYW9MejFaRWVZY2YvZUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6Ikd1SmQ1cDB1dTkvOXIrUEhHS25NL3pNUS9HOE1NU2FwamFsMUZHYm9ZWUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzEzNjI1NjA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ1QzdGRkFEMjgyMDJGN0ZGRDQxNDcyQjEwMjlBOENCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NDI0NDV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ilg2SVEyN3B0UWppcTNhLTF5aHFwaHciLCJwaG9uZUlkIjoiOTMwZWRmNDUtNTRjMS00MzMzLWE4YTYtZTliYzBlMmRhZDRhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlKVUtkTFh3SlRVWHRZcHVxYU9OMlI0Z2NmOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKbWEvUGN1T2FJdmJRTmlmOEJ2RnYwWCs1dWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVRDRUUxRDkiLCJtZSI6eyJpZCI6IjI1NTcxMzYyNTYwODo3NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGJFOTRJSEVMdnh4N1FHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV0dIeWNsNnN2azNWVWVCcXJmeDBqeEVMV3ZtRGRoUkdieXFEZnVQQnpXND0iLCJhY2NvdW50U2lnbmF0dXJlIjoidmUvaTFodzhMZUtkQmNHWmNEcG5xRTVQSEhoT2dIUk42SHBTVjg5L3JYY0NIVmJ1TlloSE1KK2NsM2NoY05ScVY5S1dSWWxsVUtWbVNNM2E3SDRGQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkJFMUIxU0JCenZoTW1UZ2Nsbk9zMWtUUXhPSnlKQ20xSVMzVTBpUHBjd2lCTkdPcWNKbHQvV2plZk9PU3ByTFp2UHZrT3owdjhZQWhxV0E2SzVYcUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzEzNjI1NjA4Ojc0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZoaDhuSmVyTDVOMVZIZ2FxMzhkSThSQzFyNWczWVVSbThxZzM3andjMXUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4NDI0MzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGJ3In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
