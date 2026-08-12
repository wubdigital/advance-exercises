const express = require("express");
const os = require("os"); // נשתמש בזה שוב כדי לקבל נתוני חומרה

// הפעלת מנוע ה-Express
const app = express();
const PORT = 3000;

// נתיב (Route) ראשון: דף הבית הרגיל
app.get("/", (req, res) => {
  // פקודת res.send שולחת טקסט פשוט בחזרה ללקוח
  res.send("ברוכים הבאים לשרת ה-Express הראשון שלי! 🚀");
});

// נתיב שני: כתובת API לצוות התשתיות
app.get("/api/system", (req, res) => {
  let systemInfo = {
    status: "Active",
    platform: os.platform(),
    freeMemoryGB: (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
  };

  // הקסם של אקספרס: הפקודה res.json מכינה את ה"מעטפה" וממירה את האובייקט ל-JSON בעצמה!
  res.json(systemInfo);
});

/// מערך שמדמה מסד נתונים של שרתים בארגון
const serversDatabase = [
  { id: "101", name: "Web-Frontend", status: "Active", memory: "8GB" },
  { id: "102", name: "Database-Main", status: "Active", memory: "32GB" },
  { id: "103", name: "Backup-Storage", status: "Offline", memory: "16GB" },
];

app.get("/api/servers/:serverId", (req, res) => {
  // 1. חולצים את ה-ID שהמשתמש ביקש
  let requestedId = req.params.serverId;

  // 2. משתמשים בפונקציה שלמדת (find) כדי לחפש במערך שרת שיש לו את אותו ID
  let foundServer = serversDatabase.find((server) => server.id === requestedId);

  // 3. משפט התנאי קובע מה הלקוח יקבל
  if (foundServer) {
    // אם השרת נמצא, הלקוח יקבל את האובייקט המלא שלו
    res.json(foundServer);
  } else {
    // אם השרת לא נמצא (foundServer יהיה ריק), נשלח שגיאת 404
    res.status(404).json({ error: "שגיאה 404: השרת המבוקש לא קיים במערכת." });
  }
});

// הדלקת השרת
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}...`);
});
