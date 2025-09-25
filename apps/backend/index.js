const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
        res.json({ status: "ok", service: "backend" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
        console.log(`Backend running at http://localhost:${PORT}`);
});
