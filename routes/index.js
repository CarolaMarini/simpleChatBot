const router = require("express").Router();
const path = require("path");
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
var axios = require('axios');

router.get("/api", (req, res) => {
  axios.get("https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery")
    .then(response => {
      console.log(response.data)
      res.send(response.data)
    })
    .catch(error => {
      console.log(error);
    });

}
)

router.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});


module.exports = router;
