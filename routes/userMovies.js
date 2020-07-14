const express = require('express');
const passport = require('passport');

const UserMoviesServices = require('../services/userMovies');
const validationHandler = require('../utils/middleware/validationHandler');
const { movieIdschema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

require('../utils/auth/strategies/jwt');

function userMoviesApi(app) {
    const router = express.Router();
    app.use('/api/user-movies', router);
    const userMoviesService = new UserMoviesServices();

    router.get('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ userId: userIdSchema }, 'query'),
    async (req, res, next) => {
        const { userId } = req.query;
        try {
            const userMovies = await userMoviesService.getUserMovies({ userId });
            res.status(200).json({
                data: userMovies,
                message: 'User movies listed.'
            })
        } catch (error) {
            next(error);
        }
    })

    router.post('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(createUserMovieSchema),
    async (req, res, next) => {
        const { body: userMovie } = req;

        try {
            const createdUserMovieId = await userMoviesService.createUserMovie({userMovie})
            res.status(201).json({
                data: createdUserMovieId,
                message: 'User movie created.'
            })
        } catch (error) {
            next(error);
        }
    })

    router.delete('/:userMovieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ userMovieId: movieIdschema}, 'params'),
    async (req, res, next) => {
        const { userMovieId } = req.params;

        try {
            const deletedUserMovieId = await userMoviesService.deleteUserMovie({ userMovieId });
            res.status(200).json({
                data: deletedUserMovieId,
                message: 'User movie deleted'
            })
        } catch (error) {
            next(error);
        }
    })
}

module.exports = userMoviesApi;