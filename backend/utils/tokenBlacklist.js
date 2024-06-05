// tokenBlacklist.js
const redis = require('redis');
const client = redis.createClient();

function blacklistToken(token) {
    client.set(token, 'blacklisted');
}

function isTokenBlacklisted(token, callback) {
    client.get(token, (err, result) => {
        if (err) return callback(err);
        return callback(null, result === 'blacklisted');
    });
}

module.exports = { blacklistToken, isTokenBlacklisted };
