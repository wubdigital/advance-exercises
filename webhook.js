const express = require("express");

const app = express();

const PORT = 4000;

app.use(express.json());

let deploymentLogs = [];

app.post("/api/alerts", (req, res) => {
  let incomingData = req.body;

  console.log("📥 התקבלה התראה חדשה במערכת!");
  console.log(incomingData);

  deploymentLogs.push(incomingData);
  res.status(201).json({
    messeage: "הנתונים התקבלו ונשמרו בהצלחה",
    total_logs: deploymentLogs.length,
  });
});

app.listen(PORT, () => {
  console.log(`WEBHOOK receiver is running on ${PORT}...`);
});
