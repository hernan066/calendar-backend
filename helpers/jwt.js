const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

    return new Promise((resolve, reject) => {

        const payload = {
            uid,
            name
        };

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) {
                reject('Error generando el token');
            } else {
                resolve(token);
            }
        });
    });

}

module.exports = {
    generarJWT
}