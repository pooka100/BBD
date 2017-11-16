module.exports = function(sequelize) {

	Sequelize = require('sequelize')

	var BarSchemaProject = sequelize.define('bar', {
		barName: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		barAddress: Sequelize.STRING
	});
	
	return BarSchemaProject;
};