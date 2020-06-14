const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

module.exports = createLogger({
    level: process.env.DEBUG_LEVEL,
    format: format.combine(
        format.colorize(),
        format.prettyPrint(),
        format.errors({ stack: true }),
        format.splat(),
        format.simple(),
    ),
    transports: [
        new (transports.Console)
    ]
});