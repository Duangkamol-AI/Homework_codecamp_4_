module.exports = (sequelize,DataTypes) => {
    const Instructor = sequelize.define('instructor',{
        name_en: {
            type: DataTypes.STRING
        },
        name_th: { 
            type: DataTypes.STRING
        },
        academic_rank: { 
            type: DataTypes.STRING
        },
        expertise: {
            type: DataTypes.STRING
        },
        degree: {
            type: DataTypes.STRING 
        }
    })

    return Instructor
}