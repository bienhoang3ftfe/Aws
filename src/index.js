const express = require('express')
const app = express()
const port = 8000

app.get("/api/test", (req, res) => {
    res.status(200).json({
      data: " helllo",
    });
  });
https://runkit.com/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})