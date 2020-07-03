module.exports = (sequelize, DataTypes) =>{ 
    const UserTodo = sequelize.define('user_todo',{  
        user_id: {
            type: DataTypes.STRING
        },
        todo_id: {
            type: DataTypes.STRING
        }
    })

    return UserTodo
}


