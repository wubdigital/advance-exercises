const os = require("os");
const fs = require("fs");
let osPlatform = os.platform();
fs.writeFileSync(
  "server-log.txt",
  `בדיקת מערכת: השרת מריץ כעת את מערכת ההפעלה ${osPlatform}`,
);
console.log("הלוג נשמר בהצלחה!");
