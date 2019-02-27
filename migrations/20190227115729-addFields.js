

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Forms', 'fields', {
    type: Sequelize.STRING,
  }),


  down: queryInterface => queryInterface.removeColumn('Forms', 'fields'),
};
