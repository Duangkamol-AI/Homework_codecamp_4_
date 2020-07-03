module.exports = (sequelize, DataTypes) =>{ 
    const User = sequelize.define('user',{ 
        ﬁrstName: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        lastName: {
            type: DataTypes.STRING
        }
    })

    return User
}


