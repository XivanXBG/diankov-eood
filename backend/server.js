const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Папка за качени файлове
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer setup за множество файлове
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Път до файла със запитванията
const inquiriesFile = path.join(__dirname, "data", "inquiries.json");
if (!fs.existsSync(inquiriesFile)) {
  fs.writeFileSync(inquiriesFile, JSON.stringify([]));
}

// POST /submit-form - приема данни + няколко файла
app.post("/submit-form", upload.array("files", 5), (req, res) => {
  const { name, phone, email, service, message, consent } = req.body;

  const uploadedFiles = req.files.map((file) => ({
    fileName: file.filename,
    originalName: file.originalname,
  }));

  const newInquiry = {
    id: Date.now(),
    name,
    phone,
    email,
    service,
    message,
    consent: consent === "true",
    files: uploadedFiles,
    date: new Date().toLocaleString(),
  };

  const inquiries = JSON.parse(fs.readFileSync(inquiriesFile, "utf-8"));

  inquiries.push(newInquiry);
  fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));

  console.log("Получено запитване:", newInquiry);
  res.json({ status: "success", message: "Запитването е прието успешно!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
