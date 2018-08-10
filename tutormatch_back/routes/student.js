module.exports = app => {

    const Student = app.db.models.Student;
    const Tutor = app.db.models.Tutor;


    app.get("/student/", (req, res) => {
        // "/student": List all Tutors
        Student.findAll({
                include: [{
                    model: app.db.models.Tutor,
                    as: 'tutors',
                    required: false,
                    attributes: ["id", "name", "contact", "picture"],
                    through: {
                        attributes: []
                    }
                }],
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
    })

    app.get("/student/:id", (req, res) => {
        Student.findById(req.params.id, {
                include: [{
                    model: app.db.models.Tutor,
                    as: 'tutors',
                    required: false,
                    attributes: ["id", "name", "contact", "picture"],
                    through: {
                        attributes: []
                    }
                }],
                attributes: ["id", "name", "email"],
            })

            /*   Student.findById(req.params.id, {
                  attributes: ["id", "name", "email"]
              }) */
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
    });

    app.delete("/student/:id", (req, res) => {
        Student.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
    });
    app.post("/student", (req, res) => {
        Student.create(req.body, {
                include: [{
                    model: app.db.models.Tutor,
                    as: 'tutors',
                    required: false,
                    attributes: ["id", "name", "contact", "picture", "title"],
                    through: {
                        attributes: []
                    }
                }],
                attributes: ["id", "name", "email"],
            })
            .then(result => {
                res.status(201)
                res.json(result);
            })
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
    });

    app.put("/student", (req, res) => {
        Student.update(req.body, {
                where: {
                    id: req.body.id
                },
                attributes: ["id", "name", "email"],
            }).then(() => {
                res.status(200).json({
                    msg: "Updated Successfully -> Student Id: " + req.body.id
                });
            }).catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
    });
};