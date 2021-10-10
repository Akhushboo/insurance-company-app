// server/index.js
const path = require('path');
const express = require("express");
const client = require('./db');
const { application } = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
client.connect();

// const res = client.query('SELECT * from users', (err, res) => {
//   if (err) {
//       console.error(err);
//       return;
//   }
// });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get("/getRecords", async (req, res) => {
  const result = await client.query('SELECT * FROM policies as p INNER JOIN customers as c on p.cust_id = c.cust_id');
  res.json({
    message: 'success',
    results: result.rows
  })
})

app.get("/getPolicy", async (req, res) => {
  let id = req.query.id;
  const result = await client.query(`SELECT * FROM policies as p INNER JOIN customers as c on p.cust_id = c.cust_id where p.policy_id=${id}`);
  res.json({
    message: 'success',
    results: result.rows
  })
})


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});