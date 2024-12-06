import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const signup = async (req, res) => {
    try {
        const saltRounds = 10;
        bcrypt.hash(req.body.InputPasswordSignup, saltRounds, async(err, hash) => {
            if(err) {
                console.error("Error while hashing!", err);
                res.status(500).json({error: "Internal server error"});
            }

            let userItem = {
                name: req.body.InputNameSignup,
                email: req.body.InputEmailSignup,
                username: req.body.InputUserNameSignup,
                password: hash,
                createdAt: new Date()
            }
            let user = new User(userItem);
            await user.save();
            res.status(201).json(user);
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const login = async (req, res) => {
    try {
        const {InputEmailLogin, InputPasswordLogin} = req.body;
        const user = await User.findOne({email: InputEmailLogin});
        if(!user) {
            res.status(500).json({message: 'User not found!'});
        }
        const isValid = await bcrypt.compare(InputPasswordLogin, user.password);
        if(!isValid) {
            res.status(500).json({message: "Invalid credentials"});
        }
        //JWT Token
        let payload = {user: InputEmailLogin, pwd: InputPasswordLogin};
        const secretKey = process.env.jwt_secret_key;
        let token = jwt.sign(payload, secretKey);
        res.status(200).json({message: "Login successful", token: token});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getDocuments= async (req, res) => {
    try {
        const documents = await User.find();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data!'});
    }
}

export {signup, login, getDocuments };