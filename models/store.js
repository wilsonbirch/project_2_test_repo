//slug package will automatically save the slug data property
const slug = require("slugs");

// Creating our Store model
module.exports = function(sequelize, DataTypes) {
  const Store = sequelize.define("Store", {
    // The name of the store will be a string and must be unique and not empty
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    //A slug is the part of a URL which identifies a particular page on a website in an easy to read form. In other words, it’s the part of the URL that explains the page’s content.
    slug: DataTypes.STRING,
    // The restaurant description will be able to be read and updated
    description: DataTypes.STRING,
    tags: [DataTypes.STRING]
  });

  Store.addHook("beforeCreate", store => {
    store.slug = slug(store.name);
  });

  return Store;
};
