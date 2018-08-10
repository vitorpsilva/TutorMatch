module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("Student", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Student.belongsToMany(models.Tutor, {
                    through: 'student_tutor',
                    as: 'tutors',
                    foreignKey: 'student_id'
                });
            }
        }
    });
    return Student;
};