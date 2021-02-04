const { Router } = require('express');
const router = Router();

router.get("/", (req, res) =>{
	req.session.incognito = Math.floor((Math.random()*(100-1))+1);;
	console.log(req.session.incognito);
	res.render("index", {azar: "", sistema: req.session.sistema});
});

router.post('/', function(req, res){
	const valor = req.body.numj;
  console.log(valor);

	if(valor > req.session.incognito){
		res.render("index", {azar: "El número es muy alto", sistema: req.session.sistema});
	}	if(valor < req.session.incognito){
		res.render("index", {azar: "El número es muy muy bajo", sistema: req.session.sistema});
	}	if(valor == req.session.incognito){
		res.render("index", {azar: "Excelente, es correcto tu número!... Te reto a intentarlo de nuevo", sistema: req.session.sistema});
	};
});


module.exports = router;