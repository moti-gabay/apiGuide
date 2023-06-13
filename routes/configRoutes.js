const indexR = require("./index");
const guideR = require("./guide");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/guide",guideR);
}