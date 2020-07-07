const movieMocks = [
    {
        id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e',
        title: 'Notti bianche, Le (White Nights)',
        year: 2019,
        cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        duration: 66,
        contentRating: 'G',
        source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
        tags: [
            'Action|Adventure',
            'Action|Adventure|Thriller',
            'Horror|Western',
            'Horror|Thriller',
            'Comedy|Romance|Sci-Fi',
            'Adventure|Animation|Children|Comedy|Fantasy',
            'Drama'
        ]
    },
    {
        id: 'd2a4a062-d256-41bb-b1b2-9d915af6b74e',
        title: 'Notti bianche, Le (White Nights)',
        year: 2019,
        cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        duration: 66,
        contentRating: 'G',
        source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
        tags: [
            'Action|Adventure',
            'Action|Adventure|Thriller',
            'Horror|Western',
            'Horror|Thriller',
            'Comedy|Romance|Sci-Fi',
            'Adventure|Animation|Children|Comedy|Fantasy',
            'Drama'
        ]
    }
];

function filteredMoviesMock(tag) {
    return movieMocks.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(movieMocks);
    }
    async createMovie() {
        return Promise.resolve(movieMocks[0]);
    }
    async getMovie() {
        return Promise.resolve(movieMocks[0]);
    }
    async updateMovie() {
        return Promise.resolve(movieMocks[0]);
    }
    async deleteMovie() {
        return Promise.resolve(movieMocks[0].id);
    }
}


module.exports = { 
    movieMocks,
    filteredMoviesMock,
    MoviesServiceMock
};