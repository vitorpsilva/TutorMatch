import logger from "./logger.js";

module.exports = {
    database: "tutormatch",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "tutormatch.sqlite",
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true
        }
    }
};