

module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    formName: DataTypes.STRING,
  }, {});
  // Form.associate = function(models) {

  // };
  Form.generate = formName => Form.create({
    formName,
  });

  Form.getAllForms = () => Form.findAll({
    attributes: ['formName', 'createdAt'],
  });
  return Form;
};
