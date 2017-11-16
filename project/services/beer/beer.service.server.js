module.exports = function(app,models){

	var beerModelProject = models.beerModelProject;

	app.post("/api/beer/create", createBeer);
	app.get("/api/beer/get/:beername", getBeerByName);
	app.get("/api/beer/all",getAllBeers);;
	app.delete("/api/beer/delete/:beername",deleteBeer);
	
	function createBeer(req,res){
		var beer = req.body;
		beerModelProject
			.createBeer(beer)
			.then(
				function (beer) {
					res.json(beer);
				},
				function (error) {
					console.log(error)
					res.status(500).json({error: error.toString()});
				}
			);
	}


	function getBeerByName(req,res){
		var beername = req.params.beername;
		beerModelProject
			.findBeerByName(beername)
			.then(
				function(beer){
					console.log(beer);
					res.json(beer);
				},
				function(error) {
					res.status(500).send({error: error.toString()});
				}
			);
	}

	function getAllBeers(req,res){

		beerModelProject
			.findAllBeers()
			.then(
				function(beers){
					res.json(beers);
				},
				function(error){
					res.status(500).send({error: error.toString()});
				});
	}

	function deleteBeer(req,res){

		var beername = req.params.beername;
		beerModelProject
			.deleteBeerByName(beername)
			.then(
				function(stats) {
					console.log(stats);
					res.json(200);
				},
				function(error) {
					res.status(500).send({error: error.toString()});
				}
			);
	}

};