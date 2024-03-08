const jwt = require('jsonwebtoken');

const secret = "umer";

function setuser(user) {
    // Ensure that the secret is a string
    if (typeof secret !== 'string') {
        throw new Error('Invalid secret. It must be a string.');
    }

    let payload = {
        id: user.id,
        email: user.email
    };

    // Sign the JWT with the secret
    return jwt.sign(payload, secret);
}

function getuser(token) {
    // Ensure that the secret is a string
    if (typeof secret !== 'string') {
        throw new Error('Invalid secret. It must be a string.');
    }

    if (!token) return null;

    // Verify the JWT with the secret
    return jwt.verify(token, secret);
}

module.exports = {
    getuser: getuser,
    setuser: setuser
};
