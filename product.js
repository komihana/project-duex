module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_name: {
            type: DataTypes.STRING
        },
        fund_sector: {
            type: DataTypes.STRING
        },
        growth_level: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },

    });


    Product.associate = function (models) {
        Product.hasOne(models.User);
    };


    return Product;
};

