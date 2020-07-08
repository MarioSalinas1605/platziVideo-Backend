const config = require('../config/index');

function cacheResponse(res, seconds) {
    if (!config.dev) {
        res.set("Chache-Control", `public, max-age=${seconds}`);
    }
}

module.exports = cacheResponse;