import express = require("express");

const router = express.Router();
const { database } = require("../../config");

const getNow = async (callback) => {
  let now;
  database
    .query("SELECT NOW()")
    .then((res) => {
      console.log(res);
      now = res.rows[0].now;
      callback(now);
    })
    .catch((e) => console.error(e.stack));
};

/* GET home page. */
router.get("/", async (req, res, next) => {
  await getNow((now) => {
    res.send(`The sedulous hyena ate the antelope!, ${now}`);
  });
});

module.exports = router;
