module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define("data_services", {     
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
      allowNull: true
    });
  
    return Data;
  };