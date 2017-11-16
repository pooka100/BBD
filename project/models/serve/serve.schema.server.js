module.exports = function(sequelize, entitySchemas) {

	Sequelize = require('sequelize')

	var serveSchemaProject = sequelize.define('serve', {
		price: Sequelize.FLOAT(5,2)
	})
	
	entitySchemas.beerSchemaProject.belongsToMany(entitySchemas.barSchemaProject, { through: serveSchemaProject });
	entitySchemas.barSchemaProject.belongsToMany(entitySchemas.beerSchemaProject, { through: serveSchemaProject });

	return serveSchemaProject;
};