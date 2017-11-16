module.exports=function(sequelize){

	var entitySchemas = {
		barSchemaProject: require("./bar/bar.schema.server")(sequelize),
		beerSchemaProject: require("./beer/beer.schema.server")(sequelize)
	}

	var relationSchemas = {
		serveSchemaProject:  require("./serve/serve.schema.server")(sequelize, entitySchemas)
	}

	
	var entityModels = {
		barModelProject: require("./bar/bar.model.server")(entitySchemas.barSchemaProject),
		beerModelProject: require("./beer/beer.model.server")(entitySchemas.beerSchemaProject)
	};

	var relationModels = {
		serveModelProject: require("./serve/serve.model.server")(relationSchemas.serveSchemaProject, 
			entityModels.barModelProject, 
			entityModels.beerModelProject)
	}
	
	var models = {
		entityModels: entityModels,
		relationModels: relationModels
	}

	return models;
	
};