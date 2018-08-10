import fs from "fs";
import winston from "winston";

if (!fs.existsSync("logs")) {
    fs.mkdirSync("logs");
}
module.exports = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "logs/app.log",
            maxsize: 1048576,
            maxFiles: 10,
            colorize: false
        })
    ],
    exitOnError: false, // do not exit on handled exception
});

/* module.exports = app => { */