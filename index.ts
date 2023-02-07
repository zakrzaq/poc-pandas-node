import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 3030;

app.listen(port, function () {
  console.log(`⚡️[server]: server running on http://localhost:${port}`);
});

app.get("/", function (req, res) {
  const spawn = require("child_process").spawn;
  const process = spawn("python", ["./df/get_data.py"]);
  process.stdout.on("data", function (data: string) {
    res.send(data.toString());
  });
});
