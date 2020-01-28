const { getLevel } = require('./query')
const { setLevel } = require('./mutations')
// The root provides a resolver function for each API endpoint
const root = {
    getLevel: getLevel,
    setLevel: setLevel
};

exports.root = root
