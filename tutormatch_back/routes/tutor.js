module.exports = app => {
    
    const Tutor = app.db.models.Tutor;

    app.route("/tutor")
        .get((req, res) => {
            // "/tutor": List all Tutors
            Tutor.findAll({
                through: {
                    attributes: []
                }
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
        .post((req, res) => {
            // "/tutor": Cadastra uma nova tarefa
            Tutor.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        });
    app.route("/tutor/:id")
        .get((req, res) => {
            // "/tutor/1": Get a Tutor by ID
            Tutor.findOne({
                    where: req.params
                })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
        .put((req, res) => {
            // "/tutor/1": Update a Tutor
            Tutor.update(req.body, {
                    where: req.params
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
        .delete((req, res) => {
            // "/tutor/1": Delete a Tutor
            Tutor.destroy({
                    where: req.params
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        });
};