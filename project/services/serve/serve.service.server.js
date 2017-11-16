module.exports = function(app,models){

	var serveModelProject = models.serveModelProject;

	app.post("/api/serve/create", createServe);
	app.get("/api/serve/get/:barname", getServesByBar);
	app.get("/api/serve/all",getAllServes);;
	app.delete("/api/serve/delete/:barname",deleteServe);
	
	function createServe(req,res){
		var serve = req.body;
		serveModelProject
			.createServe(serve)
			.then(
				function (serve) {
					res.json(serve);
				},
				function (error) {
					res.status(500).json({error:error});
				}
			);
	}


	function getServesByBar(req,res){
		var barname = req.params.barname;
		serveModelProject
			.findServesByBar(barname)
			.then(
				function(serve){
					console.log(serve);
					res.json(serve);
				},
				function(error) {
					res.status(500).json({error:error});
				}
			);
	}

	function getAllServes(req,res){

		serveModelProject
			.findAllServes()
			.then(
				function(serves){
					res.json(serves);
				},
				function(error){
					res.status(500).json({error:error});
				}
			);
	}

	function deleteServe(req,res){

		var barname = req.params.barname;
		serveModelProject
			.deleteServeByBar(barname)
			.then(
				function(stats) {
					console.log(stats);
					res.json(200);
				},
				function(error) {
					res.status(500).json({error:error});
				}
			);
	}

};