// 1. ייבוא המודולים הדרושים
const http = require("http");
const os = require("os");
// TODO: איזה עוד מודול אנחנו צריכים לייבא כדי לקבל נתוני חומרה?

// 2. יצירת השרת - הפונקציה הזו תרוץ בכל פעם שמישהו יפנה לשרת שלנו
const server = http.createServer((request, response) => {
  // א. הגדרת סוג התשובה: אנחנו מודיעים ללקוח שהכל תקין (סטטוס 200) ושאנחנו שולחים JSON
  response.writeHead(200, { "Content-Type": "application/json" });

  let mySystemInfo = {
    status: "Server is UP",
    platform: os.platform(),
    totalMemoryGB: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
    freeMemoryGB: (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
  };

  // ג. סיום ושליחת התשובה ללקוח - אנחנו ממירים את האובייקט למחרוזת JSON לפני השליחה
  response.end(JSON.stringify(mySystemInfo));
});

// 3. פתיחת הדלת (Port) והאזנה לבקשות
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`השרת רץ ומקשיב לבקשות בפורט ${PORT}...`);
});
