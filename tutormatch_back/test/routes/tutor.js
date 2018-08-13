module.exports = app => {
    describe("Routes: Tutors", () => {
        const Tutor = app.db.models.Tutors;

        /*  describe("GET /Tutors", () => {
             describe("status 200", () => {
                 it("returns a list of Tutors", done => {
                     // Código de testes
                 });
             });
         }); */
        describe("POST /tutor/", () => {
            describe("status 201", () => {
                it("creates a new Tutor", done => {
                    request.post([{
                                "title": "Chief Science Officer",
                                "name": "Jack Benton",
                                "contact": "https://www.linkedin.com/in/bentonjack",
                                "picture": "assets/images/av_jack.jpg"
                            },
                            {
                                "title": "Account Manager",
                                "name": "Stefanie Tabacow",
                                "contact": "https://www.linkedin.com/in/stabacow/",
                                "picture": "assets/images/av_stefanie.jpg"
                            },
                            {
                                "title": "Senior UX/UI Designer",
                                "name": "Miguel Costa",
                                "contact": "https://www.linkedin.com/in/miguel-costa-9264b9a/",
                                "picture": "assets/images/av_miguel.jpg"
                            },
                            {
                                "title": "Frontend",
                                "name": "André Góis",
                                "contact": "https://www.linkedin.com/in/andre-gois/",
                                "picture": "assets/images/av_andre_gois.jpg"
                            },
                            {
                                "title": "Growth Marketing Manager",
                                "name": "Paulo Vega",
                                "contact": "https://www.linkedin.com/in/paulovega",
                                "picture": "assets/images/av_paulo_vega.jpg"
                            },
                            {
                                "title": "Strategy",
                                "name": "Álvaro Gomez",
                                "contact": "https://www.linkedin.com/in/alvarogomeznog/",
                                "picture": "assets/images/av_alvaro_gomez.jpg"
                            },
                            {
                                "title": "Manager",
                                "name": "Xavier Jameson",
                                "contact": "https://www.linkedin.com/in/xavierjameson/",
                                "picture": "assets/images/av_xavier.jpg"
                            },
                            {
                                "title": "Partner",
                                "name": "Pedro do Carmo Costa",
                                "contact": "https://www.linkedin.com/in/pedro-do-carmo-costa-277377",
                                "picture": "assets/images/av_pedro_costa.jpg"
                            },
                            {
                                "title": "Product Design",
                                "name": "André Santos",
                                "contact": "https://www.linkedin.com/in/andredbsantos/",
                                "picture": "assets/images/av_andre_santos.jpg"
                            },
                            {
                                "title": "Partner",
                                "name": "Pedro da Cunha",
                                "contact": "https://www.linkedin.com/in/pedro-da-cunha-15692b2",
                                "picture": "assets/images/av_pedro_cunha.jpg"
                            },
                            {
                                "title": "CTO",
                                "name": "João Malcata",
                                "contact": "https://www.linkedin.com/in/malcata",
                                "picture": "assets/images/av_joao_malcata.jpg"
                            }
                        ]).expect(200)
                        .end((err, res) => {
                            expect(res.body.name).to.eql("Mary");
                            expect(res.body.email).to.eql("mary@mail.net");
                            done(err);
                        });
                });
            });
        });
        /* describe("GET /Tutors/:id", () => {
            describe("status 200", () => {
                it("returns one Tutor", done => {
                    // Código de testes
                });
            });
            describe("status 404", () => {
                it("throws error when Tutor not exist", done => {
                    // Código de testes
                });
            });
        }); */
        /* describe("PUT /Tutors/:id", () => {
            describe("status 204", () => {
                it("updates a Tutor", done => {
                    // Código de testes
                });
            });
        }); */
        /*  describe("DELETE /Tutors/:id", () => {
             describe("status 204", () => {
                 it("removes a Tutor", done => {
                     // Código de testes
                 });
             });
         }); */
    });
}