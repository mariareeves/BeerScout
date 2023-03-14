const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user')
const mongoose = require('mongoose');
const Brewery = require('../../models/brewery');

module.exports = {
    create,
    login,
    checkToken,
    addToFavorites,
    showFavorites
}

async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json(createJWT(user));
    } catch (err) {
        console.log(err)
        res.status(400).json('Bad Credentials');
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}


async function addToFavorites(req, res) {
    const brewery = new Brewery({
        yelpId: req.body.yelpId,
        imageUrl: req.body.imageUrl,
        name: req.body.name,
        address: req.body.address.join(', '),
        rating: req.body.rating,
        reviewCount: req.body.reviewCount,
        user: req.body.user
    })
    try {

        const saveFavorite = await brewery.save();
        res.json(saveFavorite);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function showFavorites(req, res) {

    const userId = req.user._id;

    const breweries = await Brewery.find({ user: userId });
    res.json(breweries);
}



/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}
