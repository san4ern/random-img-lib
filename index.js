const fetch = require('node-fetch');

async function fullRandom() {
    const methods = [ 'foxes', 'memes', 'fennec', 'dogs', 'cats' ];
    const randomMethod = methods[Math.floor(Math.random() * methods.length)];

    const url = `https://san4ouZ.ml/random?q=${randomMethod}`;

    const { message, type } = await fetch(url).then(r => r.json());

        if(!type) {
            throw new Error(`API returned status false\n${message}`)
        }
        return message;
}

async function randomImage(query) {

    if(!query) {
        throw new Error('You haven\'t provide method')
    }

    const url = `https://san4ouZ.ml/random?q=${query}`;

    const { message, type } = await fetch(url).then(r => r.json());

    if(!type) {
        throw new Error(`API returned status false\n${message}`)
    }
    return message;
}

module.exports = {
    fullRandom, randomImage
}