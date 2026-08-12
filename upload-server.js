const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;

app.use(cors());
const upload = multer({ dest: "uploads/" });

// app.post(
//   "/upload",
//   upload.single("myfile", (req, res) => {
//     let uploadFile = req.file;
//     console.log("התקבל קובץ חדש 📃");
//     console.log(uploadFile);
//     res.json({
//       message: "הקובץ הועלה בהצלחה לשרת!",
//       fileDetails: uploadFile,
//     });
//   }),
// );
app.post(
  "/upload",
  upload.single("myFile"), // תיקון 1: סגרנו סוגריים ופסיק, תיקון 2: F גדולה
  (req, res) => {
    let uploadFile = req.file;
    console.log("התקבל קובץ חדש 📃");
    console.log(uploadFile);
    res.json({
      message: "הקובץ הועלה בהצלחה לשרת!",
      fileDetails: uploadFile,
    });
  }, // סגירת הפונקציה
);

app.listen(PORT, () => {
  console.log(`the terminal running in port ${PORT}`);
});
