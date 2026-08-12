const { log } = require("console");
const os = require("os");

// הגדרת רף ההתראה - אם הזיכרון הפנוי יורד מתחת ל-5 גיגה, נרצה לקבל התראה
const ALERT_THRESHOLD = 5.0;

function checkSystemHealth() {
  // 1. שולפים את הזיכרון הפנוי וממירים ל-GB
  let freeMemoryGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

  // 2. מדפיסים שורת לוג פשוטה כדי שנראה שהבדיקה רצה
  console.log(
    `[${new Date().toLocaleTimeString()}] דוגם מערכת... זיכרון פנוי: ${freeMemoryGB} GB`,
  );
  if (freeMemoryGB < ALERT_THRESHOLD) {
    console.log("🚨 אזהרה! זיכרון נמוך!");
  } else {
    console.log("✅ מצב הזיכרון תקין.");
  }

  // TODO: המשימה שלך
  // כתוב משפט תנאי (if) שבודק האם הזיכרון הפנוי קטן (קטן מ-) רף ההתראה (ALERT_THRESHOLD).
  // אם כן -> הדפס הודעת אזהרה בולטת (למשל: "🚨 אזהרה! זיכרון נמוך!").
  // אם לא (else) -> הדפס הודעת הרגעה (למשל: "✅ מצב הזיכרון תקין.").
}

// 3. הפעלת הלופ - פונקציה מובנית שמריצה את קוד הבדיקה שלנו כל X אלפיות שנייה
const INTERVAL_MS = 3000; // 3000 אלפיות שנייה = 3 שניות
console.log("מתחיל ניטור שרת... לחץ Ctrl+C כדי לעצור.");

setInterval(checkSystemHealth, INTERVAL_MS);
