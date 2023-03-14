const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user')
const mongoose = require('mongoose');

module.exports = {
    create,
    login,
    checkToken,
    addToFavorites,
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
    try {
        const user = await User.findById(req.user._id);
        if (!mongoose.Types.ObjectId.isValid(req.body.brewery)) {
            return res.status(400).json({ message: 'Invalid brewery id.' });
        }
        user.favorites.push(req.body.brewery);
        await user.save();
        res.status(200).json({ message: 'Brewery added to favorites.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
}



/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}
