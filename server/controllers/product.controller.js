const { Product } = require("../models/project.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allTheProducts => res.json(allTheProducts))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err))
}