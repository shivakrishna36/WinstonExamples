const logger = require('./logger/logger');

function sample() {
    logger.info({ private: true, message: 'Hello World' });
    logger.warn('Hello World');
    logger.debug('Hello World');

    // Output: {"level":"error","message":"Public error to share"}
    logger.log({
        level: 'error',
        message: 'Public error to share'
    });

    // Messages with { private: true } will not be written when logged.
    logger.log({
        private: true,
        level: 'error',
        message: 'This is super secret - hide it.'
    });

}

sample();