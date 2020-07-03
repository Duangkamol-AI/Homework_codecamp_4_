module.exports = (sequelize, DataTypes) =>{ 
    const Todo = sequelize.define('todo',{  
        task: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        }
    })

    return Todo
}


