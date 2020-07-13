const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UsersService = require('../../../services/users');

passport.use(new BasicStrategy(async (email, password, cb) => {
    const userService = new UsersService();

    try {
        const user = await userService.getUser({ email });
        if (!user) {
            return(boom.unauthorized(), false);
        }
        if (!(await bcrypt.compare(password, user.password))) {
            return(boom.unauthorized(), false);
        }
        delete user.password;

        return cb(null, user);
    } catch (error) {
        return cb(error);
    }
}))