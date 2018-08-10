module.exports = app => {
    /**
     * This function comment is parsed by doctrine
     * @route GET /api
     * @group foo - Operations about user
     * @param {string} email.query.required - username or email
     * @param {string} password.query.required - user's password.
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    app.get("/", (req, res) => {
        res.json({
            status: "Tutor Match API Welcome"
        });
    });
};