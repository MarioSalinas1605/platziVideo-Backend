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

    router.get("/:movieId", async (req, res, next) => {
        try {
            const movies = await Promise.resolve(movieMocks[0])
            res.status(200).json({
                data: movies,
                message: 'Movie retrived'
            });
        } catch (error) {
            next(error);
        }
    })

    router.post("/", async (req, res, next) => {
        try {
            const createdMovieId = await Promise.resolve(movieMocks[0].id)
            res.status(201).json({
                data: createdMovieId,
                message: 'Movie created'
            });
        } catch (error) {
            next(error);
        }
    })

    router.put("/:movieId", async (req, res, next) => {
        try {
            const updatedMovieId = await Promise.resolve(movieMocks[0].id)
            res.status(200).json({
                data: updatedMovieId,
                message: 'Movie updated'
            });
        } catch (error) {
            next(error);
        }
    })

    router.delete("/:movieId", async (req, res, next) => {
        try {
            const deletedMovieId = await Promise.resolve(movieMocks[0].id)
            res.status(200).json({
                data: deletedMovieId,
                message: 'Movie deleted'
            });
        } catch (error) {
            next(error);
        }
    })
}

module.exports = moviesApi;