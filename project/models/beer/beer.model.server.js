module.exports = function(beerProject) {

	var api = {
		createBeer: createBeer,
		findBeerByName: findBeerByName,
		findAllBeers:findAllBeers,
		deleteBeerByName: deleteBeerByName
	};
	return api;

	function deleteBeerByName(beername) {
		return beerProject.destroy({ 
			where : { 
				beerName: beername
			}}).then(beer => {
				return beer
			})
	}

	function findBeerByName(beername){
		return beerProject.findOne({
			where: {
				beerName: beername
			}
		}).then(beer => {
			return beer;
		});
	}

	function findAllBeers(){
		return beerProject.findAll().then(beers => {
			return beers;
		})
	}

	function createBeer(beer) {
		return beerProject.sync().then(() => {
			return beerProject.create(beer);
		});
	}
}