const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt')

class UsersService {
    constructor() {
        this.collection = 'users';
        this.mongoDB = new MongoLib();
    }

    async getEmail({ email }) {
        const [ user ] = await this.mongoDB.getAll(this.collection, { email })
        return user
    }

    async createUser({ user }) {
        const { email, name, password } = user;
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUserId = await this.mongoDB.create(this.collection, {
            name,
            email,
            password: hashedPassword
        });
        return createdUserId;
    }
}

module.exports = UsersService;