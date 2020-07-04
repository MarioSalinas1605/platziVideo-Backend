const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema) {
    const { error } = new joi.object(schema).validate(data);
    return error;
}

function validateHanddler(schema, check = 'body') {
    return function (req, res, next) {
        const error = validate(req[check], schema);
        error ? next(boom.badRequest(error)) : next();
    };
}

module.exports = validateHanddler;