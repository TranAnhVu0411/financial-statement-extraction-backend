const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('upload'));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./app/routes/auth.route")(app);
require("./app/routes/file.route")(app);
require("./app/routes/document.route")(app);

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));