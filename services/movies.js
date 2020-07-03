const { movieMocks } = require('../utils/mocks/movies');

class MoviesService {
    async getMovies() {
        const movies = await Promise.resolve(movieMocks);
        return movies || [];
    }

    async getMovie() {
        const movie = await Promise.resolve(movieMocks[0]);
        return movie || {};
    }

    async createMovie() {
        const createdMovieId = await Promise.resolve(movieMocks[0].id);
        return createdMovieId;
    }

    async updateMovie() {
        const updatedMovieId = await Promise.resolve(movieMocks[0].id);
        return updatedMovieId;
    }

    async deleteMovie() {
        const deletedMovieId = await Promise.resolve(movieMocks[0].id);
        return deletedMovieId;
    }
}

module.exports = MoviesService;