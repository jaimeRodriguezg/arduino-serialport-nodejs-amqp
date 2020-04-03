const argv = require('yargs').options({
    puerto: {
        default: 'COM3',
        alias: 'p',
        desc: 'Puerto del arduino'
    }
}).argv;


module.exports = {
    argv
};