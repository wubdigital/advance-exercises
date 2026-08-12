const os = require("os");
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
let osPlatform = os.platform();

let totalMemoryGB = (totalMemory / 1024 / 1024 / 1024).toFixed(2);
let freeMemoryGB = (freeMemory / 1024 / 1024 / 1024).toFixed(2);

console.log("--- דוח סטטוס שרת ---");
console.log(`מערכת הפעלה: ${osPlatform}`);
console.log(`סך הכל זיכרון: ${totalMemoryGB} GB`);
console.log(`זיכרון פנוי: ${freeMemoryGB} GB`);
console.log("---------------------");
