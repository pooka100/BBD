module.exports = function(app, models, sequelize){

	require("./bar/bar.service.server.js")(app, models.entityModels, sequelize)
	require("./beer/beer.service.server.js")(app, models.entityModels);
    require("./serve/serve.service.server.js")(app, models.relationModels);
    
}
