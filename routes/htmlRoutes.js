var db = require("../models");

module.exports = function (app) {
  // test map route
  app.get("/map", function (req, res) {
    res.render("maptest", {
      layout: 'mainmap'
    })
  })
  // Load index page
  app.get("/", function (req, res) {
    db.parkingSpot.findAll({
      include: [db.address, db.lease]
    })
      .then(function (data) {
        res.render("spotListing", {
          msg: 'test',
          parkingSpots: data
        })
      })
  })
  // Load index page
  app.get("/judy", function (req, res) {
    res.render("vendorInput")
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
    console.log('not found')
  });
}
