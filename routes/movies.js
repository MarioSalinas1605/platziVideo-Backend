const express = require('express');
const { movieMocks } = require('../utils/mocks/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router);

    router.get("/", async (req, res, next) => {
        try {
            const movies = await Promise.resolve(movieMocks)
            res.status(200).json({
                data: movies,
                message: 'Movies listed'
            });
        } catch (error) {
            next(error);
        }
    })
}

module.exports = moviesApi;