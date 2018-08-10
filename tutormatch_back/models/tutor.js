module.exports = (sequelize, Sequelize) => {
    const Tutor = sequelize.define("Tutor", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        contact: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        picture: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Tutor.belongsToMany(models.Student, {
                    through: 'student_tutor',
                    as: 'students',
                    foreignKey: 'tutor_id'
                });
            }
        }
    });
    return Tutor;
};