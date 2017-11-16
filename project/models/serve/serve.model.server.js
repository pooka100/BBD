module.exports = function(serveProject, barModel, beerModel) {

	var api = {
		createServe: createServe,
		findServesByBar: findServesByBar,
		findAllServes: findAllServes,
		deleteServeByBar: deleteServeByBar
	};
	return api;

	function deleteServeByBar(barname) {
		return findServeByBar(barname).then( serves => {
			let id = serves.dataValues.barId
			return serveProject.destroy({
				where: {
					barId : id
				}
			})
		})
	}

	function findServesByBar(barname){
		return serveProject.findAll({ 
			where:{ 
				barBarName: barname
			}}).then(serves => {
				return serves
		}) 		
	}

	function findAllServes(){
		return serveProject.findAll().then(serves => {
			return serves;
		})
	}

	function createServe(serves) {
		return serveProject.sync().then(() => {
			return barModel.findBarByName(serves.barName).then(bar => {
				return beerModel.findBeerByName(serves.beerName).then(beer => {

					return bar.addBeer(beer, { 
						through: { 
							price: serves.price
						}
					})
				})
			})
			servesProject.create(serves);
		});
	}
}