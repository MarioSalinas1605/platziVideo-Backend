const sinon = require('sinon');

const { movieMocks, filteredMoviesMock } = require('./movies');

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(movieMocks);

const getStub = sinon.stub();
getStub.withArgs('movies').resolves(movieMocks[0]);

const tagQuery = {tags: {$in: ["Drama"]}}
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(movieMocks[0].id);

const updateMovieStub = sinon.stub().resolves(movieMocks[0]);

const deleteMovieStub = sinon.stub().resolves(movieMocks[0].id);

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query);
    }
    create(collection, data) {
        return createStub(collection, data);
    }
    get(collection, id) {
        return getStub(collection, id);
    }
    update(collection, movieId, movie) {
        return updateMovieStub(collection, movieId, movie);
    }
    delete(collection, movieId) {
        return deleteMovieStub(collection, movieId);
    }
}

module.exports = {
    getAllStub,
    getStub,
    createStub,
    updateMovieStub,
    deleteMovieStub,
    MongoLibMock
}