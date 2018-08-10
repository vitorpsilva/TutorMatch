import https from "https";
import fs from "fs";

module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
        const credentials = {
            key: fs.readFileSync("tutormatch.key", "utf8"),
            cert: fs.readFileSync("tutormatch.cert", "utf8")
        }

        /* HTTPS
        app.db.sequelize.sync().done(() => {
            https.createServer(credentials, app)
                .listen(app.get("port"), () => {
                    console.log(`Tutor Match API - porta ${app.get("port")}`);
                });
        }); */

        /* HTTP */
        app.db.sequelize.sync().done(() => {
            app.listen(app.get("port"), () => {
                console.log(`Tutor Match API - porta ${app.get("port")}`);
            });
        });
    }
}