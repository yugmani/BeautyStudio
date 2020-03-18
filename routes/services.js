const router = require("express").Router();
const Service = require("../models/service");

router.route("/").get((req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  // Customer.find({
  //   // name: { $regex: new RegExp(req.query.q, 'i')}
  // })
  Service.find()
    .then(services => res.json(services))
    .catch(err => res.status(400).json('Error:' + err));
});


router.route('/add').post((req, res)=>{
  const service = req.body.service;
  const price = req.body.price;

  const newService = new Service({
    service,
    price,
  
  });

  newService.save()
    .then(() => res.json('New Service Added!'))
    .catch(err => res.status(400).json('Error:' + err)); 

});


module.exports = router;
