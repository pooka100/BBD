module.exports = function(sequelize) {

	Sequelize = require('sequelize')

	var BeerSchemaProject = sequelize.define('beer', {
		beerName: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		beerManufacturer: Sequelize.STRING
	});
	
	return BeerSchemaProject;
};