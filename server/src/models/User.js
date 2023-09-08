// module.exports = (sequelize, DataTypes) =>
//   sequelize.define('User', {
//     email: {
//       type: DataTypes.STRINGS,
//       unique: true
//     },
//     password: DataTypes.STRINGS
//   })

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING
  })
  return User
}
