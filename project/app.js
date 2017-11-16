module.exports = function(app, sequelize) {

    var models = require("./models/models.server")(sequelize);

    require("./services/services.server.js")(app, models);
    
}