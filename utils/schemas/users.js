const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const nameSchema = joi.string().max(100);
const emailSchema = joi.string().email();
const passwordSchema = joi.string();
const isAdminSchema = joi.boolean();

const userSchema = {
    name: nameSchema.required(),
    email: emailSchema.required(),
    password: passwordSchema.required(),
}

const createUserSchema = {
    ...userSchema,
    isAdmin: isAdminSchema,
}

const createProviderUserSchema = {
    ...userSchema,
    apiKeyToken: joi.string().required()
}

module.exports = {
    userIdSchema,
    createUserSchema,
    createProviderUserSchema
}