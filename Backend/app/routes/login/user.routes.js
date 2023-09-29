const { verifyToken, isAdmin } = require("../../middlewares/login/authjwt");
const controller = require("../../controllers/login/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [verifyToken, isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [verifyToken, isAdmin],
    controller.adminBoard
  );
};