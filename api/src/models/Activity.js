const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },
    season: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['summer', 'autumn', 'winter', 'spring']],
        }
    }
    });
};