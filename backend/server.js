const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Ok");
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})