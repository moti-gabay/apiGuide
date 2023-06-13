const express = require("express");
const {guides} = require("../json/guides")
const router = express.Router();

router.get("/", async(req,res) => {
  try{
      res.json(guides);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

module.exports = router;