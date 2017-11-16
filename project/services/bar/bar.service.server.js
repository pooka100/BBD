module.exports = function(app,models){

	var barModelProject = models.barModelProject;

	app.post("/api/bar/create", createBar);
	app.get("/api/bar/get/:barname", getBarByName);
	app.get("/api/bar/all",getAllBars);;
	app.delete("/api/bar/delete/:barname",deleteBar);
	
	function createBar(req,res){
		var bar = req.body;
		barModelProject
			.createBar(bar)
			.then(
				function (bar) {
					res.json(bar);
				},
				function (error) {
					res.status(500).send({error: error.toString()});
				}
			);
	}


	function getBarByName(req,res){
		var barname = req.params.barname;
		barModelProject
			.findBarByName(barname)
			.then(
				function(bar){
					console.log(bar);
					res.json(bar);
				},
				function(error) {
					res.status(500).send({error: error.toString()});
				}
			);
	}

	function getAllBars(req,res){

		barModelProject
			.findAllBars()
			.then(
				function(bars){
					res.json(bars);
				},
				function(error){
					res.status(500).send({error: error.toString()});
				});
	}

	function deleteBar(req,res){

		var barname = req.params.barname;
		barModelProject
			.deleteBarByName(barname)
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