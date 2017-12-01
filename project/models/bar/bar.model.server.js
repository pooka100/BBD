module.exports = function(barProject) {

	var api = {
		createBar: createBar,
		findBarByName: findBarByName,
		findAllBars:findAllBars,
		deleteBarByName: deleteBarByName
	};
	return api;

	function deleteBarByName(barname) {
		return barProject.destroy({ 
			where : { 
				barName: barname
			}}).then(bar => {
				return bar
			}) 
	}

	function findBarByName(barname){
		return barProject.findOne({ 
			where: { 
				barName: barname
			}
		}).then(bar => {
  			return bar;
		})
	}

	function findAllBars(){
		return barProject.findAll().then(bars => {
		  	return bars;
		})
		//return barProject;
	}

	function createBar(bar) {
		return barProject.sync().then(() => {
			return barProject.create(bar);
		});
	}

};
