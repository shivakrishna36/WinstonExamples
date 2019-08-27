


const { createLogger, format, transports } = require('winston');

// Ignore log messages if they have { private: true }
const ignorePrivate = format(info => {
    if (info.private) {
        return false;
    }
    return info;
});

const logger = createLogger({
    format: format.combine(
        ignorePrivate(),
        format.colorize(),
        format.simple(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [new transports.Console()]
});



module.exports = logger;