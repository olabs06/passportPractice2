const JwtStrategy = require('passport-jwt').Strategy;
const JwtStrategy = require('passport-jwt').ExtractJwt;


const Models = require('../models');
const Users = models.User;

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderasBearerToken;
jwtOptions.secret = 'mySecret';

