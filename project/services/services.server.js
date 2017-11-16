module.exports = function(app, models){

	require("./bar/bar.service.server.js")(app, models.entityModels)
	require("./beer/beer.service.server.js")(app, models.entityModels);
    require("./serve/serve.service.server.js")(app, models.relationModels);
    
}