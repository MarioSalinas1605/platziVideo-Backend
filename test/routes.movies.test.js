const assert = require('assert');
const proxyquire = require('proxyquire');

const {
    movieMocks,
    MoviesServiceMock
} = require('../utils/mocks/movies');

const testServer = require('../utils/testServer');

describe('routes - movies', () => {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', ()=>{
        it('should respond with status 200', done => {
            request.get('/api/movies').expect(200, done)
        })
        it('should respond with the list of movies', done => {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: movieMocks,
                    message: 'Movies listed'
                })
                done();
            })
        })
    })

    describe('GET /movies/5f00ccbe019d0366c1451128', ()=>{
        it('should respond with status 200', done => {
            request.get('/api/movies/5f00ccbe019d0366c1451128').expect(200, done)
        })
        it('should respond with one movie', done => {
            request.get('/api/movies/5f00ccbe019d0366c1451128').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: movieMocks[0],
                    message: 'Movie retrived'
                })
                done();
            })
        })
    })

    describe('POST /movies', ()=>{
        it('should respond with status 201', done => {
            request.post('/api/movies').expect(201, done)
        })
        it('should respond with one movie', done => {
            request.post('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: movieMocks[0],
                    message: 'Movie created'
                })
                done();
            })
        })
    })

    describe('PUT /movies/5f00ccbe019d0366c1451128', ()=>{
        it('should respond with status 200', done => {
            request.put('/api/movies/5f00ccbe019d0366c1451128').expect(200, done)
        })
        it('should respond with one movie', done => {
            request.put('/api/movies/5f00ccbe019d0366c1451128').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: movieMocks[0],
                    message: 'Movie updated'
                })
                done();
            })
        })
    })

    describe('DELETE /movies/5f00ccbe019d0366c1451128', ()=>{
        it('should respond with status 200', done => {
            request.delete('/api/movies/5f00ccbe019d0366c1451128').expect(200, done)
        })
        it('should respond with one movie', done => {
            request.delete('/api/movies/5f00ccbe019d0366c1451128').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: movieMocks[0].id,
                    message: 'Movie deleted'
                })
                done();
            })
        })
    })
})