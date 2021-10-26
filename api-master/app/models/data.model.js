module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define("dataservices", {     
      serviceName: {
        type: Sequelize.STRING,       
        allowNull: false
      },
      createdBy: {
          type: Sequelize.STRING,
          allowNull: false
      }
    }, {
      createdAt: 'created',
      updatedAt: 'modified',
    });
  
    return Data;
  };