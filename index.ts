import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import { spawn } from "child_process";

config();

const app = express();
app.use(morgan("tiny"));

const port = process.env.PORT || 3030;

app.listen(port, function () {
  console.log(`⚡️[server]: server running on http://localhost:${port}`);
});

app.get("/", function (req, res) {
  const process = spawn("python", ["./df/get_data.py"]);
  process.stdout.on("data", function (data: string) {
    res.send(data.toString());
  });
});
