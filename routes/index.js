const express = require('express'),
  router = express.Router(),
  ParksModel = require("../models/parks");


/* GET home page. */
router.get('/', async (req, res, next) => {
  const parkData = await ParksModel.getAll();

  res.render('template', {
    locals: {
      title: 'Time to shred bruh!',
      parkData: parkData
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
