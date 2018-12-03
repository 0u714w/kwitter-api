'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserProfilePicture = sequelize.define('UserProfilePicture', {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    data: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserProfilePicture;
};