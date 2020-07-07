const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock,
    getAllStub,
    getStub,
    createStub,
    updateMovieStub,
    deleteMovieStub,
} = require('../utils/mocks/mongoLib');
const { movieMocks } = require('../utils/mocks/movies');

describe('service - movies', () => {
    const MoviesService = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
    })
    const moviesService = new MoviesService();
    describe('when getMovies method is called', async () => {
        it('should call the getAll MongoLib method', async () => {
            await moviesService.getMovies({})
            assert.strictEqual(getAllStub.called, true);
        })

        it('should return an array of movies', async () => {
            const result = await moviesService.getMovies({})
            const expected = movieMocks;
            assert.deepEqual(result, expected);
        })
    })

    describe('when getMovie method is called', async () => {
        it('should call the get MongoLib method', async () => {
            await moviesService.getMovie({})
            assert.strictEqual(getStub.called, true);
        })

        it('should return one movie', async () => {
            const result = await moviesService.getMovie({})
            const expected = movieMocks[0];
            assert.deepEqual(result, expected);
        })
    })

    describe('when createMovie method is called', async () => {
        it('should call the create MongoLib method', async () => {
            await moviesService.createMovie({})
            assert.strictEqual(createStub.called, true);
        })

        it('should return an movie id', async () => {
            const result = await moviesService.createMovie({})
            const expected = movieMocks[0].id;
            assert.deepEqual(result, expected);
        })
    })

    describe('when updateMovie method is called', async () => {
        it('should call the create MongoLib method', async () => {
            await moviesService.updateMovie({})
            assert.strictEqual(updateMovieStub.called, true);
        })

        it('should return one movie', async () => {
            const result = await moviesService.updateMovie({})
            const expected = movieMocks[0];
            assert.deepEqual(result, expected);
        })
    })

    describe('when deleteMovie method is called', async () => {
        it('should call the delete MongoLib method', async () => {
            await moviesService.deleteMovie({})
            assert.strictEqual(deleteMovieStub.called, true);
        })

        it('should return an movie id', async () => {
            const result = await moviesService.deleteMovie({})
            const expected = movieMocks[0].id;
            assert.deepEqual(result, expected);
        })
    })
})