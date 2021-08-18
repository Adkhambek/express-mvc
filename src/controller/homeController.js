const model = require("../model/homeModel");

exports.GET = async (req, res) => {
  res.render("index.html", { data: await model.getUsers() });
};
