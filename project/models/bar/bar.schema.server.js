module.exports = function(sequelize) {

	Sequelize = require('sequelize');

	var BarSchemaProject = sequelize.define('bar', {
		barName: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		barAddress: Sequelize.STRING
	});

	/*var BarSchemaProject = sequelize.query("SELECT _Name, Address FROM Bars"
	, { type: sequelize.QueryTypes.SELECT}).then(Bars => {
		return Bars;
	})*/
	
	return BarSchemaProject;
};
